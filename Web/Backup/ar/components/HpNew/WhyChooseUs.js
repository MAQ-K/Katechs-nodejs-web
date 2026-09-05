import React from "react";
import Link from "next/link";
import { whyUs } from "../../data/home-new/data";

// Why choose us — the four reasons on the right, a vertical carousel of real
// client work on the left. "look this section have a twist / the left image is
// a scrollable vertical carousel" (user, 2026-09-05).
//
// ---- the carousel is a VERTICAL marquee, same technique as ProjectsMarquee ----
// The list is rendered N times and the keyframe translates exactly one copy, so
// copy 2 is in the window the moment copy 1 finishes and the seam never shows.
// Pure CSS: no rAF, no scroll listener, nothing to clean up.
//
// ---- what vertical does NOT inherit from the horizontal one ----
// ProjectsMarquee has a long note about being forced to `direction: ltr`,
// because in RTL a max-content flex track hangs off the container's RIGHT edge
// and translateX(-50%) drags it away leaving the strip half empty. That bug is
// specific to the INLINE axis. `direction` does not affect block-axis layout, so
// a column track stacks top-to-bottom in RTL exactly as it does in LTR and
// translateY needs no override. Deliberately not copied over.
//
// ---- why COPIES = 2 here but 3 there ----
// The rule is the same: one copy must be at least as tall as the visible window,
// or the end of a cycle shows blank. Horizontal had to survive a viewport WIDER
// than one copy (2520px), which is a real screen size, so it needed 3. Here one
// copy is 6 items of roughly 350px = ~2100px against a window capped at 560px,
// so 2 is safe with room to spare — the window is a height we set, not a screen
// size the user brings.
const COPIES = [0, 1];

const WhyChooseUs = ({ content = whyUs }) => {
  const gallery = content.gallery || [];

  return (
    <div className="hp-why">
      <div className="hp-why-inner">
        <div className="hp-why-text">
          <span className="hp-why-eyebrow">{content.eyebrow}</span>
          <h2>{content.heading}</h2>
          <p className="hp-why-body">{content.body}</p>

          <ul className="hp-why-list">
            {content.points.map((point) => (
              <li key={point.id}>
                <span className="hp-why-num" aria-hidden="true" />
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link href={content.cta.href} className="hp-why-btn">
            {content.cta.label}
          </Link>
        </div>

        {/* The twist. aria-hidden + no focusable content: this is decoration
            that repeats work already named in the projects marquee above, and a
            screen reader gaining an endless loop of project names is a
            regression, not an enhancement. */}
        <div className="hp-why-stage">
          <div className="hp-why-rail" aria-hidden="true">
            <div className="hp-why-track">
              {COPIES.map((copy) => (
                <React.Fragment key={copy}>
                  {gallery.map((item) => (
                    <figure className="hp-why-card" key={`${copy}-${item.id}`}>
                      <img src={item.image} alt="" />
                    </figure>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hp-why {
          width: 100%;
          padding-block: clamp(56px, 8vw, 104px);
          background: #f7f8fa;
        }
        .hp-why-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(32px, 5vw, 72px);
        }
        /* Carousel LEFT, talk RIGHT.
           ---- get the direction right: in RTL, order:1 is the RIGHTMOST column ----
           The flow starts at the right edge, so the LOWER order value sits on the
           right and the higher one on the left — the opposite of the LTR
           intuition. So the talk takes order 1 (right) and the carousel order 2
           (left). Measured, not assumed: the first attempt used the LTR reading
           and put the carousel on the right, which is the wrong side.
           AppServices.js reads the other way round because it wants the opposite
           arrangement (talk left, stage right), not because the rule differs. */
        .hp-why-text {
          order: 1;
        }
        .hp-why-stage {
          order: 2;
        }

        .hp-why-eyebrow {
          display: inline-block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #6b7280;
          margin-bottom: 12px;
        }
        .hp-why-text h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          line-height: 1.35;
          color: #101828;
          margin: 0 0 14px;
        }
        .hp-why-body {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 2;
          color: #4b5563;
          margin: 0 0 28px;
        }
        .hp-why-list {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: grid;
          gap: 22px;
          /* Counter drives the numbering so the markup carries no hard-coded
             1/2/3/4 to fall out of step when a point is added or reordered. */
          counter-reset: hp-why;
        }
        .hp-why-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          counter-increment: hp-why;
        }
        .hp-why-num {
          flex: 0 0 auto;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #101828;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          margin-top: 2px;
        }
        .hp-why-num::before {
          content: counter(hp-why);
        }
        .hp-why-list h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(16px, 1.7vw, 19px);
          font-weight: 700;
          color: #101828;
          margin: 0 0 6px;
        }
        .hp-why-list p {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.9;
          color: #4b5563;
          margin: 0;
        }
        /* :global() because next/link renders this anchor — styled-jsx only
           scopes elements it renders itself. */
        .hp-why-text :global(.hp-why-btn) {
          display: inline-block;
          padding: 13px 30px;
          border-radius: 10px;
          background: #101828;
          color: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.25s ease;
        }
        .hp-why-text :global(.hp-why-btn:hover) {
          opacity: 0.86;
          color: #fff;
        }

        /* ---- the vertical carousel ---- */
        .hp-why-rail {
          position: relative;
          height: clamp(420px, 52vw, 560px);
          overflow: hidden;
          border-radius: 18px;
          /* Fade top and bottom rather than cutting hard. A mask, not an
             overlay gradient: an overlay would have to be painted the section's
             background colour and would break the moment that colour changes. */
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 14%,
            #000 86%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 14%,
            #000 86%,
            transparent 100%
          );
        }
        .hp-why-track {
          display: flex;
          flex-direction: column;
          /* height, not width: the block axis is the one that scrolls here. */
          height: max-content;
          animation: hp-why-scroll 38s linear infinite;
        }
        .hp-why-rail:hover .hp-why-track {
          animation-play-state: paused;
        }
        .hp-why-card {
          flex: 0 0 auto;
          /* Spacing on the ITEM, never as a flex gap on the track: two copies of
             N items have 2N items but only 2N-1 gaps, so the track would not be
             exactly twice one copy and the seam would drift a little every
             cycle. A trailing margin keeps each copy self-contained. */
          margin: 0 0 18px;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 30px -18px rgba(16, 24, 40, 0.35);
        }
        .hp-why-card img {
          display: block;
          width: 100%;
          /* Every screenshot in public/images/projects is 1448x1086 (4:3).
             Pinning the ratio stops the track height changing as images load,
             which would make the loop distance wrong and the seam visible. */
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        @keyframes hp-why-scroll {
          from {
            transform: translateY(0);
          }
          to {
            /* Exactly one copy. calc keeps it exact — a rounded -50% would be
               fine at N=2 but silently wrong the moment COPIES changes. */
            transform: translateY(calc(-100% / 2));
          }
        }

        @media (max-width: 991px) {
          .hp-why-inner {
            width: calc(100% - 32px);
            grid-template-columns: 1fr;
          }
          /* Stacked, the heading leads — the column swap means nothing with a
             single column. */
          .hp-why-text {
            order: 1;
          }
          .hp-why-stage {
            order: 2;
          }
          .hp-why-rail {
            height: clamp(340px, 70vw, 460px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-why-track {
            animation: none;
          }
          /* Nothing moves now, so the second copy is dead weight and the rail
             should be explorable by hand instead of showing a frozen slice. */
          .hp-why-rail {
            overflow-y: auto;
          }
          .hp-why-text :global(.hp-why-btn) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
