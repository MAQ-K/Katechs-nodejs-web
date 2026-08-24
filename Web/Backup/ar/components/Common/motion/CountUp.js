import React, { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Scroll-triggered number count-up — motion.csv Tier B counter, hand-rolled so
// GSAP stays uninstalled. Generalised from components/AppDev/Stats.js, which
// had it welded to one section.
//
// Numbers are rendered with `toLocaleString("en-US")` on purpose: this is an
// RTL Arabic site, but prices, plan counts and percentages are shown in Latin
// digits everywhere else on it. Changing that here would make one number look
// foreign next to all the others.
//
// `tabular-nums` stops the element resizing on every frame as digit widths
// change — without it the whole row jitters while counting.
const CountUp = ({
  to,
  from = 0,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.5 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (reduced) {
      setValue(to);
      return;
    }
    if (!inView) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      // easeOutExpo — fast out of the gate, long settle. Reads as "counting".
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(from + (to - from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, from, duration, reduced]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {Number(value).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export default CountUp;
