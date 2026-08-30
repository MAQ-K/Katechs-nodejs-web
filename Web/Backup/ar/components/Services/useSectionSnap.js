import { useCallback, useEffect, useRef } from "react";

// One scroll gesture = one section, desktop only.
//
// Deliberately a THIN layer over native CSS scroll-snap rather than a scroll
// hijacker. The browser keeps ownership of keyboard, touch, the scrollbar,
// momentum and accessibility; all this adds is the discrete feel on the wheel.
// A full preventDefault-everything jack would mean re-implementing every one of
// those by hand, and each is a way for the page to become hostile.
//
// Three things in this codebase it has to cooperate with, not fight:
//   1. bootstrap.min.css sets `:root { scroll-behavior: smooth }` (gated on
//      prefers-reduced-motion). Our window.scrollTo therefore animates for free
//      and its duration is the browser's, not ours — hence the settle detector
//      below rather than a guessed timeout.
//   2. .navbar-area is fixed and CHANGES HEIGHT when it gains .is-sticky
//      (20px→15px padding at scrollY>150). Both the CSS snap position
//      (scroll-padding-top) and our jump target must use the same number or the
//      browser re-snaps ~10px after every jump. A ResizeObserver keeps the
//      --wsv-nav-h custom property in sync and both sides read only that.
//   3. The SideRail's own scrollTo — markProgrammatic() lets the page tell us a
//      jump is already in flight so we stand down instead of fighting it.
//
// CoverflowCarousel already claims ArrowLeft/ArrowRight (preventDefault) for
// slide stepping, which is why this binds the wheel only and leaves every key
// alone.

const DESKTOP = "(min-width: 992px)";
const REDUCED = "(prefers-reduced-motion: reduce)";

// Below this a "gesture" is noise — trackpad jitter, or a horizontal swipe
// leaking a little vertical delta.
const MIN_DELTA = 4;
// How much unseen content still counts as "there is more of this section to
// read". Small tolerance so sub-pixel layout doesn't strand a jump.
const EDGE_SLOP = 2;
// Scroll must be quiet this long before we accept another gesture.
const SETTLE_MS = 140;
// Hard ceiling in case a scroll never settles (an interrupted smooth scroll
// can stop emitting events).
const MAX_LOCK_MS = 1200;

// The snap set, defined once. querySelectorAll returns document order whatever
// order these are written in, so this list is about membership, not sequence.
// Component-owned sections are matched by the class they already have — none of
// them needed editing. Only the two inline cases (the hero wrapper and the
// wireframe blocks in pages/services/index.js) carry a marker class.
export const SNAP_SELECTOR = [
  ".wsv-snap-stop", // hero wrapper + wireframe blocks (marker, page-owned)
  ".wsv-projects", // Services/Projects.js
  ".wsv-nav", // Services/ServiceNav.js
  ".wsv-about", // BusinessWebsites/Overview.js
  ".wsv-plans", // BusinessWebsites/Plans.js
].join(", ");

export default function useSectionSnap(selector = SNAP_SELECTOR) {
  const lockedRef = useRef(false);
  const settleRef = useRef(null);
  const ceilingRef = useRef(null);
  // Set up inside the effect; lock/unlock need them but they live on the DOM.
  const suspendRef = useRef(null);
  const resumeRef = useRef(null);

  const unlock = useCallback(() => {
    lockedRef.current = false;
    if (settleRef.current) clearTimeout(settleRef.current);
    if (ceilingRef.current) clearTimeout(ceilingRef.current);
    settleRef.current = null;
    ceilingRef.current = null;
    if (resumeRef.current) resumeRef.current();
  }, []);

  const lock = useCallback(() => {
    lockedRef.current = true;
    // Hand the scroll entirely to our animation while it runs. Without this the
    // browser's snap engine stays live during window.scrollTo and can re-target
    // it mid-flight — that fight is what shows up as a stutter when the wheel
    // is spun hard.
    if (suspendRef.current) suspendRef.current();
    if (ceilingRef.current) clearTimeout(ceilingRef.current);
    ceilingRef.current = setTimeout(unlock, MAX_LOCK_MS);
  }, [unlock]);

  // Called by the page before its own programmatic scroll (the rail) so the
  // wheel handler doesn't try to steer at the same time.
  const markProgrammatic = useCallback(() => lock(), [lock]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const root = document.documentElement;
    const navEl = document.querySelector(".navbar-area");

    const desktopMQ = window.matchMedia(DESKTOP);
    const reducedMQ = window.matchMedia(REDUCED);
    const active = () => desktopMQ.matches && !reducedMQ.matches;

    // --- keep --wsv-nav-h honest -------------------------------------------
    // The CSS rule reads this for scroll-padding-top and so do we for the jump
    // target. One source of truth means the browser never re-snaps after us.
    // The navbar is SHORTER once .is-sticky lands (20px→15px padding at
    // scrollY>150). A jump that starts above 150 and ends below it therefore
    // changes the navbar's height mid-flight: we aimed using the tall value,
    // and the browser then wants to snap to the short one. That ~10px
    // disagreement is the second half of the jitter. So the offset is measured
    // once per gesture, frozen for its duration, and only re-read once the
    // scroll has settled.
    const measured = { value: 0 };
    const readNav = () => {
      const h = navEl ? navEl.getBoundingClientRect().height : 74;
      return h + 16;
    };
    const syncNavVar = () => {
      if (lockedRef.current) return; // frozen while a jump is in flight
      measured.value = readNav();
      root.style.setProperty("--wsv-nav-h", `${measured.value}px`);
    };
    const navOffset = () => measured.value || readNav();
    syncNavVar();

    // Suspend / resume the browser's own snapping around our animations.
    suspendRef.current = () => root.classList.add("wsv-snap-off");
    resumeRef.current = () => {
      root.classList.remove("wsv-snap-off");
      syncNavVar(); // catch up on any height change we froze through
    };

    let navRO = null;
    if (navEl && typeof ResizeObserver !== "undefined") {
      // Catches the .is-sticky padding change, not just window resizes.
      navRO = new ResizeObserver(syncNavVar);
      navRO.observe(navEl);
    }

    // --- enable / disable ---------------------------------------------------
    const applyState = () => {
      if (active()) root.classList.add("wsv-snapping");
      else {
        root.classList.remove("wsv-snapping");
        unlock();
      }
    };
    applyState();

    // --- the gesture --------------------------------------------------------
    const targets = () => Array.from(document.querySelectorAll(selector));

    // Tag the matches so the stylesheet needs to know only one class. Keeps the
    // snap set defined in exactly one place (SNAP_SELECTOR) instead of being
    // mirrored in SCSS and drifting from it.
    const tagged = targets();
    tagged.forEach((el) => el.classList.add("wsv-snap"));

    // Images and the carousel settle after first paint, so the first honest
    // measurement is a frame later.
    const firstMeasure = requestAnimationFrame(() => measureTall());

    // The usable band is the viewport minus the fixed navbar. Everything below
    // measures against that, not against the raw viewport.
    const usable = () => window.innerHeight - navOffset();

    // Where a section should come to rest.
    //
    // CENTRED when it fits in the usable band — which is most of them, and is
    // what stops a short section (the carousel is ~509px against an ~840px
    // viewport) from sitting at the top with the next section showing beneath.
    //
    // PINNED under the navbar when it is taller than the band, because centring
    // something that overflows the screen would cut off its own heading.
    const targetFor = (el) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const nav = navOffset();
      const band = usable();
      if (rect.height <= band) return top - nav - (band - rect.height) / 2;
      return top - nav;
    };

    // Tall sections need `start` alignment in CSS too, or native snapping would
    // pull them to centre and hide their tops. Measured, not hard-coded, so it
    // stays right as the wireframe areas are built out and grow.
    const measureTall = () => {
      const band = usable();
      targets().forEach((el) => {
        const tall = el.getBoundingClientRect().height > band;
        el.classList.toggle("wsv-snap-tall", tall);
      });
    };

    const onWheel = (event) => {
      if (!active() || lockedRef.current) return;
      if (event.ctrlKey) return; // pinch-zoom, not a scroll
      if (Math.abs(event.deltaY) < MIN_DELTA) return;

      const list = targets();
      if (list.length < 2) return;

      const dir = event.deltaY > 0 ? 1 : -1;

      // Which section are we on? Measured against the middle of the usable
      // band rather than its top: once sections are centred, the current one's
      // top sits BELOW the navbar line, so a top-edge test would name the
      // previous section every time.
      const line = navOffset() + usable() / 2;
      let index = 0;
      for (let i = 0; i < list.length; i += 1) {
        if (list[i].getBoundingClientRect().top <= line + EDGE_SLOP) index = i;
      }

      // "Scroll through, then jump" — the rule that keeps sections taller than
      // the viewport reachable. Only .wsv-plans is currently over-tall, but the
      // wireframe areas become so as they are built out.
      const rect = list[index].getBoundingClientRect();
      if (dir > 0 && rect.bottom > window.innerHeight + EDGE_SLOP) return;
      if (dir < 0 && rect.top < -EDGE_SLOP) return;

      const next = index + dir;
      // Past either end, hand back to the browser: scrolling up off the hero,
      // and down into the footer, should both feel like ordinary page scroll.
      if (next < 0 || next >= list.length) return;

      event.preventDefault();
      lock();
      window.scrollTo({
        top: Math.max(0, targetFor(list[next])),
        behavior: "smooth",
      });
    };

    // Release the lock once scrolling has actually stopped, rather than after a
    // guessed duration — the smooth-scroll timing belongs to the browser.
    const onScroll = () => {
      if (!lockedRef.current) return;
      if (settleRef.current) clearTimeout(settleRef.current);
      settleRef.current = setTimeout(unlock, SETTLE_MS);
    };

    // passive:false — preventDefault is the whole point.
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      syncNavVar();
      measureTall(); // the band changed, so which sections overflow it changed
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Where the browser reports it (Chrome/Firefox), scrollend is exact — the
    // debounce above is only the fallback for Safari.
    const hasScrollEnd = "onscrollend" in window;
    if (hasScrollEnd) window.addEventListener("scrollend", unlock);

    const onMQ = () => {
      applyState();
      syncNavVar();
    };
    // Safari < 14 has no addEventListener on MediaQueryList.
    if (desktopMQ.addEventListener) {
      desktopMQ.addEventListener("change", onMQ);
      reducedMQ.addEventListener("change", onMQ);
    } else {
      desktopMQ.addListener(onMQ);
      reducedMQ.addListener(onMQ);
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(firstMeasure);
      if (hasScrollEnd) window.removeEventListener("scrollend", unlock);
      if (desktopMQ.removeEventListener) {
        desktopMQ.removeEventListener("change", onMQ);
        reducedMQ.removeEventListener("change", onMQ);
      } else {
        desktopMQ.removeListener(onMQ);
        reducedMQ.removeListener(onMQ);
      }
      if (navRO) navRO.disconnect();
      tagged.forEach((el) => {
        el.classList.remove("wsv-snap");
        el.classList.remove("wsv-snap-tall");
      });
      unlock();
      // Leaving the page must not leave <html> snapping for every other route.
      root.classList.remove("wsv-snapping");
      root.classList.remove("wsv-snap-off");
      root.style.removeProperty("--wsv-nav-h");
      suspendRef.current = null;
      resumeRef.current = null;
    };
  }, [selector, lock, unlock]);

  return { markProgrammatic };
}
