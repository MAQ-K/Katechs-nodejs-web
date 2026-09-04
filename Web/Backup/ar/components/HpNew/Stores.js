import React, { useId, useState } from "react";
import Link from "next/link";
import { stores } from "../../data/home-new/data";

// Stores (e-commerce) — a three-tab pill row over the tab's content
// (Homepage/structure-drafts/Ecommerce .png).
//
// "this is the part of ecommerce from web services page": every string here
// comes from the `ecommerce` area of data/services/data.js via
// data/home-new/data.js. Nothing new was written and nothing was taken from the
// homepage's own components/PricingWebsite/EcommercePlatforms.js, which sells a
// different list (Salla / Shopify / EasyOrder / dropshipping).
//
// The sketch shows a pill row over large boxes and left the rest to us. The
// area content splits into exactly three views, and the boxes one is placed
// FIRST so the section at rest is what the sketch draws:
//   1. نبني ونشغّل   -> the wide cards, with their images       <- the sketch
//   2. رحلة الشراء   -> the four-step journey and its result
//   3. ما تديره بنفسك -> the six capabilities
//
// Each panel renders its own shape, keyed off `kind`, rather than three
// components — they share the tab chrome and differ only inside.
//
// STRUCTURE PASS: greyscale.

const Stores = ({ content = stores }) => {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabs = content.tabs;

  if (!tabs || tabs.length === 0) return null;

  const onKeyDown = (event) => {
    // Horizontal tabs, so RTL flips which arrow means "next" — ArrowLeft moves
    // forward because the next tab sits to the left. Read from document.dir
    // rather than assumed, same as WebServicesPlans.js.
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
    <div className="hp-store">
      <div className="hp-store-inner">
        <div className="hp-store-head">
          <span className="hp-store-eyebrow">{content.intro.eyebrow}</span>
          <h2>{content.intro.heading}</h2>
          <p>{content.intro.body}</p>
        </div>

        <div
          className="hp-store-tabs"
          role="tablist"
          aria-label="التجارة الإلكترونية"
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              id={base + "-tab-" + i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={base + "-panel-" + i}
              tabIndex={i === active ? 0 : -1}
              className={"hp-store-tab" + (i === active ? " is-active" : "")}
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
          {tab.kind === "cards" && (
            <div className="hp-store-cards">
              {tab.cards.map((card) => (
                <article className="hp-store-card" key={card.id}>
                  <span className="hp-store-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <ul>
                    {card.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Link href={card.link.href} className="hp-store-link">
                    {card.link.label}
                  </Link>
                  <div className="hp-store-shot">
                    <img
                      src={card.image}
                      alt={card.alt}
                      width={card.imageW}
                      height={card.imageH}
                    />
                  </div>
                </article>
              ))}
            </div>
          )}

          {tab.kind === "journey" && (
            /* An ordered list because it IS a sequence — product, page, cart,
               checkout. In RTL it reads right to left with no mirroring needed;
               the arrows are drawn by CSS on the list, not typed into the copy. */
            <div className="hp-store-journey">
              <ol>
                {tab.steps.map((s) => (
                  <li key={s.id}>
                    <span className="hp-store-step-icon">
                      <i className={s.icon} aria-hidden="true" />
                    </span>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ol>
              <div className="hp-store-result">
                <i className={tab.result.icon} aria-hidden="true" />
                <strong>{tab.result.title}</strong>
                <span>{tab.result.line}</span>
                <span className="hp-store-ref">{tab.result.ref}</span>
              </div>
            </div>
          )}

          {tab.kind === "capabilities" && (
            <div className="hp-store-caps">
              {tab.items.map((c) => (
                <div className="hp-store-cap" key={c.id}>
                  <span className="hp-store-cap-icon">
                    <i className={c.icon} aria-hidden="true" />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hp-store-cta">
          <h3>{content.cta.heading}</h3>
          <p>{content.cta.note}</p>
          <Link href={content.cta.action.href} className="hp-store-btn">
            {content.cta.action.label}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hp-store {
          padding-block: clamp(56px, 8vw, 104px);
          background: #f7f7f7;
        }
        .hp-store-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
        }
        .hp-store-head {
          text-align: center;
          max-width: 62ch;
          margin-inline: auto;
          margin-bottom: 32px;
        }
        .hp-store-eyebrow {
          display: inline-block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #666;
          margin-bottom: 12px;
        }
        .hp-store-head h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          color: #111;
          margin: 0 0 12px;
        }
        .hp-store-head p {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.9;
          color: #666;
          margin: 0;
        }
        .hp-store-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 32px;
          padding: 6px;
          border: 1px solid #dcdcdc;
          border-radius: 999px;
          background: #fff;
          width: fit-content;
          margin-inline: auto;
        }
        .hp-store-tab {
          border: 0;
          background: transparent;
          border-radius: 999px;
          padding: 11px 24px;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #555;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .hp-store-tab:hover {
          color: #111;
        }
        .hp-store-tab.is-active {
          background: #111;
          color: #fff;
        }

        /* --- tab 1: the wide cards --- */
        .hp-store-cards {
          display: grid;
          /* auto-fit, not a fixed 1fr 1fr: storePlans is shared data on the
             services page and its length changes — it went from two cards to
             three on 2026-09-04 while this section was being built. A hard two
             columns wraps the third onto a lonely row. */
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          align-items: stretch;
        }
        .hp-store-card {
          display: flex;
          flex-direction: column;
          border: 1px solid #dcdcdc;
          border-radius: 16px;
          padding: 28px 26px 0;
          background: #fff;
          overflow: hidden;
        }
        .hp-store-tag {
          align-self: flex-start;
          border: 1px solid #dcdcdc;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 700;
          color: #555;
          margin-bottom: 14px;
        }
        .hp-store-card h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(19px, 2.2vw, 24px);
          font-weight: 700;
          color: #111;
          margin: 0 0 10px;
        }
        .hp-store-card p {
          font-size: 15px;
          line-height: 1.95;
          color: #555;
          margin: 0 0 16px;
        }
        .hp-store-card ul {
          list-style: none;
          margin: 0 0 18px;
          padding: 0;
          display: grid;
          gap: 8px;
        }
        .hp-store-card li {
          font-size: 14px;
          line-height: 1.7;
          color: #444;
        }
        .hp-store-card :global(.hp-store-link) {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 5px;
          margin-bottom: 24px;
        }
        .hp-store-shot {
          /* Bleeds to the card's own edges: the padding above is on the card,
             so the image is pulled back out to meet the border. */
          margin-inline: -26px;
          margin-block-start: auto;
          border-top: 1px solid #ececec;
        }
        .hp-store-shot img {
          display: block;
          width: 100%;
          height: auto;
        }

        /* --- tab 2: the buying journey --- */
        .hp-store-journey {
          display: grid;
          gap: 20px;
          justify-items: center;
        }
        .hp-store-journey ol {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .hp-store-journey li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 22px;
          border: 1px solid #dcdcdc;
          border-radius: 14px;
          background: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #333;
        }
        .hp-store-step-icon {
          font-size: 22px;
          line-height: 1;
          color: #111;
        }
        .hp-store-result {
          display: grid;
          justify-items: center;
          gap: 4px;
          padding: 24px 32px;
          border: 2px solid #111;
          border-radius: 16px;
          background: #fff;
          text-align: center;
        }
        .hp-store-result i {
          font-size: 30px;
          color: #111;
        }
        .hp-store-result strong {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 18px;
          color: #111;
        }
        .hp-store-result span {
          font-size: 14px;
          color: #666;
        }
        .hp-store-ref {
          font-size: 13px !important;
          color: #999 !important;
        }

        /* --- tab 3: capabilities --- */
        .hp-store-caps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .hp-store-cap {
          border: 1px solid #dcdcdc;
          border-radius: 14px;
          padding: 24px 22px;
          background: #fff;
        }
        .hp-store-cap-icon {
          display: inline-flex;
          font-size: 26px;
          line-height: 1;
          color: #111;
          margin-bottom: 12px;
        }
        .hp-store-cap h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #111;
          margin: 0 0 6px;
        }
        .hp-store-cap p {
          font-size: 14px;
          line-height: 1.8;
          color: #666;
          margin: 0;
        }

        /* --- closing CTA --- */
        .hp-store-cta {
          margin-top: 40px;
          text-align: center;
          padding: 32px 24px;
          border: 1px solid #dcdcdc;
          border-radius: 16px;
          background: #fff;
        }
        .hp-store-cta h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(19px, 2.2vw, 26px);
          font-weight: 700;
          color: #111;
          margin: 0 0 8px;
        }
        .hp-store-cta p {
          font-size: 15px;
          color: #666;
          margin: 0 0 20px;
        }
        .hp-store-cta :global(.hp-store-btn) {
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
        .hp-store-cta :global(.hp-store-btn:hover) {
          opacity: 0.85;
          color: #fff;
        }

        @media (max-width: 991px) {
          .hp-store-inner {
            width: calc(100% - 32px);
          }
          .hp-store-cards {
            grid-template-columns: 1fr;
          }
          .hp-store-caps {
            grid-template-columns: 1fr 1fr;
          }
          .hp-store-tabs {
            width: 100%;
            border-radius: 14px;
          }
          .hp-store-tab {
            flex: 1 1 auto;
            padding: 10px 14px;
            font-size: 14px;
          }
        }
        @media (max-width: 575px) {
          .hp-store-caps {
            grid-template-columns: 1fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-store-tab,
          .hp-store-cta :global(.hp-store-btn) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Stores;
