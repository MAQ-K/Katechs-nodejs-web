import React, { useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

import { pricing } from "../../data/hosting-services/data";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

const Pricing = () => {
  const [currency, setCurrency] = useState("EG");
  const active = pricing.currencies[currency];
  const reduced = useReducedMotion();

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
                  <Link href={plan.cta.href} className="hosting-pricing-cta">
                    {plan.cta.text}
                  </Link>
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
    </section>
  );
};

export default Pricing;
