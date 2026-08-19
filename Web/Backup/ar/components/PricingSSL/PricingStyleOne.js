import React from "react";
import DvSSL from "./DvSSL";
import EvSSL from "./EvSSL";
import OvSSL from "./OvSSL";
import WildcardSSL from "./WildcardSSL";

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
      <div className="pricing-area ">
        <div className="container">
          <div className="section-title">
            <h2>خطط اسعار شهادات SSL</h2>
 
          </div>
        </div>
          <div className="tab quote-list-tab ssl_tabs">
            {/* Tabs */}
            <ul className="tabs ">
              <li
                className="current"
                onClick={(e) => openTabSection(e, "tab1")}
              >
                

                <span>شهادة SSL الآمنة القياسية (DV)</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab2")}>
               
                <span>شهادة SSL للتحقق (OV)</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab3")}>
                
                <span>التحقق الممتد (EV)</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab4")}>
                
                <span>Wildcard</span>
              </li>



            </ul>
          
            <div className="tab_content">
              <div id="tab1" className="tabs_item">

                <DvSSL />

              </div>

              <div id="tab2" className="tabs_item">

                <OvSSL/>

              </div>

              <div id="tab3" className="tabs_item">
                <EvSSL/>
                
              </div>

              <div id="tab4" className="tabs_item">
                <WildcardSSL/>
                
              </div>



            </div>
          </div>
        
      </div>
    </>
  );
};

export default PricingStyleOne;
