import React from "react";
import Reveal from "../Common/Reveal";

// Visual pass — from brain/ui-library/inspiration/seo page/3rd.png: a small
// settings card beside a taller activity-list card, rather than a bar
// chart. The three report categories become list entries; each keeps a
// neutral "شهريًا" cadence label instead of a fabricated timestamp — real
// per-event data doesn't exist yet (same rule as the Results section flag).
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
              <div className="seo-notif-group">
                <div className="seo-notif-card seo-notif-card-settings">
                  <div className="seo-notif-head">
                    <i className="bx bx-bell"></i>
                    <div>
                      <span className="seo-notif-title">
                        تقرير الأداء الشهري
                      </span>
                      <span className="seo-notif-sub">
                        تصلك الصورة كاملة كل شهر
                      </span>
                    </div>
                  </div>
                  <div className="seo-notif-toggle-row">
                    <span>
                      <i className="bx bx-bell-plus"></i>
                      إشعار فوري بالتغيرات
                    </span>
                    <span className="seo-toggle" aria-hidden="true">
                      <span className="seo-toggle-dot"></span>
                    </span>
                  </div>
                </div>

                <div className="seo-notif-card seo-notif-card-list">
                  {items.map((text) => (
                    <div className="seo-notif-item" key={text}>
                      <span className="seo-notif-dot"></span>
                      <div>
                        <span className="seo-notif-text">{text}</span>
                        <span className="seo-notif-time">شهريًا</span>
                      </div>
                    </div>
                  ))}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
