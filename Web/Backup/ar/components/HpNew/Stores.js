import React from "react";
import Link from "next/link";
import { stores } from "../../data/home-new/data";

// Stores (e-commerce) — three blocks, stacked, no tab switching between them
// (Homepage/structure-drafts/Ecommerce .png for the original layout; "remove
// the nav" — user, 2026-09-08, removing the tab UI a version of this section
// had grown).
//
// "this is the part of ecommerce from web services page": every string here
// comes from the `ecommerce` area of data/services/data.js via
// data/home-new/data.js. Nothing new was written for two of the three blocks,
// and nothing was taken from the homepage's own
// components/PricingWebsite/EcommercePlatforms.js, which sells a different
// list (Salla / Shopify / EasyOrder / dropshipping).
//
//   1. نبني ونشغّل   -> FOUR cards, three in a row + one wide beneath: build,
//                        manage, build+manage (new, homepage-only — see
//                        data/home-new/data.js), landing page.
//   2. رحلة الشراء   -> the four-step journey and its result card
//   3. ما الذي تديره بنفسك -> the six capabilities
//
// Each block is a plain <section> with its own <h3> now — there is no ARIA
// tablist to hang an accessible name off any more, so the heading has to do
// that job directly, same as every other stacked section on this page.
//
// STRUCTURE PASS: greyscale.

const Stores = ({ content = stores }) => {
  return (
    <div className="hp-store">
      <div className="hp-store-inner">
        <div className="hp-store-head">
          <span className="hp-store-eyebrow">{content.intro.eyebrow}</span>
          <h2>{content.intro.heading}</h2>
          <p>{content.intro.body}</p>
        </div>

        <section className="hp-store-block">
          <h3 className="hp-store-block-title">{content.build.heading}</h3>
          <div className="hp-store-cards">
            {content.build.cards.map((card, i) => {
              // The landing card is last in the array by construction (see the
              // data file) and is the WIDE one the user asked for — "3 beside
              // each other and a wide one under them".
              const isWide = i === content.build.cards.length - 1;
              return (
                <article
                  className={
                    "hp-store-card" + (isWide ? " is-wide" : "")
                  }
                  key={card.id}
                >
                  {/* One wrapper around the text, not five loose children —
                      the wide card is a 2-column GRID (talk/image), and grid
                      auto-placement treats every direct child as its own cell.
                      Without this wrapper the tag/title/body/list/link would
                      scatter across the grid instead of sharing one column.
                      display:contents on the non-wide card (see CSS) makes the
                      wrapper invisible there, so nothing changes for the other
                      three cards. */}
                  <div className="hp-store-card-text">
                    <span className="hp-store-tag">{card.tag}</span>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                    <ul>
                      {card.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <Link href={card.link.href} className="hp-store-link">
                      {card.link.label}
                    </Link>
                  </div>
                  {/* Optional: the combo card has no real photo to show — see
                      the data file for why one was not invented. */}
                  {card.image && (
                    <div className="hp-store-shot">
                      <img
                        src={card.image}
                        alt={card.alt}
                        width={card.imageW}
                        height={card.imageH}
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="hp-store-block">
          <h3 className="hp-store-block-title">{content.journey.heading}</h3>
          {/* An ordered list because it IS a sequence — product, page, cart,
              checkout. In RTL it reads right to left with no mirroring needed;
              the arrows are drawn by CSS on the list, not typed into the copy. */}
          <div className="hp-store-journey">
            <ol>
              {content.journey.steps.map((s) => (
                <li key={s.id}>
                  <span className="hp-store-step-icon">
                    <i className={s.icon} aria-hidden="true" />
                  </span>
                  <span>{s.label}</span>
                </li>
              ))}
            </ol>
            <div className="hp-store-result">
              <i className={content.journey.result.icon} aria-hidden="true" />
              <strong>{content.journey.result.title}</strong>
              <span>{content.journey.result.line}</span>
              <span className="hp-store-ref">{content.journey.result.ref}</span>
            </div>
          </div>
        </section>

        <section className="hp-store-block">
          <h3 className="hp-store-block-title">
            {content.capabilities.heading}
          </h3>
          <div className="hp-store-caps">
            {content.capabilities.items.map((c) => (
              <div className="hp-store-cap" key={c.id}>
                <span className="hp-store-cap-icon">
                  <i className={c.icon} aria-hidden="true" />
                </span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

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
        /* One of these per block; the closing CTA has its own spacing and sits
           outside this rhythm. */
        .hp-store-block {
          margin-top: 56px;
        }
        .hp-store-block-title {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(19px, 2.2vw, 26px);
          font-weight: 700;
          color: #111;
          text-align: center;
          margin: 0 0 28px;
        }

        /* --- block 1: build/manage/combo + the wide landing card --- */
        .hp-store-cards {
          display: grid;
          /* A fixed 3 columns, not auto-fit: "3 beside each other" is the
             explicit ask, and the 4th card opts OUT of the grid via
             grid-column: 1 / -1 rather than the track count adapting to it. */
          grid-template-columns: repeat(3, 1fr);
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
        /* display:contents on the default card: the text wrapper disappears
           from the box model and its children (tag/h4/p/ul/link) become flex
           items of .hp-store-card directly, exactly as if the wrapper were
           never there — needed ONLY because the wide card below needs that
           wrapper as one real grid cell. */
        .hp-store-card-text {
          display: contents;
        }
        /* The wide card — landing, always last in the array. Full width and
           laid out as its own two-column split rather than a narrow card
           simply stretched wide, which would strand its text beside a huge
           empty gap.
           Talk RIGHT, image LEFT — the same order every other split section on
           this page uses (AppServices.js, EmailServices.js, WhyChooseUs.js):
           in RTL, order:1 is the RIGHTMOST column, order:2 the left. */
        .hp-store-card.is-wide {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 32px;
          gap: 28px;
        }
        .hp-store-card.is-wide .hp-store-card-text {
          display: flex;
          flex-direction: column;
          order: 1;
        }
        .hp-store-card.is-wide .hp-store-shot {
          order: 2;
          margin: 0;
          border-top: 0;
          border-radius: 12px;
          align-self: stretch;
        }
        .hp-store-card.is-wide .hp-store-shot img {
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
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
        .hp-store-card h4 {
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
        .hp-store-cap h4 {
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
          /* The wide card's OWN internal split (talk/image) also needs to
             stack — at this width "1fr 1fr" inside an already-narrow column
             leaves neither half readable. */
          .hp-store-card.is-wide {
            grid-template-columns: 1fr;
            padding: 26px;
          }
          .hp-store-card.is-wide .hp-store-shot {
            order: -1;
          }
          .hp-store-caps {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 575px) {
          .hp-store-caps {
            grid-template-columns: 1fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-store-cta :global(.hp-store-btn) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Stores;
