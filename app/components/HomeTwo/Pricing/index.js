import React from "react";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

const Pricing = () => {
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
      <section className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>What We Offer</span>
            <h2>Our Pricing Plan For You</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum
              suspendisse.
            </p>
          </div>

          <div className="tab quote-list-tab">
            {/* Tabs */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => openTabSection(e, "tab1")}
              >
                <span>Monthly</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab2")}>
                <span>Yearly</span>
              </li>
            </ul>

            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <Monthly />
              </div>

              <div id="tab2" className="tabs_item">
                <Yearly />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
