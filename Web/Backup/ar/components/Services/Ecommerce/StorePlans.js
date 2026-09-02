import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { staggerParent, staggerItem } from "../../Common/Reveal";

// Area 4, closing pair — "we build it" / "you run it".
//
// Shape comes from brain/ui-library/inspiration/general-dual-feature-cards-hostinger.md
// (filed 2026-08-29, verdict Proposed): two equal cards, each a tag, a
// sub-heading, a short paragraph, a short checklist, a SOFT text link, and a
// mockup image at the bottom. Reused rather than invented, per the standing
// design rule in CLAUDE.md.
//
// Two deliberate departures from that entry:
//   1. The image sits INSIDE the card's clip instead of bleeding past its
//      bottom edge. These cards sit at the very end of an area whose wrapper
//      (.wsv-area) is `overflow: hidden`, so anything bleeding downward would
//      be cut by the area rather than by the card — a ragged edge, not the
//      intended overhang. The entry itself flags this clip-vs-bleed conflict
//      as its main risk.
//   2. No floating UI chip over the image. The two photos already carry their
//      own interface furniture (a browser bar, an orders dashboard); adding a
//      chip on top would be a second fake UI layered on a real one.
//
// Text links, not buttons: the area's single heavy CTA is the banner directly
// above this, and the brief for this area allows exactly one.

const StorePlans = ({ area, id }) => {
  const reduced = useReducedMotion();
  const plans = area?.storePlans;

  if (!plans || plans.length === 0) return null;

  return (
    <section className="wsv-store" id={id}>
      <div className="container">
        <motion.div
          className="wsv-store-grid"
          variants={reduced ? undefined : staggerParent(0.12)}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-70px" }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.id}
              className="wsv-store-card"
              variants={reduced ? undefined : staggerItem(22)}
            >
              <div className="wsv-store-body">
                <span className="wsv-store-tag">{plan.tag}</span>
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>

                <ul className="wsv-store-points">
                  {plan.points.map((point) => (
                    <li key={point}>
                      <i className="bx bx-check" aria-hidden="true"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.link.href} className="wsv-store-link">
                  {plan.link.label}
                  {/* Left-pointing: this page is RTL, so "forward" is left. */}
                  <i className="bx bx-left-arrow-alt" aria-hidden="true"></i>
                </Link>
              </div>

              {/* next.config.js sets `images: { unoptimized: true }` SITEWIDE, so
                  next/image resizes nothing here — it only reserves the box and
                  lazy-loads. The 1536px source PNGs are ~2.2MB each, which would
                  have put ~4.4MB at the bottom of an already heavy page, so the
                  data points at pre-built 1120w WebP derivatives instead
                  (*-card.webp, 176KB + 79KB). The originals are untouched next to
                  them. Regenerate with sharp if the crop ever needs to change.
                  Kept as next/image rather than a bare <img> for the reserved box
                  and the lazy loading, both of which work with unoptimized. */}
              <div className="wsv-store-media">
                <Image
                  src={plan.image}
                  alt={plan.alt}
                  width={plan.imageW}
                  height={plan.imageH}
                  sizes="(max-width: 991px) 100vw, 560px"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorePlans;
