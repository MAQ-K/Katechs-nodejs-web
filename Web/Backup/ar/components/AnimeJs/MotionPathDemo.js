import React, { useEffect, useRef } from "react";
import { animate, svg } from "animejs";

// svg.createMotionPath() turns a path into translateX/translateY/rotate
// values, so a plain HTML element (not just an SVG node) can travel and
// bank along an arbitrary curve instead of a straight line.
const MotionPathDemo = () => {
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const path = svg.createMotionPath(pathRef.current);
    const anim = animate(dotRef.current, {
      ...path,
      easing: "easeInOutQuad",
      duration: 2200,
      loop: true,
    });
    return () => anim.pause();
  }, []);

  return (
    <div className="ajs-path-stage">
      <svg viewBox="0 0 300 120" className="ajs-path-svg">
        <path
          ref={pathRef}
          d="M10,60 C 80,-10 130,130 190,60 S 280,10 290,60"
          fill="none"
          stroke="#e3e6ea"
          strokeWidth="2"
        />
      </svg>
      <div ref={dotRef} className="ajs-path-dot" />
      <style jsx>{`
        .ajs-path-stage {
          position: relative;
          padding: 30px 24px;
          display: flex;
          justify-content: center;
        }
        .ajs-path-svg {
          width: 100%;
          max-width: 320px;
        }
        .ajs-path-dot {
          position: absolute;
          top: 30px;
          left: 50%;
          width: 14px;
          height: 14px;
          margin-left: -166px;
          border-radius: 50%;
          background: #0a1f44;
        }
      `}</style>
    </div>
  );
};

export default MotionPathDemo;
