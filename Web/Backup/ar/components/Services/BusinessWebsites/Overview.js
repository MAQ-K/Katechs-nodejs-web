import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { staggerParent, staggerItem } from "../../Common/Reveal";
import { businessWebsites } from "../../../data/services/data";

// Area 1, section 1 — the credibility opener.
//
// Same split idiom as Seo/AiSearch.js and DigitalMarketing/SocialMedia.js, but
// the media column carries a REAL client site (the Tabqat device mockup) rather
// than a CSS skeleton. direction.md is explicit that portfolio proof outsells a
// feature list, and a fake screenshot would undercut the one thing this section
// exists to do.
//
// DOM order is media-first, text-second on purpose. In the RTL grid that lands
// the text column on the right, so an Arabic reader hits the headline before the
// image — the same ordering decision documented for .seo-split.

const Overview = () => {
  const reduced = useReducedMotion();
  const { eyebrow, heading, body, points, cta, secondary, media } =
    businessWebsites.overview;

  return (
    <section className="wsv-about" id="bw-overview">
      <div className="container">
        <div className="wsv-split">
          <Reveal>
            <div className="wsv-frame">
              <div className="wsv-frame-media">
                <img src={media.src} alt={media.alt} />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <span className="wsv-eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="wsv-h2">{heading}</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="wsv-p">{body}</p>
            </Reveal>

            {/* Stagger applied to the real ul/li so list semantics survive —
                no wrapper divs, per the note in Common/Reveal.js. */}
            <motion.ul
              className="wsv-list"
              variants={reduced ? undefined : staggerParent(0.08, 0.2)}
              initial={reduced ? undefined : "hidden"}
              whileInView={reduced ? undefined : "show"}
              viewport={{ once: true, margin: "-80px" }}
            >
              {points.map((point) => (
                <motion.li
                  key={point}
                  variants={reduced ? undefined : staggerItem(12)}
                >
                  <i className="bx bx-check" aria-hidden="true"></i>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Reveal delay={0.3}>
              <div className="wsv-about-cta">
                <Link href={cta.href} className="wsv-btn wsv-btn-solid">
                  {cta.label}
                </Link>
                <Link href={secondary.href} className="wsv-about-link">
                  {secondary.label}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
