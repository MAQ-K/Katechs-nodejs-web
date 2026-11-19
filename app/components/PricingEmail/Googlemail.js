import React from "react";
import Link from "next/link";
import EmailGoogleDataFag from "/components/EmailGoogleDataFag/FaqContent";
const GoogleEmail = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
            <img  src="/images/googleicon.webp" width={30}  />
              <h3>بزنس استارتر</h3>
              <p>
                4,199ج.م <sub>/ السنه </sub>
              </p>
            </div>
            <span>
                349ج.م <sub>/ الشهر</sub>
                
            </span>
           
            <ul>
              <li>
                <i className="bx bx-check"></i>
                ضمان تشغيل 99.9%
              </li>
              <li>
                <i className="bx bx-check"></i>
                بريد إلكتروني مخصَّص وآمن 
              </li>
              <li>
                <i className="bx bx-check"></i>
                اجتماعات فيديو تضم 100 مشارِك
              </li>
              <li>
                <i className="bx bx-check"></i>
                 30 غيغابايت مساحة تخزين 
              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم أساسي
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              احجز الان
            </Link>

            <p> لكل مستخدم في الشهر</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
            <img  src="/images/googleicon.webp" width={30}  />
              <h3>بزنس استاندر</h3>
              <p> 8,711ج.م <sub>السنه</sub></p>
            </div>
            <span>
                725ج.م <sub>/ الشهر</sub>
                
            </span>
           
            <ul>
              <li>
                <i className="bx bx-check"></i>
                ضمان تشغيل 99.9%
              </li>
              <li>
                <i className="bx bx-check"></i>
                بريد إلكتروني مخصَّص وآمن 
              </li>
              <li>
                <i className="bx bx-check"></i>
                اجتماعات فيديو تضم 150 مشارِك
              </li>
              <li>
                <i className="bx bx-check"></i>
                2 تيرا بايت مساحة تخزين 
              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم أساسي
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              احجز الان
            </Link>

            <p> لكل مستخدم في الشهر</p>

            <strong className="popular">Popular</strong>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
            <img  src="/images/googleicon.webp" width={30}  />
              <h3>بزنس بلس</h3>
              <p> 12,611ج.م<sub> السنه</sub></p>
            </div>
            <span>
                1,050ج.م <sub>/ الشهر</sub>
                
            </span>
           
            <ul>
              <li>
                <i className="bx bx-check"></i>
                ضمان تشغيل 99.9%
              </li>
              <li>
                <i className="bx bx-check"></i>
                بريد إلكتروني مخصَّص وآمن 
              </li>
              <li>
                <i className="bx bx-check"></i>
                اجتماعات فيديو تضم 500 مشارِك
              </li>
              <li>
                <i className="bx bx-check"></i>
                5 تيرا بايت مساحة تخزين 
              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم أساسي
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              احجز الان
            </Link>

            <p> لكل مستخدم في الشهر</p>


          </div>
        </div>

        <div>
        <EmailGoogleDataFag />
        </div>


      </div>
    </>
  );
};

export default GoogleEmail;
