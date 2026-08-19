import React, { useEffect, useRef } from "react";

// Ambient particle network — hand-rolled canvas, no dependency (Motion Lab
// Tier C, "light canvas"). Points drift, link to near neighbours, and lean
// away from the cursor. Everything runs in an effect, so nothing touches the
// DOM during SSR.
//
// It stops entirely when scrolled off screen and when the OS asks for reduced
// motion — an always-on rAF loop on a marketing page is a battery bug.
const ParticleField = ({
  className,
  count = 46,
  color = "29, 211, 248",
  linkDistance = 128,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = null;
    let visible = true;
    const pointer = { x: -9999, y: -9999 };
    let points = [];

    const seed = () => {
      // Scale the population with area so a wide desktop hero isn't sparse
      // and a phone isn't overdrawn.
      const n = Math.round(count * Math.min(1.5, Math.max(0.45, width / 1200)));
      points = Array.from({ length: n }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2); // cap retina cost
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 110 && dist > 0.01) {
          const push = (110 - dist) / 110;
          p.x += (dx / dist) * push * 1.5;
          p.y += (dy / dist) * push * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.55)`;
        ctx.fill();
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDistance) continue;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.strokeStyle = `rgba(${color}, ${0.16 * (1 - dist / linkDistance)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
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
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();

    if (reduced) {
      // Draw one static frame so the texture is still there, then stop.
      draw();
      stop();
      return () => {};
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    start();

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [count, color, linkDistance]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default ParticleField;
