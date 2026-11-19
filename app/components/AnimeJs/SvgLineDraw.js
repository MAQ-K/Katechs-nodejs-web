import React, { useEffect, useRef } from "react";
import { animate, svg } from "animejs";

// svg.createDrawable() reads a path's real length and drives its
// stroke-dashoffset from that — the line draws itself in at a constant
// speed regardless of how long or curvy the path actually is.
const SvgLineDraw = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const [drawable] = svg.createDrawable(pathRef.current);
    const anim = animate(drawable, {
      draw: ["0 0", "0 1"],
      easing: "easeInOutSine",
      duration: 1600,
      direction: "alternate",
      loop: true,
    });
    return () => anim.pause();
  }, []);

  return (
    <div className="ajs-draw-stage">
      <svg viewBox="0 0 300 120" className="ajs-draw-svg">
        <path
          ref={pathRef}
          d="M10,90 C 70,10 110,10 150,60 S 230,110 290,30"
          fill="none"
          stroke="#1dd3f8"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <style jsx>{`
        .ajs-draw-stage {
          padding: 30px 24px;
          display: flex;
          justify-content: center;
        }
        .ajs-draw-svg {
          width: 100%;
          max-width: 320px;
        }
      `}</style>
    </div>
  );
};

export default SvgLineDraw;
