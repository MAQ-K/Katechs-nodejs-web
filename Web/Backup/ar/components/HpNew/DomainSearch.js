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
// given a hard min-width and a divider so the two do not read as one field.
//
// STRUCTURE PASS: greyscale.

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

          <button type="submit" className="hp-domain-btn">
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
          background: #fff;
          border-block: 1px solid #d9d9d9;
        }
        .hp-domain-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
        }
        .hp-domain-form {
          display: flex;
          align-items: stretch;
          min-height: 84px;
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
        .hp-domain-input {
          flex: 1 1 auto;
          min-width: 0;
          border: 0;
          background: transparent;
          padding-inline: 20px;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(15px, 1.7vw, 20px);
          color: #111;
        }
        .hp-domain-input::placeholder {
          color: #8a8a8a;
        }
        .hp-domain-input:focus {
          outline: 2px solid #111;
          outline-offset: -2px;
        }
        .hp-domain-btn {
          flex: 0 0 auto;
          /* Wide enough that the button reads as its own cell rather than as
             part of the field it sits beside. */
          min-width: 168px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          /* Button sits at the START edge — the RIGHT, in RTL — as drawn in the
             sketch. The order property rather than DOM order, so the tab
             sequence stays the sensible one: type in the field, then reach the
             submit. With two controls and a real label, that is the right trade. */
          order: -1;
          /* The divider from the sketch. Its own edge, not a gap. */
          border: 0;
          border-inline-end: 1px solid #d9d9d9;
          background: #f2f2f2;
          color: #111;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          padding-inline: 24px;
          transition: background 0.25s ease;
        }
        .hp-domain-btn:hover {
          background: #e6e6e6;
        }
        .hp-domain-icon {
          flex: 0 0 auto;
        }
        @media (max-width: 767px) {
          .hp-domain-inner {
            width: calc(100% - 32px);
          }
          .hp-domain-form {
            /* Side by side stops working long before the button gets small
               enough to be worth keeping inline. */
            flex-direction: column;
            min-height: 0;
            padding-block: 16px;
            gap: 12px;
          }
          .hp-domain-input {
            padding-inline: 0;
            padding-block: 14px;
            border-bottom: 1px solid #d9d9d9;
          }
          .hp-domain-btn {
            /* Stacked, the button belongs under the field it submits. */
            order: 0;
            border-inline-end: 0;
            min-height: 52px;
            border-radius: 8px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-domain-btn {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default DomainSearch;
