import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import seoImg from "../../public/images/seo.png";

const features = [
  { icon: "bx-search-alt-2", label: "تحليل الكلمات المفتاحية" },
  { icon: "bx-cog", label: "تحسين السيو الفني" },
  { icon: "bx-link", label: "بناء الروابط الخلفية" },
  { icon: "bx-edit-alt", label: "تحسين محتوى الصفحات" },
  { icon: "bx-line-chart", label: "تقارير أداء شهرية" },
];

// `banner` — optional, defaults to false, so pages/index.js (the old
// homepage, which renders this component with no props) is BYTE-IDENTICAL to
// before: everything from here down to the closing `if (banner) {...}` block
// is the original component, untouched.
//
// ⚠️ REPLACES the earlier `fullWidth`/`talkOnRight` pair (2026-09-08, same
// day). Those two props did a smaller job — widen the existing card and flip
// which side the text sits on — and were retired the moment /hp-new's actual
// ask turned out to be a full restructure, not a wider version of the same
// layout: "make the white box have [only the quote] on the left and make a
// full height div on the right that's 43% of the whole width with a title,
// small paragraph and a btn... make the same section 100% width." One prop
// replacing two, rather than leaving fullWidth/talkOnRight as dead parameters
// nothing calls any more — same call made when Channels.js's showNote/
// showHead props were retired the same way (see brain/logs/2026-09-06.md).
const SeoShowcase = ({ banner = false } = {}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const isGreen = progress >= 67;
  const barColor = progress < 34 ? "#ff5f56" : isGreen ? "#27c93f" : "#ffbd2e";

  // ---- the marketing-section banner (user, 2026-09-08) ----
  // Full-width two-column band: LEFT (57%) the same background photo with a
  // white box floating on it, now holding ONLY the quote (the features list
  // and the live rank-tracker mock that used to sit beside it are gone — see
  // below for where their content went instead). RIGHT (43%, full height) a
  // solid panel carrying what used to be the section's own heading, plus a
  // short paragraph and a CTA — this section no longer has a heading ABOVE
  // the card at all; "تصدّر نتائج البحث..." is now that panel's title.
  //
  // DOM order: panel first (so the heading leads, same reasoning every other
  // split section on this page follows), media second. In RTL that lands the
  // panel on the RIGHT and the media on the LEFT via `order` — order:1 is the
  // rightmost slot in this document direction, order:2 the left.
  //
  // The paragraph folds in three of the five removed feature bullets rather
  // than dropping that information outright — condensed to one sentence, not
  // simply deleted.
  if (banner) {
    return (
      <section className="seo-banner">
        <div className="seo-banner-panel">
          <h2>تصدّر نتائج البحث، يوميًا وباستمرار</h2>
          <p>
            تحليل الكلمات المفتاحية، تحسين السيو الفني، وتقارير أداء شهرية —
            كل ما يلزم لتصدر نتائج جوجل والبقاء هناك.
          </p>
          <Link href="/services/seo/" className="seo-banner-btn">
            تصفّح خدمات السيو
          </Link>
        </div>

        <div className="seo-banner-media">
          <Image
            src={seoImg}
            alt="خدمة تحسين محركات البحث والسيو - KaTechs"
            fill
            sizes="57vw"
            className="seo-banner-bg"
            style={{ objectFit: "cover" }}
          />
          <div className="seo-banner-overlay" aria-hidden="true" />

          {/* The rank-tracker loader mock — user asked for it back
              (2026-09-08), on the left (i.e. inside this media column, same
              side as the quote box). Reuses the exact global classes the old
              non-banner card used (styles/homepage-sections.css) so the two
              variants stay visually identical; `progress`/`isGreen`/`barColor`
              are the same state already driving the non-banner card below. */}
          <div className="seo-banner-loader">
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

          <div className="seo-banner-quote-box">
            <p className="seo-showcase-quote">
              مهمتنا نوصّلك لصدارة جوجل... بنتائج فعلية، مش كلام
            </p>
          </div>
        </div>

        <style jsx>{`
          .seo-banner {
            position: relative;
            display: flex;
            width: 100%;
            min-height: clamp(420px, 42vw, 620px);
          }
          .seo-banner-panel {
            order: 1;
            flex: 0 0 43%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 16px;
            padding: clamp(28px, 4vw, 56px);
            background: #0a1628;
          }
          .seo-banner-panel h2 {
            font-family: "Cairo", system-ui, sans-serif;
            font-size: clamp(22px, 2.6vw, 32px);
            font-weight: 700;
            line-height: 1.35;
            color: #fff;
            margin: 0;
          }
          .seo-banner-panel p {
            font-size: clamp(14px, 1.4vw, 16px);
            line-height: 1.9;
            color: rgba(255, 255, 255, 0.72);
            margin: 0;
          }
          /* :global() — next/link renders this <a>, and styled-jsx only scopes
             elements it renders itself (components/HpNew/README.md #9). */
          .seo-banner-panel :global(.seo-banner-btn) {
            align-self: flex-start;
            display: inline-block;
            margin-top: 8px;
            padding: 13px 30px;
            border-radius: 10px;
            background: #fff;
            color: #0a1628;
            font-family: "Cairo", system-ui, sans-serif;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            transition: opacity 0.25s ease;
          }
          .seo-banner-panel :global(.seo-banner-btn:hover) {
            opacity: 0.86;
            color: #0a1628;
          }
          .seo-banner-media {
            order: 2;
            position: relative;
            flex: 0 0 57%;
            isolation: isolate;
          }
          .seo-banner-bg {
            z-index: -2;
          }
          .seo-banner-overlay {
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(
              to left,
              rgba(3, 18, 42, 0.15),
              rgba(3, 18, 42, 0.55)
            );
          }
          .seo-banner-quote-box {
            position: absolute;
            inset-inline-end: clamp(20px, 4vw, 48px);
            inset-block-end: clamp(20px, 4vw, 48px);
            inset-inline-start: clamp(20px, 4vw, 48px);
            padding: clamp(20px, 2.4vw, 30px);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          }
          .seo-banner-quote-box p {
            margin: 0;
            color: #071d3b;
            font-size: clamp(16px, 1.7vw, 20px);
            font-weight: 700;
            line-height: 1.6;
          }
          /* Anchored to the top-left corner of the media column — "the left"
             the user meant is this whole column (order:2, so visually left in
             RTL); the quote box already owns the bottom of it. */
          .seo-banner-loader {
            position: absolute;
            inset-block-start: clamp(20px, 4vw, 48px);
            inset-inline-start: clamp(20px, 4vw, 48px);
            width: min(260px, 70%);
            z-index: 1;
          }
          @media (max-width: 900px) {
            .seo-banner {
              flex-direction: column;
              min-height: 0;
            }
            .seo-banner-panel,
            .seo-banner-media {
              flex-basis: auto;
            }
            .seo-banner-media {
              min-height: 320px;
            }
            .seo-banner-quote-box {
              position: static;
              margin: 20px;
            }
            .seo-banner-loader {
              position: static;
              width: auto;
              margin: 20px 20px 0;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .seo-banner-panel :global(.seo-banner-btn) {
              transition: none;
            }
          }
        `}</style>
      </section>
    );
  }

  const card = (
    <div className="seo-showcase-card">
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

        {card}
      </div>
    </section>
  );
};

export default SeoShowcase;
