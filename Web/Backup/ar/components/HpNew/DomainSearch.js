import React from "react";
import { domainSearch } from "../../data/home-new/data";

// Domain search strip — sits directly under the hero.
//
// A real <form method="get">, not a JS handler: it works with JavaScript off,
// needs no state, and the browser builds the WHMCS query string for us. The
// hidden inputs are what WHMCS expects alongside the query
// (cart.php?a=add&domain=register&query=...).
//
// ⚠️ The target host in data/home-new/data.js is a PLACEHOLDER — see the
// comment there. Everything else about this form is correct.
//
// Button placement: on the RIGHT, as drawn in the sketch (user's decision,
// 2026-09-03). Worth knowing when the design pass lands — in RTL the caret
// starts at the right edge, so the button sits where typing begins. It is
// given a clear gap and a contrasting button so the controls read separately.
//
// Near-black navy search strip, pill field and a subtle traveling border light.

const DomainSearch = ({ config = domainSearch }) => {
  const { action, hidden = {}, queryParam, label, placeholder, buttonLabel } =
    config;

  return (
    <section className="hp-domain" id="domain">
      <div className="hp-domain-inner">
        <form
          className="hp-domain-form"
          method="get"
          action={action}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Object.entries(hidden).map(([name, value]) => (
            <input key={name} type="hidden" name={name} value={value} />
          ))}

          <label className="hp-domain-label" htmlFor="hp-domain-input">
            {label}
          </label>

          {/* dir="ltr" on the input only: domain names are Latin, and typing
              them into an RTL field puts the caret and the dots in the wrong
              order. The strip around it stays RTL. */}
          <div className="hp-domain-field">
            <svg className="hp-domain-light" width="100%" height="100%" aria-hidden="true">
              <rect className="hp-domain-light-glow" width="100%" height="100%" rx="28" pathLength="100" />
              <rect className="hp-domain-light-edge" width="100%" height="100%" rx="28" pathLength="100" />
            </svg>
          <input
            id="hp-domain-input"
            className="hp-domain-input"
            type="text"
            name={queryParam}
            dir="ltr"
            required
            autoComplete="off"
            spellCheck="false"
            placeholder={placeholder}
          />
          </div>

          <button type="submit" className="default-btn hp-domain-btn">
            <svg
              className="hp-domain-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
            <span>{buttonLabel}</span>
          </button>
        </form>
      </div>

      <style jsx>{`
        .hp-domain {
          background: #030916;
          border-block-start: 1px solid rgba(149, 185, 231, 0.08);
          color: #fff;
        }
        .hp-domain-inner {
          width: calc(100% - 88px);
          margin-inline-start: 24px;
          margin-inline-end: 64px;
        }
        .hp-domain-form {
          display: flex;
          direction: ltr;
          align-items: stretch;
          gap: 12px;
          padding-block: 16px;
        }
        /* Visually hidden, still read aloud. The placeholder is not a label. */
        .hp-domain-label {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .hp-domain-field {
          position: relative;
          isolation: isolate;
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          border-radius: 28px;
          background: #071224;
          box-shadow: inset 0 0 0 1px #1a2940;
        }
        .hp-domain-light {
          position: absolute;
          inset: 0;
          overflow: visible;
          z-index: 1;
          pointer-events: none;
          border-radius: inherit;
        }
        .hp-domain-light rect {
          fill: none;
          stroke: #1dd3f8;
          stroke-dasharray: 7 93;
          stroke-linecap: round;
          animation: hp-domain-orbit 9s linear infinite;
        }
        .hp-domain-light-glow {
          stroke-width: 8px;
          filter: blur(6px);
          opacity: 0.8;
        }
        .hp-domain-light-edge {
          stroke-width: 3px;
          filter: blur(1.5px);
          opacity: 0.7;
        }
        @keyframes hp-domain-orbit {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }
        .hp-domain-input {
          position: relative;
          width: 100%;
          min-width: 0;
          min-height: 54px;
          border: 0;
          border-radius: inherit;
          background: #071224;
          padding: 12px 24px;
          font-family: "Cairo", sans-serif;
          font-size: 16px;
          color: #edf4ff;
          caret-color: #b8daff;
          transition: background-color 0.2s ease;
        }
        .hp-domain-input::placeholder {
          color: #a4b3ca;
          opacity: 1;
          direction: rtl;
          text-align: right;
        }
        .hp-domain-input:hover {
          background: #071224;
        }
        .hp-domain-input:focus {
          background: #071224;
          outline: 2px solid #fff;
          outline-offset: 2px;
        }
        .hp-domain-btn {
          flex: 0 0 auto;
          min-width: 148px;
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          order: 0;
          direction: rtl;
          border: 0;
          font-family: "Cairo", sans-serif;
          font-size: 16px;
          font-weight: 700;
          padding: 14px 28px;
        }
        .hp-domain-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }
        .hp-domain-icon {
          flex: 0 0 auto;
        }
        @media (max-width: 767px) {
          .hp-domain-inner {
            width: calc(100% - 32px);
            margin-inline: 16px;
          }
          .hp-domain-form {
            gap: 8px;
          }
          .hp-domain-input {
            padding-inline: 16px;
          }
          .hp-domain-btn {
            min-width: 80px;
            padding-inline: 16px;
            gap: 6px;
            font-size: 14px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-domain-light rect {
            animation: none;
          }
          .hp-domain-input,
          .hp-domain-btn,
          .hp-domain-btn::before,
          .hp-domain-btn::after {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default DomainSearch;
