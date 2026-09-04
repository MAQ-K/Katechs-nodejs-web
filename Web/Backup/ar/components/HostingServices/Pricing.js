import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";

import { pricing } from "../../data/hosting-services/data";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";
import ComingSoonModal from "../Common/ComingSoonModal";

const Pricing = () => {
  const [currency, setCurrency] = useState("EG");
  const active = pricing.currencies[currency];
  const reduced = useReducedMotion();
  // The order form is not built yet — pressing a plan CTA opens a placeholder
  // instead of navigating to plan.cta.href, which does not exist.
  const [pendingPlan, setPendingPlan] = useState(null);

  return (
    <section className="hosting-pricing">
      <div className="container">
        <Reveal as="div" className="section-title hosting-pricing-title">
          <span>{pricing.eyebrow}</span>
          <h2>{pricing.title}</h2>
          <p>{pricing.subtitle}</p>

          <div className="hosting-pricing-switch">
            {Object.keys(pricing.currencies).map((code) => (
              <button
                key={code}
                type="button"
                className={`hosting-pricing-switch-btn ${
                  currency === code ? "active" : ""
                }`}
                onClick={() => setCurrency(code)}
              >
                {pricing.currencies[code].label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="row justify-content-center align-items-center">
          {active.plans.map((plan, index) => {
            const isPopular = Boolean(plan.badge);
            const card = (
              <Reveal
                as="div"
                className={`hosting-pricing-card ${
                  isPopular ? "hosting-pricing-card-popular" : ""
                }`}
                delay={0.1 * index}
                whileHover={reduced ? undefined : { y: -8 }}
              >
                {isPopular && (
                  <span className="hosting-pricing-badge">{plan.badge}</span>
                )}

                <h3 className="hosting-pricing-name">{plan.name}</h3>
                {plan.tagline && (
                  <p className="hosting-pricing-tagline">{plan.tagline}</p>
                )}

                <div className="hosting-pricing-price">
                  <span className="hosting-pricing-price-value">
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className="hosting-pricing-price-note">
                      {plan.priceNote}
                    </span>
                  )}
                  {plan.monthlyEquivalent && (
                    <span className="hosting-pricing-price-note">
                      {plan.monthlyEquivalent}
                    </span>
                  )}
                </div>

                <Magnetic strength={0.2} className="hosting-pricing-cta-magnet">
                  <button
                    type="button"
                    className="hosting-pricing-cta"
                    onClick={() => setPendingPlan(plan.name)}
                  >
                    {plan.cta.text}
                  </button>
                </Magnetic>

                <ul className="hosting-pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="hosting-pricing-check">
                        <i className="bx bx-check"></i>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );

            return (
              <div className="col-lg-4 col-md-6" key={plan.name}>
                {isPopular ? (
                  <div className="hosting-pricing-beam">{card}</div>
                ) : (
                  card
                )}
              </div>
            );
          })}
        </div>
      </div>

      <ComingSoonModal
        open={Boolean(pendingPlan)}
        onClose={() => setPendingPlan(null)}
        planName={pendingPlan}
      />
    </section>
  );
};

export default Pricing;
