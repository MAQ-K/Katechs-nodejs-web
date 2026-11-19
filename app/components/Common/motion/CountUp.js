import React, { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "framer-motion";

// Counts a number up from zero once it scrolls into view.
//
// Generalised from the page-scoped version in Emails/Features.js (which counts
// strings like "99.9%"); this one takes a plain number, which is what score
// dashboards need. That file was left alone deliberately — it is on another
// page and rewriting it here would be an unrelated change.
//
// Why it matters on the consulting diagnostic: a static "63" is a fact, but a
// number climbing to 63 reads as a MEASUREMENT being taken. The motion is doing
// explanatory work, not decoration.
//
// Under reduced motion the final value is rendered immediately — the
// information must never depend on the animation.
const CountUp = ({ value, duration = 1.2, className }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return undefined;
    }
    if (!inView) return undefined;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;
