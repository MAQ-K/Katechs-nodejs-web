import React, { useEffect, useRef, useState } from "react";

// A thin fill bar tracking how far down the page the visitor is, pinned just
// under the fixed navbar. Unlike SideRail/useSectionSnap this is NOT
// desktop-gated or area-aware on purpose — it reads whole-document scroll
// (window.scrollY / (scrollHeight - clientHeight)), so it stays meaningful on
// a phone where the rail is hidden and there is no snap.
//
// `top` is measured from the real navbar rather than assumed, because the
// navbar's own height changes when it gains .is-sticky (20px -> 15px padding).
// A hard-coded offset would leave a visible gap or a slight overlap depending
// on scroll position.

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [navHeight, setNavHeight] = useState(90);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const navEl = document.querySelector(".navbar-area");

    const updateNav = () => {
      if (navEl) setNavHeight(navEl.getBoundingClientRect().height);
    };

    const updateProgress = () => {
      rafRef.current = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };

    const onScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    const onResize = () => {
      updateNav();
      onScroll();
    };

    updateNav();
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Catches .is-sticky's padding change, not just window resizes.
    let navRO = null;
    if (navEl && typeof ResizeObserver !== "undefined") {
      navRO = new ResizeObserver(updateNav);
      navRO.observe(navEl);
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (navRO) navRO.disconnect();
    };
  }, []);

  return (
    <div className="wsv-progress" style={{ top: navHeight }} aria-hidden="true">
      <div
        className="wsv-progress-fill"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
