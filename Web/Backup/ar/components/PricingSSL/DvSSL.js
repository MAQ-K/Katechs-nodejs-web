import React from "react";
import Link from "next/link";
import Ssl_DV_data_faq from "/components/Ssl_DV_data_faq/FaqContent";
import SslFeature from "/components/Services/sslFeature";
const DvSSL = () => {
  return (
    <>
      <div className="row justify-content-center">

        <div>
          <Ssl_DV_data_faq />
          
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
                <h4>RapidSSL</h4>
            </div>
            <span>
                $17.95 
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                تشفير 256 بت  
              </li>
              <li>
                <i className="bx bx-check"></i>
                 وقت الإصدار  &larr; دقائق 
              </li>
              <li>
                <i className="bx bx-check"></i>
                المواقع الشخصيه 
              </li>
              <li>
                <i className="bx bx-check"></i>
                قيمة الضمان &larr; USD $10,000
              </li>
              <li>
                <i className="bx bx-check"></i>
                ختم موقع الثقة
              </li>
              <li>
                <i className="bx bx-check"></i>
                إعادة إصدار مجانية
              </li>
              <li>
                <i className="bx bx-check"></i>
                 دعم المتصفح &larr; %99.9
              </li>
            </ul>

            <Link href="https://clients.katechs.com/login" className="default-btn">
              احجز الان
            </Link>
          </div>
        </div>



        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h4>
              GeoTrust QuickSSL Premium
              </h4>
            </div>
            <span>
              $79
            </span>

         
            <ul>
              <li>
                <i className="bx bx-check"></i>
                تشفير 256 بت  
              </li>
              <li>
                <i className="bx bx-check"></i>
                 وقت الإصدار  &larr; دقائق 
              </li>
              <li>
                <i className="bx bx-check"></i>
                 المشاريع الصغيره 
              </li>
              <li>
                <i className="bx bx-check"></i>
                قيمة الضمان &larr; USD $500,000
              </li>
              <li>
                <i className="bx bx-check"></i>
                ختم موقع الثقة
              </li>
              <li>
                <i className="bx bx-check"></i>
                إعادة إصدار مجانية
              </li>
              <li>
                <i className="bx bx-check"></i>
                 دعم المتصفح &larr; %99.9
              </li>
            </ul>

            <Link href="https://clients.katechs.com/login" className="default-btn">
              احجز الان
            </Link>

          </div>
        </div>

        <div>
        <SslFeature />
        </div>
       

      </div>
    </>
  );
};

export default DvSSL;
