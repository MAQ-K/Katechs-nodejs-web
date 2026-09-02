import React, { useCallback, useEffect, useRef, useState } from "react";

// Back-to-top.
//
// It used to be a class component whose scrollToTop() was
// `window.scrollTo({ top: 0, behavior: "smooth" })`. That stopped working the
// moment the sliding scroll shipped: the smooth-scroll hook puts `wsv-smooth`
// on <html>, which sets `scroll-behavior: auto` (it HAS to — bootstrap.min.css
// sets `:root { scroll-behavior: smooth }`, and leaving it on makes every frame
// of the glide start its own animation). With that override live, `behavior:
// "smooth"` is ignored and the button teleported to the top instead of
// travelling. Now that the glide runs on every page, not just /services, this
// would have been broken sitewide.
//
// So it animates itself, with the same easing curve and the same
// "instant" writes the glide uses. Two more things the old version got wrong:
// its `scroll` listener was never removed, and it called setState on every
// single scroll event rather than only when visibility actually flips.

// Fraction of the remaining distance covered per frame. Matches the feel of
// useSmoothScroll's own EASE while arriving a little quicker — this is a jump
// to a known destination, not a drift.
const EASE = 0.12;
// Below this the animation has visually arrived.
const ARRIVED = 0.5;
const SHOW_AFTER = 300;

const GoTop = () => {
  const [visible, setVisible] = useState(false);
  const raf = useRef(null);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      // Functional update + identical value bails out of a re-render, so this
      // costs nothing on the ticks where nothing changed.
      setVisible(window.scrollY > SHOW_AFTER);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Any wheel/touch during the climb hands control straight back — being
  // dragged to the top while trying to read is the thing that makes buttons
  // like this feel broken.
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

  const scrollToTop = useCallback(() => {
    // Honour the OS setting rather than animating a long climb regardless.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    if (raf.current !== null) cancelAnimationFrame(raf.current);

    const step = () => {
      const y = window.scrollY;
      if (y < ARRIVED) {
        window.scrollTo({ top: 0, behavior: "instant" });
        raf.current = null;
        return;
      }
      // "instant" matters: without it the `scroll-behavior: smooth` that
      // bootstrap sets on :root would animate each interpolated step, on any
      // page where the glide hook is not mounted to override it.
      window.scrollTo({ top: y - y * EASE, behavior: "instant" });
      raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
  }, []);

  return (
    <div className="scroll-to-top">
      {visible && (
        // Was a bare <div> with an onClick — unreachable by keyboard and
        // invisible to a screen reader. A real button costs nothing here.
        <button
          type="button"
          className="top"
          onClick={scrollToTop}
          aria-label="العودة إلى الأعلى"
        >
          <i className="bx bx-chevrons-up" aria-hidden="true"></i>
          <i className="bx bx-chevrons-up bx-fade-up" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

export default GoTop;
