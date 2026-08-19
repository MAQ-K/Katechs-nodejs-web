import React from "react";

// UX PROTOTYPE. Kills the "where did my ad budget actually go" objection —
// every 2026 source lists real-time dashboards and ROI tracking as expected,
// not as a bonus.
const items = [
  "كم أُنفق على كل قناة، وكم عميلًا جاء منها",
  "تكلفة العميل الواحد، ومن أي حملة بالضبط",
  "ما نُفّذ خلال الشهر، وما سنغيّره في الشهر التالي",
];

const Reporting = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-split">
          <div>
            <h2 className="ux-h2">تعرف أين ذهبت ميزانيتك وماذا أعادت</h2>

            <p className="ux-p">
              أكبر شكوى من التسويق الرقمي أن صاحب العمل لا يعرف ما الذي حدث
              بأمواله. نحل ذلك بتقرير واضح ولوحة متابعة.
            </p>

            <ul className="ux-list">
              {items.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="ux-media">
              مساحة صورة — لوحة الأداء (إنفاق، تحويلات، عائد)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
