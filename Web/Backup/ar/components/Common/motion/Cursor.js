import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Trailing custom cursor, scoped to a container rather than the whole document.
//
// Deliberately conservative, because a site-wide custom cursor is one of the
// fastest ways to make a site feel broken:
//   * only mounts on `(pointer: fine)` — never on touch,
//   * never on `prefers-reduced-motion`,
//   * never replaces the native cursor outside its container,
//   * grows and softens over anything marked data-cursor="grow".
//
// It reads the media queries in an effect, so SSR renders nothing and there is
// no hydration mismatch.
const Cursor = ({ children, className, size = 16, color = "#1dd3f8", style }) => {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [inside, setInside] = useState(false);
  const [grown, setGrown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 32, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);

  const move = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    setGrown(Boolean(e.target.closest?.("[data-cursor='grow']")));
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={enabled ? move : undefined}
      onMouseEnter={enabled ? () => setInside(true) : undefined}
      onMouseLeave={enabled ? () => setInside(false) : undefined}
      style={{ position: "relative", cursor: enabled && inside ? "none" : undefined, ...style }}
    >
      {children}

      {enabled ? (
        <motion.span
          aria-hidden="true"
          style={{
            x: sx,
            y: sy,
            position: "absolute",
            top: 0,
            left: 0,
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            borderRadius: "50%",
            border: `1.5px solid ${color}`,
            background: `${color}22`,
            pointerEvents: "none",
            zIndex: 30,
          }}
          animate={{
            opacity: inside ? 1 : 0,
            scale: grown ? 2.6 : 1,
          }}
          transition={{ duration: 0.22 }}
        />
      ) : null}
    </div>
  );
};

export default Cursor;
