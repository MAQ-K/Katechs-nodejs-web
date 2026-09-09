import React from "react";
import Link from "next/link";
import { webServices } from "../../data/home-new/data";

// Web services, block 1 of 3 — talk LEFT / image RIGHT (VISION.md, 2026-09-03).
// Structure is unchanged from the 2026-09-09 "first attempt" restore (see
// Homepage/README.md section tracker note of the same date); this is the
// VISUAL pass only, moving the block off the light/monochrome palette onto
// the hp-new theme already established by HeroSlider/HeroNav/DomainSearch/
// WhyChooseUs — layered navy (#050C1A family), brand cyan (#1dd3f8) used
// sparingly, Cairo. See those four files for the tokens this reuses.
//
// Two fields that already existed in data/services/data.js but were never
// rendered are now on screen: `eyebrow` (small tag above the heading — the
// same slot HeroSlider/WhyChooseUs both give their sections) and `points`
// (the three-line trust list that made this section thin without them).
// Nothing invented — both were already wired in through the `brief` object,
// just unused.
const NAVY = "5, 12, 26";
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

          <h3 className="hp-brief-projects-title" id="hp-projects-title">
            من أعمالنا
          </h3>
        </div>

        <figure className="hp-brief-media">
          <span className="hp-brief-glow" aria-hidden="true" />
          <img src={media.src} alt={media.alt} width="624" height="387" />
        </figure>
      </div>

      <style jsx>{`
        .hp-brief {
          background: linear-gradient(180deg, #030916 0%, #050c1a 100%);
          padding: clamp(56px, 7vw, 96px) 0 0;
          color: #fff;
          font-family: "Cairo", sans-serif;
        }
        .hp-brief-inner {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          direction: ltr;
          align-items: center;
          gap: clamp(28px, 4vw, 64px);
        }
        .hp-brief-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-block: 20px;
          text-align: right;
          min-width: 0;
        }
        .hp-brief-eyebrow {
          display: inline-block;
          font-family: "Cairo", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: rgb(${CYAN});
          margin-bottom: 14px;
          letter-spacing: 0.2px;
        }
        .hp-brief-text h3 {
          font: 800 clamp(28px, 3.4vw, 46px)/1.4 "Cairo", sans-serif;
          letter-spacing: -0.6px;
          color: #fff;
          margin: 0 0 18px;
          max-width: 540px;
          text-wrap: balance;
        }
        .hp-brief-text .hp-brief-projects-title {
          font: 800 20px/1.5 "Cairo", sans-serif;
          letter-spacing: normal;
          margin: 30px 0 0;
          color: #fff;
        }
        .hp-brief-text p {
          font-size: clamp(15px, 1.35vw, 17px);
          line-height: 1.95;
          color: rgba(255, 255, 255, 0.72);
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
          color: rgba(255, 255, 255, 0.86);
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
        .hp-brief-cta :global(.default-btn) {
          font-family: "Cairo", sans-serif;
        }
        .hp-brief-cta :global(.hp-brief-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 12px 26px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: transparent;
          color: #fff;
          font: 700 14px/1.6 "Cairo", sans-serif;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .hp-brief-cta :global(.hp-brief-btn.is-ghost:hover) {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.4);
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
          background: #0d1a30;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 50px -24px rgba(${NAVY}, 0.75);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hp-brief-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(
            60% 55% at 88% 12%,
            rgba(${CYAN}, 0.22),
            transparent 62%
          );
        }
        .hp-brief-media img {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          border-block: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 767px) {
          .hp-brief-inner {
            grid-template-columns: 1fr;
            gap: 24px;
            width: calc(100% - 32px);
          }
          .hp-brief-text {
            padding: 0;
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
