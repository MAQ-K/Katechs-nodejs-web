import React, { useState, useEffect } from "react";
import Image from "next/image";

import seoImg from "../../public/images/seo.png";

const features = [
  { icon: "bx-search-alt-2", label: "تحليل الكلمات المفتاحية" },
  { icon: "bx-cog", label: "تحسين السيو الفني" },
  { icon: "bx-link", label: "بناء الروابط الخلفية" },
  { icon: "bx-edit-alt", label: "تحسين محتوى الصفحات" },
  { icon: "bx-line-chart", label: "تقارير أداء شهرية" },
];

// `fullWidth` and `talkOnRight` — both optional, both default to the ORIGINAL
// behaviour, so pages/index.js (the old homepage, which also renders this
// component with no props) is unaffected. /hp-new passes both true.
//
// "this section [تصدّر نتائج البحث] IS the marketing section — make it full
// width, talk on right and that other element on left" (user, 2026-09-08).
// The two are separate switches because they are separate CSS facts:
//   fullWidth   — the showcase card breaks out of the Bootstrap `.container`
//                 that has always capped it, so the visual (image + panel)
//                 spans the viewport edge to edge. The heading stays inside a
//                 container — an edge-to-edge two-line title reads worse, not
//                 more "full width".
//   talkOnRight — `.seo-showcase-panel` has always used
//                 `justify-content: flex-end`, which in this RTL page puts the
//                 talk panel on the LEFT and leaves the image most visible on
//                 the right. `.seo-showcase-talk-right` (new, additive-only —
//                 see homepage-sections.css) overrides that to flex-start,
//                 flipping it: talk right, image left.
const SeoShowcase = ({ fullWidth = false, talkOnRight = false } = {}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const isGreen = progress >= 67;
  const barColor = progress < 34 ? "#ff5f56" : isGreen ? "#27c93f" : "#ffbd2e";

  const card = (
    <div
      className={
        "seo-showcase-card" + (talkOnRight ? " seo-showcase-talk-right" : "")
      }
    >
      <Image
        src={seoImg}
        alt="خدمة تحسين محركات البحث والسيو - KaTechs"
        fill
        sizes="100vw"
        className="seo-showcase-bg"
        style={{ objectFit: "cover" }}
      />

      <div className="seo-showcase-panel">
        <div className="seo-showcase-content-box">
          <p className="seo-showcase-quote">
            مهمتنا نوصّلك لصدارة جوجل... بنتائج فعلية، مش كلام
          </p>

          <div className="seo-showcase-row">
            <div className="seo-showcase-features">
              {features.map((feature, index) => (
                <div className="seo-showcase-feature" key={index}>
                  <span className="seo-showcase-feature-icon">
                    <i className={`bx ${feature.icon}`}></i>
                  </span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="seo-showcase-preview">
              <div className="seo-showcase-preview-bar">
                <span className="seo-showcase-dot seo-showcase-dot-1"></span>
                <span className="seo-showcase-dot seo-showcase-dot-2"></span>
                <span className="seo-showcase-dot seo-showcase-dot-3"></span>
                <span className="seo-showcase-google-icon">بحث جوجل</span>
              </div>
              <div className="seo-showcase-preview-result">
                <div className="seo-showcase-preview-result-head">
                  <span className="seo-showcase-preview-badge">الترتيب 1</span>
                  <span className="seo-showcase-preview-percent">
                    {progress}%
                  </span>
                </div>
                <div
                  className="seo-showcase-preview-line seo-showcase-preview-line-title"
                  style={{ width: `${progress}%`, backgroundColor: barColor }}
                ></div>
                <div className="seo-showcase-preview-line"></div>
                <div className="seo-showcase-preview-line short"></div>
              </div>
              {isGreen && (
                <div className="seo-showcase-preview-highlight">
                  <i className="bx bxs-check-circle"></i>
                  <span>اسم شركة متصدر</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="seo-showcase-area pt-70 pb-100">
      <div className="seo-showcase-blob seo-showcase-blob-one"></div>
      <div className="seo-showcase-blob seo-showcase-blob-two"></div>

      <div className="container">
        <h2 className="seo-showcase-title">تصدّر نتائج البحث، يوميًا وباستمرار</h2>
      </div>

      {/* fullWidth: the card sits OUTSIDE the container so it spans the
          viewport; the heading above stays contained (see the header note).
          Not full width: unchanged — same container wraps both, exactly as
          before. */}
      {fullWidth ? (
        <div className="seo-showcase-bleed">{card}</div>
      ) : (
        <div className="container">{card}</div>
      )}
    </section>
  );
};

export default SeoShowcase;
