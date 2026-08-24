import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

// Scroll parallax — motion.csv #13 (Subtle) and #14 (Standard, multi-layer).
//
// The preset's hard rule, repeated here because it is the one people break:
// **decorative layers only, never text.** Text that drifts against the scroll is
// unreadable and, for anyone motion-sensitive, actively unpleasant.
//
// `speed` is a fraction of the element's own travel: 0.1 is a whisper, 0.4 is
// already a lot. Negative moves against the scroll.
//
// The spring is what separates this from the cheap version — raw scroll mapping
// judders on trackpads because scroll events are not frame-aligned.
const Parallax = ({
  children,
  speed = 0.12,
  className,
  style,
  smooth = true,
  as = "div",
}) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${speed * -100}%`]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (reduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ y: smooth ? y : raw, willChange: "transform", ...style }}
    >
      {children}
    </Tag>
  );
};

export default Parallax;
