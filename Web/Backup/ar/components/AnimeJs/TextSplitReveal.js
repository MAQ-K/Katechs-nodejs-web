import React, { useEffect, useRef } from "react";
import { animate, text } from "animejs";

// text.split() breaks a heading into per-character spans (wrapping words so
// they still break naturally), which turns "fade the whole line in" into
// "fade each letter in on its own stagger" for free.
const TextSplitReveal = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const { chars } = text.split(headingRef.current, { chars: true });
    const anim = animate(chars, {
      opacity: [0, 1],
      translateY: [16, 0],
      delay: (el, i) => i * 30,
      easing: "easeOutQuad",
      duration: 500,
      loop: true,
      loopDelay: 1400,
      direction: "alternate",
    });
    return () => anim.pause();
  }, []);

  return (
    <div className="ajs-text-stage">
      <h3 ref={headingRef} className="ajs-text-heading">
        نص يتحرك حرفاً حرفاً
      </h3>
      <style jsx>{`
        .ajs-text-stage {
          padding: 50px 24px;
          display: flex;
          justify-content: center;
        }
        .ajs-text-heading {
          margin: 0;
          font-family: "Cairo", sans-serif;
          font-weight: 800;
          font-size: 26px;
          color: #14161a;
        }
      `}</style>
    </div>
  );
};

export default TextSplitReveal;
