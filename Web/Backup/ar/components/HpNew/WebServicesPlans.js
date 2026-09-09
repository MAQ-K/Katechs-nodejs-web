import React, { useId, useState } from "react";
import Link from "next/link";
import { webServices } from "../../data/home-new/data";

// Web services, block 3 of 3 — three tabs, each with its own heading, blurb and
// three plan cards. The tabs are the three kinds of web service: business
// sites, WordPress, custom development.
//
// Plan data comes from data/services/data.js (via data/home-new/data.js) so the
// homepage and the services page can never quote different packages.
//
// PRICES READ "—". That is correct and deliberate: data/services/data.js
// carries them as TODO(prices) with an explicit note that published prices are
// a commitment to customers and must come from the business, never inferred.
// The "custom" tab has no plans at all yet and renders an empty state.
//
// Real ARIA tab semantics (role=tablist/tab/tabpanel, roving tabindex, arrow
// keys). A row of buttons that merely swaps a div is not a tab set to a screen
// reader, and this is a genuine tab pattern.
//
// VISUAL PASS (2026-09-09): moved off the light/monochrome palette onto the
// hp-new navy/cyan theme this closes out — bridges from the brief/marquee
// blocks above (#050c1a) into AppServices' navy (#0a1628) below, so the whole
// "web services" run reads as one continuous dark section instead of a light
// pricing table dropped into it. Tab bar follows the filed
// `general-tabbed-product-cards-hostinger.md` idea (pill row, one filled
// active pill) with the active fill swapped for the brand cyan the rest of
// hp-new already uses instead of that reference's black. The "popular" plan
// gets the one solid-cyan CTA on the row — the rest stay outline — so the
// recommended card is the one visual sell, same convention as any SaaS
// pricing table (WhyChooseUs/ HeroSlider use the identical restraint: cyan
// used to mark ONE thing, never as a wash).
const NAVY = "5, 12, 26";
const CYAN = "29, 211, 248";

const WebServicesPlans = ({ tabs = webServices.plansTabs }) => {
  const [active, setActive] = useState(0);
  const base = useId();

  if (!tabs || tabs.length === 0) return null;

  const onKeyDown = (event) => {
    // Arrow keys move between tabs. In RTL, ArrowLeft moves FORWARD, because
    // the next tab sits to the left. Read from document.dir rather than
    // assumed, so this still behaves if the page is ever rendered LTR.
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

  return (
    <div className="hp-plans">
      <div className="hp-plans-inner">
        <div
          className="hp-plans-tabs"
          role="tablist"
          aria-label="أنواع خدمات الويب"
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              id={base + "-tab-" + i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={base + "-panel-" + i}
              // Roving tabindex: one tab stop for the whole set, then arrows.
              tabIndex={i === active ? 0 : -1}
              className={"hp-plans-tab" + (i === active ? " is-active" : "")}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          id={base + "-panel-" + active}
          role="tabpanel"
          aria-labelledby={base + "-tab-" + active}
          tabIndex={0}
        >
          <div className="hp-plans-head">
            <h3>{tab.heading}</h3>
            <p>{tab.note}</p>
          </div>

          {tab.plans.length === 0 ? (
            <p className="hp-plans-empty">الباقات لهذه الخدمة قيد الإعداد.</p>
          ) : (
            <div className="hp-plans-grid">
              {tab.plans.map((plan) => (
                <article
                  key={plan.id}
                  className={"hp-plan" + (plan.isPopular ? " is-popular" : "")}
                >
                  {plan.badge && (
                    <span className="hp-plan-badge">{plan.badge}</span>
                  )}
                  <h4>{plan.name}</h4>
                  <p className="hp-plan-summary">{plan.summary}</p>
                  <p className="hp-plan-price">{plan.price}</p>

                  <ul className="hp-plan-features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <i className="bx bx-check" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.cta.href}
                    className={
                      "hp-plan-cta" + (plan.isPopular ? " is-solid" : "")
                    }
                  >
                    {plan.cta.text}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hp-plans {
          padding-block: clamp(56px, 8vw, 104px);
          background: linear-gradient(180deg, #050c1a 0%, #0a1628 100%);
        }
        .hp-plans-inner {
          width: min(1180px, 100% - 48px);
          margin-inline: auto;
        }
        .hp-plans-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 44px;
          flex-wrap: wrap;
        }
        .hp-plans-tab {
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: transparent;
          border-radius: 999px;
          padding: 12px 28px;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.72);
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease,
            border-color 0.25s ease;
        }
        .hp-plans-tab:hover {
          border-color: rgba(255, 255, 255, 0.36);
          color: #fff;
        }
        .hp-plans-tab:focus-visible {
          outline: 2px solid rgb(${CYAN});
          outline-offset: 3px;
        }
        .hp-plans-tab.is-active {
          background: rgb(${CYAN});
          border-color: rgb(${CYAN});
          color: rgb(${NAVY});
        }
        .hp-plans-head {
          text-align: center;
          max-width: 62ch;
          margin-inline: auto;
          margin-bottom: 44px;
        }
        .hp-plans-head h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
        }
        .hp-plans-head p {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.68);
          margin: 0;
        }
        .hp-plans-empty {
          text-align: center;
          color: rgba(255, 255, 255, 0.55);
          font-size: 15px;
          padding-block: 48px;
          border: 1px dashed rgba(255, 255, 255, 0.22);
          border-radius: 14px;
        }
        .hp-plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        .hp-plan {
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 32px 26px;
          background: #0d1a30;
          box-shadow: 0 20px 50px -28px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
        }
        .hp-plan.is-popular {
          border-color: rgb(${CYAN});
          border-width: 2px;
          box-shadow: 0 24px 56px -24px rgba(${CYAN}, 0.3);
        }
        .hp-plan-badge {
          position: absolute;
          inset-block-start: -12px;
          inset-inline-start: 26px;
          background: rgb(${CYAN});
          color: rgb(${NAVY});
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 700;
        }
        .hp-plan h4 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
        }
        .hp-plan-summary {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.62);
          margin: 0 0 20px;
        }
        .hp-plan-price {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hp-plan-features {
          list-style: none;
          margin: 0 0 24px;
          padding: 0;
          display: grid;
          gap: 10px;
          align-content: start;
          /* Grows so the CTA lands on the card's bottom edge — three cards with
             different feature counts still line their buttons up. */
          flex: 1 1 auto;
        }
        .hp-plan-features li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.78);
        }
        .hp-plan-features li i {
          flex: 0 0 auto;
          margin-top: 1px;
          font-size: 17px;
          color: rgb(${CYAN});
        }
        /* :global() because next/link renders this <a> — styled-jsx scopes only
           DOM elements it renders itself, so a bare .hp-plan-cta rule never
           matches and the CTA falls back to Bootstrap's blue link. Anchored on
           .hp-plan, which IS scoped, so nothing leaks. */
        .hp-plan :global(.hp-plan-cta) {
          display: block;
          text-align: center;
          padding: 13px 20px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: transparent;
          color: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .hp-plan :global(.hp-plan-cta:hover) {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }
        .hp-plan :global(.hp-plan-cta.is-solid) {
          border-color: rgb(${CYAN});
          background: rgb(${CYAN});
          color: rgb(${NAVY});
        }
        .hp-plan :global(.hp-plan-cta.is-solid:hover) {
          background: rgba(${CYAN}, 0.86);
          color: rgb(${NAVY});
        }
        .hp-plan :global(.hp-plan-cta:focus-visible) {
          outline: 2px solid rgb(${CYAN});
          outline-offset: 3px;
        }
        @media (max-width: 991px) {
          .hp-plans-inner {
            width: calc(100% - 32px);
          }
          .hp-plans-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-plans-tab {
            transition: none;
          }
          .hp-plan :global(.hp-plan-cta) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WebServicesPlans;
