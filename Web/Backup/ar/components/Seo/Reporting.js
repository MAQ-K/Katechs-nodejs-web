import React from "react";
import Reveal from "../Common/Reveal";

const items = [
  "ترتيب كلماتك المستهدفة، وكيف تحرّك خلال الشهر",
  "عدد الزيارات القادمة من البحث، ومن أي صفحات",
  "ما نُفّذ فعليًا خلال الشهر، وما هي خطة الشهر التالي",
];

const Reporting = () => {
  return (
    <section className="seo-section">
      <div className="container">
        <div className="seo-split">
          <div>
            <Reveal>
              <div className="seo-media-panel">
                <div className="seo-report-card">
                  <span className="seo-skel-badge">
                    <i className="bx bx-line-chart"></i>
                    تقرير الأداء الشهري
                  </span>
                  <div className="seo-report-bars">
                    <div className="seo-report-bar" style={{ height: "35%", animationDelay: "0s" }}></div>
                    <div className="seo-report-bar" style={{ height: "48%", animationDelay: ".05s" }}></div>
                    <div className="seo-report-bar" style={{ height: "42%", animationDelay: ".1s" }}></div>
                    <div className="seo-report-bar" style={{ height: "65%", animationDelay: ".15s" }}></div>
                    <div className="seo-report-bar" style={{ height: "58%", animationDelay: ".2s" }}></div>
                    <div className="seo-report-bar" style={{ height: "80%", animationDelay: ".25s" }}></div>
                  </div>
                  <div className="seo-report-foot">
                    <span>يناير</span>
                    <span>يونيو</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.05}>
              <h2 className="seo-h2">تعرف بالضبط ما الذي يحدث كل شهر</h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="seo-p">
                لا تحتاج أن تثق بنا على العمياء. كل شهر تصلك صورة واضحة عمّا
                نُفّذ وما نتج عنه.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="seo-list" style={{ marginTop: 20 }}>
                {items.map((text) => (
                  <li key={text}>
                    <i className="bx bx-check"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
