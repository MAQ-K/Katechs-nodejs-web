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
// of it.
//
// An earlier revision built a bespoke stage here: the real photographic render
// as the front face of a CSS 3D slab, with a drawn ring behind it. That is gone.
// `app-mockup-phone.png` (cropped for it) is now unused — kept, not deleted, in
// case the render is wanted again.
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

const AppServices = ({ content = appServices }) => {
  return (
    <div className="hp-app">
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
          <div className="app-platforms hp-app-orbit-host">
            <AppOrbit />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hp-app {
          width: 100%;
          padding-block: clamp(56px, 8vw, 104px);
          background: #0a1628;
          overflow: hidden;
        }
        .hp-app-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(32px, 5vw, 72px);
        }
        /* Talk LEFT, stage RIGHT, matching the draft. The DOM keeps the heading
           first; only the visual columns swap. Same approach as
           WebServicesBrief.js. */
        .hp-app-text {
          order: 2;
        }
        .hp-app-stage {
          order: 1;
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
        /* :global() because next/link renders these anchors — styled-jsx only
           scopes elements it renders itself. See components/HpNew/README.md #9. */
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
          text-decoration: none;
          transition: opacity 0.25s ease;
        }
        .hp-app-cta :global(.hp-app-btn:hover) {
          opacity: 0.86;
          color: #0a1628;
        }
        .hp-app-cta :global(.hp-app-btn.is-ghost) {
          background: transparent;
          color: #fff;
        }
        .hp-app-cta :global(.hp-app-btn.is-ghost:hover) {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          opacity: 1;
        }

        /* ---- the orbit host ---- */
        .hp-app-stage {
          position: relative;
        }
        /* Cancels the SECTION half of .app-platforms (styles/style.scss:7859):
           we want its orbit rules, not its navy background and 100px padding.
           Two classes beat one, so this wins without !important. */
        .hp-app-orbit-host.app-platforms {
          background-color: transparent;
          padding-top: 0;
          padding-bottom: 0;
        }

        @media (max-width: 991px) {
          .hp-app-inner {
            width: calc(100% - 32px);
            grid-template-columns: 1fr;
          }
          /* Stacked, the heading leads — the column swap means nothing with one
             column. */
          .hp-app-text {
            order: 1;
          }
          .hp-app-stage {
            order: 2;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-app-cta :global(.hp-app-btn) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AppServices;
