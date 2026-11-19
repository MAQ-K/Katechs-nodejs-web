import React, { useRef } from "react";

// Rotating conic-gradient border — ported from the Motion Lab UI Kit
// (21st.dev "Border Beam Panel", rebuilt with zero dependencies).
// Speeds up on hover via a CSS custom property, no JS animation loop needed
// beyond the keyframe itself.
const BorderBeam = ({ children, className = "" }) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className={`email-beam-panel ${className}`}>
      <div className="email-plan-beam-inner">{children}</div>
    </div>
  );
};

export default BorderBeam;
