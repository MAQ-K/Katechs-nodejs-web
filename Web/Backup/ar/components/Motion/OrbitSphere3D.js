import React from "react";

// Icons orbiting a center in true 3D — each badge sits on its own ring
// (rotateY placement + translateZ push), then the whole preserve-3d scene
// spins on Y so items swing toward and away from the viewer, not just
// around in a flat circle.
const OrbitSphere3D = ({ icons }) => {
  const list = icons || ["bx-code-alt", "bx-server", "bx-lock-alt", "bx-cloud", "bx-mobile-alt", "bx-bar-chart-alt-2"];
  const radius = 120;

  return (
    <div className="os-stage" aria-hidden="true">
      <div className="os-scene">
        <span className="os-core" />
        {list.map((icon, i) => {
          const angle = (360 / list.length) * i;
          return (
            <span
              key={icon + i}
              className="os-badge"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              <i className={`bx ${icon}`}></i>
            </span>
          );
        })}
      </div>
      <style jsx>{`
        .os-stage {
          display: flex;
          justify-content: center;
          padding: 50px 0;
          perspective: 900px;
        }
        .os-scene {
          position: relative;
          width: 56px;
          height: 56px;
          transform-style: preserve-3d;
          animation: os-spin 14s linear infinite;
        }
        .os-core {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle, #1dd3f8, #0a1f44);
          box-shadow: 0 0 40px 6px rgba(29, 211, 248, 0.35);
        }
        .os-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 44px;
          height: 44px;
          margin: -22px 0 0 -22px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #e3e6ea;
          box-shadow: 0 14px 26px -16px rgba(10, 31, 68, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #0a1f44;
        }
        @keyframes os-spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .os-scene {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitSphere3D;
