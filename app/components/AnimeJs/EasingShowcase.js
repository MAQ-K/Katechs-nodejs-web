import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

// Several easing curves racing down the same distance side by side — the
// fastest way to actually feel the difference between them instead of
// reading a curve on a graph.
const EASINGS = [
  { label: "linear", value: "linear" },
  { label: "easeOutQuad", value: "easeOutQuad" },
  { label: "easeInOutCubic", value: "easeInOutCubic" },
  { label: "easeOutElastic", value: "easeOutElastic(1, .6)" },
  { label: "easeOutBounce", value: "easeOutBounce" },
  { label: "spring(1, 80, 10, 0)", value: "spring(1, 80, 10, 0)" },
];

const EasingShowcase = () => {
  const trackRefs = useRef([]);

  useEffect(() => {
    const anims = EASINGS.map((e, i) =>
      animate(trackRefs.current[i], {
        translateX: [0, 260],
        easing: e.value,
        duration: 1600,
        direction: "alternate",
        loop: true,
      })
    );
    return () => anims.forEach((a) => a.pause());
  }, []);

  return (
    <div className="ajs-ease-stage">
      {EASINGS.map((e, i) => (
        <div key={e.label} className="ajs-ease-row">
          <span className="ajs-ease-label">{e.label}</span>
          <div className="ajs-ease-track">
            <div
              ref={(el) => (trackRefs.current[i] = el)}
              className="ajs-ease-dot"
            />
          </div>
        </div>
      ))}
      <style jsx>{`
        .ajs-ease-stage {
          width: 100%;
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .ajs-ease-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ajs-ease-label {
          width: 150px;
          flex-shrink: 0;
          font-size: 12px;
          font-family: ui-monospace, Consolas, monospace;
          color: #6b7280;
        }
        .ajs-ease-track {
          position: relative;
          flex: 1;
          height: 14px;
          background: #eef1f5;
          border-radius: 999px;
        }
        .ajs-ease-dot {
          position: absolute;
          top: 50%;
          left: 0;
          width: 14px;
          height: 14px;
          margin-top: -7px;
          border-radius: 50%;
          background: #1dd3f8;
        }
      `}</style>
    </div>
  );
};

export default EasingShowcase;
