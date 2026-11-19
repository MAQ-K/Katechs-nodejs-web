import React from "react";

// Ambient background layer — two soft, blurred gradient blobs drifting on
// slow, offset CSS loops. Pure CSS (compositor-only, no rAF), so it's cheap
// enough to leave running; reduced motion just freezes both in place.
const FloatingBlobs = ({ className }) => {
  return (
    <div className={`fb-root ${className || ""}`} aria-hidden="true">
      <span className="fb-blob fb-blob-a" />
      <span className="fb-blob fb-blob-b" />
      <style jsx>{`
        .fb-root {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .fb-blob {
          position: absolute;
          width: 46%;
          padding-top: 46%;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.55;
        }
        .fb-blob-a {
          top: -10%;
          left: -8%;
          background: radial-gradient(circle, #1dd3f8 0%, transparent 70%);
          animation: fb-drift-a 18s ease-in-out infinite;
        }
        .fb-blob-b {
          bottom: -14%;
          right: -10%;
          background: radial-gradient(circle, #0a1f44 0%, transparent 70%);
          animation: fb-drift-b 22s ease-in-out infinite;
        }
        @keyframes fb-drift-a {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(6%, 8%) scale(1.12);
          }
        }
        @keyframes fb-drift-b {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-7%, -6%) scale(1.08);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .fb-blob {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBlobs;
