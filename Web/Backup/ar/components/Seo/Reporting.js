import React from "react";

// UX PROTOTYPE. Exists to kill the "SEO is a black box" objection — the main
// reason SEO deals stall. Grounded in the "تقارير أداء شهرية" pillar already
// stated in components/Common/SeoShowcase.js.
const items = [
  "ترتيب كلماتك المستهدفة، وكيف تحرّك خلال الشهر",
  "عدد الزيارات القادمة من البحث، ومن أي صفحات",
  "ما نُفّذ فعليًا خلال الشهر، وما هي خطة الشهر التالي",
];

const Reporting = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-split">
          <div>
            <div className="ux-media">
              مساحة صورة — لوحة التقارير (ترتيب الكلمات والزيارات)
            </div>
          </div>

          <div>
            <h2 className="ux-h2">تعرف بالضبط ما الذي يحدث كل شهر</h2>

            <p className="ux-p">
              لا تحتاج أن تثق بنا على العمياء. كل شهر تصلك صورة واضحة عمّا
              نُفّذ وما نتج عنه.
            </p>

            <ul className="ux-list">
              {items.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
