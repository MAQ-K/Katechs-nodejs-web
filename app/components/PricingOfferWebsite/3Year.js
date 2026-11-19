import React from "react";
import Link from "next/link";

const ThreeYear = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3> خطة شخصية  </h3>
              <p>  $540<sub> /3سنوات</sub></p>
            </div>
            <span>
            $15<sub>/الشهر</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                 مساحة SSD غير محدودة 
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك غير محدود 
              </li>
              <li>
                <i className="bx bx-check"></i>
                دومين غير محدود  
              </li>
              <li>
                <i className="bx bx-check"></i>
                الذاكرة العشوائية 2 جيجا بايت  
              </li>
              <li>
                <i className="bx bx-check"></i>
                المعالج 1
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجانا
              </li>
              <li>
                <i className="bx bx-check"></i>
                تحسين CDN مجانا
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              احجز الان
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  خطة أعمال  </h3>
              <p> $900<sub>/ 3سنوات </sub> </p>
            </div>
            
            <span>      

              $25 <sub>/الشهر </sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                مساحة SSD غير محدودة
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                دومين غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                الذاكرة العشوائية 4 جيجا بايت
              </li>
              <li>
                <i className="bx bx-check"></i>
                عدد المعالج 2 
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                تحسين CDN مجانا
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              احجز الان
            </Link>

            <strong className="popular">Popular</strong>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  خطة أعمال برو  </h3>
              <p>  $1476 <  sub>/3سنوات</sub></p>
            </div>
            <span>
              $41<sub>/الشهر</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                مساحة SSD غير محدودة 
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                دومين غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                الذاكرة العشوائية 6 جيجا بايت 
              </li>
              <li>
                <i className="bx bx-check"></i>
                عدد المعاج 3 
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                تحسين CDN مجانا
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              ابدا الان
            </Link>
          </div>
        </div>
        
        
        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>   خطة التجارة الإلكترونية </h3>
              <p>  $1872 <  sub>/3سنوات</sub></p>
            </div>
            <span>
              $52<sub>/الشهر</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                مساحة SSD غير محدودة 
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                دومين غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                الذاكرة العشوائية 8 جيجا بايت 
              </li>
              <li>
                <i className="bx bx-check"></i>
                عدد المعاج 3 
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                تحسين CDN مجانا
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              ابدا الان
            </Link>
          </div>
        </div>
        
      </div>

    </>
  );
};

export default ThreeYear;
