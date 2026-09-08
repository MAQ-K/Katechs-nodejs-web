import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { whyUs } from "../../data/home-new/data";

// Why choose us — the four reasons on the right, a sticky box on the left that
// switches to match whichever reason the reader has scrolled to.
//
// ⚠️ REPLACED 2026-09-08. This used to be a vertical marquee of real client
// screenshots ("the left image is a scrollable vertical carousel", 2026-09-05).
// The new ask — "when i scroll the box on the left change... 4 boxes each box
// have a point" — ties the left visual to the 4 reasons directly, which a loop
// of 6 unrelated screenshots cannot do. The old gallery data
// (data/home-new/data.js: whyUs.gallery) is left in place, unused.
//
// ---- how "switch on scroll" is built, and what it deliberately is NOT ----
// Consulted ui-ux-pro-max (`--domain ux "sticky scroll crossfade"`) before
// building this: its Accessibility guideline is explicit — "Parallax/
// Scroll-jacking causes nausea... Don't: Force scroll effects
// (ScrollTrigger.create())". So this does NOT hijack the wheel or pin scroll
// the way a ScrollTrigger-style effect would (which would also fight the
// useSmoothScroll hook already mounted on this page — two wheel interceptors
// on one page is exactly the class of bug the domain-search nav pill exposed
// today). Instead:
//   - the RIGHT column's four points are plain content, each given real
//     scroll height via CSS min-height, so scrolling past all four takes a
//     natural, un-intercepted scroll distance;
//   - a passive, rAF-gated `scroll` listener (same pattern pages/hp-new.js and
//     pages/services/index.js already use for their own scroll-spies) reads
//     which point's top has crossed a line at viewport-middle, and that index
//     drives which box the LEFT panel shows;
//   - the panel itself is `position: sticky`, a pure CSS/layout property that
//     reacts correctly to scrollY however it got set — native wheel, this
//     hook's scrollTo, or a nav-pill jump — so there is nothing here for
//     useSmoothScroll to conflict with.
// The crossfade is framer-motion `AnimatePresence mode="wait"`, the same
// technique HeroSlider.js already uses for its own text crossfade — 300ms
// (ui-ux-pro-max: "150-300ms for micro-interactions... not >500ms"; HeroSlider
// itself uses 500ms for a full slide change, a bigger content swap than this).
//
// ---- accessibility: real content lives on the right, ONCE ----
// The left box repeats the active point's title/text for sighted scroll
// feedback, so it is `aria-hidden` in full — exactly the same call the old
// carousel made ("a screen reader gaining ... is a regression, not an
// enhancement"). A screen reader, or a reader with JS off, gets the four
// points as an ordinary list on the right and never hears anything twice.
const EASE = [0.22, 1, 0.36, 1];

const WhyChooseUs = ({ content = whyUs }) => {
  const points = content.points;
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const stepRefs = useRef([]);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const line = window.innerHeight / 2;
      let current = 0;
      points.forEach((_, i) => {
        const el = stepRefs.current[i];
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [points]);

  const activePoint = points[active];

  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -14 },
        transition: { duration: 0.3, ease: EASE },
      };

  return (
    <div className="hp-why">
      <div className="hp-why-inner">
        <div className="hp-why-text">
          <span className="hp-why-eyebrow">{content.eyebrow}</span>
          <h2>{content.heading}</h2>
          <p className="hp-why-body">{content.body}</p>

          {/* The real content, and the ONLY thing a screen reader or a no-JS
              reader ever sees. Each item's min-height (CSS) is what gives the
              scroll-sync its distance — this is a plain list otherwise. */}
          <ul className="hp-why-list">
            {points.map((point, i) => (
              <li key={point.id} ref={(el) => (stepRefs.current[i] = el)}>
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

        {/* The sticky box. Fully decorative — see the accessibility note
            above — so aria-hidden and nothing inside is focusable. */}
        <div className="hp-why-stage" aria-hidden="true">
          <div className="hp-why-box-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePoint.id}
                className="hp-why-box"
                {...anim}
              >
                <span className="hp-why-box-icon">
                  <i className={activePoint.icon}></i>
                </span>
                <h3>{activePoint.title}</h3>
                <p>{activePoint.text}</p>
              </motion.div>
            </AnimatePresence>

            {/* Anchored to the box wrapper, not inside the crossfading
                content — same reasoning as HeroSlider's dots: mode="wait"
                empties the content mid-swap, so anything living inside it
                would jump on every switch. */}
            <div className="hp-why-box-dots">
              {points.map((p, i) => (
                <span
                  key={p.id}
                  className={"hp-why-box-dot" + (i === active ? " is-active" : "")}
                />
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
          /* start, not center: .hp-why-stage below is position:sticky, and
             sticky only works while its own box is SHORT relative to its
             grid area — align-items:center would let the grid centre-stretch
             it to match the (now very tall) text column instead of leaving it
             free to stick near the top while that column scrolls past. */
          align-items: start;
          gap: clamp(32px, 5vw, 72px);
        }
        /* Box LEFT, talk RIGHT.
           ---- get the direction right: in RTL, order:1 is the RIGHTMOST column ----
           The flow starts at the right edge, so the LOWER order value sits on the
           right and the higher one on the left — the opposite of the LTR
           intuition. So the talk takes order 1 (right) and the box order 2
           (left). Measured, not assumed: the first attempt used the LTR reading
           and put the box on the right, which is the wrong side.
           AppServices.js reads the other way round because it wants the opposite
           arrangement (talk left, stage right), not because the rule differs. */
        .hp-why-text {
          order: 1;
        }
        .hp-why-stage {
          order: 2;
          /* Clears the fixed HeroNav, whose min-height is 78px desktop / 68px
             below 1199px (components/HpNew/HeroNav.js). A static value, not a
             measured one like pages/hp-new.js passes into SectionNav: unlike
             a jump target, a sticky offset a few px off just leaves slightly
             more or less gap under the box — comfortable margin over both
             states matters here, not pixel precision. */
          position: sticky;
          top: 110px;
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
          /* align-items, not justify-content: this is a row flex, so the
             CROSS axis (vertical) is what needs centering. Real scroll
             distance for the sticky box's crossfade to sync against — see the
             header note. Centering the number+text pair within that tall slot
             (rather than pinning it to the top) is what makes each point read
             as "the thing you're currently passing", not a short line lost in
             a tall empty box. */
          align-items: center;
          gap: 14px;
          counter-increment: hp-why;
          min-height: 46vh;
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

        /* ---- the sticky box ---- */
        .hp-why-box-wrap {
          position: relative;
          min-height: 360px;
          border-radius: 18px;
          overflow: hidden;
          background: #101828;
          box-shadow: 0 20px 50px -24px rgba(16, 24, 40, 0.45);
        }
        .hp-why-box {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 16px;
          padding: clamp(28px, 4vw, 48px);
        }
        .hp-why-box-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.1);
          font-size: 26px;
          color: #fff;
        }
        .hp-why-box h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .hp-why-box p {
          font-size: clamp(14px, 1.5vw, 16px);
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
          max-width: 46ch;
        }
        .hp-why-box-dots {
          position: absolute;
          inset-inline: 0;
          inset-block-end: 22px;
          z-index: 1;
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .hp-why-box-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.28);
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .hp-why-box-dot.is-active {
          background: #fff;
          transform: scale(1.25);
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
          /* The sticky crossfade only means something beside a tall sibling
             column — stacked to one column there is no such sibling, so a
             "stuck" box would just sit inert below the list, and its content
             already repeats what the list above it says. Simplify: drop it,
             per ui-ux-pro-max's own note on this exact pattern ("Mobile:
             simplify animations"). */
          .hp-why-stage {
            display: none;
          }
          /* The generous per-item height existed ONLY to give the (now
             hidden) sticky box scroll distance to sync against — keeping it
             here would just make the page much longer for no visible reason. */
          .hp-why-list li {
            min-height: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-why-text :global(.hp-why-btn) {
            transition: none;
          }
          .hp-why-box-dot {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
