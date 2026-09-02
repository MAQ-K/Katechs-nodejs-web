import React from "react";

// A card that flips 180° around the Y axis on hover/focus, revealing a
// back face — the front and back are two real faces in one preserve-3d
// box, not a crossfade. Keyboard-focusable so it isn't mouse-only.
const FlipCard3D = ({
  front = "الواجهة",
  back = "الخلفية",
  width = 220,
  height = 140,
}) => {
  return (
    <div className="fc-stage" style={{ perspective: 1000 }}>
      <div
        tabIndex={0}
        className="fc-card"
        style={{ width, height }}
      >
        <div className="fc-face fc-front">{front}</div>
        <div className="fc-face fc-back">{back}</div>
      </div>
      <style jsx>{`
        .fc-stage {
          display: flex;
          justify-content: center;
          padding: 30px 0;
        }
        .fc-card {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          cursor: pointer;
          outline: none;
        }
        .fc-card:hover,
        .fc-card:focus-visible {
          transform: rotateY(180deg);
        }
        .fc-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Almarai", sans-serif;
          font-weight: 700;
          font-size: 15px;
        }
        .fc-front {
          background: #fff;
          border: 1px solid #e3e6ea;
          color: #14161a;
          box-shadow: 0 20px 40px -26px rgba(10, 31, 68, 0.35);
        }
        .fc-back {
          background: #0a1f44;
          color: #fff;
          transform: rotateY(180deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-card {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FlipCard3D;
