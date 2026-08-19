import React from "react";

// UX PROTOTYPE. Field structure follows WebFX's case-study cards: industry →
// challenge → what was done → the metric that moved.
const cases = [1, 2, 3];

const Results = () => {
  return (
    <section className="ux-section">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">نتائج عملاء</h2>
        </div>

        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> دراسات حالة حقيقية — القطاع،
          المشكلة، ما نُفّذ، والرقم الذي تغيّر.
        </div>

        <div className="ux-grid ux-grid-3">
          {cases.map((n) => (
            <div className="ux-card" key={n}>
              <div className="ux-tag-row">
                <span className="ux-tag">القطاع</span>
              </div>

              <h3 className="ux-h3">اسم العميل أو القطاع</h3>
              <p className="ux-p">
                وصف مختصر للوضع قبل الحملة والهدف المطلوب تحقيقه.
              </p>

              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <span className="ux-stat-value">+00%</span>
                <span className="ux-stat-label">النتيجة خلال 00 شهرًا</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
