import React from "react";
import Link from "next/link";

const Yearly = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing pricing-highlight-blue">
            <div className="pricing-top-heading">
              <h3>
                <span className="pricing-title-highlight">
                  <span className="pricing-title-highlight-divider"></span>
                  <span className="pricing-title-highlight-word">باقات</span>
                  <span className="pricing-title-highlight-divider"></span>
                </span>
                <span className="pricing-title-main">استضافة أعمال</span>
              </h3>
              <p>1999ج.م</p>
            </div>
            <span className="price-plain">
            165/شهر
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                عدد 1 موقع إلكتروني
              </li>
              <li>
                <i className="bx bx-check"></i>
                2 جيجا بايتSSD
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك 5 جيجا بايت
              </li>
              <li>
                <i className="bx bx-check"></i>
                10 بريد إلكتروني
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
              <li>
                <i className="bx bx-check"></i>
                تنفيذ خلال 24 ساعة
              </li>
            </ul>

            <Link href="/hosting-order" className="default-btn">
              ابدأ الان
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing pricing-highlight-blue">
            <div className="pricing-top-heading">
              <h3>
                <span className="pricing-title-highlight">
                  <span className="pricing-title-highlight-divider"></span>
                  <span className="pricing-title-highlight-word">باقات</span>
                  <span className="pricing-title-highlight-divider"></span>
                </span>
                <span className="pricing-title-main">استضافة الموزعين</span>
              </h3>
              <p>3,249ج.م/الشهر</p>
            </div>

            <span className="price-plain">
              كن موزع وحقق الربح
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                25 حساب عميل
              </li>
              <li>
                <i className="bx bx-check"></i>
                مساحة 75جيجا بايت
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترافيك غير محدود
              </li>
              <li>
                <i className="bx bx-check"></i>
                سرفر باسم نطاقك
              </li>
              <li>
                <i className="bx bx-check"></i>
                نطاق/1199
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              <li>
                <i className="bx bx-check"></i>
                نظام ادارة فواتير WHMCS
              </li>
            </ul>

            <Link href="/hosting-order" className="default-btn">
              ابدأ الان
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
                  <span className="pricing-title-highlight-word">باقات</span>
                  <span className="pricing-title-highlight-divider"></span>
                </span>
                <span className="pricing-title-main">سرفر VPS خاص</span>
              </h3>
              <p>3,799ج.م /شهر</p>
            </div>
            <span className="price-plain">
            سيرفرك تحت إدارتك
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                2 نواة، 4 جيجا رام
              </li>
              <li>
                <i className="bx bx-check"></i>
                80 جيجابايت مساحة NVMe
              </li>
              <li>
                <i className="bx bx-check"></i>
                إدارة ذاتية، صلاحيات كاملة
              </li>
              <li>
                <i className="bx bx-check"></i>
                SSH وإدارة كاملة للتشغيل والخدمات
              </li>
              <li>
                <i className="bx bx-check"></i>
                نطاق/1199
              </li>
              <li>
                <i className="bx bx-check"></i>
                ترحيل بيانات مجاني
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة WHM كاملة
              </li>
            </ul>

            <Link  href="/hosting-order" className="default-btn">
              ابدأ الان
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yearly;
