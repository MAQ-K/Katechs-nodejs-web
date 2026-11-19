import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

// Magnetic hover — the element leans toward the cursor while it is nearby and
// springs back on leave. From the Motion Lab "More options" grid; zero
// dependencies beyond framer-motion, and it wraps whatever it is given so the
// real <Link>/<button> inside keeps its own semantics and focus behaviour.
const Magnetic = ({ children, className, strength = 0.35, radius = 90 }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    // Clamp the pull so a wide button doesn't slide halfway across the row.
    x.set(Math.max(-radius, Math.min(radius, dx)) * strength);
    y.set(Math.max(-radius, Math.min(radius, dy)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y, display: "inline-block" }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
