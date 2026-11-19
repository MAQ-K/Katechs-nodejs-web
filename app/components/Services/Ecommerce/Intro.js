import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import TextReveal from "../../Common/motion/TextReveal";
import Reveal, { staggerParent, staggerItem, EASE } from "../../Common/Reveal";

// Area 4, part 1 — the buying journey.
//
// The brief is explicit that the visual has to explain the SERVICE, not the
// technology: the customer's path from a product to a paid order. So this is
// interface-shaped boxes with a real payoff at the end, not a laptop mockup.
//
// RTL: the steps are laid out by the document's own direction, so step one
// sits on the RIGHT and the connectors point LEFT — the direction of reading.
// The reference image is LTR; mirroring it literally would have the flow run
// backwards for an Arabic reader.

const Intro = ({ area, id }) => {
  const reduced = useReducedMotion();
  const { intro, journey, journeyResult } = area;

  return (
    <section className="wsv-ecom-intro" id={id}>
      <div className="container">
        <div className="wsv-ecom-head">
          <Reveal as="span" className="wsv-eyebrow">
            {intro.eyebrow}
          </Reveal>
          <TextReveal text={intro.heading} as="h2" className="wsv-h2" delay={0.06} />
          <Reveal as="p" className="wsv-p" delay={0.12}>
            {intro.body}
          </Reveal>
        </div>

        <motion.div
          className="wsv-flow"
          variants={reduced ? undefined : staggerParent(0.08, 0.15)}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-70px" }}
        >
          {journey.map((stepItem) => (
            <motion.div
              className="wsv-flow-cell"
              key={stepItem.id}
              variants={reduced ? undefined : staggerItem(14)}
            >
              <motion.div
                className="wsv-flow-step"
                whileHover={reduced ? undefined : { y: -5 }}
                transition={{ duration: 0.22 }}
              >
                <i className={stepItem.icon} aria-hidden="true"></i>
                <span>{stepItem.label}</span>
              </motion.div>
              {/* Points along the reading direction, so it flips with RTL. */}
              <i
                className="bx bx-left-arrow-alt wsv-flow-arrow"
                aria-hidden="true"
              ></i>
            </motion.div>
          ))}

          {/* The payoff, carrying more weight than the steps that lead to it. */}
          <motion.div
            className="wsv-flow-cell"
            variants={reduced ? undefined : staggerItem(14)}
          >
            {/* Lands last and settles with a small scale — the arrival of the
                order is the point of the whole strip, so it gets the emphasis
                the steps before it deliberately do not. */}
            <motion.div
              className="wsv-flow-step is-result"
              initial={reduced ? false : { scale: 0.94 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              whileHover={reduced ? undefined : { y: -5 }}
            >
              <i className={journeyResult.icon} aria-hidden="true"></i>
              <span className="wsv-flow-result-title">
                {journeyResult.title}
              </span>
              <span className="wsv-flow-result-line">{journeyResult.line}</span>
              <span className="wsv-flow-result-ref">{journeyResult.ref}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
