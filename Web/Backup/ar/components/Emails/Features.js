import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

import { featuresSection, features } from "../../data/emails/data";

const EASE = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// Counts a numeric-looking value (e.g. "99.9%") up from 0 once the card
// scrolls into view — same mechanic as the hosting-services counters,
// see PROJECT.md Design References lab, Tier B.
const CountUpValue = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/[0-9.]/g, (c) =>
    c === "." ? "." : "0"
  ));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/[\d.]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[0]);
    const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[0].length);

    const controls = animate(0, target, {
      duration: 1.3,
      ease: EASE,
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
};

// Draws an SVG polyline in on scroll instead of it just appearing.
const DrawLine = ({ points, viewBox, className, preserveAspectRatio }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      className={className}
      preserveAspectRatio={preserveAspectRatio}
    >
      <motion.polyline
        points={points}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
      />
    </svg>
  );
};

const Features = () => {
  return (
    <section className="email-features">
      <div className="container">
        <motion.div
          className="email-features-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="email-features-eyebrow">
            {featuresSection.eyebrow}
          </span>
          <h2>{featuresSection.heading}</h2>
        </motion.div>

        <motion.div
          className="email-features-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* 1 — big stat */}
          <motion.div
            className="email-feature-card stat"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="email-feature-stat-ring">
              <span>
                <CountUpValue value={features.uptime.value} />
              </span>
            </div>
            <h3>{features.uptime.label}</h3>
          </motion.div>

          {/* 2 — centered icon */}
          <motion.div
            className="email-feature-card centered"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <motion.div
              className="email-feature-icon-ring"
              animate={{ boxShadow: [
                "0 0 0 0 rgba(29,211,248,0.35)",
                "0 0 0 14px rgba(29,211,248,0)",
              ] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            >
              <i className="bx bx-shield-quarter"></i>
            </motion.div>
            <h3>{features.protection.title}</h3>
            <p>{features.protection.desc}</p>
          </motion.div>

          {/* 3 — icon + mini speed widget */}
          <motion.div
            className="email-feature-card"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="email-feature-widget">
              <span className="email-feature-widget-tag">
                <i className="bx bx-download"></i>
                استجابة فورية
              </span>
              <DrawLine
                viewBox="0 0 220 60"
                className="email-feature-sparkline"
                points="0,38 20,30 40,42 60,20 80,34 100,16 120,30 140,12 160,26 180,18 200,32 220,14"
              />
            </div>
            <h3>{features.speed.title}</h3>
            <p>{features.speed.desc}</p>
          </motion.div>

          {/* 4 — icon + mini chart card */}
          <motion.div
            className="email-feature-card wide"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="email-feature-icon-ring sm">
              <i className="bx bx-devices"></i>
            </div>
            <div className="email-feature-wide-body">
              <h3>{features.crossDevice.title}</h3>
              <p>{features.crossDevice.desc}</p>
            </div>
            <div className="email-feature-mini-chart">
              <span className="dots">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <DrawLine
                viewBox="0 0 160 70"
                preserveAspectRatio="none"
                points="0,50 12,44 24,55 36,30 48,38 60,20 72,34 84,16 96,26 108,10 120,22 132,8 144,18 160,4"
              />
            </div>
          </motion.div>

          {/* 5 — icon + team badges */}
          <motion.div
            className="email-feature-card wide"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="email-feature-icon-ring sm">
              <i className="bx bx-group"></i>
            </div>
            <div className="email-feature-wide-body">
              <h3>{features.support.title}</h3>
              <p>{features.support.desc}</p>
            </div>
            <div className="email-feature-team">
              {features.support.teams.map((team, i) => (
                <span
                  key={team}
                  className="email-feature-team-badge"
                  style={{ "--i": i }}
                >
                  {team}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
