import React from "react";

// A genuine 3D cube — six real faces in one `transform-style: preserve-3d`
// box, each pushed out along its own axis by half the cube's size, spinning
// forever on two axes. CSS 3D, no WebGL/three.js.
const Cube3D = ({ size = 90, faceColor = "#0a1f44" }) => {
  const half = size / 2;
  const faces = [
    { name: "front", transform: `translateZ(${half}px)` },
    { name: "back", transform: `rotateY(180deg) translateZ(${half}px)` },
    { name: "right", transform: `rotateY(90deg) translateZ(${half}px)` },
    { name: "left", transform: `rotateY(-90deg) translateZ(${half}px)` },
    { name: "top", transform: `rotateX(90deg) translateZ(${half}px)` },
    { name: "bottom", transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div className="c3-stage" aria-hidden="true">
      <div
        className="c3-cube"
        style={{ width: size, height: size }}
      >
        {faces.map((f) => (
          <div
            key={f.name}
            className="c3-face"
            style={{
              width: size,
              height: size,
              transform: f.transform,
              background: faceColor,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .c3-stage {
          display: flex;
          justify-content: center;
          padding: 40px 0;
          perspective: 700px;
        }
        .c3-cube {
          position: relative;
          transform-style: preserve-3d;
          animation: c3-spin 9s linear infinite;
        }
        .c3-face {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.86;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        @keyframes c3-spin {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .c3-cube {
            animation: none;
            transform: rotateX(-18deg) rotateY(28deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Cube3D;
