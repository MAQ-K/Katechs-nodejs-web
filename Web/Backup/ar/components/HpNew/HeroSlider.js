import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroMedia, heroSlides } from "../../data/home-new/data";

// Homepage hero — one fixed background video, N cross-fading text slides.
//
// Modeled on components/Services/Hero.js, which already solved this exact
// shape, but reimplemented self-contained under `hp-hero-*` per the
// components/HpNew/ contract (no style.scss, no icon font).
//
// ---- DESIGN PASS (2026-09-08) ----------------------------------------------
// Reference: Homepage/inspirations/navbar example .png (the "Antra" interior
// site) — taken as a VISUAL MOOD reference only, never as a layout template.
// What was actually borrowed: the cinematic dark wash over full-bleed footage,
// a headline that dominates the frame, and a short supporting paragraph.
// Follow-up: wider copy, Cairo typography, shared cyan default-btn, no eyebrow badge.
// What was deliberately NOT borrowed: its centred composition and its warm gold
// palette.
//
// Three decisions the user made before this pass (2026-09-08), so nobody
// re-litigates them by accident:
//   1. ACCENT = brand cyan ($main-color #1dd3f8), used sparingly — the pill
//      dot, the active indicator's fill and the focus ring. NOT gold. The
//      cinematic feel comes from the shade and the type, not from colour.
//   2. ONE video, text-only slides. The background never swaps; it drifts
//      slowly (Ken Burns) so the frame is never completely static.
//   3. RTL right-aligned composition kept, not centred — the existing hero
//      structure stays.
//
// The wash is layered navy (#050C1A), never pure black: `Modern Dark (Cinema
// Mobile)` from ui-ux-pro-max warns pure #000 smears on OLED and reads cheap.
// Four layers, each doing one job — read them in the .hp-hero-overlay rule.

const AUTOPLAY_MS = 6000;
// Same curve the rest of the site's motion uses (components/Common/Reveal.js).
// Redeclared rather than imported so this file stays portable. It is also the
// expo-out curve ui-ux-pro-max recommends for this style — same numbers.
const EASE = [0.22, 1, 0.36, 1];

// The shade. One constant so the four overlay layers and the nav scrim can
// never drift apart into two different blues.
const NAVY = "5, 12, 26";
const CYAN = "29, 211, 248";

const HeroSlider = ({ media = heroMedia, slides = heroSlides }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const timer = useRef(null);

  const goTo = useCallback((i) => setIndex(i), []);

  useEffect(() => {
    if (paused || slides.length < 2) return undefined;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer.current);
  }, [paused, index, slides.length]);

  const slide = slides[index];
  if (!slide) return null;

  // Staggered rather than one block fade: the headline, paragraph and CTA
  // arrive 60ms apart, which is what makes a slide change read as composed
  // instead of as a flicker. `mode="wait"` still empties the container first, so
  // the two slides never overlap mid-swap.
  const container = reduced
    ? {}
    : {
        initial: "hidden",
        animate: "shown",
        exit: "out",
        variants: {
          hidden: {},
          shown: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
          out: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
        },
      };

  // Exit is faster than enter (ui-ux-pro-max §7, exit-faster-than-enter): the
  // outgoing slide should get out of the way, not perform.
  const item = reduced
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 22 },
          shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
          out: { opacity: 0, y: -14, transition: { duration: 0.3, ease: EASE } },
        },
      };

  return (
    <section
      className="hp-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap"
        />
      </Head>
      <div className="hp-hero-bg">
        {media.type === "video" ? (
          <video
            className={"hp-hero-media" + (reduced ? "" : " is-drifting")}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={media.src} type="video/mp4" />
          </video>
        ) : (
          <img
            className={"hp-hero-media" + (reduced ? "" : " is-drifting")}
            src={media.src}
            alt=""
            aria-hidden="true"
          />
        )}
        <div className="hp-hero-overlay" />
      </div>

      <div className="hp-hero-inner">
        <AnimatePresence mode="wait">
          <motion.div key={slide.id} className="hp-hero-text" {...container}>
            <motion.h1 {...item}>{slide.title}</motion.h1>
            <motion.p className="hp-hero-lead" {...item}>
              {slide.text}
            </motion.p>
            <motion.div className="hp-hero-actions" {...item}>
              <Link href={slide.cta.href} className="default-btn">
                {slide.cta.label}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Anchored to the SECTION, not to the text block. `mode="wait"` empties
          the text container mid-swap, so dots living inside it would jump on
          every slide change — the same bug Services/Hero.js had to fix. */}
      {slides.length > 1 && (
        <div className="hp-hero-rail">
          <div className="hp-hero-dots">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`الشريحة ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={i === index ? "is-active" : ""}
                onClick={() => goTo(i)}
              >
                {/* The active track fills over exactly AUTOPLAY_MS, so the bar
                    IS the autoplay timer — the slide never changes without
                    warning. Only the active button carries the animation, so
                    changing index restarts it for free: the outgoing button
                    loses the rule and the incoming one gains it fresh. It
                    pauses with the slider on hover, off the section's own
                    :hover rather than a class, so the bar and the interval
                    can never disagree about whether autoplay is running. */}
                <span className="hp-hero-dot-fill" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .hp-hero {
          position: relative;
          isolation: isolate;
          min-height: 0;
          /* Reserve the fixed navbar inside the opening viewport. */
          padding-block-start: 79px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: rgb(${NAVY});
        }
        .hp-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .hp-hero-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        /* Ken Burns. 28s and only 6% of travel: at this speed you never catch it
           moving, you only notice the frame is alive. transform only — no
           width/height animation (ui-ux-pro-max anti-pattern), so it stays on
           the compositor. */
        .hp-hero-media.is-drifting {
          animation: hp-hero-drift 28s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes hp-hero-drift {
          from {
            transform: scale(1.06) translate3d(0, 0, 0);
          }
          to {
            transform: scale(1.12) translate3d(1.5%, -1.5%, 0);
          }
        }
        .hp-hero-overlay {
          position: absolute;
          inset: 0;
          /* Four layers, top to bottom in the stack:
             1. a faint cyan bloom on the start (right) edge — the ONLY colour in
                the wash, and it is barely there. Restraint is the point.
             2. the side gradient: heaviest where the text sits, so the footage
                stays visible on the far side and the copy still clears 4.5:1.
             3. a bottom lift, so the slide indicators and the seam into the
                domain-search strip below have something to sit on.
             4. a top scrim for the transparent navbar's white links. Paired with
                HeroNav's own — this one covers the case where the bar is over a
                bright frame. */
          background: radial-gradient(
              70% 60% at 92% 45%,
              rgba(${CYAN}, 0.1),
              transparent 65%
            ),
            linear-gradient(
              to left,
              rgba(${NAVY}, 0.94) 0%,
              rgba(${NAVY}, 0.78) 34%,
              rgba(${NAVY}, 0.48) 68%,
              rgba(${NAVY}, 0.34) 100%
            ),
            linear-gradient(to top, rgba(${NAVY}, 0.86) 0%, transparent 42%),
            linear-gradient(to bottom, rgba(${NAVY}, 0.6) 0%, transparent 26%);
        }
        .hp-hero-inner {
          width: min(1600px, 100% - 48px);
          margin-inline: auto;
          padding-block: 24px 84px;
        }
        /* ---- :global() on every rule below this point (fixed 2026-09-08) -----
           The whole text column renders through motion.div / motion.h1 / motion.p
           (for the staggered entrance), not plain host tags. styled-jsx can only
           auto-scope elements it sees as a literal lowercase JSX tag - the same
           limit this file already documents for next/link's <a> on the CTA. A
           motion.* call is a component reference, so none of these classes were
           ever getting the compiled scope class, and every rule here was quietly
           matching nothing. Symptom: the headline/eyebrow/paragraph fell through
           to style.scss's global "h1,h2,...{ color: $heading-color }" (#212121,
           near-black) instead of this file's white - text read dark on the dark
           video instead of light. Same fix as the CTA link: make it global. */
        :global(.hp-hero-text) {
          width: 100%;
          max-width: 820px;
          font-family: "Cairo", sans-serif;
          /* RTL: the flow already puts this at the start edge (the right). */
          color: #fff;
        }
        :global(.hp-hero-text) :global(h1) {
          font-family: "Cairo", sans-serif;
          font-size: clamp(34px, 5.4vw, 68px);
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: normal;
          margin: 0 0 20px;
          color: #fff;
          text-wrap: balance;
          text-shadow: 0 2px 40px rgba(${NAVY}, 0.5);
        }
        :global(.hp-hero-lead) {
          max-width: 700px;
          font-family: "Cairo", sans-serif;
          font-size: clamp(16px, 1.5vw, 18px);
          line-height: 1.95;
          margin: 0 0 34px;
          color: rgba(255, 255, 255, 0.78);
        }
        :global(.hp-hero-actions) {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        :global(.hp-hero-actions) :global(.default-btn) {
          font-family: "Cairo", sans-serif;
        }
        :global(.hp-hero-actions) :global(.default-btn:focus-visible) {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }
        /* Indicators + counter share one row so they read as one instrument. */
        .hp-hero-rail {
          position: absolute;
          inset-block-end: 20px;
          inset-inline: 0;
          width: min(1600px, 100% - 48px);
          margin-inline: auto;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .hp-hero-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        /* Bars, not circles: a bar can carry the autoplay progress inside it,
           and 44px of touch target comes free from the vertical padding
           (ux priority 2 — min 44×44). */
        .hp-hero-dots button {
          position: relative;
          width: 26px;
          height: 44px;
          padding: 0;
          border: 0;
          background: none;
          cursor: pointer;
          transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hp-hero-dots button::before {
          content: "";
          position: absolute;
          inset-block-start: 50%;
          inset-inline: 0;
          height: 3px;
          margin-block-start: -1.5px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.3);
          transition: background 0.25s ease;
        }
        .hp-hero-dots button:hover::before {
          background: rgba(255, 255, 255, 0.55);
        }
        .hp-hero-dots button:focus-visible {
          outline: 2px solid rgb(${CYAN});
          outline-offset: 2px;
          border-radius: 4px;
        }
        .hp-hero-dots button.is-active {
          width: 68px;
        }
        .hp-hero-dot-fill {
          position: absolute;
          inset-block-start: 50%;
          inset-inline-start: 0;
          width: 0;
          height: 3px;
          margin-block-start: -1.5px;
          border-radius: 2px;
          background: rgb(${CYAN});
        }
        .hp-hero-dots button.is-active .hp-hero-dot-fill {
          animation: hp-hero-fill ${AUTOPLAY_MS}ms linear forwards;
        }
        /* Hover pauses the interval, so it must pause the bar too — otherwise
           the bar finishes and the slide doesn't, which reads as broken. */
        .hp-hero:hover .hp-hero-dots button.is-active .hp-hero-dot-fill {
          animation-play-state: paused;
        }
        @keyframes hp-hero-fill {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @media (max-width: 1199px) {
          .hp-hero {
            padding-block-start: 69px;
          }
        }
        @media (max-width: 991px) {
          :global(.hp-hero-text) {
            max-width: 100%;
          }
        }
        @media (max-width: 767px) {
          .hp-hero-inner {
            width: calc(100% - 32px);
            padding-block: 20px 72px;
          }
          :global(.hp-hero-lead) {
            margin-bottom: 26px;
          }
          :global(.hp-hero-actions) :global(.default-btn) {
            width: 100%;
            text-align: center;
          }
          .hp-hero-rail {
            width: calc(100% - 32px);
            inset-block-end: 22px;
          }
          .hp-hero-overlay {
            /* Portrait crops the footage hard and the text runs the full width,
               so the side gradient stops doing the work — go vertical. */
            background: linear-gradient(
                to top,
                rgba(${NAVY}, 0.92) 0%,
                rgba(${NAVY}, 0.7) 45%,
                rgba(${NAVY}, 0.62) 100%
              ),
              linear-gradient(to bottom, rgba(${NAVY}, 0.55) 0%, transparent 30%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-hero-media.is-drifting,
          .hp-hero-dots button.is-active .hp-hero-dot-fill {
            animation: none;
          }
          /* No timer bar means the active state still has to be legible. */
          .hp-hero-dots button.is-active .hp-hero-dot-fill {
            width: 100%;
          }
          :global(.hp-hero-actions) :global(.default-btn),
          .hp-hero-dots button,
          .hp-hero-dots button::before {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
