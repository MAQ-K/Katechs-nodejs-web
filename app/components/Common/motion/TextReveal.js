import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Word-by-word headline reveal.
//
// This is our answer to motion.csv #9 (Stagger List · Complex), which in GSAP
// needs the paid SplitText plugin. Splitting on whitespace gets the same effect
// for headlines at zero cost.
//
// Words, never characters. Arabic is cursive — splitting per character breaks
// the joining forms and the headline renders as disconnected letters. Words keep
// the shaping intact, which is why this component doesn't offer a `chars` mode.
//
// The whole string stays readable to screen readers via aria-label; the spans
// are aria-hidden so assistive tech gets one sentence, not N fragments.
const TextReveal = ({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.045,
  y = 18,
  once = true,
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.h2;
  const words = String(text).split(" ");

  if (reduced) {
    return React.createElement(as, { className }, text);
  }

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          aria-hidden="true"
          style={{ display: "inline-block", willChange: "transform" }}
          variants={{
            hidden: { opacity: 0, y, rotate: -2 },
            show: {
              opacity: 1,
              y: 0,
              rotate: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
};

export default TextReveal;
