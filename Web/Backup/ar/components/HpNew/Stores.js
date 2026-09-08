import React from "react";
import Link from "next/link";
import { stores } from "../../data/home-new/data";

// Stores (e-commerce) — one block, no tab switching
// (Homepage/structure-drafts/Ecommerce .png for the original layout; "remove
// the nav" — user, 2026-09-08, removing the tab UI a version of this section
// had grown).
//
// "this is the part of ecommerce from web services page": every string here
// comes from the `ecommerce` area of data/services/data.js via
// data/home-new/data.js. Nothing new was written for it, and nothing was
// taken from the homepage's own components/PricingWebsite/EcommercePlatforms.js,
// which sells a different list (Salla / Shopify / EasyOrder / dropshipping).
//
//   نبني ونشغّل -> FOUR cards, three in a row + one wide beneath: build,
//                   manage, build+manage (new, homepage-only — see
//                   data/home-new/data.js), landing page.
//
// ⚠️ Removed 2026-09-08 (user): the "رحلة الشراء" journey block, the closing
// CTA ("جاهز تبدأ البيع أونلاين؟"), and the "ما الذي تديره بنفسك" capabilities
// block. All three are still real data in `data/home-new/data.js`'s `stores`
// export — `journey`, `cta` and `capabilities` are simply no longer read
// here. Not deleted from the data file: the shared source
// (`ecommerce.journey`/`ecommerce.cta`/`ecommerce.capabilities` in
// data/services/data.js) still feeds the real web services page's own
// e-commerce area.
//
// The one remaining block is a plain <section> with its own <h3> — there is
// no ARIA tablist to hang an accessible name off any more, so the heading has
// to do that job directly, same as every other stacked section on this page.
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
        }
      `}</style>
    </div>
  );
};

export default Stores;
