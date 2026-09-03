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
// STRUCTURE PASS: greyscale.

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
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <Link href={plan.cta.href} className="hp-plan-cta">
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
          background: #fff;
        }
        .hp-plans-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
        }
        .hp-plans-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .hp-plans-tab {
          border: 1px solid #d9d9d9;
          background: #fff;
          border-radius: 10px;
          padding: 12px 26px;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #555;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .hp-plans-tab:hover {
          background: #f2f2f2;
          color: #111;
        }
        .hp-plans-tab.is-active {
          background: #111;
          border-color: #111;
          color: #fff;
        }
        .hp-plans-head {
          text-align: center;
          max-width: 62ch;
          margin-inline: auto;
          margin-bottom: 40px;
        }
        .hp-plans-head h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: #111;
          margin: 0 0 12px;
        }
        .hp-plans-head p {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.9;
          color: #666;
          margin: 0;
        }
        .hp-plans-empty {
          text-align: center;
          color: #8a8a8a;
          font-size: 15px;
          padding-block: 48px;
          border: 1px dashed #d9d9d9;
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
          border: 1px solid #d9d9d9;
          border-radius: 16px;
          padding: 32px 26px;
          background: #fff;
          display: flex;
          flex-direction: column;
        }
        .hp-plan.is-popular {
          border-color: #111;
          border-width: 2px;
        }
        .hp-plan-badge {
          position: absolute;
          inset-block-start: -12px;
          inset-inline-start: 26px;
          background: #111;
          color: #fff;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 700;
        }
        .hp-plan h4 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0 0 8px;
        }
        .hp-plan-summary {
          font-size: 14px;
          line-height: 1.8;
          color: #666;
          margin: 0 0 20px;
        }
        .hp-plan-price {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #111;
          margin: 0 0 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
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
          font-size: 14px;
          line-height: 1.7;
          color: #444;
        }
        .hp-plan-cta {
          display: block;
          text-align: center;
          padding: 13px 20px;
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
        .hp-plan-cta:hover {
          opacity: 0.85;
          color: #fff;
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
          .hp-plans-tab,
          .hp-plan-cta {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WebServicesPlans;
