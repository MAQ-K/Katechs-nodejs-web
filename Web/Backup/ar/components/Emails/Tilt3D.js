import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

// Cursor-driven 3D tilt — CSS perspective transform, no WebGL/three.js needed.
// See PROJECT.md Design References lab, "Advanced 3D" section for the cost tiers.
//
// `preserve3d` opts the children into the same 3D space, so anything inside
// with a translateZ sits at a real depth and parallaxes against the card
// (the lab's "Layered depth card" — genuine parallax, still 0 KB).
const Tilt3D = ({
  children,
  className,
  max = 14,
  glare = true,
  preserve3d = false,
}) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const springX = useSpring(mx, { stiffness: 200, damping: 20 });
  const springY = useSpring(my, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [max, -max]);
  const rotateY = useTransform(springX, [0, 1], [-max, max]);
  const glareX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(springY, [0, 1], ["0%", "100%"]);

  // Hooks stay unconditional — the glare gradient is built whether or not it
  // is rendered, so toggling `glare` can never change the hook order.
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 55%)`;

  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  if (reduced) {
    return (
      <div ref={ref} className={className} style={{ position: "relative" }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: preserve3d ? "preserve-3d" : undefined,
        position: "relative",
      }}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            background: glareBg,
          }}
        />
      )}
    </motion.div>
  );
};

export default Tilt3D;
