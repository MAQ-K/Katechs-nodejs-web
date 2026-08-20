import React from "react";
import Reveal from "../Common/Reveal";

// Visual pass — split layout with a performance-dashboard mock, same
// pattern as components/Seo/Reporting.js. Copy unchanged.
const items = [
  "كم أُنفق على كل قناة، وكم عميلًا جاء منها",
  "تكلفة العميل الواحد، ومن أي حملة بالضبط",
  "ما نُفّذ خلال الشهر، وما سنغيّره في الشهر التالي",
];

const Reporting = () => {
  return (
    <section className="dm-section dm-alt">
      <div className="container">
        <div className="dm-split">
          <div>
            <Reveal delay={0.05}>
              <h2 className="dm-h2">
                تعرف أين ذهبت ميزانيتك وماذا أعادت
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="dm-p">
                أكبر شكوى من التسويق الرقمي أن صاحب العمل لا يعرف ما الذي
                حدث بأمواله. نحل ذلك بتقرير واضح ولوحة متابعة.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="dm-list" style={{ marginTop: 20 }}>
                {items.map((text) => (
                  <li key={text}>
                    <i className="bx bx-check"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="dm-media-panel">
                <div className="dm-report-card">
                  <span className="dm-skel-badge">
                    <i className="bx bx-pie-chart-alt-2"></i>
                    لوحة الأداء
                  </span>
                  <div className="dm-report-bars">
                    <div className="dm-report-bar" style={{ height: "40%", animationDelay: "0s" }}></div>
                    <div className="dm-report-bar" style={{ height: "55%", animationDelay: ".05s" }}></div>
                    <div className="dm-report-bar" style={{ height: "38%", animationDelay: ".1s" }}></div>
                    <div className="dm-report-bar" style={{ height: "70%", animationDelay: ".15s" }}></div>
                    <div className="dm-report-bar" style={{ height: "50%", animationDelay: ".2s" }}></div>
                    <div className="dm-report-bar" style={{ height: "85%", animationDelay: ".25s" }}></div>
                  </div>
                  <div className="dm-report-foot">
                    <span>إنفاق</span>
                    <span>تحويلات</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
