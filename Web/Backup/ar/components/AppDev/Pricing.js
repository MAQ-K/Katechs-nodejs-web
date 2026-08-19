import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { EASE } from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

import { pricingSection, plans } from "../../data/app-development/data";

// Per the Motion Lab's verdict on the six 21st.dev picks, the border beam is
// the highest-value port and its stated home is exactly this: the "most
// popular" plan card. A rotating conic-gradient ring draws the eye far better
// than the navy fill alone, it costs no dependency, and being a pure border
// effect it doesn't fight the card's existing styling. Fully symmetrical, so
// RTL costs nothing.
const Pricing = () => {
  const reduced = useReducedMotion();

  return (
    <section className="app-pricing" id="pricing">
      <div className="container">
        <div className="app-pricing-head">
          <Reveal as="span" className="app-pricing-eyebrow">
            {pricingSection.eyebrow}
          </Reveal>

          <Reveal as="h2" delay={0.06}>
            {pricingSection.heading}
          </Reveal>

          <Reveal as="p" delay={0.12}>
            {pricingSection.note}
          </Reveal>
        </div>

        <div className="row app-pricing-row justify-content-center">
          {plans.map((plan, i) => {
            const card = (
              <Reveal
                className={`app-plan-card${plan.isPopular ? " is-popular" : ""}`}
                delay={0.08 * i}
                whileHover={reduced ? undefined : { y: -8 }}
              >
                {plan.badge && (
                  <span className="app-plan-badge">{plan.badge}</span>
                )}

                <span className="app-plan-icon">
                  <i className={plan.icon}></i>
                </span>

                <h3>{plan.name}</h3>
                <span className="app-plan-summary">{plan.summary}</span>

                <div className="app-plan-price">{plan.priceLabel}</div>

                <motion.ul
                  className="app-plan-features"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
                  }}
                >
                  {plan.features.map((f) => (
                    <motion.li
                      key={f}
                      variants={{
                        hidden: reduced ? {} : { opacity: 0, x: 14 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4, ease: EASE },
                        },
                      }}
                    >
                      <i className="bx bx-check"></i>
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="app-plan-cta">
                  <Magnetic strength={0.18} className="app-plan-magnet">
                    <Link href="/contactWeb" className="default-btn app-btn-shine">
                      اطلب عرض سعر
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            );

            return (
              <div className="col-lg-4 col-md-6" key={plan.name}>
                {plan.isPopular ? (
                  <div className="app-plan-beam">{card}</div>
                ) : (
                  card
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
