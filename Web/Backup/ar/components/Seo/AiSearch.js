import React from "react";

// UX PROTOTYPE. This section is the 2026 differentiator — see
// data/seo/structure.md for why it is not optional any more.
const points = [
  "بناء المحتوى بصيغة تسهّل على أنظمة الذكاء الاصطناعي اقتباسه",
  "بيانات منظّمة (Schema) تشرح لمحركات البحث ما تقدّمه بالضبط",
  "إجابات واضحة ومباشرة في بداية كل صفحة، لا مقدمات طويلة",
];

const AiSearch = () => {
  return (
    <section className="ux-section">
      <div className="container">
        <div className="ux-split">
          <div>
            <span className="ux-eyebrow">بحث الذكاء الاصطناعي</span>

            <h2 className="ux-h2">
              الظهور في نتائج الذكاء الاصطناعي، لا في جوجل وحده
            </h2>

            <p className="ux-p">
              جزء متزايد من الباحثين يحصل على إجابته من ملخصات الذكاء الاصطناعي
              دون فتح أي موقع. نعمل على أن يكون موقعك أحد المصادر التي تُقتبس
              في تلك الإجابات.
            </p>

            <ul className="ux-list">
              {points.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="ux-media">
              مساحة صورة — ملخص ذكاء اصطناعي يقتبس الموقع
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSearch;
