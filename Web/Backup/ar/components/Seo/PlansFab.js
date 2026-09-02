import React, { useCallback, useEffect, useRef, useState } from "react";

// Floating shortcut to the pricing section. The SEO page runs long — hero,
// audit form, results, pillars, AI search, process, case studies, reporting —
// before it ever reaches the plans, so this keeps "what does it cost" one click
// away from anywhere in that run.
//
// It animates the scroll itself for the same reason GoTop does: the sliding
// scroll puts `wsv-smooth` on <html>, which sets `scroll-behavior: auto`, so
// `window.scrollTo({ behavior: "smooth" })` is ignored and would teleport.

const TARGET = "pricing";
// Show it only once the reader is past the hero — before that the plans are a
// short scroll away and a floating button is just clutter.
const SHOW_AFTER = 600;
const EASE = 0.12;
const ARRIVED = 0.5;

const PlansFab = () => {
  const [visible, setVisible] = useState(false);
  const raf = useRef(null);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const el = document.getElementById(TARGET);
      // Hide it again once the plans are actually on screen — pointing at
      // something the reader is already looking at is noise.
      const inView = el
        ? el.getBoundingClientRect().top < window.innerHeight * 0.75 &&
          el.getBoundingClientRect().bottom > 0
        : false;
      setVisible(window.scrollY > SHOW_AFTER && !inView);
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
  }, []);

  // Scrolling by hand during the trip hands control straight back.
  useEffect(() => {
    const cancel = () => {
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    return () => {
      cancel();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, []);

  const goToPlans = useCallback(() => {
    const el = document.getElementById(TARGET);
    if (!el) return;

    // Measured at click time, not cached: .navbar-area changes height when it
    // gains .is-sticky, and a stale value lands the jump ~10px off.
    const nav = document.querySelector(".navbar-area");
    const offset = (nav ? nav.getBoundingClientRect().height : 0) + 16;
    const to = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - offset
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: to, behavior: "instant" });
      return;
    }

    if (raf.current !== null) cancelAnimationFrame(raf.current);

    const step = () => {
      const y = window.scrollY;
      const delta = to - y;
      if (Math.abs(delta) < ARRIVED) {
        window.scrollTo({ top: to, behavior: "instant" });
        raf.current = null;
        return;
      }
      window.scrollTo({ top: y + delta * EASE, behavior: "instant" });
      raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
  }, []);

  return (
    <button
      type="button"
      className={`seo-plans-fab${visible ? " is-visible" : ""}`}
      onClick={goToPlans}
      // Kept mounted so it can transition in and out. aria-hidden + tabIndex
      // together take it out of the reading order AND the tab order while it is
      // off screen — a focusable control sitting under the viewport edge is a
      // keyboard trap you cannot see.
      aria-hidden={visible ? undefined : "true"}
      tabIndex={visible ? 0 : -1}
    >
      <i className="bx bx-purchase-tag-alt" aria-hidden="true"></i>
      <span>الباقات والأسعار</span>
    </button>
  );
};

export default PlansFab;
