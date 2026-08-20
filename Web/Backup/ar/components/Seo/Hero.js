import React from "react";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

// Visual pass — from "seo page inspiration/1st section.png". Content is the
// same copy the UX prototype already proved out; the reference had no
// bullets, so the three proof points are compacted into a pill row instead
// of dropped.
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
            <Reveal>
              <div className="seo-media-panel">
                <div className="seo-serp-card">
                  <div className="seo-serp-badge">
                    <i className="bx bx-trending-up"></i>
                    نمو 240%
                  </div>

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
              </div>
            </Reveal>
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
