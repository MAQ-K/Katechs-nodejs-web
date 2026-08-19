import React, { useState } from "react";
import Yearly from "./yearly";
import ThreeYear from "./3Year";

const PricingStyleOne = () => {
  const [country, setCountry] = useState("EG");

  return (
    <>
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title hosting-pricing-title">
            <span>خدمات استضافة كاتكس</span>
            <h2>باقات استضافة مرنة وبأسعار تناسب ميزانيتك</h2>
            <p>
            اختار الباقة اللي تناسب أعمالك
            </p>

            <div className="currency-switch">
              <span
                className={`currency-switch-label ${country === "EG" ? "active" : ""}`}
                onClick={() => setCountry("EG")}
              >
                ج.م
              </span>
              <div
                className={`currency-switch-track ${country === "SA" ? "sa" : ""}`}
                onClick={() => setCountry(country === "EG" ? "SA" : "EG")}
                role="button"
                aria-label="تبديل عملة السعر بين الجنيه المصري والريال السعودي"
              >
                <div className="currency-switch-thumb"></div>
              </div>
              <span
                className={`currency-switch-label ${country === "SA" ? "active" : ""}`}
                onClick={() => setCountry("SA")}
              >
                ر.س
              </span>
            </div>
          </div>

          <div className="tab quote-list-tab">
            <div className="tab_content">
              <div className="tabs_item">
                {country === "EG" ? <Yearly /> : <ThreeYear />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleOne;
