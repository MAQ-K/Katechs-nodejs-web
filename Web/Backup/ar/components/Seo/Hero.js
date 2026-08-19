import React from "react";
import Link from "next/link";

// UX PROTOTYPE — real layout/hierarchy, deliberately unstyled. See
// styles/ux-prototype.css.
const bullets = [
  "تقارير أداء شهرية توضح ما تغيّر بالضبط",
  "عمل على الموقع نفسه، لا وعود بترتيب سريع",
  "فريق يتابع معك بعد بدء النتائج",
];

const Hero = () => {
  return (
    <section className="ux-section ux-first">
      <div className="container">
        <div className="ux-split">
          <div>
            <span className="ux-eyebrow">تحسين محركات البحث</span>

            <h1 className="ux-h1">
              اجعل عملاءك يجدونك أول ما يبحثون
            </h1>

            <p className="ux-lead">
              نعمل على موقعك من الداخل — بنيته وسرعته ومحتواه وروابطه — حتى
              يظهر أمام من يبحث عن خدماتك فعلًا، ونطلعك على ما نفعله شهرًا بشهر.
            </p>

            <ul className="ux-list">
              {bullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>

            <div className="ux-actions">
              <Link href="#audit" className="ux-btn">
                احصل على تحليل مجاني
              </Link>
              <Link href="#pricing" className="ux-btn ux-btn-secondary">
                شاهد الباقات
              </Link>
            </div>
          </div>

          <div>
            <div className="ux-media ux-media-tall">
              مساحة صورة — نتائج بحث وتحسّن الترتيب
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
