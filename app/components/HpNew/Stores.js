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
// 2026-09-28 (user): every card is one link, and the tall combo card and the
// wide landing card use the SAME layout as the two squares (tag + title +
// arrow, text, illustration). Combo has no illustration of its own, so it
// shows the build + manage ones side by side — what the package is.
const ILLUS = {
  combo: {
    srcs: ["/images/homepage/store-building.png", "/images/homepage/store-management.jpeg"],
    cover: true,
  },
  build: { src: "/images/homepage/store-building.png", cover: true },
  manage: { src: "/images/homepage/store-management.jpeg", cover: true },
  landing: { src: "/images/ecommerce/landing-page-store-card.webp", cover: true },
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

const Slot = ({ card }) => {
  const illus = ILLUS[card] || {};
  return (
    <span
      className={"hp-store-slot" + (illus.cover ? " is-bg" : "") + (illus.srcs ? " is-pair" : "")}
      style={illus.cover ? undefined : { width: illus.size, height: illus.size, background: illus.bg }}
    >
      {illus.src && <img src={illus.src} alt="" loading="lazy" />}
      {illus.srcs?.map((src) => (
        <img key={src} src={src} alt="" loading="lazy" />
      ))}
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
          {/* combo (tall, physical left) · build · manage · landing (wide) —
              one markup for all four; only grid placement and colour differ. */}
          {[combo, build, manage, landing].filter(Boolean).map((card) => (
            <article
              key={card.id}
              className={"hp-store-box is-" + card.id}
              dir="rtl"
              {...tiltProps}
            >
              {/* Stretched link: the whole card is clickable. */}
              <Link
                href={card.link.href}
                className="hp-store-hit"
                aria-label={card.title + " - " + card.link.label}
              />
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
        /* The tall card: column 1, both rows; dark. */
        .hp-store-box.is-combo {
          grid-column: 1;
          grid-row: 1 / span 2;
          background: #05101f;
          border: 1px solid rgba(149, 185, 231, 0.12);
        }
        .hp-store-box.is-combo .hp-store-box-tag {
          color: #1dd3f8;
        }
        .hp-store-box.is-combo .hp-store-box-head h3 {
          color: #fff;
          font-size: clamp(22px, 3.2vh, 34px);
        }
        .hp-store-box.is-combo p {
          color: rgba(255, 255, 255, 0.66);
          font-size: 14px;
        }
        .hp-store-box.is-combo .hp-store-box-arrow {
          color: #fff;
        }
        /* The wide card: columns 2-3, second row. */
        .hp-store-box.is-landing {
          grid-column: 2 / span 2;
          grid-row: 2;
          background: #dfe4ea;
        }
        .hp-store-box.is-landing p {
          max-width: 52ch;
        }
        /* next/link renders a bare <a> with no scope class — :global(). */
        .hp-store-grid :global(.hp-store-hit) {
          position: absolute;
          inset: 0;
          z-index: 2;
          border-radius: inherit;
        }
        .hp-store-grid :global(.hp-store-hit:focus-visible) {
          outline: 3px solid #1dd3f8;
          outline-offset: -3px;
        }
        .hp-store-box-arrow {
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hp-store-box:hover .hp-store-box-arrow {
          transform: translate(-3px, -3px);
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
        .hp-store-box-head h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(17px, 2.3vh, 23px);
          font-weight: 800;
          line-height: 1.4;
          color: #111;
          margin: 0;
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
        /* Slot is its own component, so styled-jsx never puts this file's
           scope class on it — every slot rule MUST go through :global() or it
           silently does nothing (that is why the images rendered full size). */
        .hp-store-grid :global(.hp-store-slot) {
          flex: 0 0 auto;
          display: block;
          border-radius: 12px;
          overflow: hidden;
        }
        .hp-store-grid :global(.hp-store-slot img) {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        /* Store image: a small picture pinned to the card's bottom-left. */
        .hp-store-grid :global(.hp-store-slot.is-bg) {
          position: absolute;
          bottom: 16px;
          left: 16px;
          width: 63%;
          height: 45%;
          border-radius: 0;
          pointer-events: none;
        }
        .hp-store-grid :global(.hp-store-slot.is-bg img) {
          object-position: left bottom;
        }
        /* Combo: two illustrations side by side on white tiles (they are
           line art on white, and the combo card is dark). */
        .hp-store-grid :global(.hp-store-slot.is-pair) {
          display: flex;
          gap: 10px;
          width: calc(100% - 32px);
          height: 42%;
        }
        .hp-store-grid :global(.hp-store-slot.is-pair img) {
          flex: 1 1 0;
          min-width: 0;
          background: #fff;
          border-radius: 12px;
          padding: 8px;
          object-fit: contain;
          object-position: center;
        }
        .hp-store-box-head,
        .hp-store-box p {
          position: relative;
          z-index: 1;
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
          .hp-store-box,
          .hp-store-box.is-combo,
          .hp-store-box.is-build,
          .hp-store-box.is-manage,
          .hp-store-box.is-landing {
            grid-column: auto;
            grid-row: auto;
            min-height: 220px;
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
