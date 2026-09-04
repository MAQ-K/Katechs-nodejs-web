import React, { useId, useState } from "react";
import Link from "next/link";
import { emailServices } from "../../data/home-new/data";

// Email services — three tabs down the SIDE, each panel with talk on top and a
// wide image beneath (Homepage/structure-drafts/email services section .png).
//
// Layout (user, 2026-09-04): boxes on the LEFT, content on the RIGHT — the
// opposite of where RTL puts them by default, so the columns are swapped with
// `order`. The DOM keeps tablist before tabpanel, which is what the ARIA
// pattern and the tab order require.
//
// The rail is the same height as the panel and its three boxes divide that
// height equally, so they run top to bottom rather than hugging their content.
//
// The three tabs are imported from data/emails/data.js, so the homepage cannot
// drift into offering a different set of products than the emails page.
//
// Real ARIA tab semantics with a VERTICAL orientation: aria-orientation tells a
// screen reader the arrow keys run up/down, and the handler matches — Up/Down,
// not Left/Right, which is what a side rail means.
//
// STRUCTURE PASS: greyscale.

const EmailServices = ({ content = emailServices }) => {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabs = content.tabs;

  if (!tabs || tabs.length === 0) return null;

  const onKeyDown = (event) => {
    // Vertical rail, so it is Up/Down. Direction-independent: unlike a
    // horizontal tab set, RTL does not flip which key means "next".
    let next = null;
    if (event.key === "ArrowDown") next = (active + 1) % tabs.length;
    else if (event.key === "ArrowUp") next = (active - 1 + tabs.length) % tabs.length;
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
    <div className="hp-mail">
      <div className="hp-mail-inner">
        <div className="hp-mail-head">
          <span className="hp-mail-eyebrow">{content.eyebrow}</span>
          <h2>{content.heading}</h2>
        </div>

        <div className="hp-mail-body">
          <div
            className="hp-mail-rail"
            role="tablist"
            aria-orientation="vertical"
            aria-label="أنواع البريد الإلكتروني"
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
                className={"hp-mail-tab" + (i === active ? " is-active" : "")}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                {/* Product logos, so they carry no alt text of their own —
                    the label right beside them already names the product. */}
                <img src={t.icon} alt="" aria-hidden="true" />
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          <div
            className="hp-mail-panel"
            id={base + "-panel-" + active}
            role="tabpanel"
            aria-labelledby={base + "-tab-" + active}
            tabIndex={0}
          >
            <div className="hp-mail-talk">
              <h3>{tab.label}</h3>
              <p>{tab.body}</p>

              {/* Real feature lines from this product's most inclusive plan on
                  the emails page — see data/home-new/data.js. Nothing here is
                  written for the homepage, so the two pages cannot disagree. */}
              {tab.points && tab.points.length > 0 && (
                <ul className="hp-mail-points">
                  {tab.points.map((p) => (
                    <li key={p}>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link href={content.cta.href} className="hp-mail-btn">
                {content.cta.label}
              </Link>
            </div>

            <div className="hp-mail-shot">
              <img src={tab.image.src} alt={tab.image.alt} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hp-mail {
          padding-block: clamp(56px, 8vw, 104px);
          background: #fff;
        }
        .hp-mail-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
        }
        .hp-mail-head {
          text-align: center;
          margin-bottom: 40px;
        }
        .hp-mail-eyebrow {
          display: inline-block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #666;
          margin-bottom: 12px;
        }
        .hp-mail-head h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .hp-mail-body {
          display: grid;
          /* The rail is the NARROW column and the panel the wide one. In RTL the
             first column lands on the right, so the columns are written
             panel-first and the order property below does the visual placing: the DOM
             keeps tablist before tabpanel, which is what the ARIA pattern and
             the tab order need. */
          grid-template-columns: 1fr minmax(220px, 300px);
          gap: clamp(20px, 3vw, 40px);
          /* stretch, not start: the rail has to be as tall as the panel so its
             three boxes can divide that height between them. */
          align-items: stretch;
        }
        /* Boxes on the LEFT, content on the RIGHT (user, 2026-09-04). In RTL
           order:2 is the left-hand column. */
        .hp-mail-rail {
          order: 2;
          display: grid;
          /* One equal row per tab, so the three boxes split the section's full
             height top to bottom instead of hugging their own content. */
          grid-auto-rows: 1fr;
          gap: 12px;
        }
        .hp-mail-panel {
          order: 1;
        }
        .hp-mail-tab {
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: start;
          padding: 18px 18px;
          border: 1px solid #d9d9d9;
          border-radius: 14px;
          background: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #444;
          cursor: pointer;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .hp-mail-tab:hover {
          background: #fafafa;
          color: #111;
        }
        .hp-mail-tab.is-active {
          border-color: #111;
          background: #111;
          color: #fff;
        }
        .hp-mail-tab img {
          flex: 0 0 auto;
          width: 26px;
          height: 26px;
          object-fit: contain;
          /* The logos are full colour on a dark active tab; a white ring keeps
             them legible without recolouring someone else's brand mark. */
          background: #fff;
          border-radius: 6px;
          padding: 3px;
        }
        .hp-mail-panel {
          border: 1px solid #d9d9d9;
          border-radius: 16px;
          padding: clamp(20px, 3vw, 32px);
          background: #fff;
          display: grid;
          gap: 24px;
        }
        .hp-mail-talk h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(19px, 2.2vw, 26px);
          font-weight: 700;
          color: #111;
          margin: 0 0 12px;
        }
        .hp-mail-talk p {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 2;
          color: #555;
          margin: 0 0 18px;
        }
        .hp-mail-points {
          list-style: none;
          margin: 0 0 22px;
          padding: 0;
          display: grid;
          gap: 10px;
        }
        .hp-mail-points li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(13px, 1.3vw, 15px);
          line-height: 1.8;
          color: #333;
        }
        .hp-mail-points svg {
          flex: 0 0 auto;
          margin-top: 4px;
          color: #111;
        }
        /* :global() because next/link renders the anchor — see
           components/HpNew/README.md #9. */
        .hp-mail-talk :global(.hp-mail-btn) {
          display: inline-block;
          padding: 12px 26px;
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
        .hp-mail-talk :global(.hp-mail-btn:hover) {
          opacity: 0.85;
          color: #fff;
        }
        .hp-mail-shot {
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          overflow: hidden;
          background: #fafafa;
        }
        .hp-mail-shot img {
          display: block;
          width: 100%;
          height: auto;
          /* A wide band, not 16/9: at 16/9 the image dominated the panel and
             pushed the text into a strip (user, 2026-09-04). Still a FIXED
             ratio, because the three source images are different shapes and the
             panel must not resize every time a tab is picked. */
          aspect-ratio: 2.6 / 1;
          /* The ratio alone is not enough: this panel is ~980px wide on a
             desktop, so even 2.6/1 came out 351px tall and still took half the
             panel. The cap is what actually keeps the text the larger half.
             object-fit: cover means clamping the height crops rather than
             squashes. */
          max-height: 260px;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .hp-mail-inner {
            width: calc(100% - 32px);
          }
          .hp-mail-body {
            /* The rail becomes a row above the panel — a 300px column of tabs
               beside a narrow panel leaves neither enough room. */
            grid-template-columns: 1fr;
          }
          .hp-mail-rail {
            /* Back above the panel: the left/right swap and the equal-height
               split both only mean something in the two-column layout. */
            order: 1;
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            grid-auto-rows: auto;
            gap: 8px;
          }
          .hp-mail-panel {
            order: 2;
          }
          .hp-mail-tab {
            flex-direction: column;
            gap: 8px;
            text-align: center;
            padding: 14px 10px;
            font-size: 13px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-mail-tab,
          .hp-mail-talk :global(.hp-mail-btn) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default EmailServices;
