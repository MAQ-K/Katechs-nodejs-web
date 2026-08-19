import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { emailTypes, pricingSection } from "../../data/emails/data";
import BorderBeam from "./BorderBeam";

const EASE = [0.22, 1, 0.36, 1];

const PricingFlow = () => {
  const [activeType, setActiveType] = useState(0);
  const active = emailTypes[activeType];

  return (
    <>
      {/* Section 2 — email type cards. Tapping one drives the pricing below. */}
      <section className="email-types">
        <div className="container">
          <div className="row justify-content-center">
            {emailTypes.map((type, i) => (
              <div className="col-lg-4 col-md-6" key={type.id}>
                <motion.div
                  role="button"
                  onClick={() => setActiveType(i)}
                  className={
                    i === activeType
                      ? "email-type-card active"
                      : "email-type-card"
                  }
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  {i === activeType && (
                    <motion.div
                      layoutId="typeActiveBg"
                      className="email-type-card-bg"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  )}

                  <span className="email-type-icon">
                    <img src={type.icon} alt={type.label} width={34} />
                  </span>

                  <h3>{type.label}</h3>

                  <p>{type.desc}</p>

                  <span className="email-type-pick">
                    <i className="bx bx-check"></i>
                    اختر هذه الباقة
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — tab bar + plans, both bound to the same active type. */}
      <section className="email-pricing" id="pricing">
        <div className="container">
          <div className="email-pricing-head">
            <span className="email-pricing-eyebrow">
              {pricingSection.eyebrow}
            </span>
            <h2>{pricingSection.heading}</h2>
            <p>{pricingSection.subheading}</p>
          </div>

          <div className="email-pricing-tabs">
            {emailTypes.map((type, i) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setActiveType(i)}
                className={
                  i === activeType
                    ? "email-pricing-tab active"
                    : "email-pricing-tab"
                }
              >
                {i === activeType && (
                  <motion.span
                    layoutId="tabActiveBg"
                    className="email-pricing-tab-bg"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
                <img src={type.icon} alt="" width={22} />
                <span>{type.label}</span>
              </button>
            ))}
          </div>

          <div className="row justify-content-center">
            <AnimatePresence mode="popLayout">
              {active.plans.map((plan, planIndex) => {
                const card = (
                  <motion.div
                    className={
                      plan.popular
                        ? "email-plan-card is-popular"
                        : "email-plan-card"
                    }
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  >
                    {plan.popular && (
                      <span className="email-plan-badge">
                        {pricingSection.popularBadge}
                      </span>
                    )}

                    <span className="email-plan-icon">
                      <img src={active.icon} alt="" width={26} />
                    </span>

                    <h3>{plan.name}</h3>

                    <div className="email-plan-price">
                      <strong>{plan.priceYear}</strong>
                      <sub>/ السنة</sub>
                    </div>

                    <div className="email-plan-month">
                      أو {plan.priceMonth} / الشهر
                    </div>

                    <ul className="email-plan-features">
                      {plan.features.map((feature) => (
                        <li
                          key={feature.text}
                          className={feature.included ? "" : "off"}
                        >
                          <i
                            className={
                              feature.included ? "bx bx-check" : "bx bx-x"
                            }
                          ></i>
                          {feature.text}
                        </li>
                      ))}
                    </ul>

                    <Link href={pricingSection.ctaHref} className="default-btn">
                      {pricingSection.ctaText}
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>

                    <span className="email-plan-note">
                      {pricingSection.perUserNote}
                    </span>
                  </motion.div>
                );

                return (
                  <motion.div
                    className="col-lg-4 col-md-6"
                    key={`${active.id}-${plan.name}-${plan.priceYear}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{
                      duration: 0.45,
                      ease: EASE,
                      delay: planIndex * 0.08,
                    }}
                  >
                    {plan.popular ? (
                      <BorderBeam className="email-plan-beam">
                        {card}
                      </BorderBeam>
                    ) : (
                      card
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingFlow;
