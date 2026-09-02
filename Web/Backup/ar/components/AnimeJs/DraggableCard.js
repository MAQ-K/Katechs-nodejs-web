import React, { useEffect, useRef } from "react";
import { createDraggable } from "animejs";

// createDraggable() adds pointer-driven dragging plus a spring-based
// release back to the container bounds — no extra drag library, no manual
// pointer-event wiring.
const DraggableCard = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const drag = createDraggable(cardRef.current, {
      container: containerRef.current,
      releaseStiffness: 60,
      releaseEase: "easeOutElastic(1, .6)",
    });
    return () => drag.disable();
  }, []);

  return (
    <div ref={containerRef} className="ajs-drag-stage">
      <div ref={cardRef} className="ajs-drag-card">
        اسحبني
      </div>
      <style jsx>{`
        .ajs-drag-stage {
          position: relative;
          width: 100%;
          height: 220px;
          border-radius: 12px;
          background: repeating-linear-gradient(
            45deg,
            #f4f6f8,
            #f4f6f8 10px,
            #eef1f5 10px,
            #eef1f5 20px
          );
        }
        .ajs-drag-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 96px;
          height: 96px;
          margin: -48px 0 0 -48px;
          border-radius: 14px;
          background: #0a1f44;
          color: #fff;
          font-family: "Almarai", sans-serif;
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          box-shadow: 0 16px 30px -14px rgba(10, 31, 68, 0.55);
        }
        .ajs-drag-card:active {
          cursor: grabbing;
        }
      `}</style>
    </div>
  );
};

export default DraggableCard;
