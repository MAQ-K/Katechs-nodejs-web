import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Grid/bento entrance — motion.csv #8 (Stagger List · Standard).
//
// The preset asks for back.out(1.4), i.e. a small overshoot. framer's spring
// with low damping gives the same read without an easing plugin.
//
// Children are wrapped rather than cloned, so a card keeps whatever element it
// already is. Use <StaggerGrid.Item> for each cell.
const container = (stagger, delay) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: stagger } },
});

const item = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 18, mass: 0.7 },
  },
};

const StaggerGrid = ({
  children,
  className,
  stagger = 0.06,
  delay = 0,
  once = true,
  as = "div",
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduced) {
    return React.createElement(as, { className }, children);
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={container(stagger, delay)}
    >
      {children}
    </Tag>
  );
};

const Item = ({ children, className, style }) => {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div className={className} style={{ willChange: "transform", ...style }} variants={item}>
      {children}
    </motion.div>
  );
};

StaggerGrid.Item = Item;

export default StaggerGrid;
