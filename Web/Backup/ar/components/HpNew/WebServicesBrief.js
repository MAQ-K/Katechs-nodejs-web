import React from "react";
import Link from "next/link";
import { webServices } from "../../data/home-new/data";

// Web services, block 1 of 3 — the brief. Talk on one side, a real client
// screenshot on the other.
//
// Content is businessWebsites.overview from data/services/data.js, reused
// wholesale rather than copied: same eyebrow, heading, body, three points and
// two buttons the services page already uses.
//
// ⚠️ ORDER IS DELIBERATE AND IS THE MIRROR OF THE SERVICES PAGE.
// The sketch puts the talk on the LEFT and the image on the RIGHT, and the user
// confirmed that over the alternative (2026-09-03). components/Services/
// ServiceArea/Overview.js does the opposite on purpose — text on the right, so
// an Arabic reader meets the headline before the image. Both are intentional;
// do not "fix" this one to match that one without asking.
//
// The text column is FIRST in the DOM, which in the RTL flow would put it on
// the right — so the visual swap is done with `order`, leaving reading order
// and tab order headline-first either way.
//
// STRUCTURE PASS: greyscale.

const WebServicesBrief = ({ brief = webServices.brief }) => {
  const { eyebrow, heading, body, points, cta, secondary, media } = brief;

  return (
    <div className="hp-brief">
      <div className="hp-brief-inner">
        <div className="hp-brief-text">
          <span className="hp-brief-eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{body}</p>

          <ul className="hp-brief-list">
            {points.map((point) => (
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

          <div className="hp-brief-cta">
            <Link href={cta.href} className="hp-brief-btn">
              {cta.label}
            </Link>
            <Link href={secondary.href} className="hp-brief-btn is-ghost">
              {secondary.label}
            </Link>
          </div>
        </div>

        <div className="hp-brief-media">
          <img src={media.src} alt={media.alt} />
        </div>
      </div>

      <style jsx>{`
        .hp-brief {
          padding-block: clamp(56px, 8vw, 104px);
          background: #fff;
        }
        .hp-brief-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(32px, 5vw, 72px);
        }
        .hp-brief-text {
          /* Talk on the LEFT, image on the RIGHT — see the header note. The DOM
             keeps the headline first; only the visual columns swap. */
          order: 2;
        }
        .hp-brief-media {
          order: 1;
        }
        .hp-brief-eyebrow {
          display: inline-block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #666;
          margin-bottom: 12px;
        }
        .hp-brief-text h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          line-height: 1.35;
          color: #111;
          margin: 0 0 16px;
        }
        .hp-brief-text p {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 2;
          color: #555;
          margin: 0 0 24px;
        }
        .hp-brief-list {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .hp-brief-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.8;
          color: #333;
        }
        .hp-brief-list svg {
          flex: 0 0 auto;
          margin-top: 5px;
          color: #111;
        }
        .hp-brief-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        /* :global() because next/link renders these <a>s — styled-jsx scopes
           only DOM elements it renders itself, so a bare .hp-brief-btn rule
           never matches and the buttons fall back to Bootstrap's blue link.
           Anchored on .hp-brief-cta, which IS scoped, so nothing leaks. */
        .hp-brief-cta :global(.hp-brief-btn) {
          display: inline-block;
          padding: 13px 30px;
          border-radius: 10px;
          border: 1px solid #111;
          background: #111;
          color: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.25s ease;
        }
        .hp-brief-cta :global(.hp-brief-btn:hover) {
          opacity: 0.85;
          color: #fff;
        }
        .hp-brief-cta :global(.hp-brief-btn.is-ghost) {
          background: transparent;
          color: #111;
        }
        .hp-brief-cta :global(.hp-brief-btn.is-ghost:hover) {
          background: #f2f2f2;
          color: #111;
          opacity: 1;
        }
        .hp-brief-media {
          border: 1px solid #d9d9d9;
          border-radius: 16px;
          overflow: hidden;
          background: #fafafa;
        }
        .hp-brief-media img {
          display: block;
          width: 100%;
          height: auto;
        }
        @media (max-width: 991px) {
          .hp-brief-inner {
            width: calc(100% - 32px);
            grid-template-columns: 1fr;
          }
          /* Stacked, the headline leads — the side-by-side swap stops
             meaning anything once there is only one column. */
          .hp-brief-text {
            order: 1;
          }
          .hp-brief-media {
            order: 2;
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
};

export default WebServicesBrief;
