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
            <span> تحويل رؤيتك إلى حقيقة </span>
                                       
            <h2 >خطط اسعار تصميم مواقع  الويب </h2>
            <p>
            كل ما تحتاجه للشهرة و التألق على الانترنت 
            </p>
          </div>

          <div className="tab quote-list-tab">
            {/* Tabs */}

            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <Yearly />
              </div>
            </div>




            
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleOne;
