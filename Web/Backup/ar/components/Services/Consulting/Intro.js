import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import TextReveal from "../../Common/motion/TextReveal";
import Reveal, { staggerParent, staggerItem } from "../../Common/Reveal";

// Area 5, part 1 — the diagnostic opener.
//
// This visitor already HAS a website. They are not shopping for a build, they
// are asking "why isn't mine working?". So the copy leads with the problem
// rather than the offer, and the checklist is compact rows — the brief warns
// explicitly against turning each item into a large card, which would make
// this look like yet another feature grid.

const Intro = ({ area, id }) => {
  const reduced = useReducedMotion();
  const { intro, analyzeTitle, analyze } = area;

  return (
    <section className="wsv-cons-intro" id={id}>
      <div className="container">
        <div className="wsv-cons-head">
          <Reveal as="span" className="wsv-eyebrow">
            {intro.eyebrow}
          </Reveal>
          <TextReveal text={intro.heading} as="h2" className="wsv-h2" delay={0.06} />
          <Reveal as="p" className="wsv-p" delay={0.12}>
            {intro.body}
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <span className="wsv-caps-title">{analyzeTitle}</span>
        </Reveal>

        <motion.ul
          className="wsv-check-grid"
          variants={reduced ? undefined : staggerParent(0.06, 0.1)}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {analyze.map((item) => (
            <motion.li
              key={item.id}
              variants={reduced ? undefined : staggerItem(10)}
            >
              <i className="bx bx-check" aria-hidden="true"></i>
              <span>
                <strong>{item.title}</strong>
                <em>{item.text}</em>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Intro;
