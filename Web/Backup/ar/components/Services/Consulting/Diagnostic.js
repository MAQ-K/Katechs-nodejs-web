import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { staggerParent, staggerItem, EASE } from "../../Common/Reveal";
import CountUp from "../../Common/motion/CountUp";

// Area 5, part 2 — the piece that sells the service.
//
// Scan → issues → action plan. The brief's point is that the offer is not
// "here is what's wrong" but "here is what to do FIRST", which is why the third
// block is prioritised groups rather than a longer list of findings.
//
// 🔴 Every score and issue here is sample data for the visual. The brief is
// explicit — "Do not imply they are real client results" — so each block states
// that on screen (`.wsv-sample`) instead of leaving it to be inferred. Any
// future edit that swaps in real-looking numbers must keep those labels.

const Diagnostic = ({ area, id }) => {
  const reduced = useReducedMotion();
  const { scan, issues, plan } = area.flow;

  return (
    <section className="wsv-cons-flow" id={id}>
      <div className="container">
        <motion.div
          className="wsv-diag"
          variants={reduced ? undefined : staggerParent(0.1, 0.1)}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-70px" }}
        >
          {/* 01 — the scan */}
          <motion.div
            className="wsv-diag-card"
            variants={reduced ? undefined : staggerItem(16)}
            whileHover={reduced ? undefined : { y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <span className="wsv-diag-step">{scan.step}</span>
            <h3>{scan.title}</h3>
            <ul className="wsv-diag-metrics">
              {/* The number climbs and the bar fills together, so the block
                  reads as a scan being TAKEN rather than a static table of
                  figures. Bars are staggered so the eye follows them down. */}
              {scan.metrics.map((m, mi) => (
                <li key={m.id}>
                  <span className="wsv-diag-metric-top">
                    <span>{m.label}</span>
                    <strong>
                      <CountUp value={m.score} duration={1.1} />
                    </strong>
                  </span>
                  <span className="wsv-diag-bar" aria-hidden="true">
                    <motion.span
                      initial={reduced ? false : { width: 0 }}
                      whileInView={{ width: `${m.score}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 1.1,
                        ease: EASE,
                        delay: 0.1 + mi * 0.08,
                      }}
                      style={reduced ? { width: `${m.score}%` } : undefined}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <span className="wsv-sample">{scan.note}</span>
          </motion.div>

          {/* 02 — what it found */}
          <motion.div
            className="wsv-diag-card"
            variants={reduced ? undefined : staggerItem(16)}
            whileHover={reduced ? undefined : { y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <span className="wsv-diag-step">{issues.step}</span>
            <h3>{issues.title}</h3>
            <ul className="wsv-diag-issues">
              {issues.items.map((it) => (
                <li key={it.id}>
                  <span>{it.title}</span>
                  <em className={`wsv-tag is-${it.tone}`}>{it.level}</em>
                </li>
              ))}
            </ul>
            <span className="wsv-sample">{issues.note}</span>
          </motion.div>

          {/* 03 — what to do first. The actual product. */}
          <motion.div
            className="wsv-diag-card"
            variants={reduced ? undefined : staggerItem(16)}
            whileHover={reduced ? undefined : { y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <span className="wsv-diag-step">{plan.step}</span>
            <h3>{plan.title}</h3>
            <ul className="wsv-diag-plan">
              {plan.groups.map((g) => (
                <li key={g.id}>
                  <strong>{g.title}</strong>
                  <em>{g.text}</em>
                </li>
              ))}
            </ul>
            <span className="wsv-sample">{plan.note}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Diagnostic;
