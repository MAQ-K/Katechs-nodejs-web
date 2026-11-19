import React from "react";

// Full-bleed animated gradient background — three color stops sliding
// past each other on a slow loop, like the site's hero band but always in
// motion instead of static. Pure CSS `background-position` animation.
const GradientAurora = ({ className, dark = false }) => {
  return (
    <div className={`aur-root ${dark ? "aur-dark" : ""} ${className || ""}`}>
      <style jsx>{`
        .aur-root {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            120deg,
            #1dd3f8,
            #0a1f44,
            #6084a4,
            #1dd3f8
          );
          background-size: 300% 300%;
          animation: aur-shift 14s ease infinite;
          opacity: 0.16;
        }
        .aur-dark {
          opacity: 0.32;
        }
        @keyframes aur-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .aur-root {
            animation: none;
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default GradientAurora;
