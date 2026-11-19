import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Shared scroll-reveal wrapper — replaces AOS's data-aos="fade-up" with
// spring-eased motion + real stagger support. See PROJECT.md "Design References".
//
// Every animation here is opt-out under the OS "reduce motion" setting: the
// lab calls this required, not optional. When reduced, content renders in its
// final state instead of animating in (never invisible).
const Reveal = ({
  children,
  delay = 0,
  y = 26,
  duration = 0.6,
  as = "div",
  className,
  once = true,
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

// Parent/child variant pair for staggered lists — apply directly to the real
// tags (motion.ul + motion.li) so list semantics stay intact, no wrapper divs.
export const staggerParent = (stagger = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerItem = (y = 18) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
});

// Shared easing curve — the one used across every AppDev/Emails component.
export const EASE = [0.22, 1, 0.36, 1];

export default Reveal;
