import React, { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";

// onScroll() links an animation's progress directly to scroll position
// inside a container — "sync: true" makes it scrub back and forth with the
// scrollbar instead of firing once and finishing on its own.
const ScrollScrub = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const anim = animate(fillRef.current, {
      width: ["0%", "100%"],
      easing: "linear",
      autoplay: onScroll({
        container: containerRef.current,
        sync: true,
      }),
    });
    const cardAnim = animate(cardRef.current, {
      translateX: [0, 220],
      rotate: [0, 8],
      easing: "linear",
      autoplay: onScroll({
        container: containerRef.current,
        sync: true,
      }),
    });
    return () => {
      anim.pause();
      cardAnim.pause();
    };
  }, []);

  return (
    <div className="ajs-scroll-stage">
      <div ref={trackRef} className="ajs-scroll-track">
        <div ref={fillRef} className="ajs-scroll-fill" />
      </div>
      <div ref={containerRef} className="ajs-scroll-container">
        <div className="ajs-scroll-spacer" />
        <div ref={cardRef} className="ajs-scroll-card">
          مرر داخل هذا الصندوق
        </div>
        <div className="ajs-scroll-spacer" />
      </div>
      <style jsx>{`
        .ajs-scroll-stage {
          width: 100%;
          padding: 20px 24px 24px;
        }
        .ajs-scroll-track {
          height: 6px;
          border-radius: 999px;
          background: #eef1f5;
          overflow: hidden;
          margin-bottom: 12px;
        }
        .ajs-scroll-fill {
          width: 0;
          height: 100%;
          background: #1dd3f8;
        }
        .ajs-scroll-container {
          height: 160px;
          overflow-y: auto;
          border: 1px solid #e3e6ea;
          border-radius: 10px;
          background: #fff;
        }
        .ajs-scroll-spacer {
          height: 200px;
        }
        .ajs-scroll-card {
          margin: 0 auto;
          width: 160px;
          padding: 16px;
          border-radius: 10px;
          background: #0a1f44;
          color: #fff;
          font-family: "Cairo", sans-serif;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ScrollScrub;
