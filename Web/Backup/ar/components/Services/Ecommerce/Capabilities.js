import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { staggerParent, staggerItem } from "../../Common/Reveal";

// Area 4, part 2 — what the store owner actually operates.
//
// The brief calls for "a horizontal feature strip, a compact grid, or small
// icon/text items" and warns specifically against this becoming six large
// cards. So these are light rows on the area's own ground rather than
// six more embossed panels: the message is "and you can run all of it",
// which does not need six boxes shouting it.

const Capabilities = ({ area, id }) => {
  const reduced = useReducedMotion();
  const { capabilitiesTitle, capabilities } = area;

  return (
    <section className="wsv-ecom-caps" id={id}>
      <div className="container">
        <Reveal>
          <span className="wsv-caps-title">{capabilitiesTitle}</span>
        </Reveal>

        <motion.ul
          className="wsv-caps-grid"
          variants={reduced ? undefined : staggerParent(0.06, 0.1)}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {capabilities.map((item) => (
            <motion.li
              key={item.id}
              variants={reduced ? undefined : staggerItem(10)}
            >
              <span className="wsv-caps-icon">
                <i className={item.icon} aria-hidden="true"></i>
              </span>
              <span className="wsv-caps-text">
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

export default Capabilities;
