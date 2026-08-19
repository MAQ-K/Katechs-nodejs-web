import React from "react";

// UX PROTOTYPE. Values are intentionally left as "00" — see the flag below.
const stats = [
  "مواقع نعمل عليها",
  "كلمات في الصفحة الأولى",
  "متوسط نمو الزيارات",
  "سنوات خبرة",
];

const Results = () => {
  return (
    <section className="ux-section">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">نتائج نقيسها، لا وعود</h2>
        </div>

        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> أرقام حقيقية لهذا القسم. لن تُكتب
          أي قيمة هنا دون بيانات فعلية.
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

export default Results;
