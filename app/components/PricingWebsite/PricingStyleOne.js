import React, { useState } from "react";
import Yearly from "./yearly";
import ThreeYear from "./3Year";

const PricingStyleOne = () => {
  const [country, setCountry] = useState("EG");

  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <>
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
            نمو مشروعك يبدأ باختيار <span className="title-package-accent">الباقة</span> الصح
            </h2>
            <p>
            سواء كنت شركة ناشئة أو مؤسسة كبيرة، عندنا خطة تصميم موقع تناسب مجالك وأهدافك، بأسعار واضحة وبدون مفاجآت.
            </p>

            <div className="currency-switch">
              <span
                className={`currency-switch-label ${country === "EG" ? "active" : ""}`}
                onClick={() => setCountry("EG")}
              >
                اسعار مصر
              </span>
              <div
                className={`currency-switch-track ${country === "SA" ? "sa" : ""}`}
                onClick={() => setCountry(country === "EG" ? "SA" : "EG")}
                role="button"
                aria-label="تبديل عملة السعر بين مصر والسعودية"
              >
                <div className="currency-switch-thumb"></div>
              </div>
              <span
                className={`currency-switch-label ${country === "SA" ? "active" : ""}`}
                onClick={() => setCountry("SA")}
              >
                اسعار السعودية
              </span>
            </div>
          </div>

          <div className="tab quote-list-tab">
            {/* Tabs */}

            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <Yearly country={country} />
              </div>
            </div>




            
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleOne;
