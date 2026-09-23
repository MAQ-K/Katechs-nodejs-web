import React, { useId, useState } from "react";
import Link from "next/link";
import { emailServices } from "../../data/home-new/data";

// Email services — a row of product tabs over a talk/image panel.
//
// Tab content comes from data/emails/data.js (via data/home-new/data.js): the
// label, the icon, the one-line description, and four feature lines lifted
// from that product's most inclusive plan — so the homepage can never promise
// something the emails page does not.
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Matches Homepage.dc.html. What changed from the revision before it:
//   • the tabs were a vertical side rail; they are now a responsive row of
//     three 16px cards, each with a 42px icon tile, and the active one goes
//     near-black (#0e0e10) with a cyan→violet underline that wipes in;
//   • the panel gained two blurred aura shapes behind the copy and a glow
//     behind the image;
//   • the four points became 34px circular tick badges on a four-colour cycle,
//     rising in sequence when the tab changes.
//
// The A/B animation-name swap is the design's own trick for restarting a CSS
// animation on tab change without a key remount: even tabs use mailFadeA /
// mailRiseA, odd ones B. Swapping the name is what re-triggers it; re-applying
// the same name would not.
const BADGE_COLOURS = ["#16a34a", "#7c3aed", "#2563eb", "#0f8fae"];

const EmailServices = ({ content = emailServices }) => {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabs = content.tabs || [];
  if (!tabs.length) return null;

  const onKeyDown = (event) => {
    // RTL: ArrowLeft moves FORWARD, because the next tab sits to the left.
    const rtl = typeof document !== "undefined" && document.dir === "rtl";
    const forward = rtl ? "ArrowLeft" : "ArrowRight";
    const back = rtl ? "ArrowRight" : "ArrowLeft";
    let next = null;
    if (event.key === forward) next = (active + 1) % tabs.length;
    else if (event.key === back) next = (active - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    const el = document.getElementById(base + "-tab-" + next);
    if (el) el.focus();
  };

  const tab = tabs[active];
  const even = active % 2 === 0;
  const fade = even ? "mailFadeA" : "mailFadeB";
  const rise = even ? "mailRiseA" : "mailRiseB";
  // The first product's shot is a UI screenshot with its own margins; the
  // other two are photography that should fill the frame.
  const contain = active === 0;

  return (
    <div className="hp-mail">
      <div className="hp-mail-inner">
        <div className="hp-mail-head">
          <span className="hp-mail-eyebrow">{content.eyebrow}</span>
          <h2>{content.heading}</h2>
        </div>

        <div
          role="tablist"
          aria-label="أنواع البريد الإلكتروني"
          className="hp-mail-tabs"
          onKeyDown={onKeyDown}
        >
          {tabs.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={base + "-tab-" + i}
              aria-selected={i === active}
              aria-controls={base + "-panel"}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "is-active" : undefined}
              onClick={() => setActive(i)}
            >
              <span className="hp-mail-tab-icon" aria-hidden="true">
                {item.icon && <img src={item.icon} alt="" width="24" height="24" />}
              </span>
              <span className="hp-mail-tab-label">{item.label}</span>
              <span className="hp-mail-tab-bar" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={base + "-panel"}
          aria-labelledby={base + "-tab-" + active}
          tabIndex={-1}
          className="hp-mail-panel"
        >
          <div className="hp-mail-talk" style={{ animationName: fade }}>
            <span className="hp-mail-aura hp-mail-aura-a" aria-hidden="true" />
            <span className="hp-mail-aura hp-mail-aura-b" aria-hidden="true" />
            <div className="hp-mail-talk-body">
              <h3>{tab.label}</h3>
              <p>{tab.body}</p>
              <ul>
                {tab.points?.map((point, i) => (
                  <li
                    key={point}
                    style={{
                      animationName: rise,
                      animationDelay: (0.08 + i * 0.08).toFixed(2) + "s",
                    }}
                  >
                    <span
                      className="hp-mail-badge"
                      aria-hidden="true"
                      style={{
                        background: BADGE_COLOURS[i % 4],
                        boxShadow: "0 8px 18px -10px " + BADGE_COLOURS[i % 4],
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href={content.cta.href} className="hp-mail-btn">
                {content.cta.label}
              </Link>
            </div>
          </div>

          <figure className="hp-mail-figure">
            <span className="hp-mail-glow" aria-hidden="true" />
            {tab.image?.src && (
              <img
                src={tab.image.src}
                alt={tab.image.alt}
                className={contain ? "is-contain" : undefined}
                style={{ animationName: fade }}
              />
            )}
          </figure>
        </div>
      </div>

      <style jsx>{`
        .hp-mail {
          padding-block: clamp(56px, 8vw, 104px);
          background: #fff;
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-mail-inner {
          width: min(1320px, calc(100% - 48px));
          margin-inline: auto;
        }
        .hp-mail-head {
          text-align: center;
          margin-bottom: 40px;
        }
        .hp-mail-eyebrow {
          display: inline-block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #666;
          margin-bottom: 12px;
        }
        .hp-mail-head h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .hp-mail-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
          gap: 12px;
          margin-bottom: clamp(28px, 3.5vw, 44px);
        }
        .hp-mail-tabs button {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: start;
          padding: 16px 18px;
          border: 1px solid #e4e4e4;
          border-radius: 16px;
          background: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #444;
          cursor: pointer;
          box-shadow: 0 10px 24px -20px rgba(10, 31, 68, 0.5);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease, border-color 0.25s ease, background 0.25s ease,
            color 0.25s ease;
        }
        .hp-mail-tabs button:hover {
          transform: translateY(-3px);
          border-color: #111;
        }
        .hp-mail-tabs button:focus-visible {
          outline: 2px solid #0a1f44;
          outline-offset: 3px;
        }
        .hp-mail-tabs button.is-active {
          background: #0e0e10;
          border-color: #0e0e10;
          color: #fff;
          box-shadow: 0 22px 40px -24px rgba(0, 0, 0, 0.85);
          transform: translateY(-3px);
        }
        .hp-mail-tab-icon {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #f3f4f7;
          transition: background 0.25s ease;
        }
        .hp-mail-tabs button.is-active .hp-mail-tab-icon {
          background: rgba(255, 255, 255, 0.12);
        }
        .hp-mail-tab-icon img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          display: block;
        }
        .hp-mail-tab-label {
          min-width: 0;
        }
        .hp-mail-tab-bar {
          position: absolute;
          inset-block-end: 0;
          inset-inline: 0;
          height: 3px;
          background: linear-gradient(90deg, #1dd3f8, #7c5cff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hp-mail-tabs button.is-active .hp-mail-tab-bar {
          transform: scaleX(1);
          transform-origin: center;
        }
        .hp-mail-panel {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: clamp(24px, 3.5vw, 48px);
          align-items: center;
        }
        .hp-mail-talk {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-width: 0;
          animation-duration: 0.5s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: both;
        }
        .hp-mail-aura {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          border-radius: 999px;
          animation-name: mailAura;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .hp-mail-aura-a {
          inset-block-start: 10px;
          inset-inline-start: 0;
          width: min(60%, 300px);
          aspect-ratio: 1;
          opacity: 0.45;
          filter: blur(38px);
          background: conic-gradient(
            from 190deg at 38% 108%,
            rgba(255, 255, 255, 0) 0deg,
            rgba(35, 56, 216, 0.5) 34deg,
            rgba(255, 255, 255, 0.9) 52deg,
            rgba(246, 178, 60, 0.5) 60deg,
            rgba(255, 255, 255, 0) 86deg
          );
          animation-duration: 16s;
        }
        .hp-mail-aura-b {
          inset-block-end: 20px;
          inset-inline-end: 8%;
          width: min(45%, 240px);
          height: 170px;
          opacity: 0.3;
          filter: blur(44px);
          background: radial-gradient(
            circle at 60% 40%,
            rgba(20, 32, 74, 0.32),
            rgba(120, 140, 190, 0.16) 55%,
            transparent 75%
          );
          animation-duration: 22s;
          animation-delay: -6s;
        }
        .hp-mail-talk-body {
          position: relative;
          z-index: 1;
        }
        .hp-mail-talk-body h3 {
          font: 800 clamp(21px, 2.4vw, 30px) / 1.45 "Cairo", system-ui, sans-serif;
          color: #111;
          margin: 0 0 12px;
        }
        .hp-mail-talk-body p {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 2;
          color: #666;
          margin: 0 0 26px;
        }
        .hp-mail-talk-body ul {
          list-style: none;
          margin: 0 0 30px;
          padding: 0;
          display: grid;
          gap: 20px;
        }
        .hp-mail-talk-body li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          min-width: 0;
          font: 700 16px / 1.9 "Cairo", system-ui, sans-serif;
          color: #111;
          animation-duration: 0.55s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: both;
        }
        .hp-mail-badge {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          color: #fff;
        }
        /* next/link renders a bare <a> with no styled-jsx scope class. */
        .hp-mail-talk-body :global(.hp-mail-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 15px 32px;
          border-radius: 12px;
          background: #111;
          color: #fff;
          font: 700 15px / 1 "Cairo", system-ui, sans-serif;
          box-shadow: 0 16px 30px -18px rgba(0, 0, 0, 0.8);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .hp-mail-talk-body :global(.hp-mail-btn:hover) {
          transform: translateY(-2px);
          opacity: 0.9;
          color: #fff;
        }
        .hp-mail-figure {
          position: relative;
          margin: 0;
          min-width: 0;
        }
        .hp-mail-glow {
          position: absolute;
          inset: 8% 6%;
          border-radius: 28px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(29, 211, 248, 0.35),
            rgba(124, 92, 255, 0.25) 60%,
            transparent 75%
          );
          filter: blur(26px);
          animation: mailGlow 9s ease-in-out infinite;
          pointer-events: none;
        }
        .hp-mail-figure img {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          padding: 0;
          border-radius: 22px;
          background: #f6f8fb;
          box-shadow: 0 34px 60px -34px rgba(10, 31, 68, 0.55);
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: both;
        }
        .hp-mail-figure img.is-contain {
          object-fit: contain;
          padding: clamp(18px, 3vw, 38px);
        }
        @keyframes mailFadeA {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes mailFadeB {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes mailRiseA {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes mailRiseB {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes mailAura {
          0%,
          100% {
            transform: rotate(-8deg) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: rotate(4deg) scale(1.06);
            opacity: 0.78;
          }
        }
        @keyframes mailGlow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.06);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-mail-talk,
          .hp-mail-talk-body li,
          .hp-mail-figure img,
          .hp-mail-aura,
          .hp-mail-glow {
            animation: none;
          }
          .hp-mail-tabs button:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default EmailServices;
