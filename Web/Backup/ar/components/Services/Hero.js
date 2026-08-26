import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "../Common/Reveal";
import { heroMedia, heroSlides } from "../../data/services/data";

// Web Services hero — one fixed background video, three text slides.
// Deliberately shorter than a full viewport: this section orients, it doesn't
// hold the visitor. Dots sit bottom-right (visually right, in RTL too).

const AUTOPLAY_MS = 6000;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const timer = useRef(null);

  const goTo = useCallback((i) => setIndex(i), []);

  useEffect(() => {
    if (paused || heroSlides.length < 2) return undefined;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer.current);
  }, [paused, index]);

  const slide = heroSlides[index];

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
      className="wsv-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroMedia.type === "video" ? (
        <video
          className="wsv-hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroMedia.src} type="video/mp4" />
        </video>
      ) : (
        <img className="wsv-hero-media" src={heroMedia.src} alt="" aria-hidden="true" />
      )}
      <div className="wsv-hero-overlay" />

      <div className="container">
        <div className="wsv-hero-inner">
          <AnimatePresence mode="wait">
            <motion.div key={slide.id} className="wsv-hero-text" {...anim}>
              <span className="wsv-hero-badge">{slide.badge}</span>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <div className="wsv-hero-cta">
                <Link href={slide.primary.href} className="wsv-btn">
                  {slide.primary.label}
                </Link>
                <Link href={slide.secondary.href} className="wsv-btn wsv-btn-ghost">
                  {slide.secondary.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Anchored to the section, not to the text: mode="wait" empties the
          text container mid-swap, and the dots must not move with it. */}
      <div className="wsv-hero-dots-wrap">
        <div className="container">
          <div className="wsv-hero-dots">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`الشريحة ${i + 1}`}
                aria-current={i === index}
                className={i === index ? "is-active" : ""}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
