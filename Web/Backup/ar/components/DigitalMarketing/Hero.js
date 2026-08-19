import React from "react";
import Link from "next/link";

// UX PROTOTYPE — real layout/hierarchy, deliberately unstyled. See
// styles/ux-prototype.css.
const bullets = [
  "خطة مبنية على دراسة سوقك ومنافسيك، لا قوالب جاهزة",
  "تنفيذ على القنوات التي يوجد فيها عملاؤك فعلًا",
  "تقارير توضح أين ذهبت الميزانية وماذا أعادت",
];

const Hero = () => {
  return (
    <section className="ux-section ux-first">
      <div className="container">
        <div className="ux-split">
          <div>
            <span className="ux-eyebrow">التسويق الإلكتروني</span>

            <h1 className="ux-h1">
              حملات تسويق تتحول إلى مبيعات، لا مجرد مشاهدات
            </h1>

            <p className="ux-lead">
              ندرس سوقك وجمهورك أولًا، ثم نختار القنوات المناسبة وننفذ الحملات
              ونقيس النتائج — بحيث تعرف في كل شهر ما الذي أنفقته وما الذي عاد
              عليك.
            </p>

            <ul className="ux-list">
              {bullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>

            <div className="ux-actions">
              <Link href="/digital-market-order" className="ux-btn">
                اطلب عرض سعر
              </Link>
              <Link href="#channels" className="ux-btn ux-btn-secondary">
                شاهد الخدمات
              </Link>
            </div>

            <p className="ux-note">
              سؤال مفتوح: يبقى الزر الأساسي على /digital-market-order أم ينتقل
              إلى /contactWeb؟
            </p>
          </div>

          <div>
            <div className="ux-media ux-media-tall">
              مساحة صورة — حملات ونمو
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
