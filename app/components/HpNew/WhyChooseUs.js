import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { whyUs } from "../../data/home-new/data";

// Why choose us — a pinned scrollytelling section. Four reasons, a sticky box
// on the left that switches to match whichever reason is current, and a
// stepper on the right that moves with it.
//
// ⚠️ REBUILT 2026-09-08 (same day as the first version). The first pass made
// the LEFT box scroll-reactive but left the right column as a plain static
// list — "the right side dont move with scroll, the left boxes only". The
// user also asked for the section to hold the reader until they have been
// through all four points ("i cant scroll to next section unless i finish
// all boxes") and for the step changes themselves to be animated, not just
// the box.
//
// ---- how the pin works, and why it does NOT hijack the wheel ----
// The section renders at 4x viewport height (`points.length * 100vh`) with an
// inner `position: sticky; top` panel that stays put while that height is
// consumed. A passive, rAF-gated scroll listener reads how far the outer
// block's top has travelled past 0 (i.e. how much of that 4x height has been
// scrolled through) and turns that fraction into a step index 0..3. No wheel
// listener, no preventDefault, no window.scrollTo — the browser's own native
// scroll (and the page's separate useSmoothScroll glide) is what drives it,
// so there is nothing here to fight the two-interceptor bug the domain-search
// nav pill hit earlier. The "can't skip ahead" behaviour falls out of the
// geometry: reaching the section after it requires having scrolled the full
// 4-viewport distance, which only finishes once every step has been current.
//
// Pinning is desktop + motion-safe only (matchMedia, re-checked live): a
// forced 4-viewport scroll distance on a phone, or for a reduced-motion
// reader, is exactly the kind of scroll-jacking ui-ux-pro-max's accessibility
// guideline warns against, so under either condition this renders as an
// ordinary stacked, un-pinned list instead — same escape hatch the first
// version used for mobile.
//
// ---- accessibility: real content lives on the right, ONCE ----
// The left box repeats the active point's title/text for sighted scroll
// feedback, so it stays `aria-hidden`. The right-hand steps are the only
// place a screen reader or a no-JS/no-pin reader encounters this content, and
// it encounters all four, in order, once.
const EASE = [0.22, 1, 0.36, 1];
const DESKTOP = "(min-width: 992px)";
const REDUCED = "(prefers-reduced-motion: reduce)";

const WhyChooseUs = ({ content = whyUs }) => {
  const points = content.points;
  const [active, setActive] = useState(0);
  const [pinEnabled, setPinEnabled] = useState(false);
  const reduced = useReducedMotion();
  const pinRef = useRef(null);

  useEffect(() => {
    const desktopMQ = window.matchMedia(DESKTOP);
    const reducedMQ = window.matchMedia(REDUCED);
    const apply = () => setPinEnabled(desktopMQ.matches && !reducedMQ.matches);
    apply();

    const add = (mq, fn) =>
      mq.addEventListener ? mq.addEventListener("change", fn) : mq.addListener(fn);
    const remove = (mq, fn) =>
      mq.removeEventListener ? mq.removeEventListener("change", fn) : mq.removeListener(fn);
    add(desktopMQ, apply);
    add(reducedMQ, apply);
    return () => {
      remove(desktopMQ, apply);
      remove(reducedMQ, apply);
    };
  }, []);

  useEffect(() => {
    if (!pinEnabled) {
      setActive(0);
      return undefined;
    }

    let frame = null;
    const measure = () => {
      frame = null;
      const el = pinRef.current;
      if (!el) return;
      // Distance the reader can scroll while still inside the pin: the
      // block's own height minus one viewport (the sticky panel's slot).
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setActive(0);
        return;
      }
      const scrolled = Math.min(
        Math.max(-el.getBoundingClientRect().top, 0),
        total
      );
      const idx = Math.min(
        points.length - 1,
        Math.floor((scrolled / total) * points.length)
      );
      setActive(idx);
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
  }, [pinEnabled, points.length]);

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
    <div
      className={"hp-why" + (pinEnabled ? " is-pinned" : "")}
      ref={pinRef}
      style={pinEnabled ? { height: `${points.length * 100}vh` } : undefined}
    >
      <div className="hp-why-sticky">
        <div className="hp-why-inner">
          <div className="hp-why-text">
            <span className="hp-why-eyebrow">{content.eyebrow}</span>
            <h2>{content.heading}</h2>
            <p className="hp-why-body">{content.body}</p>

            {/* The real content, and the ONLY thing a screen reader or a
                no-JS/no-pin reader ever sees — every point, always, in order.
                The moving highlight below is a purely visual overlay on top
                of this, not a replacement for it. */}
            <ul className="hp-why-steps">
              {points.map((point, i) => {
                const isActive = pinEnabled && i === active;
                return (
                  <li
                    key={point.id}
                    className={"hp-why-step" + (isActive ? " is-active" : "")}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="hp-why-highlight"
                        className="hp-why-step-highlight"
                        transition={
                          reduced ? { duration: 0 } : { duration: 0.35, ease: EASE }
                        }
                      />
                    )}
                    <span className="hp-why-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className="hp-why-step-text">
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </div>
                  </li>
                );
              })}
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
                    className={
                      "hp-why-box-dot" + (i === active ? " is-active" : "")
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hp-why {
          width: 100%;
          background: #f7f8fa;
        }
        .hp-why:not(.is-pinned) {
          padding-block: clamp(56px, 8vw, 104px);
        }
        .hp-why.is-pinned {
          position: relative;
        }
        .hp-why-sticky {
          width: 100%;
        }
        .hp-why.is-pinned .hp-why-sticky {
          position: sticky;
          /* Clears the fixed HeroNav, whose min-height is 78px desktop / 68px
             below 1199px (components/HpNew/HeroNav.js). A static value, not a
             measured one: unlike a jump target, a sticky offset a few px off
             just leaves slightly more or less gap under the section. */
          top: 90px;
          min-height: calc(100vh - 90px);
          display: flex;
          align-items: center;
          padding-block: clamp(24px, 4vw, 40px);
        }
        .hp-why-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
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
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          line-height: 1.35;
          color: #101828;
          margin: 0 0 12px;
        }
        .hp-why-body {
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.8;
          color: #4b5563;
          margin: 0 0 22px;
        }

        /* ---- the stepper: all four, always, one visually current ---- */
        .hp-why-steps {
          list-style: none;
          margin: 0 0 26px;
          padding: 0;
          display: grid;
          gap: 8px;
        }
        .hp-why-step {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 14px;
          transition: opacity 0.3s ease;
        }
        /* Dim the steps not currently "read" while pinned, so the moving
           highlight has something to move against — the effect the first
           version was missing entirely. Un-pinned (mobile / reduced motion)
           every step stays at full opacity: there is no scroll-driven
           "current" step to contrast against there. */
        .hp-why.is-pinned .hp-why-step {
          opacity: 0.5;
        }
        .hp-why.is-pinned .hp-why-step.is-active {
          opacity: 1;
        }
        .hp-why-step-highlight {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 10px 26px -14px rgba(16, 24, 40, 0.35);
        }
        .hp-why-num {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #101828;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 13px;
          font-weight: 700;
        }
        .hp-why-step-text {
          position: relative;
          z-index: 1;
        }
        .hp-why-steps h3 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(15px, 1.5vw, 17px);
          font-weight: 700;
          color: #101828;
          margin: 0 0 4px;
        }
        .hp-why-steps p {
          font-size: clamp(13px, 1.2vw, 14px);
          line-height: 1.7;
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
          min-height: 340px;
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
          .hp-why-text {
            order: 1;
          }
          .hp-why-stage {
            order: 2;
          }
          /* Pinning only ever applies at >=992px (see the JS matchMedia
             check), but the box also has nothing to react to once there is no
             scroll-driven "active" step — same call the first version made:
             drop it per ui-ux-pro-max's "Mobile: simplify animations". */
          .hp-why-stage {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-why-text :global(.hp-why-btn) {
            transition: none;
          }
          .hp-why-box-dot {
            transition: none;
          }
          .hp-why-step {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
