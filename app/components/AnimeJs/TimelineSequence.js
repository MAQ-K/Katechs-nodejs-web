import React, { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

// A timeline chains several animate() calls with a shared clock, so each
// step's start time is relative to the one before it (or an explicit
// label/offset) instead of juggling separate timers by hand.
const TimelineSequence = () => {
  const badgeRef = useRef(null);
  const barRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const tl = createTimeline({ loop: true, loopDelay: 700 });
    tl.add(badgeRef.current, {
      scale: [0, 1],
      opacity: [0, 1],
      easing: "easeOutBack",
      duration: 500,
    })
      .add(
        barRef.current,
        {
          width: ["0%", "100%"],
          easing: "easeInOutQuad",
          duration: 900,
        },
        "-=150"
      )
      .add(
        labelRef.current,
        {
          opacity: [0, 1],
          translateY: [8, 0],
          duration: 400,
        },
        "-=300"
      );
    return () => tl.pause();
  }, []);

  return (
    <div className="ajs-tl-stage">
      <div ref={badgeRef} className="ajs-tl-badge">
        1
      </div>
      <div className="ajs-tl-track">
        <div ref={barRef} className="ajs-tl-bar" />
      </div>
      <span ref={labelRef} className="ajs-tl-label">
        Done
      </span>
      <style jsx>{`
        .ajs-tl-stage {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          padding: 50px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ajs-tl-badge {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #0a1f44;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ajs-tl-track {
          flex: 1;
          height: 8px;
          border-radius: 999px;
          background: #eef1f5;
          overflow: hidden;
        }
        .ajs-tl-bar {
          width: 0;
          height: 100%;
          background: #1dd3f8;
        }
        .ajs-tl-label {
          flex-shrink: 0;
          font-size: 12px;
          font-weight: 600;
          color: #14161a;
        }
      `}</style>
    </div>
  );
};

export default TimelineSequence;
