import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

// Core tween — translate/scale/rotate/opacity on plain CSS transform
// properties, alternating back and forth. This is the anime.js `animate()`
// call every other specimen in this folder builds on.
const TweenBasics = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const anim = animate(boxRef.current, {
      translateX: [0, 160],
      rotate: [0, 180],
      scale: [1, 1.15, 1],
      backgroundColor: ["#0a1f44", "#1dd3f8"],
      easing: "easeInOutQuad",
      duration: 1400,
      direction: "alternate",
      loop: true,
    });
    return () => anim.pause();
  }, []);

  return (
    <div className="ajs-tween-stage">
      <div ref={boxRef} className="ajs-tween-box" />
      <style jsx>{`
        .ajs-tween-stage {
          padding: 50px 24px;
          display: flex;
          align-items: center;
        }
        .ajs-tween-box {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: #0a1f44;
        }
      `}</style>
    </div>
  );
};

export default TweenBasics;
