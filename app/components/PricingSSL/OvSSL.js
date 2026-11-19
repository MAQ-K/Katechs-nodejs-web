import React from "react";
import Link from "next/link";
import Ssl_OV_data_faq from "/components/Ssl_OV_data_faq/FaqContent";
import SslFeature from "/components/Services/sslFeature";
const OvSSL = () => {
  return (
    <>
    <div className="row justify-content-center">

      <div>
        <Ssl_OV_data_faq />
        
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="single-pricing">
          <div className="pricing-top-heading">
              <h4>Geotrust True BusinessID</h4>
          </div>
          <span>
            $169.00
          </span>

          <ul>
            <li>
              <i className="bx bx-check"></i>
              تشفير 256 بت  
            </li>
            <li>
              <i className="bx bx-check"></i>
               وقت الإصدار  &larr; 1-3 أيام 
            </li>
            <li>
              <i className="bx bx-check"></i>
              الأعمال
            </li>
            <li>
              <i className="bx bx-check"></i>
              قيمة الضمان &larr; USD $1,250,000
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



      <div className="col-lg-3 col-md-6">
        <div className="single-pricing">
          <div className="pricing-top-heading">
            <h4>           
            DigiCert Secure Site
            </h4>
          </div>
          <span>
            $448
          </span>

       
          <ul>
            <li>
              <i className="bx bx-check"></i>
              تشفير 256 بت  
            </li>
            <li>
              <i className="bx bx-check"></i>
               وقت الإصدار  &larr; 1-3 أيام 
            </li>
            <li>
              <i className="bx bx-check"></i>
               الأعمال
            </li>
            <li>
              <i className="bx bx-check"></i>
              قيمة الضمان &larr; USD $1,500,000
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
      <div className="col-lg-3 col-md-6">
        <div className="single-pricing">
          <div className="pricing-top-heading">
            <h4>
            DigiCert Secure Site Pro  
            </h4>
          </div>
          <span>
            $1118
          </span>

       
          <ul>
            <li>
              <i className="bx bx-check"></i>
              تشفير 256 بت  
            </li>
            <li>
              <i className="bx bx-check"></i>
               وقت الإصدار  &larr; 1-3 أيام 
            </li>
            <li>
              <i className="bx bx-check"></i>
                الأعمال + التجاره الالكترونيه
            </li>
            <li>
              <i className="bx bx-check"></i>
              قيمة الضمان &larr; USD $1,500,000
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

export default OvSSL;
