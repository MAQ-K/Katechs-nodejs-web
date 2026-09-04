import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroMedia, heroSlides } from "../../data/home-new/data";

// Homepage hero — one fixed background video, N cross-fading text slides.
//
// Modeled on components/Services/Hero.js, which already solved this exact
// shape, but reimplemented self-contained under `hp-hero-*` per the
// components/HpNew/ contract (no style.scss, no icon font).
//
// STRUCTURE PASS: greyscale on purpose. Colour, type scale and spacing polish
// come in the design pass.

const AUTOPLAY_MS = 6000;
// Same curve the rest of the site's motion uses (components/Common/Reveal.js).
// Redeclared rather than imported so this file stays portable.
const EASE = [0.22, 1, 0.36, 1];

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

  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
        transition: { duration: 0.5, ease: EASE },
      };

  return (
    <section
      className="hp-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hp-hero-bg">
        {media.type === "video" ? (
          <video
            className="hp-hero-media"
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
            className="hp-hero-media"
            src={media.src}
            alt=""
            aria-hidden="true"
          />
        )}
        <div className="hp-hero-overlay" />
      </div>

      <div className="hp-hero-inner">
        <AnimatePresence mode="wait">
          <motion.div key={slide.id} className="hp-hero-text" {...anim}>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <Link href={slide.cta.href} className="hp-hero-btn">
              {slide.cta.label}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Anchored to the SECTION, not to the text block. `mode="wait"` empties
          the text container mid-swap, so dots living inside it would jump on
          every slide change — the same bug Services/Hero.js had to fix. */}
      {slides.length > 1 && (
        <div className="hp-hero-dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`الشريحة ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={i === index ? "is-active" : ""}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .hp-hero {
          position: relative;
          isolation: isolate;
          /* +4vh on the previous 78vh. The max had to rise with it: at 760px the
             clamp was already capping every viewport taller than ~975px, so
             raising only the vh term would have changed nothing on a normal
             desktop screen. */
          min-height: clamp(560px, 82vh, 820px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
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
        .hp-hero-overlay {
          position: absolute;
          inset: 0;
          /* Greyscale for the structure pass. The gradient is heavier at the
             start edge (right, in RTL) because that is where the text sits. */
          background: linear-gradient(
            to left,
            rgba(0, 0, 0, 0.72) 0%,
            rgba(0, 0, 0, 0.45) 45%,
            rgba(0, 0, 0, 0.2) 100%
          );
        }
        .hp-hero-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
          padding-block: 64px;
        }
        .hp-hero-text {
          max-width: 46ch;
          /* RTL: the flow already puts this at the start edge (the right). */
          color: #fff;
        }
        .hp-hero-text h1 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(30px, 4.6vw, 56px);
          font-weight: 700;
          line-height: 1.25;
          margin: 0 0 16px;
          color: #fff;
        }
        .hp-hero-text p {
          font-size: clamp(15px, 1.6vw, 19px);
          line-height: 1.9;
          margin: 0 0 28px;
          color: rgba(255, 255, 255, 0.86);
        }
        /* :global() because next/link renders this <a>, and styled-jsx only
           scopes DOM elements it renders itself — without this the rule compiles
           to .hp-hero-btn.jsx-hash, never matches, and the button falls back to
           Bootstrap's blue link colour. Anchored on .hp-hero-text, which IS
           scoped, so nothing leaks. */
        .hp-hero-text :global(.hp-hero-btn) {
          display: inline-block;
          padding: 14px 34px;
          border-radius: 10px;
          background: #fff;
          color: #111;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.25s ease;
        }
        .hp-hero-text :global(.hp-hero-btn:hover) {
          opacity: 0.86;
          color: #111;
        }
        .hp-hero-dots {
          position: absolute;
          inset-block-end: 32px;
          inset-inline: 0;
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
          display: flex;
          justify-content: flex-start;
          gap: 10px;
        }
        .hp-hero-dots button {
          width: 12px;
          height: 12px;
          padding: 0;
          border-radius: 50%;
          border: 1.5px solid #fff;
          background: transparent;
          cursor: pointer;
          transition: background 0.25s ease;
        }
        .hp-hero-dots button.is-active {
          background: #fff;
        }
        @media (max-width: 767px) {
          .hp-hero-inner {
            width: calc(100% - 32px);
          }
          .hp-hero-dots {
            width: calc(100% - 32px);
            inset-block-end: 20px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-hero-text :global(.hp-hero-btn) {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
