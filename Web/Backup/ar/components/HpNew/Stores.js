import React from "react";
import Link from "next/link";
import { stores } from "../../data/home-new/data";

// Stores (e-commerce) — the design's "option C" bento: one tall combo box on
// the physical left, two square boxes upper-right, one wide box beneath them.
//
// Copy comes from the `ecommerce` area of data/services/data.js (via
// data/home-new/data.js) — the same source the real Web Services page reads,
// so the two pages cannot describe the same packages differently. The one
// exception is the `combo` card, which is homepage-only and defined in
// data/home-new/data.js; see the long note there for why it is not in the
// shared array.
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Matches Homepage.dc.html (Ecommerce option C). Three changes worth knowing:
//
//   1. 🔴 The section is now ONLY this bento. The design drops the two blocks
//      that used to follow it — `stores.journey` (the four-step buying journey
//      diagram) and `stores.capabilities` (the six-capability grid). Both are
//      still in the data and still render on the real Web Services page; they
//      simply are not on the homepage any more. Raised with the user on
//      2026-09-23 — if either should come back, the data is untouched.
//   2. The build and manage cards no longer show the salla/shopify
//      PHOTOGRAPHS. The design puts a line illustration in each instead
//      (/images/illus/*.png, copied in from the handoff). The photos are still
//      in the data and still used on the Web Services page.
//   3. ⚠️ The combo and landing cards have EMPTY illustration slots in the
//      design — a reserved tinted square with nothing in it. They are rendered
//      exactly that way rather than collapsed, because the design reserves the
//      space and the grid reads wrong without it. Two illustrations are
//      outstanding.
//
// The pointer-follow tilt is the design's own setupTilt(), moved onto React
// handlers. It writes transform straight to the node rather than going through
// state — a tilt that re-renders four cards on every pointermove is a tilt
// that drops frames.
const ILLUS = {
  combo: { src: null, size: "clamp(72px,14vh,140px)", bg: "rgba(255,255,255,.04)" },
  build: { src: "/images/illus/build-a-store.png", size: "clamp(100px,17vh,168px)", bg: "transparent" },
  manage: { src: "/images/illus/managment.png", size: "clamp(100px,17vh,168px)", bg: "transparent" },
  landing: { src: null, size: "clamp(92px,14vh,140px)", bg: "rgba(255,255,255,.55)" },
};

const Arrow = ({ size = 19 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="17" y1="7" x2="7" y2="17" />
    <polyline points="17 15 17 7 9 7" />
  </svg>
);

const Back = () => (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const Slot = ({ card }) => {
  const illus = ILLUS[card] || {};
  return (
    <span
      className="hp-store-slot"
      style={{ width: illus.size, height: illus.size, background: illus.bg }}
    >
      {illus.src && <img src={illus.src} alt="" loading="lazy" />}
    </span>
  );
};

const Stores = ({ content = stores }) => {
  const cards = content.build?.cards || [];
  const byId = (id) => cards.find((c) => c.id === id);
  const combo = byId("combo");
  const build = byId("build");
  const manage = byId("manage");
  const landing = byId("landing");
  if (!combo || !build || !manage) return null;

  // See the header note — writes straight to the node, never through state.
  const tilt = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const r = card.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width - 0.5;
    const py = (event.clientY - r.top) / r.height - 0.5;
    card.style.transition = "transform .12s ease-out";
    card.style.transform =
      "perspective(900px) rotateY(" +
      (px * 5).toFixed(2) +
      "deg) rotateX(" +
      (-py * 5).toFixed(2) +
      "deg) translateZ(6px)";
  };
  const untilt = (event) => {
    const card = event.currentTarget;
    card.style.transition = "transform .6s cubic-bezier(.22,1,.36,1)";
    card.style.transform = "none";
  };
  const tiltProps = { onPointerMove: tilt, onPointerLeave: untilt };

  return (
    <div className="hp-store" dir="rtl">
      <div className="hp-store-inner">
        <div className="hp-store-head">
          <span>{content.intro.eyebrow}</span>
          <h2>{content.intro.heading}</h2>
        </div>

        <div className="hp-store-grid">
          {/* 1 · combo — the hero box, tall, physical left */}
          <article className="hp-store-combo" dir="rtl" {...tiltProps}>
            <div className="hp-store-combo-head">
              <span className="hp-store-tag">{combo.tag}</span>
              <span className="hp-store-circle" aria-hidden="true">
                <Arrow size={16} />
              </span>
            </div>
            <h3>{combo.title}.</h3>
            <p>{combo.text}</p>
            <ul>
              {combo.points?.map((point) => (
                <li key={point}>
                  <span aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="hp-store-combo-foot">
              <Link href={combo.link.href} className="hp-store-cta">
                {combo.link.label}
                <Back />
              </Link>
              <Slot card="combo" />
            </div>
          </article>

          {/* 2 · build, 3 · manage — the two squares, upper right */}
          {[build, manage].map((card) => (
            <article
              key={card.id}
              className={"hp-store-box is-" + card.id}
              dir="rtl"
              {...tiltProps}
            >
              <div className="hp-store-box-head">
                <div>
                  <span className="hp-store-box-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                </div>
                <span aria-hidden="true" className="hp-store-box-arrow">
                  <Arrow />
                </span>
              </div>
              <p>{card.text}</p>
              <div className="hp-store-box-foot">
                <Slot card={card.id} />
              </div>
            </article>
          ))}

          {/* 4 · landing page — wide, bottom */}
          {landing && (
            <article className="hp-store-wide" dir="rtl" {...tiltProps}>
              <div className="hp-store-box-head">
                <div>
                  <span className="hp-store-box-tag">{landing.tag}</span>
                  <h3>{landing.title}</h3>
                </div>
                <span aria-hidden="true" className="hp-store-box-arrow">
                  <Arrow />
                </span>
              </div>
              <div className="hp-store-wide-foot">
                <Slot card="landing" />
                <div className="hp-store-wide-copy">
                  <p>{landing.text}</p>
                  <Link href={landing.link.href} className="hp-store-underline">
                    {landing.link.label}
                    <Back />
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      <style jsx>{`
        .hp-store {
          background: #030916;
          min-height: min(880px, 94vh);
          display: flex;
          flex-direction: column;
          padding: clamp(48px, 7vw, 96px) 0;
          font-family: "Almarai", system-ui, sans-serif;
          overflow: hidden;
        }
        .hp-store-inner {
          width: min(1440px, calc(100% - 48px));
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          min-height: 0;
        }
        .hp-store-head {
          display: flex;
          align-items: baseline;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: clamp(12px, 1.6vh, 22px);
          flex: 0 0 auto;
        }
        .hp-store-head span {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1dd3f8;
          letter-spacing: 0.2px;
        }
        .hp-store-head h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(22px, 3.2vh, 38px);
          font-weight: 800;
          line-height: 1.3;
          color: #fff;
          margin: 0;
        }
        /* LTR so the combo box lands in physical column 1 (the left). Every
           card re-declares dir="rtl" for its own text. */
        .hp-store-grid {
          direction: ltr;
          flex: 1 1 auto;
          min-height: 0;
          display: grid;
          grid-template-columns: 1.06fr 1fr 1fr;
          grid-template-rows: minmax(0, 1fr) minmax(0, 0.72fr);
          gap: 14px;
        }
        .hp-store-grid article {
          transform-style: preserve-3d;
        }
        .hp-store-combo {
          grid-column: 1;
          grid-row: 1 / span 2;
          position: relative;
          display: flex;
          flex-direction: column;
          background: #05101f;
          border: 1px solid rgba(149, 185, 231, 0.12);
          border-radius: 22px;
          padding: clamp(18px, 2.4vh, 32px);
          overflow: hidden;
          min-height: 0;
        }
        .hp-store-combo-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: clamp(10px, 1.6vh, 20px);
          flex: 0 0 auto;
        }
        .hp-store-tag {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #1dd3f8;
          letter-spacing: 0.3px;
        }
        .hp-store-circle {
          flex: 0 0 auto;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .hp-store-combo h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(23px, 3.8vh, 42px);
          font-weight: 800;
          line-height: 1.28;
          color: #fff;
          margin: 0 0 10px;
          max-width: 16ch;
          flex: 0 0 auto;
        }
        .hp-store-combo p {
          font-size: clamp(12.5px, 1.55vh, 15px);
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.66);
          margin: 0 0 clamp(10px, 1.6vh, 18px);
          max-width: 40ch;
          flex: 0 0 auto;
        }
        .hp-store-combo ul {
          list-style: none;
          margin: 0 0 clamp(12px, 1.8vh, 20px);
          padding: clamp(12px, 1.8vh, 20px) 0 0;
          display: grid;
          gap: 8px;
          border-top: 1px solid rgba(149, 185, 231, 0.12);
          flex: 0 0 auto;
        }
        .hp-store-combo li {
          display: flex;
          gap: 10px;
          font-size: 12.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.82);
        }
        .hp-store-combo li span:first-child {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #1dd3f8;
          margin-top: 7px;
          flex: 0 0 auto;
        }
        .hp-store-combo-foot {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          gap: 12px;
          min-height: 0;
          flex: 0 0 auto;
        }
        /* next/link renders a bare <a> with no styled-jsx scope class. */
        .hp-store-combo-foot :global(.hp-store-cta) {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 999px;
          background: #fff;
          color: #05101f;
          font: 700 13.5px / 1 "Cairo", system-ui, sans-serif;
          transition: opacity 0.25s ease;
        }
        .hp-store-combo-foot :global(.hp-store-cta:hover) {
          opacity: 0.88;
          color: #05101f;
        }
        .hp-store-box {
          grid-row: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          background: #f4f6f8;
          border-radius: 22px;
          padding: clamp(16px, 2.2vh, 24px) clamp(16px, 1.8vw, 22px);
          overflow: hidden;
          min-height: 0;
        }
        .hp-store-box.is-build {
          grid-column: 2;
        }
        .hp-store-box.is-manage {
          grid-column: 3;
        }
        .hp-store-wide {
          grid-column: 2 / span 2;
          grid-row: 2;
          position: relative;
          display: flex;
          flex-direction: column;
          background: #dfe4ea;
          border-radius: 22px;
          padding: clamp(16px, 2.2vh, 26px) clamp(18px, 2vw, 28px);
          overflow: hidden;
          min-height: 0;
        }
        .hp-store-box-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          flex: 0 0 auto;
        }
        .hp-store-box-tag {
          display: block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          color: #5a6675;
          margin-bottom: 5px;
          letter-spacing: 0.3px;
        }
        .hp-store-wide .hp-store-box-tag {
          color: #4a5a6a;
        }
        .hp-store-box-head h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(17px, 2.3vh, 23px);
          font-weight: 800;
          line-height: 1.4;
          color: #111;
          margin: 0;
        }
        .hp-store-wide .hp-store-box-head h3 {
          font-size: clamp(17px, 2.3vh, 25px);
          line-height: 1.35;
          max-width: 26ch;
        }
        .hp-store-box-arrow {
          flex: 0 0 auto;
          color: #111;
        }
        .hp-store-box p {
          font-size: 12.5px;
          line-height: 1.75;
          color: #555;
          margin: 9px 0 0;
          max-width: 32ch;
          flex: 0 0 auto;
        }
        .hp-store-box-foot {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
          min-height: 0;
          flex: 1 1 auto;
          align-items: flex-end;
        }
        .hp-store-wide-foot {
          margin-top: auto;
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(16px, 2.4vw, 36px);
          min-height: 0;
          flex: 1 1 auto;
          padding-top: 10px;
        }
        .hp-store-wide-copy {
          flex: 1 1 auto;
          min-width: 0;
          text-align: right;
        }
        .hp-store-wide-copy p {
          font-size: 12.5px;
          line-height: 1.75;
          color: #4f5b68;
          margin: 0 0 12px;
          max-width: 52ch;
          margin-inline-start: auto;
        }
        .hp-store-wide-copy :global(.hp-store-underline) {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font: 700 13px / 1 "Cairo", system-ui, sans-serif;
          color: #111;
          border-bottom: 1px solid #111;
          padding-bottom: 4px;
        }
        .hp-store-wide-copy :global(.hp-store-underline:hover) {
          color: #111;
          opacity: 0.75;
        }
        .hp-store-slot {
          flex: 0 0 auto;
          display: block;
          border-radius: 12px;
          overflow: hidden;
        }
        .hp-store-slot img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        /* The bento's fixed 3x2 grid is a desktop shape. Below it the boxes
           stack, and the vh-based type stops being useful once the section is
           taller than the viewport. */
        @media (max-width: 991px) {
          .hp-store {
            min-height: 0;
          }
          .hp-store-grid {
            grid-template-columns: 1fr;
            grid-template-rows: none;
          }
          /* .is-build / .is-manage are (0,2,0) and would otherwise keep
             pinning themselves to columns 2 and 3 of a one-column grid —
             specificity beats source order, so they have to be named here
             too or the bento stays three implicit columns wide on a phone. */
          .hp-store-combo,
          .hp-store-box,
          .hp-store-box.is-build,
          .hp-store-box.is-manage,
          .hp-store-wide {
            grid-column: auto;
            grid-row: auto;
            min-height: 220px;
          }
          .hp-store-wide-foot {
            flex-direction: column-reverse;
            align-items: stretch;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-store-grid article {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Stores;
