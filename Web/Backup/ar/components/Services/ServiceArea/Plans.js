import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { EASE } from "../../Common/Reveal";

// Section 2 of a service area — the packages.
//
// Generic: every area renders this same component with its own data object.
//
// Grid comes from .seo-grid/.seo-plan rather than AppDev's Bootstrap row: real
// CSS grid, height:100% equalises the cards for free, and the badge sits in
// flow instead of being an absolutely-positioned corner tag.
//
// The recommended tier gets a STATIC navy highlight, not AppDev's rotating
// conic border beam — this page is deliberately calmer than AppDev.
//
// `is-popular`, never `popular`: the theme has a global unscoped `.popular`
// (style.scss:3326) that is a red 45deg-rotated ribbon and would land on the
// card element itself.

const Plans = ({ area, id }) => {
  const reduced = useReducedMotion();
  const { plansSection, pricing } = area;

  const codes = Object.keys(pricing.currencies);
  const [currency, setCurrency] = useState(codes[0]);
  const active = pricing.currencies[currency];

  return (
    <section className="wsv-plans" id={id}>
      <div className="container">
        <div className="wsv-plans-head">
          <Reveal as="span" className="wsv-eyebrow">
            {plansSection.eyebrow}
          </Reveal>
          <Reveal as="h2" className="wsv-h2" delay={0.06}>
            {plansSection.heading}
          </Reveal>
          <Reveal as="p" className="wsv-p" delay={0.12}>
            {plansSection.note}
          </Reveal>

          {codes.length > 1 && (
            <Reveal delay={0.18}>
              <div
                className="wsv-cur-switch"
                role="group"
                aria-label="اختر العملة"
              >
                {codes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={code === currency ? "is-active" : ""}
                    aria-pressed={code === currency}
                    onClick={() => setCurrency(code)}
                  >
                    {pricing.currencies[code].label}
                  </button>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        {/* Keyed on the currency so the cards re-key and fade when it flips —
            without it the numbers swap in place with no acknowledgement. */}
        <div className="wsv-grid" key={currency}>
          {active.plans.map((plan, i) => (
            <Reveal
              key={plan.id}
              className={`wsv-plan${plan.isPopular ? " is-popular" : ""}`}
              delay={0.08 * i}
              whileHover={reduced ? undefined : { y: -6 }}
            >
              {plan.badge ? (
                <span className="wsv-plan-badge">{plan.badge}</span>
              ) : null}

              <span className="wsv-plan-icon">
                <i className={plan.icon} aria-hidden="true"></i>
              </span>

              <h3>{plan.name}</h3>
              <span className="wsv-plan-summary">{plan.summary}</span>

              <div className="wsv-plan-price">
                <span className="wsv-plan-amount">{plan.price}</span>
                <span className="wsv-plan-cur">{active.label}</span>
              </div>

              <motion.ul
                className="wsv-plan-features"
                initial={reduced ? undefined : "hidden"}
                whileInView={reduced ? undefined : "show"}
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.12 },
                  },
                }}
              >
                {plan.features.map((f) => (
                  <motion.li
                    key={f}
                    variants={{
                      hidden: reduced ? {} : { opacity: 0, y: 8 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35, ease: EASE },
                      },
                    }}
                  >
                    <i className="bx bx-check" aria-hidden="true"></i>
                    <span>{f}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="wsv-plan-cta">
                <Link href={plan.cta.href} className="wsv-plan-btn">
                  {plan.cta.text}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {active.billingNote ? (
          <Reveal>
            <p className="wsv-plans-note">{active.billingNote}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
};

export default Plans;
