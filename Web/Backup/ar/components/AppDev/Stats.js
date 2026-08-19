import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import Reveal, { EASE } from "../Common/Reveal";

// Scroll-triggered count-up — the Motion Lab's Tier B counter mechanic, done
// with framer-motion's imperative `animate` so the page needs no GSAP.
// Fires once, when the strip is actually in view.
const stats = [
  { to: 120, suffix: "+", label: "مشروع تم تسليمه" },
  { to: 98, suffix: "%", label: "رضا العملاء" },
  { to: 2, suffix: " منصة", label: "iOS وأندرويد" },
  { to: 24, suffix: "/7", label: "دعم بعد الإطلاق" },
];

const Counter = ({ to, suffix, started }) => {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [started, to, reduced]);

  return (
    <span className="app-stat-num">
      {value}
      <em>{suffix}</em>
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="app-stats" ref={ref}>
      <div className="container">
        <div className="app-stats-grid">
          {stats.map((s, i) => (
            <Reveal className="app-stat" key={s.label} delay={0.08 * i}>
              <Counter to={s.to} suffix={s.suffix} started={inView} />
              <span className="app-stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>

        <motion.span
          className="app-stats-rule"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
        />
      </div>
    </section>
  );
};

export default Stats;
