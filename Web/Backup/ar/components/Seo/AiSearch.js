import React from "react";
import Reveal from "../Common/Reveal";

// Visual pass — from "seo page inspiration/4th sec#.png" (split badge +
// heading layout). Copy unchanged — this section is the 2026 differentiator,
// see data/seo/structure.md.
const points = [
  "بناء المحتوى بصيغة تسهّل على أنظمة الذكاء الاصطناعي اقتباسه",
  "بيانات منظّمة (Schema) تشرح لمحركات البحث ما تقدّمه بالضبط",
  "إجابات واضحة ومباشرة في بداية كل صفحة، لا مقدمات طويلة",
];

const AiSearch = () => {
  return (
    <section className="seo-section">
      <div className="container">
        <div className="seo-split">
          <div>
            <Reveal>
              <div className="seo-media-panel">
                <div className="seo-skel-card">
                  <span className="seo-skel-badge">
                    <i className="bx bx-brain"></i>
                    ملخص الذكاء الاصطناعي
                  </span>
                  <div className="seo-skel-line w80"></div>
                  <div className="seo-skel-line w60"></div>
                  <div className="seo-skel-line w80"></div>
                  <div className="seo-skel-line w40"></div>
                  <div className="seo-skel-cite">
                    <i className="bx bx-link-external"></i>
                    مصدر: katechs.com
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.05}>
              <span className="seo-eyebrow">
                <span className="dot"></span>
                بحث الذكاء الاصطناعي
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="seo-h2">
                الظهور في نتائج الذكاء الاصطناعي، لا في جوجل وحده
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="seo-p">
                جزء متزايد من الباحثين يحصل على إجابته من ملخصات الذكاء
                الاصطناعي دون فتح أي موقع. نعمل على أن يكون موقعك أحد
                المصادر التي تُقتبس في تلك الإجابات.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="seo-list" style={{ marginTop: 20 }}>
                {points.map((text) => (
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

export default AiSearch;
