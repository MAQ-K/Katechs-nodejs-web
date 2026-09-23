import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Marketing / SEO — the split banner that closes the services run.
//
// ---- why this is a fork, not an edit ----
// This section used to be <SeoShowcase banner /> from components/Common/, a
// component that pages/index.js ALSO renders. pages/index.js is frozen (T-018),
// so restyling the shared file would have changed the live homepage too. The
// user's call on 2026-09-23 was to fork: this file is the hp-new copy,
// components/Common/SeoShowcase.js is untouched and still serves the live
// homepage. If the two ever need to converge again, converge on this one.
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Matches Homepage.dc.html: a hard 43/57 split — navy talk panel on the RIGHT
// (flex order 1 on an RTL page), the SEO photograph bleeding full-height on the
// left with the fake browser card floating over its top corner and a near-white
// quote slab pinned across its foot.
//
// ---- the rank meter, and the bug that came with it ----
// SeoShowcase ran its 0→100 counter on a bare setInterval(40ms) that started on
// mount and never stopped: ~25 re-renders a second, forever, whether or not the
// section was on screen, with no prefers-reduced-motion guard. Fixed here on
// both counts — the timer only runs while the section is actually intersecting,
// and reduced-motion pins it at 100 (the finished state, which is the point the
// mock is making) instead of animating.
const DEFAULTS = {
  heading: "تصدّر نتائج البحث، يوميًا وباستمرار",
  body:
    "تحليل الكلمات المفتاحية، تحسين السيو الفني، وتقارير أداء شهرية — كل ما يلزم لتصدر نتائج جوجل والبقاء هناك.",
  cta: { label: "تصفّح خدمات السيو", href: "/services/seo/" },
  quote: "مهمتنا نوصّلك لصدارة جوجل... بنتائج فعلية، مش كلام",
  image: {
    src: "/images/seo.png",
    alt: "خدمة تحسين محركات البحث والسيو - KaTechs",
  },
};

const Marketing = ({ content = DEFAULTS }) => {
  const [pct, setPct] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      setPct(100);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setPct(100);
      return;
    }

    // The timer exists only while the band is on screen — see the header note.
    let timer = null;
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timer) {
          timer = setInterval(
            () => setPct((p) => (p >= 100 ? 0 : p + 2)),
            40
          );
        } else if (!entry.isIntersecting) {
          stop();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => {
      stop();
      observer.disconnect();
    };
  }, []);

  const colour = pct < 34 ? "#ff5f56" : pct >= 67 ? "#27c93f" : "#ffbd2e";

  return (
    <div className="hp-mkt" ref={sectionRef}>
      <div className="hp-mkt-talk">
        <h2>{content.heading}</h2>
        <p>{content.body}</p>
        <Link href={content.cta.href} className="hp-mkt-btn">
          {content.cta.label}
        </Link>
      </div>

      <div className="hp-mkt-media">
        <img
          src={content.image.src}
          alt={content.image.alt}
          className="hp-mkt-photo"
        />
        <div className="hp-mkt-scrim" aria-hidden="true" />

        {/* A decorative mock of a rank report, not real data — hidden from
            assistive tech rather than read out as a live percentage. */}
        <div className="hp-mkt-card" aria-hidden="true">
          <div className="hp-mkt-card-bar">
            <span style={{ background: "#ff5f56" }} />
            <span style={{ background: "#ffbd2e" }} />
            <span style={{ background: "#27c93f" }} />
            <span className="hp-mkt-card-title">بحث جوجل</span>
          </div>
          <div className="hp-mkt-card-body">
            <div className="hp-mkt-card-row">
              <span className="hp-mkt-rank">الترتيب 1</span>
              <span className="hp-mkt-pct">{pct}%</span>
            </div>
            <div
              className="hp-mkt-meter"
              style={{ width: pct + "%", background: colour }}
            />
            <div className="hp-mkt-meter is-empty" style={{ width: "100%" }} />
            <div className="hp-mkt-meter is-empty" style={{ width: "68%" }} />
          </div>
          {pct >= 67 && (
            <div className="hp-mkt-card-flag">
              <i className="bx bx-check-circle" />
              <span>اسم شركة متصدر</span>
            </div>
          )}
        </div>

        <div className="hp-mkt-quote">
          <p>{content.quote}</p>
        </div>
      </div>

      <style jsx>{`
        .hp-mkt {
          position: relative;
          display: flex;
          width: 100%;
          min-height: clamp(420px, 42vw, 620px);
          font-family: "Cairo", system-ui, sans-serif;
        }
        /* The page is RTL, so flex order 1 is the RIGHT-hand column: talk
           panel right, photograph left. That is the design's arrangement —
           an Arabic reader meets the headline before the image. */
        .hp-mkt-talk {
          order: 1;
          flex: 0 0 43%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          padding: clamp(28px, 4vw, 56px);
          background: #0a1628;
        }
        .hp-mkt-talk h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(22px, 2.6vw, 32px);
          font-weight: 700;
          line-height: 1.35;
          color: #fff;
          margin: 0;
        }
        .hp-mkt-talk p {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
        }
        /* next/link renders a bare <a> with no styled-jsx scope class. */
        .hp-mkt-talk :global(.hp-mkt-btn) {
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
          transition: opacity 0.25s ease;
        }
        .hp-mkt-talk :global(.hp-mkt-btn:hover) {
          opacity: 0.86;
          color: #0a1628;
        }
        .hp-mkt-media {
          order: 2;
          position: relative;
          flex: 0 0 57%;
          isolation: isolate;
          overflow: hidden;
        }
        .hp-mkt-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
        }
        .hp-mkt-scrim {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            to left,
            rgba(3, 18, 42, 0.15),
            rgba(3, 18, 42, 0.55)
          );
        }
        .hp-mkt-card {
          position: absolute;
          inset-block-start: clamp(20px, 4vw, 48px);
          inset-inline-start: clamp(20px, 4vw, 48px);
          width: min(260px, 70%);
          z-index: 1;
          overflow: hidden;
          border: 1px solid #dce8ee;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 12px 30px rgba(16, 54, 78, 0.1);
        }
        .hp-mkt-card-bar {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 11px 13px;
          border-bottom: 1px solid #e6eef2;
        }
        .hp-mkt-card-bar span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .hp-mkt-card-title {
          width: auto;
          height: auto;
          border-radius: 0;
          margin-inline-start: auto;
          color: #6084a4;
          font-size: 11px;
        }
        .hp-mkt-card-body {
          padding: 18px;
        }
        .hp-mkt-card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .hp-mkt-rank {
          color: #08a8cc;
          font-size: 12px;
          font-weight: 700;
        }
        .hp-mkt-pct {
          color: #26384a;
          font-weight: 700;
        }
        .hp-mkt-meter {
          height: 7px;
          margin-top: 9px;
          border-radius: 8px;
          min-width: 2%;
          transition: width 0.12s linear, background-color 0.2s ease;
        }
        .hp-mkt-meter.is-empty {
          background: #e4edf1;
        }
        .hp-mkt-card-flag {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 18px 18px;
          color: #169d31;
          font-size: 12px;
          font-weight: 700;
        }
        .hp-mkt-quote {
          position: absolute;
          inset-inline-end: clamp(20px, 4vw, 48px);
          inset-block-end: clamp(20px, 4vw, 48px);
          inset-inline-start: clamp(20px, 4vw, 48px);
          padding: clamp(20px, 2.4vw, 30px);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }
        .hp-mkt-quote p {
          margin: 0;
          color: #071d3b;
          font-size: clamp(16px, 1.7vw, 20px);
          font-weight: 700;
          line-height: 1.6;
        }
        /* The 43/57 split is a desktop shape — below it the panel stacks over
           the photograph, which keeps the copy readable and stops the floating
           card and the quote slab colliding in a narrow column. */
        @media (max-width: 767px) {
          .hp-mkt {
            flex-direction: column;
            min-height: 0;
          }
          .hp-mkt-talk,
          .hp-mkt-media {
            flex: 1 1 auto;
          }
          .hp-mkt-media {
            min-height: 420px;
          }
        }
      `}</style>
    </div>
  );
};

export default Marketing;
