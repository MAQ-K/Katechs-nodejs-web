import React from "react";

// Generic 3D orbit — items ride a tilted ring in real 3D space using CSS
// transforms only. Generalised from components/AppDev/AppOrbit.js, which had
// the ring welded to phone mockups.
//
// Everything is CSS: the ring rotates with a keyframe animation, and each item
// counter-rotates so it stays upright while the ring turns. That counter-spin is
// the whole trick — without it the icons tumble.
//
// Reduced motion is handled in CSS (see the media query below) rather than in
// JS, so the ring simply stops with items still correctly placed.
const Orbit3D = ({
  items = [],
  radius = 130,
  duration = 26,
  tilt = 62,
  className,
  size = 56,
  reverse = false,
}) => {
  const step = 360 / Math.max(items.length, 1);

  return (
    <div className={`orbit3d ${className || ""}`} aria-hidden="true">
      <div className="orbit3d-stage">
        <div className={`orbit3d-ring ${reverse ? "rev" : ""}`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="orbit3d-item"
              style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}
            >
              <div className="orbit3d-face">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .orbit3d {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: ${radius * 2 + size}px;
        }
        .orbit3d-stage {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .orbit3d-ring {
          position: relative;
          width: ${radius * 2}px;
          height: ${radius * 2}px;
          transform-style: preserve-3d;
          transform: rotateX(${90 - tilt}deg);
          animation: orbit3d-spin ${duration}s linear infinite;
        }
        .orbit3d-ring.rev {
          animation-direction: reverse;
        }
        .orbit3d-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${size}px;
          height: ${size}px;
          margin: ${-size / 2}px 0 0 ${-size / 2}px;
          transform-style: preserve-3d;
        }
        /* Counter-rotate so items stay upright while the ring turns. */
        .orbit3d-face {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 26px 46px -30px rgba(12, 12, 14, 0.35);
          transform: rotateX(${tilt - 90}deg);
          animation: orbit3d-upright ${duration}s linear infinite;
        }
        .orbit3d-ring.rev .orbit3d-face {
          animation-direction: reverse;
        }
        @keyframes orbit3d-spin {
          to {
            transform: rotateX(${90 - tilt}deg) rotateY(360deg);
          }
        }
        @keyframes orbit3d-upright {
          to {
            transform: rotateX(${tilt - 90}deg) rotateY(-360deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit3d-ring,
          .orbit3d-face {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Orbit3D;
