import React from "react";
import Link from "next/link";

// UX PROTOTYPE — real layout/hierarchy, deliberately unstyled.
// NOTE: this is the only page on the site addressed to individuals rather than
// business owners, so the tone is lighter than the service pages.
const bullets = [
  "تدريب عملي على مشاريع حقيقية، لا محاضرات نظرية",
  "مدربون يعملون في المجال فعليًا",
  "شهادة إتمام عند إنهاء المشروع النهائي",
];

const Hero = () => {
  return (
    <section className="ux-section ux-first">
      <div className="container">
        <div className="ux-split">
          <div>
            <span className="ux-eyebrow">التدريب</span>

            <h1 className="ux-h1">تعلّم مهارة تشتغل بها فعلًا</h1>

            <p className="ux-lead">
              دورات عملية في البرمجة والتسويق والتصميم، تبدأ من الأساسيات وتنتهي
              بمشروع تضعه في معرض أعمالك.
            </p>

            <ul className="ux-list">
              {bullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>

            <div className="ux-actions">
              <Link href="#courses" className="ux-btn">
                تصفح الدورات
              </Link>
              <Link href="#schedule" className="ux-btn ux-btn-secondary">
                المواعيد القادمة
              </Link>
            </div>
          </div>

          <div>
            <div className="ux-media ux-media-tall">
              مساحة صورة — متدربون أو شاشة دورة
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
