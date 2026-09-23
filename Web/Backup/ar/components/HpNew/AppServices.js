import React from "react";
import Link from "next/link";
import AppOrbit from "../AppDev/AppOrbit";
import { appServices } from "../../data/home-new/data";

// App services — talk on the left, the 3D phone orbit on the right.
//
// ---- the stage is the APP DEV PAGE'S orbit, not a copy of it ----
// "i want the right 3d shit to be the same as the one on the app dev page"
// (user, 2026-09-04). So this imports components/AppDev/AppOrbit.js itself —
// the same component /services/app-development renders — rather than
// reimplementing it. Same ring, same scroll-linked rotation, same drag with
// inertia, and it cannot drift from the app dev page because there is only one
// of it. The design (Homepage.dc.html) inlines its own copy of that orbit;
// this keeps the shared component, which renders the same thing and honours
// the 2026-09-04 instruction. The stage chrome around it — 520px height, the
// 330px glow ring, the .92 scale — is taken from the design.
//
// AppOrbit also takes an optional `screenImage` (user, 2026-09-08 — "each
// mobile screen have an image on it as a design"); app-mockup-phone.png is the
// only real KATECHS app screenshot in the repo. /services/app-development
// passes no prop and is unaffected — see the header comment in AppOrbit.js.
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Matches Homepage.dc.html. The one big change: the three.js aurora is GONE.
// The band's backdrop is now the design's pure-CSS streak field — 21 tilted
// light trails over a #000306 ground, a drifting two-tone haze and a centre
// vignette. That deletes a dynamic ~600KB three.js chunk from this page's
// payload and needs no WebGL at all. components/HpNew/ShaderBackground.js is
// left in the repo but nothing imports it any more.
//
// ---- two deliberate exceptions to the components/HpNew/ contract ----
// 1. It imports from components/AppDev/. Reusing the real component is the whole
//    point of the request; a copy would be a second thing to keep in step.
// 2. AppOrbit is styled entirely from styles/style.scss, and every one of its
//    rules is NESTED INSIDE `.app-platforms` — so the wrapper below must carry
//    that class or the orbit renders unstyled. `.app-platforms` is also a
//    section-level rule (styles/style.scss:7859) carrying a navy background and
//    100px of vertical padding, which is section chrome we do not want here;
//    `.hp-app-orbit-host` neutralises those. Two classes beat one, so no
//    !important is needed.
// This is the same kind of exception as `.default-btn` in HeroNav.js. Both are
// listed in components/HpNew/README.md.

// The design's 21 streaks, verbatim. A table rather than 21 hand-written divs —
// same DOM, one place to tune. Order matters only in that it is the design's.
// [inlineStart, width, height, opacity, colour, glow, duration, delay]
const STREAKS = [
  ["-4%", "2px", "26%", 0.9, "#1dd3f8", "15px", "7s", "0s"],
  ["2%", "1.5px", "33%", 0.9, "#7c5cff", "15px", "8s", "1.13s"],
  ["6%", "1.5px", "40%", 0.9, "#3b82f6", "15px", "9s", "2.26s"],
  ["9%", "2px", "47%", 0.9, "#a855f7", "15px", "10s", "3.39s"],
  ["12%", "1.5px", "54%", 0.9, "#22d3ee", "15px", "11s", "4.52s"],
  ["16%", "1.5px", "26%", 0.9, "#6366f1", "15px", "12s", "5.65s"],
  ["20%", "2px", "33%", 0.9, "#1dd3f8", "15px", "7s", "6.78s"],
  ["26%", "1.5px", "40%", 0.9, "#7c5cff", "15px", "8s", "7.91s"],
  ["33%", "1px", "24%", 0.25, "#3b82f6", "6px", "13s", "0.04s"],
  ["41%", "1px", "16%", 0.25, "#a855f7", "6px", "14s", "1.17s"],
  ["50%", "1px", "20%", 0.25, "#22d3ee", "6px", "15s", "2.3s"],
  ["58%", "1px", "24%", 0.25, "#6366f1", "6px", "16s", "3.43s"],
  ["66%", "1px", "16%", 0.25, "#1dd3f8", "6px", "13s", "4.56s"],
  ["73%", "1.5px", "47%", 0.9, "#7c5cff", "15px", "8s", "5.69s"],
  ["78%", "1.5px", "54%", 0.9, "#3b82f6", "15px", "9s", "6.82s"],
  ["83%", "2px", "26%", 0.9, "#a855f7", "15px", "10s", "7.95s"],
  ["87%", "1.5px", "33%", 0.9, "#22d3ee", "15px", "11s", "0.08s"],
  ["91%", "1.5px", "40%", 0.9, "#6366f1", "15px", "12s", "1.21s"],
  ["95%", "2px", "47%", 0.9, "#1dd3f8", "15px", "7s", "2.34s"],
  ["99%", "1.5px", "54%", 0.9, "#7c5cff", "15px", "8s", "3.47s"],
  ["103%", "1.5px", "26%", 0.9, "#3b82f6", "15px", "9s", "4.6s"],
];

const AppServices = ({ content = appServices }) => {
  return (
    <div className="hp-app">
      <div className="hp-app-bg" aria-hidden="true">
        {STREAKS.map(([start, w, h, op, colour, glow, dur, delay], i) => (
          <div
            key={i}
            className="hp-app-streak"
            style={{ insetInlineStart: start, width: w }}
          >
            <span
              style={{
                height: h,
                opacity: op,
                background:
                  "linear-gradient(to bottom," +
                  colour +
                  "00 0%," +
                  colour +
                  "00 28%," +
                  colour +
                  " 92%,#ffffff 100%)",
                boxShadow: "0 0 " + glow + " " + colour,
                animationDuration: dur,
                animationDelay: delay,
              }}
            />
          </div>
        ))}
        <div className="hp-app-haze" />
        <div className="hp-app-vignette" />
      </div>

      <div className="hp-app-inner">
        <div className="hp-app-text">
          <span className="hp-app-eyebrow">{content.eyebrow}</span>
          <h2>{content.heading}</h2>
          <p>{content.body}</p>

          <ul className="hp-app-list">
            {content.points.map((point) => (
              <li key={point}>
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="hp-app-cta">
            <Link href={content.cta.href} className="hp-app-btn">
              {content.cta.label}
            </Link>
            <Link href={content.secondary.href} className="hp-app-btn is-ghost">
              {content.secondary.label}
            </Link>
          </div>
        </div>

        {/* app-platforms is required — see the note above. */}
        <div className="hp-app-stage">
          <span className="hp-app-ring" aria-hidden="true" />
          <div className="app-platforms hp-app-orbit-host">
            <AppOrbit screenImage="/images/mobile-app/app-mockup-phone.png" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hp-app {
          position: relative;
          width: 100%;
          padding-block: clamp(56px, 8vw, 104px);
          background: #040d20;
          overflow: hidden;
          isolation: isolate;
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-app-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: #000306;
          overflow: hidden;
        }
        .hp-app-streak {
          position: absolute;
          inset-block-start: -55%;
          height: 210%;
          transform: rotate(34deg);
          transform-origin: 50% 50%;
          overflow: visible;
        }
        .hp-app-streak span {
          position: absolute;
          inset-inline: 0;
          inset-block-start: 0;
          border-radius: 999px;
          animation-name: appStreak;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .hp-app-haze {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              70% 60% at 2% 20%,
              rgba(29, 211, 248, 0.2),
              transparent 65%
            ),
            radial-gradient(
              70% 60% at 98% 80%,
              rgba(124, 92, 255, 0.22),
              transparent 65%
            );
          animation: appHaze 12s ease-in-out infinite;
        }
        .hp-app-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            55% 45% at 50% 50%,
            rgba(0, 3, 6, 0.85),
            rgba(0, 3, 6, 0.35) 60%,
            transparent 100%
          );
        }
        .hp-app-inner {
          position: relative;
          z-index: 1;
          width: min(1320px, calc(100% - 48px));
          margin-inline: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
          align-items: center;
          gap: clamp(32px, 5vw, 72px);
        }
        /* Page is RTL, so the first grid item lands on the right. The stage
           takes order 1 and the copy order 2 — phone right, talk left. */
        .hp-app-stage {
          order: 1;
          position: relative;
          height: 520px;
        }
        .hp-app-text {
          order: 2;
        }
        .hp-app-ring {
          position: absolute;
          inset-block-start: 50%;
          inset-inline-start: 50%;
          width: 330px;
          height: 330px;
          margin: -165px 0 0 -165px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(124, 92, 255, 0.35),
            rgba(29, 211, 248, 0.12) 55%,
            transparent 72%
          );
          filter: blur(10px);
          animation: appRing 8s ease-in-out infinite;
          pointer-events: none;
        }
        .hp-app-orbit-host {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.92);
          /* .app-platforms is a SECTION rule in styles/style.scss — navy
             background and 100px of vertical padding. Cancel both; we only
             want the class for the orbit rules nested under it. */
          background: transparent;
          padding: 0;
        }
        .hp-app-eyebrow {
          display: inline-block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.62);
          margin-bottom: 12px;
        }
        .hp-app-text h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          line-height: 1.35;
          color: #fff;
          margin: 0 0 16px;
        }
        .hp-app-text p {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 2;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 24px;
        }
        .hp-app-list {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .hp-app-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.86);
        }
        .hp-app-list svg {
          flex: 0 0 auto;
          margin-top: 5px;
          color: #fff;
        }
        .hp-app-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        /* next/link renders a bare <a> with no styled-jsx scope class. */
        .hp-app-cta :global(.hp-app-btn) {
          display: inline-block;
          padding: 13px 30px;
          border-radius: 10px;
          border: 1px solid #fff;
          background: #fff;
          color: #0a1628;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          transition: opacity 0.25s ease, background 0.25s ease;
        }
        .hp-app-cta :global(.hp-app-btn:hover) {
          opacity: 0.86;
          color: #0a1628;
        }
        .hp-app-cta :global(.hp-app-btn.is-ghost) {
          background: transparent;
          color: #fff;
          opacity: 1;
        }
        .hp-app-cta :global(.hp-app-btn.is-ghost:hover) {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        @keyframes appStreak {
          0% {
            transform: translate3d(0, -130%, 0);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          70% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(0, 260%, 0);
            opacity: 0;
          }
        }
        @keyframes appHaze {
          0%,
          100% {
            opacity: 0.45;
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate3d(2%, -2%, 0) scale(1.08);
          }
        }
        @keyframes appRing {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.05);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-app-streak span,
          .hp-app-haze,
          .hp-app-ring {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AppServices;
