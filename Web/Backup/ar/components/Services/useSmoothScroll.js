import { useCallback, useEffect, useRef } from "react";

// Smooth "sliding" scroll — the page eases toward where the wheel is pointing
// instead of jumping to it, and keeps gliding briefly after the gesture stops.
//
// Deliberately NOT a wrapper-transform implementation (the Locomotive approach).
// Translating a wrapper would make it the containing block for every
// position:fixed descendant, tearing .navbar-area, .wsv-rail and .wsv-progress
// off the viewport. This drives the REAL document scroll instead, so fixed
// elements, the native scrollbar, find-in-page and scroll anchoring all keep
// working, and anything listening to `scroll` (ScrollProgress, the page's
// scroll-spy) updates for free.
//
// Only `wheel` is intercepted. Keyboard, scrollbar dragging and touch stay
// entirely native — touch already has momentum of its own, and re-implementing
// the other two is how this kind of thing turns hostile.
//
// Three codebase constraints this has to respect:
//   1. bootstrap.min.css sets `:root { scroll-behavior: smooth }`. Left alone,
//      every frame of the loop below would ask the browser to *animate* to the
//      next interpolated position — an animation inside an animation. The
//      `wsv-smooth` class on <html> switches it to auto, and each step is
//      written with behavior:"instant" as a second guard.
//   2. CoverflowCarousel and HeroBuildSmarter both capture pointer events for
//      dragging. Neither listens to `wheel`, so there is no conflict — but the
//      carousel does claim Arrow keys, which is another reason to leave keys
//      native.
//   3. .navbar-area is fixed; nothing here changes layout, so it is unaffected.

const REDUCED = "(prefers-reduced-motion: reduce)";
// Area jumping is desktop-only, same breakpoint .wsv-rail uses to hide itself.
const DESKTOP = "(min-width: 992px)";

// The snap set: the intro block, then each service area. Deliberately ONE stop
// per area and nothing finer — scrolling within an area is ordinary scrolling,
// only crossing between areas is a jump.
const SNAP_SELECTOR = ".wsv-snap-stop, .wsv-area";

// How much of the remaining distance is covered each frame. Lower = longer
// glide. 0.09 is a slow, deliberate slide; 0.2 feels close to native.
const EASE = 0.055;
// Below this the animation has visually arrived; snap and stop the loop so we
// are not scheduling frames forever.
const ARRIVED = 0.4;
// Ignore trackpad jitter and the vertical bleed off a horizontal swipe.
const MIN_DELTA = 4;
// Fraction of the empty space between two areas that the reader travels before
// the jump to the next one arms. A third: enough to clear the last section and
// register that the area has ended, without stranding them in empty page.
// The gap itself is measured from the DOM at gesture time, so this needs no
// knowledge of the SCSS value and survives any change to it.
const GAP_ARM_FRACTION = 1 / 3;
// Wheel travel (px) that must be spent pushing at a boundary before the page
// crosses to the next area. Reaching the arm point only makes the crossing
// POSSIBLE; this is what makes it deliberate. A mouse notch is roughly 100px,
// so this is about six of them — enough that no single flick throws the reader
// out of the section they are reading.
const PUSH_REQUIRED = 620;
// Stop pushing for this long and the effort resets. Someone who paused to read
// should not have their earlier scrolling counted toward a crossing.
const PUSH_IDLE_MS = 600;
// How much the page still creeps while the push is being built up. A hard stop
// reads as a broken scrollbar; heavy damping reads as resistance.
const PUSH_RESIST = 0.12;

export default function useSmoothScroll() {
  const target = useRef(0);
  const raf = useRef(null);
  const enabled = useRef(false);
  const canSnap = useRef(false);
  // Effort banked at an area boundary: how much wheel travel has been spent
  // pushing, which direction it was spent in, and when — see PUSH_REQUIRED.
  const push = useRef(0);
  const pushDir = useRef(0);
  const pushAt = useRef(0);

  const stop = useCallback(() => {
    if (raf.current !== null) cancelAnimationFrame(raf.current);
    raf.current = null;
  }, []);

  const maxScroll = () =>
    document.documentElement.scrollHeight - window.innerHeight;

  // Records what we last wrote, so onScroll can tell our own scroll apart from
  // the user's. A boolean set around the scrollTo call does NOT work here:
  // `scroll` fires asynchronously, so the flag is already back to false by the
  // time the handler runs, and every frame of the loop looks like a foreign
  // scroll — which resets the target and kills the animation on the first frame.
  const wrote = useRef(-1);

  // Assigned inside the effect (needs the DOM); read by onWheel.
  let navOffset = () => 90;

  const write = (y) => {
    wrote.current = y;
    window.scrollTo({ top: y, behavior: "instant" });
  };

  const step = useCallback(() => {
    const current = window.scrollY;
    const delta = target.current - current;

    if (Math.abs(delta) < ARRIVED) {
      write(target.current);
      raf.current = null;
      return;
    }

    write(current + delta * EASE);
    raf.current = requestAnimationFrame(step);
  }, []);

  const start = useCallback(() => {
    if (raf.current === null) raf.current = requestAnimationFrame(step);
  }, [step]);

  // Eased programmatic jump — used by the SideRail so its jumps share this
  // easing instead of being instant (the `wsv-smooth` class disables the CSS
  // smooth scrolling its own scrollTo used to rely on).
  const scrollToY = useCallback(
    (y) => {
      if (!enabled.current) {
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
      target.current = Math.max(0, Math.min(y, maxScroll()));
      start();
    },
    [start]
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const root = document.documentElement;
    const navEl = document.querySelector(".navbar-area");
    const reducedMQ = window.matchMedia(REDUCED);
    const desktopMQ = window.matchMedia(DESKTOP);

    // The navbar is fixed AND changes height when it gains .is-sticky
    // (20px -> 15px padding at scrollY>150), so this is measured per use rather
    // than cached — a stale value lands every jump ~10px off.
    navOffset = () =>
      (navEl ? navEl.getBoundingClientRect().height : 74) + 16;

    const applyState = () => {
      enabled.current = !reducedMQ.matches;
      // Jumping is desktop-only; the glide itself is fine at any width, and a
      // wheel barely exists below it anyway.
      canSnap.current = enabled.current && desktopMQ.matches;
      if (enabled.current) {
        root.classList.add("wsv-smooth");
        target.current = window.scrollY;
      } else {
        root.classList.remove("wsv-smooth");
        push.current = 0;
        stop();
      }
    };
    applyState();

    const onWheel = (event) => {
      if (!enabled.current) return;
      if (event.ctrlKey) return; // pinch-zoom, not a scroll
      // Let the browser handle anything that scrolls its own box (none today,
      // but a modal or code block added later would break without this).
      if (event.target.closest && event.target.closest("[data-native-scroll]")) {
        return;
      }

      event.preventDefault();

      // deltaMode 1 = lines, 2 = pages. Normalise to pixels or a line-mode
      // mouse (common on Windows) scrolls a few pixels per notch.
      let delta = event.deltaY;
      if (event.deltaMode === 1) delta *= 16;
      else if (event.deltaMode === 2) delta *= window.innerHeight;

      const clamp = (y) => Math.max(0, Math.min(y, maxScroll()));

      // --- area-to-area jump ------------------------------------------------
      // Everything below measures against target.current, NOT window.scrollY.
      // The glide means the real scroll position lags the target by design, so
      // judging "have we reached the end of this area" by the live position
      // would fire the jump early and repeatedly during one gesture.
      if (canSnap.current && Math.abs(delta) >= MIN_DELTA) {
        const list = Array.from(document.querySelectorAll(SNAP_SELECTOR));
        if (list.length > 1) {
          const T = target.current;
          const dir = delta > 0 ? 1 : -1;
          const nav = navOffset();
          const band = window.innerHeight - nav;

          const topOf = (el) =>
            el.getBoundingClientRect().top + window.scrollY;

          // Current area = the last one whose top is above the middle of the
          // readable band. Measured from the middle rather than the top edge
          // because a short area is centred, so its top sits below the navbar.
          const line = T + nav + band / 2;
          let index = 0;
          for (let i = 0; i < list.length; i += 1) {
            if (topOf(list[i]) <= line) index = i;
          }

          const el = list[index];
          const top = topOf(el);
          const bottom = top + el.getBoundingClientRect().height;

          const next = index + dir;
          // Past either end, hand back to ordinary scrolling so the footer and
          // the top of the page stay reachable.
          if (next >= 0 && next < list.length) {
            const nextEl = list[next];
            const nextTop = topOf(nextEl);
            const nextH = nextEl.getBoundingClientRect().height;

            // The empty page between the two areas, measured from the DOM
            // rather than assumed. Deriving it here means it tracks whatever
            // the gap becomes — no constant to keep in step with the SCSS.
            const gapSize = Math.max(
              0,
              dir > 0 ? nextTop - bottom : top - (nextTop + nextH)
            );

            // Arm the jump a fraction of the way into that gap: far enough
            // that the reader has cleared the last section and had a moment on
            // it, but not so far that they sit staring at empty page — the
            // remainder is covered by the jump itself.
            const over = gapSize * GAP_ARM_FRACTION;

            // Still somewhere to go before that point? Then this gesture is
            // ordinary scrolling, not a crossing.
            const more =
              dir > 0
                ? bottom - T > window.innerHeight - over
                : top - T < over;

            if (!more) {
              // Reaching the arm point is NOT enough on its own — that made a
              // single flick of the wheel throw the reader into the next area.
              // The crossing has to be asked for: keep a running total of wheel
              // travel spent pushing at this boundary, and only release once it
              // clears PUSH_REQUIRED.
              const now =
                typeof performance !== "undefined" ? performance.now() : Date.now();
              // A change of mind, or a pause long enough to be reading rather
              // than pushing, starts the effort over.
              if (
                pushDir.current !== dir ||
                now - pushAt.current > PUSH_IDLE_MS
              ) {
                push.current = 0;
                pushDir.current = dir;
              }
              pushAt.current = now;
              push.current += Math.abs(delta);

              if (push.current >= PUSH_REQUIRED) {
                push.current = 0;
                // Centre an area that fits; pin a tall one under the navbar,
                // since centring something taller than the screen would push
                // its own heading off the top.
                target.current = clamp(
                  nextH <= band
                    ? nextTop - nav - (band - nextH) / 2
                    : nextTop - nav
                );
                start();
                return;
              }

              // Not yet earned. Let the page creep rather than freeze — a hard
              // stop reads as a broken scrollbar, whereas heavy damping reads
              // as resistance and invites the extra push.
              target.current = clamp(target.current + delta * PUSH_RESIST);
              start();
              return;
            }

            // Moving freely inside the area again — any effort banked at the
            // boundary is stale.
            push.current = 0;
          }
        }
      }

      // --- ordinary glide ---------------------------------------------------
      target.current = clamp(target.current + delta);
      start();
    };

    // Any scroll we did not cause — scrollbar drag, keyboard, anchor jump,
    // browser restoring position — resets the target so the next wheel gesture
    // continues from where the page actually is, and stops the glide.
    // Position comparison rather than a flag, for the async reason above; the
    // tolerance absorbs sub-pixel rounding and the one-frame lag between a write
    // and its scroll event.
    const onScroll = () => {
      if (Math.abs(window.scrollY - wrote.current) < 3) return; // ours
      target.current = window.scrollY;
      push.current = 0;
      stop();
    };

    const onResize = () => {
      target.current = Math.max(0, Math.min(target.current, maxScroll()));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    if (reducedMQ.addEventListener) {
      reducedMQ.addEventListener("change", applyState);
      desktopMQ.addEventListener("change", applyState);
    } else {
      reducedMQ.addListener(applyState);
      desktopMQ.addListener(applyState);
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (reducedMQ.removeEventListener) {
        reducedMQ.removeEventListener("change", applyState);
        desktopMQ.removeEventListener("change", applyState);
      } else {
        reducedMQ.removeListener(applyState);
        desktopMQ.removeListener(applyState);
      }
      stop();
      // Leaving the page must not leave every other route with CSS smooth
      // scrolling disabled.
      root.classList.remove("wsv-smooth");
    };
  }, [start, stop, step]);

  return { scrollToY };
}
