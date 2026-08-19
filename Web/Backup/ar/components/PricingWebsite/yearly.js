import React from "react";
import Link from "next/link";

const prices = {
  business: {
    EG: { pre: "9,998", post: "4,999" },
    SA: { pre: "1,998", post: "999" },
  },
  wordpress: {
    EG: { pre: "13,998", post: "6,999" },
    SA: { pre: "2,499", post: "1,499" },
  },
};

const Yearly = ({ country = "EG" }) => {
  const currency = country === "SA" ? "ر.س" : "ج.م";
  const business = prices.business[country];
  const wordpress = prices.wordpress[country];
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
                <span className="pricing-title-main">ويب أعمال</span>
              </h3>
              <p> خصم %50 <s> {business.pre}{currency} </s>  </p>
            </div>
            <span className="price-plain">
            تبدأ بـ {business.post}{currency}
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                حجز دومين باسم شركتك
              </li>
              <li>
                <i className="bx bx-check"></i>
                واجهة احترافية ديناميكية
              </li>
              <li>
                <i className="bx bx-check"></i>
                تصميم 3 صفحات فرعية
              </li>
              <li>
                <i className="bx bx-check"></i>
                استضافة 2 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                10 بريد إلكتروني باسم شركتك
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم متعددة اللغات
              </li>
              <li>
                <i className="bx bx-check"></i>
                مدة تنفيذ 3 أيام عمل
              </li>
            </ul>

            <Link href="/website-order" className="default-btn">
              المزيد
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
                <span className="pricing-title-main">ويب وورد بريس</span>
              </h3>
              <p> خصم %40 <s> {wordpress.pre}{currency} </s>  </p>
            </div>
            <span className="price-plain">
            تبدأ بـ {wordpress.post}{currency}
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                حجز دومين باسم شركتك
              </li>
              <li>
                <i className="bx bx-check"></i>
                موقع احترافي على ووردبريس
              </li>
              <li>
                <i className="bx bx-check"></i>
                تصميم حتى 6 صفحات فرعية
              </li>
              <li>
                <i className="bx bx-check"></i>
                استضافة 5 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                20 بريد إلكتروني باسم شركتك
              </li>
              <li>
                <i className="bx bx-check"></i>
                إدارة المحتوى بنفسك
              </li>
              <li>
                <i className="bx bx-check"></i>
                مدة تنفيذ 10 أيام عمل
              </li>
            </ul>

            <Link href="/website-order" className="default-btn">
              المزيد
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing pricing-highlight-blue">
            <div className="pricing-top-heading">
              <h3>
                <span className="pricing-title-highlight">
                  <span className="pricing-title-highlight-divider"></span>
                  <span className="pricing-title-highlight-word">مخصص</span>
                  <span className="pricing-title-highlight-divider"></span>
                </span>
                <span className="pricing-title-main">حسب طلبك</span>
              </h3>
              <p>بروبوزال مفصل للمشروع</p>
            </div>
            <span className="price-plain">
            عرض سعر
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                تصميم مخصصة بالكامل
              </li>
              <li>
                <i className="bx bx-check"></i>
                صفحات وميزات غير محدودة
              </li>
              <li>
                <i className="bx bx-check"></i>
                برمجة خصائص مخصصة
              </li>
              <li>
                <i className="bx bx-check"></i>
                استضافة وبريد إلكتروني
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم متكاملة وسهلة
              </li>
              <li>
                <i className="bx bx-check"></i>
                العمل بنظام Agile
              </li>
              <li>
                <i className="bx bx-check"></i>
                مدة تنفيذ حسب حجم المشروع
              </li>
            </ul>

            <Link href="/website-order" className="default-btn">
              أطلب الان
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Yearly;
