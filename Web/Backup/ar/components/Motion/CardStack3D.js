import React from "react";

// A stack of cards fanned out in 3D depth (each one pushed back on Z and
// rotated a degree further than the last), that flattens into a neat row on
// hover — a physical "deck of cards" feel with only `transform`.
const CardStack3D = ({ items }) => {
  const cards = items || ["أولاً", "ثانياً", "ثالثاً", "رابعاً"];

  return (
    <div className="cs-stage">
      <div className="cs-deck">
        {cards.map((label, i) => (
          <div
            key={label}
            className="cs-card"
            style={{
              "--i": i,
              zIndex: cards.length - i,
            }}
          >
            {label}
          </div>
        ))}
      </div>
      <style jsx>{`
        .cs-stage {
          display: flex;
          justify-content: center;
          padding: 50px 0;
          perspective: 1200px;
        }
        .cs-deck {
          position: relative;
          width: 170px;
          height: 110px;
        }
        .cs-card {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: #fff;
          border: 1px solid #e3e6ea;
          box-shadow: 0 18px 34px -22px rgba(10, 31, 68, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Almarai", sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #0a1f44;
          transform: translateZ(calc(var(--i) * -22px))
            translateY(calc(var(--i) * 10px)) rotate(calc(var(--i) * -4deg));
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .cs-deck:hover .cs-card {
          transform: translateZ(0)
            translateX(calc((var(--i) - 1.5) * 64px)) rotate(0deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-card {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CardStack3D;
