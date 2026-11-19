import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
              <a href="mailto:sales@Knoztech.com">
                <i className="bx bx-envelope"></i>
                <h3>بريد الكتروني</h3>
                <p>
                  sales@katechs.com
                </p>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
              <a href="https://wa.me/966549662384" target="blank">
                <i className="bx bx-phone-call"></i>
                <h3>واتساب</h3>
                <p>
                201023992840+
                </p>
                </a>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>التجمع الخامس</h3>
                <p>  بلس مول المستسمرين - مكتب RO1</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
              <a href="/support/">
                <i className="bx bx-support"></i>
                <h3>الدعم الفني</h3>
                <p> دعم فني علي مدار الساعه</p>
            </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
