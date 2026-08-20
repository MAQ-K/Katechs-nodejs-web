import React from "react";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

// Visual pass — from "app page inspiration/1st section.png" (hero split with
// a framed image card + eyebrow tag + two CTAs). No real trainee/course
// photography exists yet, so the frame carries an illustrative gradient
// mock with a caption bar instead of a placeholder photo — same convention
// already used on the SEO/Digital Marketing pages. Copy unchanged.
const bullets = [
  "تدريب عملي على مشاريع حقيقية، لا محاضرات نظرية",
  "مدربون يعملون في المجال فعليًا",
  "شهادة إتمام عند إنهاء المشروع النهائي",
];

const Hero = () => {
  return (
    <section className="tr-section tr-first">
      <div className="container">
        <div className="tr-split">
          <div>
            <Reveal delay={0.05}>
              <span className="tr-eyebrow">
                <span className="dot"></span>
                التدريب
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="tr-h1">تعلّم مهارة تشتغل بها فعلًا</h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="tr-p">
                دورات عملية في البرمجة والتسويق والتصميم، تبدأ من الأساسيات
                وتنتهي بمشروع تضعه في معرض أعمالك.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="tr-proof-row">
                {bullets.map((text) => (
                  <span key={text}>
                    <i className="bx bx-check"></i>
                    {text}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="tr-actions">
                <Magnetic>
                  <Link href="#courses" className="tr-btn">
                    تصفح الدورات
                    <i className="bx bx-left-arrow-alt"></i>
                  </Link>
                </Magnetic>
                <Link href="#schedule" className="tr-btn tr-btn-ghost">
                  المواعيد القادمة
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="tr-frame-card">
                <div className="tr-frame-visual">
                  <span className="tr-frame-num">01</span>
                </div>
                <div className="tr-frame-caption">
                  <i className="bx bx-code-curly"></i>
                  مشروع تخرج حقيقي في نهاية كل دورة
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
