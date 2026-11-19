import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Material-style click ripple, as a wrapper.
//
// It wraps rather than replaces, so the real <button>/<Link> inside keeps its
// semantics, its focus ring and its keyboard behaviour — same contract as
// Common/Magnetic.js.
//
// Ripples are keyed and self-removing: without the cleanup, a page with a
// clicky control accumulates DOM nodes for the whole session.
const Ripple = ({ children, className, color = "rgba(255,255,255,0.45)", duration = 0.6 }) => {
  const [drops, setDrops] = useState([]);
  const ref = useRef(null);
  const seq = useRef(0);
  const reduced = useReducedMotion();

  const spawn = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Radius that reaches the farthest corner from the click point.
    const size = Math.max(rect.width, rect.height) * 2;
    const id = ++seq.current;

    setDrops((list) => [
      ...list,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top, size },
    ]);

    setTimeout(() => setDrops((list) => list.filter((d) => d.id !== id)), duration * 1000);
  };

  return (
    <span
      ref={ref}
      className={className}
      onPointerDown={spawn}
      style={{ position: "relative", overflow: "hidden", display: "inline-block" }}
    >
      {children}
      <AnimatePresence>
        {drops.map((d) => (
          <motion.span
            key={d.id}
            aria-hidden="true"
            initial={{ opacity: 0.55, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: d.x - d.size / 2,
              top: d.y - d.size / 2,
              width: d.size,
              height: d.size,
              borderRadius: "50%",
              background: color,
              pointerEvents: "none",
􀀀            }}
          />
        ))}
      </AnimatePresence>
    </span>
  );
};

export default Ripple;
