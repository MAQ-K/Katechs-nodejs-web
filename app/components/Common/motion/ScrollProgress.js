import React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

// Reading-progress bar.
//
// RTL matters here: a bar that fills left-to-right on an Arabic page reads
// backwards. `transformOrigin` follows the document direction, so it grows from
// the right on this site and from the left if the page is ever LTR.
//
// Under reduced motion the spring is dropped — the bar still tracks scroll
// (that's information, not decoration), it just stops easing.
const ScrollProgress = ({
  height = 3,
  color = "#1dd3f8",
  target,
  className,
  containerRef,
}) => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll(
    containerRef ? { container: containerRef } : target ? { target } : undefined
  );

  const smooth = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  const [rtl, setRtl] = React.useState(true);
  React.useEffect(() => {
    // Read the real direction off the document rather than assuming — the lab
    // renders specimens in both.
    const dir =
      document.documentElement.getAttribute("dir") ||
      getComputedStyle(document.documentElement).direction;
    setRtl(dir !== "ltr");
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        scaleX: reduced ? scrollYProgress : smooth,
        transformOrigin: rtl ? "right" : "left",
        height,
        background: color,
        position: "absolute",
        insetInlineStart: 0,
        insetInlineEnd: 0,
        top: 0,
        zIndex: 5,
      }}
    />
  );
};

export default ScrollProgress;
