import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Cursor-driven 3D tilt — CSS perspective transform, no WebGL/three.js needed.
// See PROJECT.md Design References lab, "Advanced 3D" section for the cost tiers.
const Tilt3D = ({ children, className, max = 14, glare = true }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const springX = useSpring(mx, { stiffness: 200, damping: 20 });
  const springY = useSpring(my, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [max, -max]);
  const rotateY = useTransform(springX, [0, 1], [-max, max]);
  const glareX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(springY, [0, 1], ["0%", "100%"]);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900, position: "relative" }}
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
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 55%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
};

export default Tilt3D;
