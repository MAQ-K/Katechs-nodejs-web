import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from "framer-motion";

// Cursor spotlight — a soft radial glow that follows the pointer across a
// surface, fading out when the pointer leaves.
//
// Pure compositing: one absolutely-positioned overlay whose background is a
// radial-gradient built from two motion values. Nothing re-renders React on
// mousemove — the values drive style directly, which is the difference between
// this being free and this being a scroll-jank generator.
//
// Touch devices never get a pointer, so the overlay simply stays at 0 opacity.
const Spotlight = ({
  children,
  className,
  size = 320,
  color = "rgba(29, 211, 248, 0.22)",
  style,
}) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [on, setOn] = useState(false);

  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 30 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 30 });

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 70%)`;

  const move = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
      onMouseMove={move}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
    >
      {!reduced ? (
        <motion.div
          aria-hidden="true"
          style={{ background, position: "absolute", inset: 0, pointerEvents: "none" }}
          animate={{ opacity: on ? 1 : 0 }}
          transition={{ duration: 0.28 }}
        />
      ) : null}
      {children}
    </div>
  );
};

export default Spotlight;
