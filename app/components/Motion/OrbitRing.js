import React from "react";

// A ring of dots that continuously orbits a center point — each dot is
// placed on the ring by its own rotation, then the whole ring spins as one
// element so every dot keeps its spacing. Pure CSS transform loop.
const OrbitRing = ({ count = 8, radius = 90, size = 260 }) => {
  const dots = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className="or-root"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="or-ring">
        {dots.map((i) => (
          <span
            key={i}
            className="or-dot"
            style={{
              transform: `rotate(${(360 / count) * i}deg) translate(${radius}px) rotate(-${
                (360 / count) * i
              }deg)`,
            }}
          />
        ))}
      </div>
      <span className="or-core" />
      <style jsx>{`
        .or-root {
          position: relative;
          margin: 0 auto;
        }
        .or-ring {
          position: absolute;
          inset: 0;
          animation: or-spin 10s linear infinite;
        }
        .or-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 12px;
          margin: -6px 0 0 -6px;
          border-radius: 50%;
          background: #1dd3f8;
          box-shadow: 0 0 14px 2px rgba(29, 211, 248, 0.5);
        }
        .or-core {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 46px;
          height: 46px;
          margin: -23px 0 0 -23px;
          border-radius: 50%;
          background: #0a1f44;
        }
        @keyframes or-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .or-ring {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitRing;
