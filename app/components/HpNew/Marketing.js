import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

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
//
// ---- 2026-09-28 pass (user) ----
// • The meter is now SCROLL-DRIVEN, not a looping timer: 0% as the section
//   enters the viewport, 100% once the whole section is on screen.
// • The status row under it is always shown and walks through three stages
//   with the meter (ضعيف / متوسط / ممتاز), and the rank moves with it.
// • The talk panel is organised: label, heading, text, a 3-point checklist
//   (split out of the body copy), the site's button, and the quote (moved off
//   the photograph into the panel). The Google card is bigger.
const STAGES = [
  { upTo: 34, label: "ضعيف", rank: 24, colour: "#ff5f56" },
  { upTo: 67, label: "متوسط", rank: 8, colour: "#ffbd2e" },
  { upTo: 101, label: "ممتاز", rank: 1, colour: "#27c93f" },
];

const DEFAULTS = {
  eyebrow: "التسويق الرقمي والسيو",
  heading: "تصدّر نتائج البحث، يوميًا وباستمرار",
  points: ["تحليل الكلمات المفتاحية", "تحسين السيو الفني", "تقارير أداء شهرية"],
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
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const [pct, setPct] = useState(0);

  // 0 when the section's top meets the viewport bottom, 1 when its bottom does
  // (the whole section is in view).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.round(Math.min(1, Math.max(0, v)) * 100);
    setPct((p) => (p === next ? p : next));
  });

  const shown = reduced ? 100 : pct;
  const stage = STAGES.find((st) => shown < st.upTo) || STAGES[2];

  return (
    <div className="hp-mkt" ref={sectionRef}>
      <div className="hp-mkt-talk">
        <span className="hp-mkt-eyebrow">{content.eyebrow}</span>
        <h2>{content.heading}</h2>
        <p>{content.body}</p>
        <ul className="hp-mkt-points">
          {content.points.map((point) => (
            <li key={point}>
              <i className="bx bx-check" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        <Link href={content.cta.href} className="default-btn app-btn-shine">
          {content.cta.label}
        </Link>
        <blockquote className="hp-mkt-quote">
          <p>{content.quote}</p>
        </blockquote>
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
              <span className="hp-mkt-rank">الترتيب {stage.rank}</span>
              <span className="hp-mkt-pct">{shown}%</span>
            </div>
            <div className="hp-mkt-track">
              <div
                className="hp-mkt-meter"
                style={{ width: shown + "%", background: stage.colour }}
              />
            </div>
            <div className="hp-mkt-meter is-empty" style={{ width: "100%" }} />
            <div className="hp-mkt-meter is-empty" style={{ width: "68%" }} />
          </div>
          <div className="hp-mkt-card-flag">
            <span className="hp-mkt-company">
              <i className="bx bx-buildings" />
              اسم شركة متصدر
            </span>
            <span
              className="hp-mkt-stage"
              style={{ color: stage.colour, borderColor: stage.colour }}
            >
              {stage.label}
            </span>
          </div>
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
          align-items: flex-start;
          gap: 16px;
          padding: clamp(36px, 5vw, 72px) clamp(28px, 4vw, 64px);
          background: #0a1628;
        }
        .hp-mkt-eyebrow {
          font-size: 14px;
          font-weight: 700;
          color: #1dd3f8;
        }
        .hp-mkt-points {
          list-style: none;
          margin: 4px 0 8px;
          padding: 0;
          display: grid;
          gap: 10px;
        }
        .hp-mkt-points li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 15px;
          font-weight: 600;
        }
        .hp-mkt-points i {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(29, 211, 248, 0.16);
          color: #1dd3f8;
          font-size: 16px;
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
          width: min(360px, 78%);
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
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .hp-mkt-card-title {
          width: auto;
          height: auto;
          border-radius: 0;
          margin-inline-start: auto;
          color: #6084a4;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }
        .hp-mkt-card-body {
          padding: 22px 24px 18px;
        }
        .hp-mkt-card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .hp-mkt-rank {
          color: #08a8cc;
          font-size: 15px;
          font-weight: 700;
        }
        .hp-mkt-pct {
          color: #26384a;
          font-size: 22px;
          font-weight: 800;
        }
        .hp-mkt-track {
          height: 10px;
          border-radius: 8px;
          background: #eef3f6;
          overflow: hidden;
        }
        .hp-mkt-track .hp-mkt-meter {
          height: 100%;
          margin-top: 0;
        }
        .hp-mkt-meter {
          height: 7px;
          margin-top: 9px;
          border-radius: 8px;
          min-width: 2%;
          transition: width 0.12s linear, background-color 0.3s ease;
        }
        .hp-mkt-meter.is-empty {
          background: #e4edf1;
        }
        .hp-mkt-card-flag {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 14px 24px;
          border-top: 1px solid #e6eef2;
          font-size: 14px;
          font-weight: 700;
        }
        .hp-mkt-company {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #26384a;
        }
        .hp-mkt-stage {
          padding: 3px 12px;
          border: 1.5px solid;
          border-radius: 999px;
          font-size: 13px;
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .hp-mkt-quote {
          margin: 16px 0 0;
          padding: 16px 20px;
          border-inline-start: 3px solid #1dd3f8;
          border-radius: 4px 12px 12px 4px;
          background: rgba(255, 255, 255, 0.06);
        }
        .hp-mkt-quote p {
          margin: 0;
          color: #fff;
          font-size: clamp(15px, 1.5vw, 18px);
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
