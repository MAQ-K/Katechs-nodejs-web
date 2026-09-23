import React from "react";
import Link from "next/link";
import { webServices } from "../../data/home-new/data";

// Web services, block 1 of 3 — the bento's top row: a white brief card on the
// physical LEFT, a floating 500x420 project shot on the physical RIGHT.
//
// Talk-LEFT / image-RIGHT is per the user's sketch (2026-09-03) and the design.
// It is the mirror of components/Services/ServiceArea/Overview.js, which puts
// the text on the RIGHT so an Arabic reader meets the headline first. The user
// chose the sketch. Noted so nobody "fixes" it back thinking it was a slip.
// The row carries direction:ltr for exactly that reason — the card is the first
// child and must land physically first; every text node inside is dir="rtl".
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Matches Homepage.dc.html. What changed from the revision before it:
//   • the copy sits on a white rounded card (was bare on the band);
//   • the CTA pair is a cyan→periwinkle gradient pill plus a 52px circular
//     WhatsApp button (was the global .default-btn plus a ghost text link);
//   • the three long `overview.points` list items became three chips, fed by
//     webServices.briefChips — see the note there;
//   • the image floats on an 11s loop and is capped at 500px.
//
// Cyan needs care on light: #1dd3f8 on #fff is ~1.7:1, nowhere near AA. The
// accent is a FILL behind dark text (#0a1c2b on the gradient pill), never small
// cyan text on white.
//
// The band background belongs to WebServicesScreen, not here — one band for all
// three blocks, so they cannot seam against each other.
export default function WebServicesBrief({
  brief = webServices.brief,
  chips = webServices.briefChips,
}) {
  const { eyebrow, heading, body, cta, media } = brief;
  return (
    <div className="hp-brief">
      <div className="hp-brief-card" dir="rtl">
        {eyebrow && <span className="hp-brief-eyebrow">{eyebrow}</span>}
        <h3>{heading}</h3>
        <p>{body}</p>

        <div className="hp-brief-cta">
          <Link href={cta.href} className="hp-brief-btn">
            {cta.label}
          </Link>
          <a
            href="https://wa.me/+201555085828"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تحدث معنا"
            className="hp-brief-icon-btn"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
              <path d="M3 6.5l9 6 9-6" />
            </svg>
          </a>
        </div>

        {chips?.length > 0 && (
          <div className="hp-brief-chips">
            {chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        )}
      </div>

      <figure className="hp-brief-media">
        <img src={media.src} alt={media.alt} width="500" height="420" />
      </figure>

      <style jsx>{`
        .hp-brief {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
          /* LTR so the card is physically first — see the header note. */
          direction: ltr;
          gap: 10px;
          align-items: stretch;
        }
        .hp-brief-card {
          background: #fff;
          border-radius: 10px;
          padding: clamp(28px, 3.4vw, 48px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: right;
          min-width: 0;
          min-height: 420px;
        }
        .hp-brief-eyebrow {
          display: inline-block;
          font: 700 12px / 1 "Cairo", system-ui, sans-serif;
          letter-spacing: 0.14em;
          color: #8a8a8a;
          margin-bottom: 22px;
        }
        .hp-brief-card h3 {
          font: 800 clamp(32px, 3.6vw, 52px) / 1.28 "Cairo", system-ui, sans-serif;
          color: #111;
          margin: 0 0 18px;
          text-wrap: balance;
        }
        .hp-brief-card p {
          font-size: 16px;
          line-height: 1.85;
          color: #5b5b5b;
          margin: 0 0 26px;
          max-width: 46ch;
        }
        .hp-brief-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }
        /* next/link renders a bare <a>; styled-jsx only scopes elements it
           renders itself, so these two need :global() or they fall back to
           Bootstrap blue. */
        .hp-brief-cta :global(.hp-brief-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 16px 34px;
          border-radius: 999px;
          background: linear-gradient(90deg, #1dd3f8, #8b9bff);
          color: #0a1c2b;
          font: 700 15px / 1 "Cairo", system-ui, sans-serif;
          transition: filter 0.3s ease;
        }
        .hp-brief-cta :global(.hp-brief-btn:hover) {
          filter: brightness(1.06);
          color: #0a1c2b;
        }
        .hp-brief-cta :global(.hp-brief-icon-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          background: #fff;
          color: #111;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .hp-brief-cta :global(.hp-brief-icon-btn:hover) {
          background: #111;
          color: #fff;
        }
        .hp-brief-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 26px;
        }
        .hp-brief-chips span {
          border: 1px solid #ececec;
          border-radius: 999px;
          padding: 8px 16px;
          font: 600 13px / 1 "Cairo", system-ui, sans-serif;
          color: #444;
        }
        .hp-brief-media {
          position: relative;
          margin: 0;
          width: 100%;
          max-width: 500px;
          justify-self: end;
          aspect-ratio: 500 / 420;
          animation: hpFloatSlow 11s ease-in-out infinite;
          border-radius: 10px;
          overflow: hidden;
          background: #ededed;
        }
        .hp-brief-media img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @keyframes hpFloatSlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-brief-media {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
