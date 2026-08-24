import React from "react";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

// Visual pass — from brain/ui-library/inspiration/seo page/1stsec.png: two
// overlapping, gently tilted cards instead of one flat panel. The SERP
// ranking mock stays the large "canvas" card; the growth-rate badge that
// used to float on top of it becomes its own card, restaged to overlap the
// bottom corner the way the reference's second photo overlaps the first.
const proof = [
  "تقارير أداء شهرية",
  "عمل حقيقي على الموقع",
  "متابعة بعد بدء النتائج",
];

const Hero = () => {
  return (
    <section className="seo-section seo-first">
      <div className="container">
        <div className="seo-split">
          <div>
            <div className="seo-hero-visual">
              <Reveal>
                <div className="seo-hero-visual-main">
                  <div className="seo-serp-bar">
                    <i className="bx bx-search"></i>
                    خدمات تحسين محركات البحث
                  </div>

                  <div className="seo-serp-row is-top">
                    <div className="seo-serp-lines">
                      <div className="seo-serp-line"></div>
                      <div className="seo-serp-line short"></div>
                    </div>
                    <span className="seo-serp-rank">
                      <i className="bx bx-up-arrow-alt"></i>1
                    </span>
                  </div>
                  <div className="seo-serp-row">
                    <div className="seo-serp-lines">
                      <div className="seo-serp-line"></div>
                      <div className="seo-serp-line short"></div>
                    </div>
                    <span className="seo-serp-rank">2</span>
                  </div>
                  <div className="seo-serp-row">
                    <div className="seo-serp-lines">
                      <div className="seo-serp-line"></div>
                      <div className="seo-serp-line short"></div>
                    </div>
                    <span className="seo-serp-rank">3</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="seo-hero-visual-accent">
                  <span className="seo-hero-visual-icon">
                    <i className="bx bx-trending-up"></i>
                  </span>
                  <span className="seo-hero-visual-value">240%</span>
                  <span className="seo-hero-visual-label">
                    نمو الزيارات العضوية
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          <div>
            <Reveal delay={0.05}>
              <span className="seo-eyebrow">
                <span className="dot"></span>
                تحسين محركات البحث
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="seo-h1">اجعل عملاءك يجدونك أول ما يبحثون</h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="seo-p">
                نعمل على موقعك من الداخل — بنيته وسرعته ومحتواه وروابطه —
                حتى يظهر أمام من يبحث عن خدماتك فعلًا، ونطلعك على ما نفعله
                شهرًا بشهر.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="seo-proof-row">
                {proof.map((text) => (
                  <span key={text}>
                    <i className="bx bx-check"></i>
                    {text}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="seo-actions">
                <Magnetic>
                  <Link href="#audit" className="seo-btn">
                    احصل على تحليل مجاني
                    <i className="bx bx-left-arrow-alt"></i>
                  </Link>
                </Magnetic>
                <Link href="#pricing" className="seo-btn seo-btn-ghost">
                  شاهد الباقات
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
