import React from "react";

// A section-divider wave that scrolls itself sideways forever — two copies
// of the same path laid end to end and translated by exactly one path-width,
// so the seam is invisible and the loop never jumps.
const WaveDivider = ({ color = "#0a1f44" }) => {
  const path =
    "M0,40 C 150,90 350,0 600,40 C 850,80 1050,0 1200,40 L1200,120 L0,120 Z";

  return (
    <div className="wd-root" aria-hidden="true">
      <div className="wd-track">
        <svg viewBox="0 0 1200 120" className="wd-svg" preserveAspectRatio="none">
          <path d={path} fill={color} />
        </svg>
        <svg viewBox="0 0 1200 120" className="wd-svg" preserveAspectRatio="none">
          <path d={path} fill={color} />
        </svg>
      </div>
      <style jsx>{`
        .wd-root {
          width: 100%;
          height: 90px;
          overflow: hidden;
        }
        .wd-track {
          display: flex;
          width: 200%;
          height: 100%;
          animation: wd-scroll 12s linear infinite;
        }
        .wd-svg {
          width: 50%;
          height: 100%;
          flex-shrink: 0;
        }
        @keyframes wd-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wd-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WaveDivider;
