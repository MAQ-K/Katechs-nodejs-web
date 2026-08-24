import React, { useRef, useEffect } from "react";

// Ambient layered waves — canvas, no dependency, same discipline as
// Common/ParticleField.js:
//
//   * nothing touches the DOM during SSR (all of it lives in an effect),
//   * the loop stops when the element scrolls off screen,
//   * the loop never starts under prefers-reduced-motion — a single static
//     frame is drawn instead, so the section still looks designed.
//
// Cost control: this draws 3 stroked sine paths at devicePixelRatio, capped at
// 2. On a 4K display an uncapped DPR triples the fill area for no visible gain.
const Waves = ({
  className,
  color = "29, 211, 248",
  layers = 3,
  amplitude = 18,
  speed = 0.0006,
  style,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let frame;
    let visible = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      for (let layer = 0; layer < layers; layer++) {
        const depth = layer / Math.max(layers - 1, 1);
        const amp = amplitude * (1 - depth * 0.45);
        const yBase = height * (0.45 + depth * 0.18);
        const phase = time * speed * (1 + depth * 0.6) + layer * 1.3;

        ctx.beginPath();
        for (let x = 0; x <= width; x += 6) {
          const y =
            yBase +
            Math.sin(x * 0.008 + phase) * amp +
            Math.sin(x * 0.021 + phase * 1.7) * amp * 0.35;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${color}, ${0.32 - depth * 0.09})`;
        ctx.lineWidth = 1.6 - depth * 0.4;
        ctx.stroke();
      }
    };

    const loop = (time) => {
      if (visible) draw(time);
      frame = requestAnimationFrame(loop);
    };

    resize();

    if (reduced) {
      // One static frame — the composition survives, the motion doesn't.
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (reduced) draw(0);
    };
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [color, layers, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", ...style }}
    />
  );
};

export default Waves;
