import React from "react";

// A row of small badges that bob up and down forever, each on its own
// offset delay so they don't move in lockstep. Good for a hero's scattered
// "feature chip" decoration. Pure CSS transform loop.
const FloatingIcons = ({ items }) => {
  const list = items || ["bx-rocket", "bx-shield", "bx-bolt", "bx-globe"];

  return (
    <div className="fi-row" aria-hidden="true">
      {list.map((icon, i) => (
        <span
          key={icon + i}
          className="fi-badge"
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          <i className={`bx ${icon}`}></i>
        </span>
      ))}
      <style jsx>{`
        .fi-row {
          display: flex;
          gap: 22px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .fi-badge {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid #e3e6ea;
          box-shadow: 0 16px 30px -18px rgba(10, 31, 68, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #0a1f44;
          animation: fi-bob 3.2s ease-in-out infinite;
        }
        @keyframes fi-bob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .fi-badge {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;
