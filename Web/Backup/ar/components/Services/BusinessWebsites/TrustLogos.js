import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { staggerParent, staggerItem } from "../../Common/Reveal";
import { businessWebsites } from "../../../data/services/data";

// Area 1, section 1b — the trust strip that closes the overview.
//
// Deliberately quiet: greyscale at rest, colour on hover. These logos are proof,
// not decoration, and they must not compete with the CTA directly above them.
//
// No counts, no ratings, no "trusted by 500+". direction.md wants real proof and
// the library entry general-trust-wall-hostinger.md flags fabricated numbers as a
// trust violation — every logo here is an actual client from public/images/clients/.

const TrustLogos = () => {
  const reduced = useReducedMotion();
  const { title, items } = businessWebsites.logos;

  return (
    <section className="wsv-logos">
      <div className="container">
        <Reveal>
          <span className="wsv-logos-title">{title}</span>
        </Reveal>

        <motion.ul
          className="wsv-logos-row"
          variants={reduced ? undefined : staggerParent(0.06, 0.1)}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((logo) => (
            <motion.li
              key={logo.id}
              variants={reduced ? undefined : staggerItem(10)}
            >
              <img src={logo.src} alt={logo.name} loading="lazy" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default TrustLogos;
