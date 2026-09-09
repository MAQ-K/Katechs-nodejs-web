import React from "react";
import Link from "next/link";
import { webServices } from "../../data/home-new/data";

// Web services, block 1 of 3 — talk LEFT / image RIGHT, per the user's sketch
// (2026-09-03; see the ⚠️ note on `webServices.brief` in data/home-new/data.js).
// This is the mirror of components/Services/ServiceArea/Overview.js, which puts
// the text on the RIGHT so an Arabic reader meets the headline first. The user
// chose the sketch. Noted so nobody "fixes" it back later thinking it was an
// oversight.
//
// ---- restored 2026-09-09 ----
// A revision earlier the same day dropped the image and moved this block into a
// side-by-side grid with the plans, to force the section into one 100vh screen.
// The user rejected that. The split below — text column, media column, projects
// heading at the foot of the text — is the layout to keep.
//
// ---- LIGHT PASS (2026-09-09, user) ----
// Was navy (#030916). Now on the light system this folder already uses in
// DomainSearch's card, EmailServices and Stores: #fff surfaces, #d9d9d9
// hairlines, 14–18px radii, #212121 headings, #555 body, Cairo throughout,
// brand cyan (#1dd3f8) as the single accent, and the global `.default-btn` for
// the primary CTA — the site's own button, not a local copy, so it cannot drift
// from every other page.
//
// Cyan needs care on light: #1dd3f8 on #fff is ~1.7:1, nowhere near AA. So the
// accent is a FILL behind dark text or an icon colour, never small text on
// white; text that has to read as cyan uses the darkened #0f8fae (~4.6:1).
//
// The background belongs to WebServicesScreen, not here — one band for all
// three blocks, so they cannot seam against each other.
const CYAN = "29, 211, 248";

export default function WebServicesBrief({ brief = webServices.brief }) {
  const { eyebrow, heading, body, points, cta, secondary, media } = brief;
  return (
    <div className="hp-brief">
      <div className="hp-brief-inner">
        <div className="hp-brief-text" dir="rtl">
          {eyebrow && <span className="hp-brief-eyebrow">{eyebrow}</span>}
          <h3>{heading}</h3>
          <p>{body}</p>

          {points?.length > 0 && (
            <ul className="hp-brief-points">
              {points.map((point) => (
                <li key={point}>
                  <i className="bx bx-check" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="hp-brief-cta">
            <Link href={cta.href} className="default-btn">
              {cta.label}
            </Link>
            <Link href={secondary.href} className="hp-brief-btn is-ghost">
              {secondary.label}
            </Link>
          </div>

          {/* Labels the strip directly below. ProjectsMarquee points its
              aria-labelledby at this id. */}
          <h3 className="hp-brief-projects-title" id="hp-projects-title">
            من أعمالنا
          </h3>
        </div>

        <figure className="hp-brief-media">
          <img src={media.src} alt={media.alt} width="624" height="387" />
        </figure>
      </div>

      <style jsx>{`
        .hp-brief {
          /* Was clamp(56px, 7vw, 96px) — up to 96px of dead air above the
             eyebrow, on top of whatever the click-to-scroll offset already
             leaves. This section is the very first thing on screen after a
             nav jump; it should start close to the chrome, not float in the
             middle of the viewport (user, 2026-09-09 screenshot: "there is a
             space above that's useless"). */
          padding: clamp(20px, 2.4vw, 32px) 0 0;
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-brief-inner {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          /* ltr places the two columns (text first = physical LEFT); the text
             block re-declares dir="rtl" for its own content. */
          direction: ltr;
          /* Was center. The image column (aspect-ratio 1.12) is taller than
             the text column's natural content, so centering left equal empty
             bands above the eyebrow AND below the CTA — the other half of the
             "useless space" the padding-top wasn't the whole story on.
             start = both columns share one top edge, no floating gap. */
          align-items: start;
          gap: clamp(28px, 4vw, 64px);
        }
        .hp-brief-text {
          display: flex;
          flex-direction: column;
          /* Was center — see .hp-brief-inner's align-items note above. */
          justify-content: flex-start;
          align-items: flex-start;
          text-align: right;
          min-width: 0;
        }
        .hp-brief-eyebrow {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #0f8fae;
          margin-bottom: 14px;
          letter-spacing: 0.2px;
        }
        .hp-brief-text h3 {
          font: 800 clamp(28px, 3.4vw, 46px) / 1.4 "Cairo", system-ui,
            sans-serif;
          letter-spacing: -0.6px;
          color: #212121;
          margin: 0 0 18px;
          max-width: 540px;
          text-wrap: balance;
        }
        .hp-brief-text .hp-brief-projects-title {
          font: 800 20px/1.5 "Cairo", system-ui, sans-serif;
          letter-spacing: normal;
          margin: 30px 0 0;
          color: #212121;
        }
        .hp-brief-text p {
          font-size: clamp(15px, 1.35vw, 17px);
          line-height: 1.95;
          color: #555;
          margin: 0 0 22px;
          max-width: 490px;
        }
        .hp-brief-points {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          display: grid;
          gap: 12px;
          max-width: 490px;
        }
        .hp-brief-points li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          line-height: 1.7;
          color: #444;
        }
        .hp-brief-points li i {
          flex: 0 0 auto;
          margin-top: 1px;
          font-size: 19px;
          color: rgb(${CYAN});
        }
        .hp-brief-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
        }
        /* :global() on both — next/link renders these <a> elements, and
           styled-jsx only scopes DOM elements it renders itself. Anchored on
           .hp-brief-cta, which IS scoped, so nothing leaks out of this file. */
        .hp-brief-cta :global(.default-btn) {
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-brief-cta :global(.hp-brief-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 12px 26px;
          border-radius: 10px;
          border: 1px solid #d9d9d9;
          background: #fff;
          color: #212121;
          font: 700 14px/1.6 "Cairo", system-ui, sans-serif;
          text-decoration: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .hp-brief-cta :global(.hp-brief-btn.is-ghost:hover) {
          background: #fff;
          border-color: #212121;
          color: #212121;
        }
        .hp-brief-cta :global(.hp-brief-btn:focus-visible),
        .hp-brief-cta :global(.default-btn:focus-visible) {
          outline: 2px solid rgb(${CYAN});
          outline-offset: 3px;
        }
        .hp-brief-media {
          position: relative;
          margin: 0;
          min-width: 0;
          aspect-ratio: 1.12;
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e4e4e4;
          box-shadow: 0 20px 50px -30px rgba(10, 31, 68, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hp-brief-media img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        @media (max-width: 767px) {
          .hp-brief-inner {
            grid-template-columns: 1fr;
            gap: 24px;
            width: calc(100% - 32px);
          }
          .hp-brief-text h3 {
            max-width: 460px;
            letter-spacing: -0.2px;
          }
          .hp-brief-media {
            aspect-ratio: 1.15;
          }
          .hp-brief-cta :global(.hp-brief-btn) {
            padding-inline: 20px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-brief-cta :global(.hp-brief-btn) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
