import React from "react";
import Link from "next/link";

const Yearly = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3> خطة شخصية  </h3>
              <p>  $200<sub> /السنه</sub></p>
            </div>
            <span>
            $16.5<sub>/الشهر</sub>
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

            <Link href="https://clients.knoztech.com/client/index.php?rp=/store/wordpress-hosting/personal-plan" className="default-btn">
              احجز الان
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  خطة أعمال  </h3>
              <p> $324<sub>/السنه</sub> </p>
            </div>
            
            <span>      

              $27 <sub>/الشهر </sub>
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

            <Link href="https://clients.knoztech.com/client/index.php?rp=/store/wordpress-hosting/business-plan" className="default-btn">
              احجز الان
            </Link>

            <strong className="popular">Popular</strong>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  خطة أعمال برو  </h3>
              <p>  $564 <  sub>/السنه</sub></p>
            </div>
            <span>
              $47<sub>/الشهر</sub>
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

            <Link href="https://clients.knoztech.com/client/index.php?rp=/store/wordpress-hosting/business-pro-plan" className="default-btn">
              ابدا الان
            </Link>
          </div>
        </div>
        
        
        <div className="col-lg-3 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>   خطة التجارة الإلكترونية </h3>
              <p>  $684 <  sub>/السنه</sub></p>
            </div>
            <span>
              $57<sub>/الشهر</sub>
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

            <Link href="https://clients.knoztech.com/client/index.php?rp=/store/wordpress-hosting/e-commerce-plan" className="default-btn">
              ابدا الان
            </Link>
          </div>
        </div>


      </div>
    </>
  );
};

export default Yearly;
