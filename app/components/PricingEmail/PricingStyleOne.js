import React from "react";
import Emailpro from "./proEmail";
import GoogleEmail from "./Googlemail";
import MicrosoftMail from "./MicrosoftMail";

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
      <div className="pricing-area pb-100 ">
        <div className="container">
          <div className="section-title">
            <span> بريد الكتروني</span>
            <h2>خطط اسعار البريد الالكتروني</h2>
            <p>
             بريد إلكتروني باسم نشاطك التجاري

            </p>
          </div>

          <div className="tab quote-list-tab email_tab">
            {/* Tabs */}
            <ul className="tabs ">
              <li
                className="current"
                onClick={(e) => openTabSection(e, "tab1")}
              >
                <div className="img pt-2">
                  <img  src="/images/email1.png" width={40}  />
                </div>

                <span>بريد إلكتروني احترافي </span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab2")}>
                <div className="img pt-2">
                  <img  src="/images/googleicon.webp" width={40}  />
                </div>
                <span>بريد إلكتروني Google Workspace</span>
              </li>

              <li onClick={(e) => openTabSection(e, "tab3")}>
                <div className="img pt-2">
                  <img  src="/images/microsoft.png" width={40}  />
                </div>
                <span>بريد إلكتروني ميكروسوفت 365</span>
              </li>



            </ul>

            <div className="tab_content">
              <div id="tab1" className="tabs_item">

                <Emailpro />

              </div>

              <div id="tab2" className="tabs_item">

                <GoogleEmail/>

              </div>

              <div id="tab3" className="tabs_item">
                <MicrosoftMail/>
                
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleOne;
