import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

// `stagger()` turns one selector into a per-element delay curve — here
// radiating out from the grid's center instead of a flat left-to-right
// order, which is what makes a stagger read as deliberate rather than janky.
const ROWS = 6;
const COLS = 10;

const StaggerGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cells = gridRef.current.querySelectorAll(".ajs-stagger-cell");
    const anim = animate(cells, {
      scale: [
        { to: 1.15, duration: 260 },
        { to: 1, duration: 260 },
      ],
      backgroundColor: ["#e3e6ea", "#1dd3f8", "#e3e6ea"],
      delay: stagger(40, { grid: [COLS, ROWS], from: "center" }),
      loop: true,
      loopDelay: 600,
    });
    return () => anim.pause();
  }, []);

  return (
    <div className="ajs-stagger-stage">
      <div
        ref={gridRef}
        className="ajs-stagger-grid"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {Array.from({ length: ROWS * COLS }, (_, i) => (
          <div key={i} className="ajs-stagger-cell" />
        ))}
      </div>
      <style jsx>{`
        .ajs-stagger-stage {
          width: 100%;
          padding: 24px;
        }
        .ajs-stagger-grid {
          display: grid;
          gap: 6px;
          max-width: 420px;
          margin: 0 auto;
        }
        .ajs-stagger-cell {
          aspect-ratio: 1;
          border-radius: 3px;
          background: #e3e6ea;
        }
      `}</style>
    </div>
  );
};

export default StaggerGrid;
