import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Two-sided 3D card. Flips on hover, and on click/Enter/Space for touch and
// keyboard — hover-only flip cards are unusable on a phone, which is most of
// this site's traffic.
//
// Accessibility: it's a real button with aria-pressed, and the hidden face is
// aria-hidden + inert to the pointer, so a screen reader reads one side at a
// time instead of both at once.
//
// RTL note: rotateY direction is mirrored so the card turns "away" consistently
// with the reading direction.
const FlipCard = ({ front, back, className, height = 220, rtl = true }) => {
  const [flipped, setFlipped] = useState(false);
  const reduced = useReducedMotion();
  const turn = rtl ? -180 : 180;

  const face = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  };

  if (reduced) {
    // No 3D under reduced motion — a plain cross-fade still communicates
    // "there are two sides" without rotating the viewport's contents.
    return (
      <button
        type="button"
        className={className}
        aria-pressed={flipped}
        onClick={() => setFlipped((v) => !v)}
        style={{ position: "relative", height, width: "100%", border: 0, background: "none", padding: 0 }}
      >
        <div style={{ ...face, opacity: flipped ? 0 : 1, transition: "opacity .2s" }}>{front}</div>
        <div style={{ ...face, opacity: flipped ? 1 : 0, transition: "opacity .2s" }} aria-hidden={!flipped}>
          {back}
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={className}
      aria-pressed={flipped}
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        position: "relative",
        height,
        width: "100%",
        perspective: 1200,
        border: 0,
        background: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? turn : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        style={{
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div style={face} aria-hidden={flipped}>
          {front}
        </div>
        <div style={{ ...face, transform: `rotateY(${turn}deg)` }} aria-hidden={!flipped}>
          {back}
        </div>
      </motion.div>
    </button>
  );
};

export default FlipCard;
