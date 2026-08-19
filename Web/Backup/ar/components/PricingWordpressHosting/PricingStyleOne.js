import React from "react";
import Yearly from "./yearly";
import ThreeYear from "./3Year";

const PricingStyleOne = () => {
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
            <span>استضافه ووردبريس</span>
            <h2 >خطط اسعار استضافه ووردبريس</h2>
            <p>
            اختر أفضل خطة استضافة
            لموقع ويب آمن وسريع 
            </p>
          </div>

          <div className="tab quote-list-tab">
            {/* Tabs */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => openTabSection(e, "tab1")}
              >
                <span>سنوي</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab2")}>
                <span>3 سنوات</span>
              </li>
            </ul>

            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <Yearly />
              </div>

              <div id="tab2" className="tabs_item">
                <ThreeYear />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleOne;
