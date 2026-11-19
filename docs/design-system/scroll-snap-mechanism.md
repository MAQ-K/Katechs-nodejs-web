# Section scroll-snap mechanism — REMOVED, archived for possible reuse

Removed from `/services` on 2026-08-31 at the user's request, replaced by plain
smooth sliding scroll. Everything needed to restore it is in this file.

**What it did:** one wheel gesture = one service area. Native CSS scroll-snap did
the settling; a thin JS layer added the discrete feel, a jump blur on area
crossings, and cooperation with the SideRail. Desktop only (>=992px), off under
`prefers-reduced-motion`.

**Why it was built the way it was** — four constraints discovered in this codebase,
all of which caused visible bugs when ignored. Any restore has to honour them:

1. `bootstrap.min.css` already sets `:root { scroll-behavior: smooth }` (gated on
   `prefers-reduced-motion: no-preference`). `window.scrollTo` therefore animates
   for free and the duration belongs to the browser — hence a scroll-settle
   detector rather than a guessed timeout.
2. `.navbar-area` is fixed and CHANGES HEIGHT with `.is-sticky` (20px->15px
   padding at scrollY>150). The CSS snap position and the JS jump target must use
   the same number or the browser re-snaps ~10px after every jump. A
   `ResizeObserver` kept `--wsv-nav-h` in sync and both sides read only that.
3. `CoverflowCarousel` claims ArrowLeft/ArrowRight with `preventDefault`, so the
   hook binds the wheel ONLY and leaves every key alone.
4. `scroll-snap-type` must live on `<html>`, which every route shares — so it was
   gated behind an `html.wsv-snapping` class added on mount / removed on unmount.
   Without that it silently changes scrolling site-wide.

Also: `filter` makes an element the containing block for `position: fixed`
descendants, so the jump blur went on the SECTIONS, never a wrapper — blurring an
ancestor tears the navbar and side rail off the viewport and forces a ~9000px
layer to rasterize.

---

## 1. Restore: `components/Services/useSectionSnap.js`

```js
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
  ".wsv-snap-stop", // hero wrapper (marker, page-owned)
  ".wsv-projects", // Services/Projects.js
  ".wsv-nav", // Services/ServiceNav.js
  // ONE stop per service area, not per section inside it. Overview, packages,
  // and the wireframe blocks used to each be their own stop — moving through
  // an area was a series of jumps. Now the whole .wsv-area is the stop: the
  // "scroll through, then jump" rule below already handles an over-tall target
  // by letting native scroll proceed until its bottom, so this single change
  // is what gives "normal scroll inside an area, jump between areas" for free.
  ".wsv-area",
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

  // `blur` is passed only when the jump crosses an area boundary — moving
  // between sections inside one area is not meant to read as a scene change.
  const lock = useCallback(
    (blur = false) => {
      lockedRef.current = true;
      // Hand the scroll entirely to our animation while it runs. Without this
      // the browser's snap engine stays live during window.scrollTo and can
      // re-target it mid-flight — that fight is what shows up as a stutter when
      // the wheel is spun hard.
      if (suspendRef.current) suspendRef.current(blur);
      if (ceilingRef.current) clearTimeout(ceilingRef.current);
      ceilingRef.current = setTimeout(unlock, MAX_LOCK_MS);
    },
    [unlock]
  );

  // Called by the page before its own programmatic scroll (the rail) so the
  // wheel handler doesn't try to steer at the same time. Rail items ARE areas,
  // so every rail jump crosses one by definition.
  const markProgrammatic = useCallback(() => lock(true), [lock]);

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

    // Suspend / resume the browser's own snapping around our animations, and
    // carry the jump blur on the same lifecycle.
    //
    // `is-jumping` drives a filter on the SECTIONS, never on a wrapper: `filter`
    // makes an element the containing block for any position:fixed descendant,
    // so blurring an ancestor of the page would tear the navbar, the rail and
    // the go-top button off the viewport. It would also force a ~9000px layer to
    // rasterize. Sections contain nothing fixed and only the one or two on
    // screen ever rasterize, so both problems simply do not arise.
    suspendRef.current = (blur) => {
      root.classList.add("wsv-snap-off");
      if (blur) root.classList.add("is-jumping");
    };
    resumeRef.current = () => {
      root.classList.remove("wsv-snap-off");
      root.classList.remove("is-jumping");
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

    // Which service area a stop belongs to, or null for the intro stops (hero,
    // carousel, navigator) which sit outside any area wrapper. Used only to
    // decide whether a jump earns the blur: moving between sections inside one
    // area is navigation, crossing into a new area is a scene change.
    const areaOf = (el) => {
      const wrapper = el.closest("[data-area]");
      return wrapper ? wrapper.getAttribute("data-area") : null;
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

      // "Scroll through, then jump" — the rule that keeps a stop taller than
      // the viewport reachable. Now that the stop is a whole .wsv-area rather
      // than one section, this is what makes scrolling INSIDE an area feel
      // native: only once you hit the area's true bottom does the next gesture
      // advance to the next area.
      const rect = list[index].getBoundingClientRect();
      if (dir > 0 && rect.bottom > window.innerHeight + EDGE_SLOP) return;
      if (dir < 0 && rect.top < -EDGE_SLOP) return;

      const next = index + dir;
      // Past either end, hand back to the browser: scrolling up off the hero,
      // and down into the footer, should both feel like ordinary page scroll.
      if (next < 0 || next >= list.length) return;

      event.preventDefault();
      lock(areaOf(list[index]) !== areaOf(list[next]));
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
      root.classList.remove("is-jumping");
      root.style.removeProperty("--wsv-nav-h");
      suspendRef.current = null;
      resumeRef.current = null;
    };
  }, [selector, lock, unlock]);

  return { markProgrammatic };
}
```

---

## 2. Restore: SCSS — `styles/style.scss`

Went immediately before the `/*-- Responsive --*/` group inside the
`=== Web Services: Area 1 — Business Websites ===` banner.

```scss
/*-- Section 7: desktop section snap --*/
/* One scroll gesture = one section, desktop only.
   `scroll-snap-type` has to live on the scroll container, which is <html> — and
   <html> is shared by every page in the app. So it is gated behind a class that
   components/Services/useSectionSnap.js adds on mount and removes on unmount;
   without that this rule would silently change scrolling site-wide.
   --wsv-nav-h is written by the same hook from the real measured navbar height,
   so the CSS offset and the JS jump target can never drift apart. */
@media only screen and (min-width: 992px) {
  html.wsv-snapping {
    scroll-snap-type: y proximity;
    scroll-padding-top: var(--wsv-nav-h, 90px);
  }

  /* `proximity`, never `mandatory`: several of these sections are taller than
     the viewport, and mandatory would drag the reader back to the section top
     while they are still working down it. */
  /* Centred, not top-aligned. Most sections are shorter than the viewport, so
     `start` parked them against the navbar and left the next section visible
     underneath. `center` resolves against the snapport, which scroll-padding-top
     has already shrunk by the navbar. */
  html.wsv-snapping .wsv-snap {
    scroll-snap-align: center;
  }

  /* Except when taller than that band: centring something that overflows the
     screen would push its own heading off the top. The hook measures each
     section and adds this class. */
  html.wsv-snapping .wsv-snap.wsv-snap-tall {
    scroll-snap-align: start;
  }

  /* Snapping OFF for the duration of one of our own jumps, or the browser's
     snap engine re-targets the animation mid-flight — two things steering one
     scroll, which reads as a stutter when the wheel is spun hard. */
  html.wsv-snapping.wsv-snap-off {
    scroll-snap-type: none;
  }

  /* Jump blur — fires ONLY when a jump crosses into a different service area
     (the hook compares [data-area] ancestors). On the SECTIONS, never a
     wrapper — see the containing-block note at the top of this file. */
  html.wsv-snapping .wsv-snap {
    transition: filter 0.16s ease-out;
  }

  html.wsv-snapping.is-jumping .wsv-snap {
    filter: blur(1px);
  }
}

@media (prefers-reduced-motion: reduce) {
  html.wsv-snapping {
    scroll-snap-type: none;
  }

  html.wsv-snapping .wsv-snap,
  html.wsv-snapping.is-jumping .wsv-snap {
    filter: none;
    transition: none;
  }
}
```

---

## 3. Restore: `pages/services/index.js` wiring

Four edits:

```jsx
// a) import
import useSectionSnap from "../../components/Services/useSectionSnap";

// b) in the component body, near the other state
// Desktop-only section snapping. Returns markProgrammatic so the rail's own
// jump below can tell it to stand down instead of the two fighting.
const { markProgrammatic } = useSectionSnap();

// c) inside scrollTo(), immediately before window.scrollTo — this is what stops
//    the rail and the wheel handler steering at the same time
markProgrammatic();
window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

// d) marker class on the hero wrapper div
<div
  className="wsv-snap-stop"
  onMouseEnter={() => setHeroPaused(true)}
  onMouseLeave={() => setHeroPaused(false)}
>
```

`data-area` on the four area wrappers is still in the page — the hook read it to
decide whether a jump crossed an area boundary (blur) or stayed inside one (no
blur). It was left in place because it is harmless and cheap to reuse.

---

## 4. Snap-target set

`SNAP_SELECTOR` in the hook. Final state was ONE stop per area, not per section
(changed late, on user feedback — "in each area normal scroll, from area to area
the scroll we have now"):

```js
export const SNAP_SELECTOR = [
  ".wsv-snap-stop", // hero wrapper (marker, page-owned)
  ".wsv-projects",  // Services/Projects.js
  ".wsv-nav",       // Services/ServiceNav.js
  ".wsv-area",      // one stop per service area
].join(", ");
```

The hook tagged matches with `.wsv-snap` at runtime so the stylesheet needed only
one class and the set stayed defined in exactly one place.

---

## History / feedback that shaped it

- Sections taller than the viewport: "scroll through, then jump" — a gesture is
  ignored while the current stop still has unseen content, so nothing becomes
  unreachable. This is also what made "normal scroll inside an area" work for
  free once the stop became the whole area.
- Alignment started as `start`, changed to `center` after the user pointed out
  short sections sat at the top with the next one showing beneath.
- Blur started at 2px on every section jump; user asked for lighter and
  area-crossings only -> 1px, gated on `[data-area]` comparison.
- A jitter bug on fast/spammed scrolling was traced to two causes, both fixed
  above: the live snap engine fighting the animation, and the navbar height
  changing mid-jump.
