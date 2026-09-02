import React from "react";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

// Visual pass — from "seo page inspiration/1st section.png" (split hero with
// a stat/badge card), following the same treatment already shipped on
// components/Seo/Hero.js. Copy unchanged from the UX prototype.
const proof = [
  "خطة مبنية على دراسة سوقك ومنافسيك",
  "تنفيذ على القنوات التي فيها عملاؤك",
  "تقارير توضح أين ذهبت الميزانية",
];

const Hero = () => {
  return (
    <section className="dm-section dm-first">
      <div className="container">
        <div className="dm-split">
          {/* Text first, media second (user request, 2026-09-02). Under RTL
              the first grid cell is the RIGHT one, so this puts the headline on
              the right and the campaign card on the left. .dm-split is a
              symmetric 1fr 1fr, so nothing else had to change.
              It also improves the stacked layout: below 991px the grid collapses
              to one column and the headline now leads, where the chart card used
              to sit above it. */}
          <div>
            <Reveal delay={0.05}>
              <span className="dm-eyebrow">
                <span className="dot"></span>
                التسويق الإلكتروني
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="dm-h1">
                حملات تسويق تتحول إلى مبيعات، لا مجرد مشاهدات
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="dm-p">
                ندرس سوقك وجمهورك أولًا، ثم نختار القنوات المناسبة وننفذ
                الحملات ونقيس النتائج — بحيث تعرف في كل شهر ما الذي أنفقته
                وما الذي عاد عليك.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="dm-proof-row">
                {proof.map((text) => (
                  <span key={text}>
                    <i className="bx bx-check"></i>
                    {text}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="dm-actions">
                <Magnetic>
                  <Link href="/digital-market-order" className="dm-btn">
                    اطلب عرض سعر
                    <i className="bx bx-left-arrow-alt"></i>
                  </Link>
                </Magnetic>
                <Link href="#channels" className="dm-btn dm-btn-ghost">
                  شاهد الخدمات
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="dm-note">
                سؤال مفتوح: يبقى الزر الأساسي على /digital-market-order أم
                ينتقل إلى /contactWeb؟
              </p>
            </Reveal>
          </div>

          <div>
            {/* Reveals last now that it is the second half — the headline should
                land before the chart, not after it. */}
            <Reveal delay={0.15}>
              <div className="dm-media-panel">
                <div className="dm-campaign-card">
                  <div className="dm-campaign-badge">
                    <i className="bx bx-trending-up"></i>
                    عائد 3.2x
                  </div>

                  <div className="dm-campaign-bar">
                    <i className="bx bx-bar-chart-alt-2"></i>
                    أداء الحملات هذا الشهر
                  </div>

                  <div className="dm-campaign-row">
                    <span className="dm-campaign-label">
                      <i className="bx bxl-google"></i>
                      إعلانات البحث
                    </span>
                    <span className="dm-campaign-track">
                      <span className="dm-campaign-fill" style={{ width: "82%" }}></span>
                    </span>
                  </div>
                  <div className="dm-campaign-row">
                    <span className="dm-campaign-label">
                      <i className="bx bxl-facebook-circle"></i>
                      سوشيال ميديا
                    </span>
                    <span className="dm-campaign-track">
                      <span className="dm-campaign-fill" style={{ width: "64%" }}></span>
                    </span>
                  </div>
                  <div className="dm-campaign-row">
                    <span className="dm-campaign-label">
                      <i className="bx bx-envelope"></i>
                      البريد الإلكتروني
                    </span>
                    <span className="dm-campaign-track">
                      <span className="dm-campaign-fill" style={{ width: "45%" }}></span>
                    </span>
                  </div>
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
