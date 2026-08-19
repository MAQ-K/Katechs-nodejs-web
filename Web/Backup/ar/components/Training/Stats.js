import React from "react";

// UX PROTOTYPE.
const stats = ["متدرب", "دورة", "مدرب", "نسبة إكمال"];

const Stats = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> أرقام حقيقية. لن تُكتب أي قيمة هنا
          دون بيانات فعلية.
        </div>

        <div className="ux-grid ux-grid-4">
          {stats.map((label) => (
            <div className="ux-stat" key={label}>
              <span className="ux-stat-value">00</span>
              <span className="ux-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
