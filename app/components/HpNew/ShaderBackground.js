import React, { useEffect, useRef, useState } from "react";

// Animated aurora shader — the app dev section's background (user, 2026-09-10).
//
// ---- what this is, and what it is NOT ----
// The user supplied a shadcn/Tailwind/TypeScript component ("AnoAI",
// components/ui/animated-shader-background.tsx). This project is none of those
// things: Next 14 Pages Router, plain JS, Bootstrap 5 + global SCSS +
// styled-jsx, no Tailwind and no shadcn registry. So the fragment shader — the
// only part that actually matters — is carried over verbatim, and the React
// shell around it is rewritten to this repo's conventions. The `lucide-react`
// import and the `float` keyframes in the original were dead code (nothing in
// that file referenced either), so they are not here.
//
// ---- retuned 2026-09-10 (user) ----
// Four asks, all four inside the fragment shader, each marked at its line:
//   * ribbons live in the LEFT and RIGHT thirds, not behind the centred copy
//   * no diagonal tilt — the mat2 that rotated the whole field is gone
//   * cyan → white only; the three-independent-sines palette is gone
//   * the band underneath went darker blue (that part is AppServices.js:
//     .hp-app background + .hp-app-scrim, not this file)
//
// ---- the four changes that are NOT cosmetic ----
// 1. It sizes to its CONTAINER, not to window.innerWidth/Height. The original
//    is a full-viewport hero backdrop; this one lives behind one section, and
//    window sizing would make the canvas taller than the band and stretch the
//    aurora. ResizeObserver, not a resize listener, so it also reacts when the
//    section's own height changes (it does — the copy reflows).
// 2. It stops when off-screen. This shader is genuinely expensive: 35 loop
//    iterations per pixel, each calling fbm (3 octaves of noise). Left running
//    it burns a core for a band nobody is looking at. IntersectionObserver
//    gates the rAF loop.
// 3. Device pixel ratio is capped at 1.5. At native DPR on a 2x display this
//    is 4x the fragment work for a blurry background nobody inspects.
// 4. prefers-reduced-motion renders exactly one frame and stops — the look
//    survives, the movement does not.
//
// three is imported lazily inside the effect (~600KB) so it never enters the
// page's initial JS. The parent should still mount this with next/dynamic
// ssr:false — see AppServices.js.
//
// If WebGL is unavailable the component renders an empty layer and the section
// falls back to its own navy background. Nothing breaks.
export default function ShaderBackground({ className = "" }) {
  const hostRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      let THREE;
      try {
        THREE = await import("three");
      } catch (error) {
        if (!disposed) setFailed(true);
        return;
      }
      if (disposed) return;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch (error) {
        setFailed(true);
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new THREE.Vector2(1, 1) },
        },
        vertexShader: `
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `,
        // The supplied component's fragment shader, retuned — see the header
        // and the marked blocks below.
        fragmentShader: `
          uniform float iTime;
          uniform vec2 iResolution;

          #define NUM_OCTAVES 3

          // The one edit to the supplied shader body. GLSL ES 1.00 — which is
          // what three compiles a ShaderMaterial as unless you set
          // material.glslVersion = GLSL3 — has no tanh(); it arrived in ES
          // 3.00. On a strict compiler (ANGLE, i.e. every Windows browser) the
          // original's tanh() call fails the whole program and the section
          // renders black. This is the identity 1 - 2/(e^2x + 1), written in
          // the numerically stable form, with the argument clamped so exp()
          // cannot overflow to inf. Same output, compiles everywhere.
          vec4 tanh4(vec4 x) {
            vec4 e = exp(2.0 * clamp(x, -10.0, 10.0));
            return (e - 1.0) / (e + 1.0);
          }

          float rand(vec2 n) {
            return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
          }

          float noise(vec2 p) {
            vec2 ip = floor(p);
            vec2 u = fract(p);
            u = u*u*(3.0-2.0*u);

            float res = mix(
              mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
              mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
            return res * res;
          }

          float fbm(vec2 x) {
            float v = 0.0;
            float a = 0.3;
            vec2 shift = vec2(100);
            mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
            for (int i = 0; i < NUM_OCTAVES; ++i) {
              v += a * noise(x);
              x = rot * x * 2.0 + shift;
              a *= 0.4;
            }
            return v;
          }

          void main() {
            vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
            // No mat2 here any more. The original multiplied by
            // mat2(6.0, -4.0, 4.0, 6.0) — a scale AND a ~34deg rotation, which
            // is what tilted every ribbon diagonally across the band ("it dont
            // turn", user 2026-09-10). A plain scalar keeps the same size and
            // leaves the flow axis-aligned.
            vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * 7.2;
            vec2 v;
            vec4 o = vec4(0.0);

            float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

            for (float i = 0.0; i < 35.0; i++) {
              v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
              float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));
              // Cyan → white, and nothing else (user, 2026-09-10). The
              // original drove r/g/b on three independent sines, which is what
              // put purple, teal and green in the ribbons. Here a single
              // scalar rides between the brand cyan (#1dd3f8) and white, so
              // every ribbon is somewhere on that one line. Squaring tint
              // keeps most of the strip cyan and saves white for the peaks.
              float tint = 0.5 + 0.5 * sin(i * 0.35 + iTime * 0.5);
              vec4 auroraColors = vec4(
                mix(vec3(0.11, 0.83, 0.97), vec3(1.0), tint * tint * 0.9),
                1.0
              );
              vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
              float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
              o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
            }

            o = tanh4(pow(o / 100.0, vec4(1.6)));

            // Left and right thirds only — the middle is where the headline,
            // the copy and the phone orbit live, and ribbons behind them were
            // fighting the text (user, 2026-09-10: "make the things move on
            // the left and right of the whole bg, not in the middle"). One
            // ramp in from each edge, summed; the band itself still runs full
            // width, it is only the visible energy that is pushed outward.
            float nx = gl_FragCoord.x / iResolution.x;
            float edges = clamp(
              smoothstep(0.42, 0.02, nx) + smoothstep(0.58, 0.98, nx),
              0.0,
              1.0
            );

            gl_FragColor = o * 1.5 * edges;
          }
        `,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const canvas = renderer.domElement;
      canvas.setAttribute("aria-hidden", "true");
      canvas.style.display = "block";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      host.appendChild(canvas);

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        material.uniforms.iResolution.value.set(
          width * renderer.getPixelRatio(),
          height * renderer.getPixelRatio()
        );
      };
      resize();

      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      let frame = null;
      let visible = true;
      // Real elapsed seconds, not a fixed += 0.016 per frame — otherwise the
      // aurora runs at a different speed on a 120Hz display than a 60Hz one,
      // and jumps forward whenever the tab throttles rAF.
      let last = performance.now();

      const draw = () => {
        renderer.render(scene, camera);
      };

      const loop = (now) => {
        material.uniforms.iTime.value += Math.min((now - last) / 1000, 0.1);
        last = now;
        draw();
        frame = requestAnimationFrame(loop);
      };

      const start = () => {
        if (frame !== null || motionQuery.matches || !visible) return;
        last = performance.now();
        frame = requestAnimationFrame(loop);
      };
      const stop = () => {
        if (frame === null) return;
        cancelAnimationFrame(frame);
        frame = null;
      };

      const onMotionChange = () => {
        if (motionQuery.matches) {
          stop();
          draw();
        } else {
          start();
        }
      };
      motionQuery.addEventListener("change", onMotionChange);

      // Off-screen = no work. See note 2 in the header.
      const seen = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          if (visible) start();
          else stop();
        },
        { rootMargin: "200px" }
      );
      seen.observe(host);

      const sized = new ResizeObserver(() => {
        resize();
        // A resize while paused (reduced motion, or scrolled past) would
        // otherwise leave a stretched frame on screen until it resumes.
        if (frame === null) draw();
      });
      sized.observe(host);

      const onVisibility = () => {
        if (document.hidden) stop();
        else start();
      };
      document.addEventListener("visibilitychange", onVisibility);

      draw();
      start();

      cleanup = () => {
        stop();
        motionQuery.removeEventListener("change", onMotionChange);
        document.removeEventListener("visibilitychange", onVisibility);
        seen.disconnect();
        sized.disconnect();
        if (canvas.parentNode === host) host.removeChild(canvas);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`hp-shader-bg ${className}`.trim()}
      aria-hidden="true"
      data-failed={failed ? "true" : undefined}
    >
      <style jsx>{`
        .hp-shader-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
