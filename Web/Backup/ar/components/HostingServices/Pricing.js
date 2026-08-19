import React, { useState } from "react";
import Link from "next/link";

import { pricing } from "../../data/hosting-services/data";

const Pricing = () => {
  const [currency, setCurrency] = useState("EG");
  const active = pricing.currencies[currency];

  return (
    <section className="hosting-pricing">
      <div className="container">
        <div className="section-title hosting-pricing-title">
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
        </div>

        <div className="row justify-content-center align-items-center">
          {active.plans.map((plan, index) => {
            const isPopular = Boolean(plan.badge);
            return (
              <div className="col-lg-4 col-md-6" key={plan.name}>
                <div
                  className={`hosting-pricing-card ${
                    isPopular ? "hosting-pricing-card-popular" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
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

                  <Link href={plan.cta.href} className="hosting-pricing-cta">
                    {plan.cta.text}
                  </Link>

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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
