import React from "react";

/**
 * CoverflowCarousel — 3D cover-flow ring, fully self-contained.
 * Portable: no external CSS, icon fonts, or data files required.
 *
 * Ported from a TypeScript/Tailwind/lucide original: the transform engine below
 * is unchanged, but the types, the `cn` helper, every utility class and the
 * icon package are gone — this project has none of them.
 *
 * slides: [{ src, alt, title?, subtitle?, meta?: [{ label, value }] }]
 */

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function CoverflowCarousel({
  slides,
  /** Degrees the first neighbour tilts. */
  rotate = 44,
  /** How far the first neighbour recedes, as a fraction of card width. */
  depth = 0.6,
  /** Viewer distance as a multiple of card width — smaller is a wider lens. */
  perspective = 3,
  /** Exponent on distance. Below 1 the rake eases off as cards travel out. */
  falloff = 0.56,
  /** Opacity lost per step from the centre. */
  fade = 0.1,
  /** Any CSS length. Everything else is derived from it, so the rake scales. */
  cardWidth = "clamp(148px, 22vw, 260px)",
  /** Any CSS length. Defaults to cardWidth, i.e. square cards. */
  cardHeight = null,
  /** Space between cards, as a fraction of card width. */
  gap = 0.05,
  loop = true,
  /** Milliseconds between automatic steps. 0 turns autoplay off. */
  autoplay = 0,
  showCaption = false,
  showPagination = false,
  showNavigation = false,
  /** Names the carousel for assistive tech. */
  label = "Cover carousel",
  /** Labels for the two arrows and the dots, so callers can localise them. */
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  dotLabel = (i) => `Go to slide ${i + 1}`,
  className = "",
}) {
  const count = slides ? slides.length : 0;

  const frameRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  /** Fractional card index at the centre. The single source of truth. */
  const posRef = React.useRef(0);
  /** Where the current settle is headed. Stepping off `pos` instead would
      swallow a keypress that lands mid-flight, before the round-off moves. */
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef(null);
  const dragRef = React.useRef(null);

  const [selected, setSelected] = React.useState(0);
  /** Autoplay is suspended while the pointer or the keyboard is on it. */
  const [paused, setPaused] = React.useState(false);

  /** Nearest whole card, folded back into 0..count-1. */
  const indexAt = React.useCallback(
    (pos) => ((Math.round(pos) % count) + count) % count,
    [count]
  );

  // Paint straight to the DOM. Sixty state updates a second would re-render
  // every card for numbers React never needs to see.
  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      // Fold the distance into the shorter way round the ring. This is the
      // whole looping mechanism — no cloned nodes, no shuffling the DOM.
      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      // Both the tilt and the recession ease off as cards travel out —
      // doubling the distance adds only about half again as much of each.
      // A linear ramp folds the second card shut; this keeps it readable.
      const ramp = Math.pow(distance, falloff);
      // Capped short of edge-on so a far card never turns its back.
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      // A card is teleported across the ring at exactly half a turn out, so it
      // has to be gone by then or the jump is visible.
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        // Exponential ease-out, not a spring. Swap in a spring only if the
        // settle needs overshoot.
        posRef.current += remaining * 0.16;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint]
  );

  const clamp = React.useCallback(
    (pos) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop]
  );

  const goTo = React.useCallback(
    (index) => {
      // Take the shorter way round rather than unwinding the whole ring.
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clamp(target));
    },
    [clamp, count, loop, settle]
  );

  const nudge = React.useCallback(
    (by) => settle(clamp(Math.round(targetRef.current) + by)),
    [clamp, settle]
  );

  const onPointerDown = (event) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    // Cards per second, for the throw.
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    // Let a flick carry, but never more than two cards.
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(clamp(Math.round(posRef.current + carried)));
  };

  // Card width drives pitch, depth and perspective, so it is the only thing
  // worth measuring — and only when the box actually changes.
  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  // Autoplay. Held off while hovered or focused (see the root's handlers), and
  // skipped rather than cancelled for the two transient cases: a drag in flight
  // owns the position, and a hidden tab would otherwise bank up steps and burn
  // them all at once on return. Reduced motion opts out entirely.
  React.useEffect(() => {
    if (!autoplay || paused || count < 2) return undefined;
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const id = setInterval(() => {
      if (dragRef.current || document.hidden) return;
      nudge(1);
    }, autoplay);
    return () => clearInterval(id);
  }, [autoplay, paused, count, nudge]);

  if (!count) return null;

  const active = slides[selected];

  return (
    <div
      className={`cf-root ${className}`}
      style={{
        "--cf-card": cardWidth,
        "--cf-card-h": cardHeight || cardWidth,
        "--cf-perspective": perspective,
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="cf-stage">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cf-frame"
        >
          <div className="cf-track">
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${count}`}
                className="cf-card"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="cf-img"
                />
              </div>
            ))}
          </div>
        </div>

        {showNavigation ? (
          <>
            {/* Pinned with logical offsets and mirrored glyphs, so "previous"
                sits at the start of the reading direction in RTL too. */}
            <button
              type="button"
              className="cf-nav cf-nav-prev"
              aria-label={prevLabel}
              onClick={() => nudge(-1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="cf-nav cf-nav-next"
              aria-label={nextLabel}
              onClick={() => nudge(1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      {showCaption && active && active.title ? (
        <div className="cf-caption" key={selected}>
          <p className="cf-caption-title">{active.title}</p>
          {active.subtitle ? (
            <p className="cf-caption-sub">{active.subtitle}</p>
          ) : null}
          {active.meta && active.meta.length > 0 ? (
            <dl className="cf-meta">
              {active.meta.map((row) => (
                <div key={row.label} className="cf-meta-row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      ) : null}

      {showPagination ? (
        <div className="cf-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`cf-dot${index === selected ? " is-active" : ""}`}
              aria-label={dotLabel(index)}
              aria-current={index === selected ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      ) : null}

      <style jsx>{`
        .cf-root {
          /* Same five-token palette as the other Sections files: Katechs
             service-page values written as literals so this stays importable
             anywhere. Override these to re-skin. */
          --cf-ink: #0a1f44;
          --cf-muted: #6084a4;
          --cf-line: rgba(15, 23, 42, 0.08);
          --cf-surface: #ffffff;

          width: 100%;
          font-family: "Cairo", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .cf-stage {
          position: relative;
        }

        .cf-frame {
          /* Vertical padding keeps the drop shadows clear of the overflow clip. */
          padding: 40px 0;
          overflow: hidden;
          outline: none;
          cursor: grab;
          perspective: calc(var(--cf-card) * var(--cf-perspective));
          /* Horizontal drag is ours; the page keeps vertical scrolling. */
          touch-action: pan-y;
        }

        .cf-frame:active {
          cursor: grabbing;
        }

        .cf-frame:focus-visible {
          box-shadow: inset 0 0 0 2px var(--cf-ink);
          border-radius: 8px;
        }

        .cf-track {
          position: relative;
          height: var(--cf-card-h);
          transform-style: preserve-3d;
          user-select: none;
          -webkit-user-select: none;
        }

        .cf-card {
          position: absolute;
          left: 50%;
          top: 0;
          width: var(--cf-card);
          height: var(--cf-card-h);
          overflow: hidden;
          border-radius: 16px;
          background-color: #eef1f5;
          box-shadow: 0 18px 40px rgba(10, 31, 68, 0.22);
          will-change: transform;
        }

        .cf-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          -webkit-user-select: none;
        }

        .cf-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 1px solid var(--cf-line);
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: var(--cf-ink);
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .cf-nav:hover {
          background-color: var(--cf-surface);
        }

        .cf-nav-prev {
          inset-inline-start: 12px;
        }

        .cf-nav-next {
          inset-inline-end: 12px;
        }

        :global([dir="rtl"]) .cf-nav svg {
          transform: scaleX(-1);
        }

        .cf-caption {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 8px;
          padding: 0 24px;
          text-align: center;
          animation: cf-fade-in 0.3s ease both;
        }

        @keyframes cf-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .cf-caption-title {
          margin: 0;
          font-size: 17px;
          font-weight: 700;
          color: var(--cf-ink);
        }

        .cf-caption-sub {
          margin: 6px 0 0;
          font-size: 14px;
          color: var(--cf-muted);
        }

        .cf-meta {
          width: 100%;
          max-width: 260px;
          margin: 24px 0 0;
          font-size: 13px;
        }

        .cf-meta-row {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
        }

        .cf-meta-row dt {
          color: var(--cf-muted);
        }

        .cf-meta-row dd {
          margin: 0;
          font-weight: 600;
          color: var(--cf-ink);
        }

        .cf-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .cf-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background-color: var(--cf-ink);
          opacity: 0.3;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .cf-dot.is-active {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .cf-caption {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
