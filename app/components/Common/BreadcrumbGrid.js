import React, { useEffect, useRef } from "react";

// Cursor-reactive grid glow — the "effect" layer for the breadcrumb banner.
// The grid texture itself is `breadcrumb-bg.png`, applied as a plain CSS
// background (a style, per the ask); this canvas only draws the moving
// highlight on top of it — a soft blue glow with a small cluster of lit,
// linked nodes that eases toward the cursor, echoing the highlighted patch
// baked into the image but following the pointer instead of sitting fixed in
// one corner.
//
// Same shape as ParticleField.js (Common/ParticleField.js), the example this
// was asked to follow: canvas-only, everything in an effect so nothing
// touches the DOM during SSR, stops when scrolled off screen and under
// prefers-reduced-motion.
const BreadcrumbGrid = ({ className, color = "56, 189, 248" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = null;

    // The glow trails the real pointer (eased, not 1:1) — a snap-to-cursor
    // highlight reads as jittery; a slow follow reads as smooth and deliberate.
    const target = { x: -9999, y: -9999 };
    const eased = { x: -9999, y: -9999 };
    let engaged = false; // false until the pointer has actually moved once

    // The little node cluster around the glow — fixed offsets, jittered once
    // at mount so it stops looking like a perfect, mechanical grid stamp.
    const NODE_OFFSETS = [
      { x: 0, y: 0 },
      { x: -46, y: -30 },
      { x: 44, y: -18 },
      { x: -30, y: 34 },
      { x: 38, y: 30 },
      { x: 0, y: -54 },
      { x: 0, y: 52 },
    ].map((o) => ({
      x: o.x + (Math.random() - 0.5) * 10,
      y: o.y + (Math.random() - 0.5) * 10,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (cx, cy, alpha) => {
      ctx.clearRect(0, 0, width, height);
      if (alpha <= 0) return;

      // Soft spotlight behind the nodes.
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 170);
      glow.addColorStop(0, `rgba(${color}, ${0.16 * alpha})`);
      glow.addColorStop(1, `rgba(${color}, 0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(cx - 190, cy - 190, 380, 380);

      const nodes = NODE_OFFSETS.map((o) => ({ x: cx + o.x, y: cy + o.y }));

      // Link every node to its nearest neighbour — same "network" read as
      // ParticleField, just anchored to the pointer instead of drifting free.
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > 80) continue;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${color}, ${0.35 * alpha * (1 - dist / 80)})`;
          ctx.stroke();
        }
      }

      nodes.forEach((n, i) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, i === 0 ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.9 * alpha})`;
        ctx.fill();
      });
    };

    const draw = () => {
      // Ease toward the target; stop scheduling once settled AND once faded
      // out, so this does not spin an rAF loop forever over an idle banner.
      eased.x += (target.x - eased.x) * 0.12;
      eased.y += (target.y - eased.y) * 0.12;
      const settled =
        Math.hypot(target.x - eased.x, target.y - eased.y) < 0.3;

      drawFrame(eased.x, eased.y, engaged ? 1 : 0);

      if (!settled || !engaged) {
        raf = requestAnimationFrame(draw);
      } else {
        raf = null;
      }
    };

    const start = () => {
      if (raf === null) raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
    };

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      if (!engaged) {
        engaged = true;
        eased.x = target.x;
        eased.y = target.y;
      }
      start();
    };
    const onLeave = () => {
      engaged = false;
      drawFrame(eased.x, eased.y, 0);
      stop();
    };

    resize();

    if (reduced) {
      // A cursor-chasing glow is exactly the kind of scroll/motion effect
      // prefers-reduced-motion opts out of — leave the canvas blank and let
      // the static background image carry the whole visual.
      return () => {};
    }

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!visible) stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointer, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default BreadcrumbGrid;
