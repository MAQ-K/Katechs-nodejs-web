import React from "react";
import Link from "next/link";

const ThreeYear = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing pricing-highlight-blue">
            <div className="pricing-top-heading">
              <h3>
                <span className="pricing-title-highlight">
                  <span className="pricing-title-highlight-divider"></span>
                  <span className="pricing-title-highlight-word">استضافة</span>
                  <span className="pricing-title-highlight-divider"></span>
                </span>
                <span className="pricing-title-main">فضية</span>
              </h3>
              <p>5152ج.م <sub>/ 3 سنوات </sub>
              </p>
            </div>
            <span className="price-plain">143ج.م <sub> /الشهر</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                عدد 1 موقع إلكتروني
              </li>
              <li>
                <i className="bx bx-check"></i>
                مساحة 5 جيجا بايت إٍس إس دي
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك 5 جيجا بايت
              </li>
              <li>
                <i className="bx bx-check"></i>
                عدد بريد إلكتروني غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                نطاق مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم متعددة اللغات
              </li>
            </ul>

            <Link href="/hosting-order" className="default-btn">
              احجز الان
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing pricing-highlight-blue">
            <div className="pricing-top-heading">
              <h3>
                <span className="pricing-title-highlight">
                  <span className="pricing-title-highlight-divider"></span>
                  <span className="pricing-title-highlight-word">استضافة</span>
                  <span className="pricing-title-highlight-divider"></span>
                </span>
                <span className="pricing-title-main">ذهبية</span>
              </h3>
              <p> 8716ج.م <sub> / 3 سنوات</sub></p>
            </div>
            <span className="price-plain">243ج.م <sub>/ الشهر </sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                عدد 3 موقع إلكتروني
              </li>
              <li>
                <i className="bx bx-check"></i>
                مساحة 10جيجا بايت إٍس إس دي
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك 10 جيجا بايت
              </li>
              <li>
                <i className="bx bx-check"></i>
                عدد بريد إلكتروني غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                نطاق مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم متعددة اللغات
              </li>
            </ul>

            <Link href="/hosting-order" className="default-btn">
              احجز الان
            </Link>

            <strong className="popular">الاكثر طلبا</strong>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing pricing-highlight-blue">
            <div className="pricing-top-heading">
              <h3>
                <span className="pricing-title-highlight">
                  <span className="pricing-title-highlight-divider"></span>
                  <span className="pricing-title-highlight-word">استضافة</span>
                  <span className="pricing-title-highlight-divider"></span>
                </span>
                <span className="pricing-title-main">ماسية</span>
              </h3>
              <p>15520ج.م <sub>/ 3 سنوات </sub></p>
            </div>
            <span className="price-plain">432ج.م <sub>/ الشهر</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                مواقع ويب غير محدودة
              </li>
              <li>
                <i className="bx bx-check"></i>
                مساحة إس إس دي غير محدودة
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك غير محدودة
              </li>
              <li>
                <i className="bx bx-check"></i>
                عدد بريد إلكتروني غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                نطاق مجاني
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم متعددة اللغات
              </li>
            </ul>

            <Link href="/hosting-order" className="default-btn">
              ابدا الان
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeYear;
