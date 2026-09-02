import React, { useRef } from "react";

/**
 * HeroBuildSmarter — fully self-contained hero section.
 * Portable: no external CSS, icon fonts, or data files required.
 * Drop this single file into any Next.js project and import it directly.
 */
export default function HeroBuildSmarter({
  badgeText = "NEXT-GEN PRODUCTIVITY",
  headlineBold = "Build smarter tools for",
  headlineLight = "modern teams",
  // One short supporting line under the headline. Deliberately small and muted
  // so it sits below the headline in the hierarchy, not beside it.
  subtitle = null,
  ctaText = "Get Started",
  ctaHref = "#",
  onCtaClick,
  backgroundImage = null,
  /** Any background-size value. "cover" fills and crops; "contain" fits the
      whole image in, letterboxing against --hbs-surface instead of enlarging
      the section. */
  backgroundSize = "cover",
  /** Which part of the image survives the crop, e.g. "center", "center 70%". */
  backgroundPosition = "center",
  /** Rounds the two bottom corners. Any CSS length. */
  bottomRadius = "0px",
  // Any CSS length ("85vh", "720px"). Left null the section is sized by its
  // content, which is what the original reference does. Set it and the content
  // stays vertically centred in the taller box.
  minHeight = null,
  /** Gap to whatever follows. Any CSS length. */
  marginBottom = "60px",
  // 0–1. Lays a navy scrim over the background image and flips the whole
  // section to its on-dark palette — a dark scrim and dark type cannot coexist.
  // null leaves the image bare, which is the original reference.
  overlay = null,
  // Optional slide rotation. The host page owns the timer and the active index;
  // this component only draws the dots and re-keys the text so it cross-fades.
  // Leave slideCount at 1 and the whole apparatus renders nothing.
  slideCount = 1,
  activeSlide = 0,
  onSlideSelect,
  slideLabel = (i) => `Slide ${i + 1}`,
}) {
  const hasDots = slideCount > 1 && typeof onSlideSelect === "function";

  // Drag-to-change-slide. Pointer events cover mouse, pen and touch in one set
  // of handlers, and pointer capture means a release outside the section still
  // finishes the gesture instead of stranding it mid-drag.
  const drag = useRef(null);
  const dragged = useRef(false);
  const DRAG_SLOP = 8; // below this it's a click, not a drag
  const DRAG_COMMIT = 60; // past this the slide actually changes

  const onPointerDown = (e) => {
    if (!hasDots || e.button > 0) return;
    drag.current = e.clientX;
    dragged.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (drag.current === null) return;
    if (Math.abs(e.clientX - drag.current) > DRAG_SLOP) dragged.current = true;
  };

  const onPointerUp = (e) => {
    if (drag.current === null) return;
    const dx = e.clientX - drag.current;
    drag.current = null;
    if (Math.abs(dx) < DRAG_COMMIT) return;
    // "Forward" is a drag against the reading direction, so the gesture matches
    // the page rather than the screen. Read off <html> to stay dependency-free.
    const rtl =
      typeof document !== "undefined" &&
      document.documentElement.getAttribute("dir") === "rtl";
    const forward = rtl ? dx > 0 : dx < 0;
    const next =
      (activeSlide + (forward ? 1 : -1) + slideCount) % slideCount;
    onSlideSelect(next);
  };

  // A drag that ends on the CTA must not also count as a click on it.
  const onClickCapture = (e) => {
    if (!dragged.current) return;
    dragged.current = false;
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section
      className={`hbs-root${overlay ? " is-on-dark" : ""}`}
      style={{
        marginBottom,
        // On the root as well as the clip, so the drop shadow follows the
        // rounded corners instead of tracing a square underneath them.
        borderBottomLeftRadius: bottomRadius,
        borderBottomRightRadius: bottomRadius,
      }}
    >
      <div
        className={`hbs-clip${hasDots ? " is-draggable" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          drag.current = null;
        }}
        onClickCapture={onClickCapture}
        style={{
          ...(backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize,
                backgroundPosition,
                backgroundRepeat: "no-repeat",
              }
            : null),
          ...(minHeight ? { minHeight } : null),
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        }}
      >
      {overlay ? (
        <div
          className="hbs-overlay"
          aria-hidden="true"
          style={{ backgroundColor: `rgba(10, 31, 68, ${overlay})` }}
        />
      ) : null}
      {/* Keyed on the active slide: React swaps the subtree, which restarts the
          CSS fade below. Only the text moves — background, overlay and arc are
          outside this div and stay put across a slide change. */}
      <div className="hbs-inner" key={activeSlide}>
        <a
          className="hbs-badge"
          href="#"
          onClick={(e) => e.preventDefault()}
          tabIndex={-1}
        >
          <span>{badgeText}</span>
          <svg
            className="hbs-badge-chevron"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* has-sub tightens the gap to the headline only when there is
            something to tighten to — a plain class rather than :has(), which
            this codebase uses nowhere. */}
        <h1 className={`hbs-headline${subtitle ? " has-sub" : ""}`}>
          <span className="hbs-headline-bold">{headlineBold} </span>
          <span className="hbs-headline-light">{headlineLight}</span>
        </h1>

        {subtitle ? <p className="hbs-sub">{subtitle}</p> : null}

        <a
          className="hbs-cta"
          href={ctaHref}
          onClick={onCtaClick}
        >
          {ctaText}
        </a>
      </div>

      {hasDots ? (
        <div className="hbs-dots">
          {Array.from({ length: slideCount }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`hbs-dot${i === activeSlide ? " is-active" : ""}`}
              aria-label={slideLabel(i)}
              aria-current={i === activeSlide ? "true" : undefined}
              onClick={() => onSlideSelect(i)}
            />
          ))}
        </div>
      ) : null}

      <div className="hbs-arc" aria-hidden="true">
        <svg
          viewBox="0 0 1920 400"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <defs>
            <radialGradient id="hbsArcGradient" cx="50%" cy="0%" r="75%">
              <stop offset="0%" stopColor="#0a1f44" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#0a1f44" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0a1f44" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M0,400 C 480,80 1440,80 1920,400 L1920,400 L0,400 Z"
            fill="url(#hbsArcGradient)"
          />
          <path
            d="M0,400 C 480,80 1440,80 1920,400"
            fill="none"
            stroke="#0a1f44"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </svg>
      </div>
      </div>

      <style jsx>{`
        .hbs-root {
          /* The whole palette, in one place. These are the Katechs service-page
             tokens (style.scss: $wsv-navy / $wsv-muted / $wsv-line / $main-color)
             written as literals so the file stays importable anywhere — a host
             project re-skins the section by overriding these five. */
          --hbs-ink: #0a1f44;
          --hbs-muted: #6084a4;
          --hbs-line: rgba(15, 23, 42, 0.08);
          --hbs-accent: #1dd3f8;
          --hbs-surface: #ffffff;

          position: relative;
          width: 100%;
          background: var(--hbs-surface);
          box-shadow: 0 18px 40px rgba(10, 31, 68, 0.16);
          /* Almarai first so Arabic copy matches the rest of the site; the Latin
             stack behind it keeps the file portable to a project without it. */
          font-family: "Almarai", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        /* Same five tokens, re-pointed for a dark scrim. Everything downstream
           reads the vars, so only the four cases the vars can't express on
           their own are restated below. */
        .hbs-root.is-on-dark {
          --hbs-ink: #ffffff;
          --hbs-muted: rgba(255, 255, 255, 0.62);
          --hbs-line: rgba(255, 255, 255, 0.22);
          --hbs-surface: #0a1f44;
        }

        .hbs-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          /* colour + alpha come from the overlay prop, inline */
          border-raduis: 10px;
        }

        .hbs-clip {
          position: relative;
          overflow: hidden;
          padding: 96px 24px 160px;
          box-sizing: border-box;
          /* Centres .hbs-inner when a minHeight makes the box taller than the
             content. Everything else in here is absolutely positioned, so with
             no minHeight this changes nothing. */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* pan-y keeps vertical page scrolling with the browser and gives the
           horizontal axis to the drag handler. */
        .hbs-clip.is-draggable {
          cursor: grab;
          touch-action: pan-y;
          user-select: none;
          -webkit-user-select: none;
        }

        .hbs-clip.is-draggable:active {
          cursor: grabbing;
        }

        .hbs-inner {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: hbs-fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes hbs-fade-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .hbs-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border: 1px solid var(--hbs-line);
          border-radius: 999px;
          background: var(--hbs-surface);
          color: var(--hbs-ink);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          cursor: default;
          box-shadow: 0 1px 2px rgba(10, 31, 68, 0.06);
          margin-bottom: 32px;
        }

        .hbs-badge-chevron {
          flex-shrink: 0;
        }

        /* The chevron means "forward", so it has to follow the reading
           direction rather than keep pointing right. :global() because the
           dir attribute lives on <html>, outside this component's scope. */
        :global([dir="rtl"]) .hbs-badge-chevron {
          transform: scaleX(-1);
        }

        .hbs-headline {
          /* Stated outright, not inherited: a host project's global h1
             font-family reset beats inheritance from .hbs-root on specificity,
             which is exactly what this site's style.scss does. */
          font-family: "Almarai", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          margin: 0 0 36px;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          font-size: clamp(32px, 6vw, 72px);
        }

        .hbs-headline.has-sub {
          margin-bottom: 18px;
        }

        .hbs-sub {
          max-width: 620px;
          margin: 0 0 34px;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
          color: var(--hbs-muted);
        }

        .hbs-headline-bold {
          color: var(--hbs-ink);
        }

        .hbs-headline-light {
          color: var(--hbs-muted);
        }

        .hbs-cta {
          display: inline-block;
          padding: 16px 36px;
          border-radius: 12px;
          border: 1.5px solid var(--hbs-ink);
          background: var(--hbs-ink);
          color: var(--hbs-surface);
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(10, 31, 68, 0.28);
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        /* Cyan-on-navy hover, same swap .wsv-btn uses everywhere else on the
           service pages — the accent arrives on hover rather than at rest. */
        .hbs-cta:hover {
          background: var(--hbs-accent);
          border-color: var(--hbs-accent);
          color: var(--hbs-ink);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(29, 211, 248, 0.35);
        }

        .hbs-cta:active {
          transform: translateY(0);
        }

        .hbs-arc {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 220px;
          z-index: 1;
          pointer-events: none;
        }

        /* Above the arc, clear of its darkest band. Centred rather than pinned
           to an edge so it needs no RTL mirroring. */
        .hbs-dots {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 48px;
          z-index: 3;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .hbs-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: rgba(10, 31, 68, 0.25);
          cursor: pointer;
          transition: background 0.25s ease, width 0.25s ease;
        }

        .hbs-dot:hover {
          background: rgba(10, 31, 68, 0.5);
        }

        .hbs-dot.is-active {
          width: 22px;
          border-radius: 999px;
          background: var(--hbs-ink);
        }

        /* The four on-dark cases the tokens can't carry by themselves. */
        .hbs-root.is-on-dark .hbs-badge {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: none;
        }

        /* --hbs-muted is tuned for the headline's light half; body copy at 16px
           needs more than 62% to stay comfortable over the scrim. */
        .hbs-root.is-on-dark .hbs-sub {
          color: rgba(255, 255, 255, 0.82);
        }

        /* --hbs-ink is white here, so the hover text colour has to be stated. */
        .hbs-root.is-on-dark .hbs-cta:hover {
          color: #0a1f44;
        }

        .hbs-root.is-on-dark .hbs-dot {
          background: rgba(255, 255, 255, 0.35);
        }

        .hbs-root.is-on-dark .hbs-dot:hover {
          background: rgba(255, 255, 255, 0.65);
        }

        @media (prefers-reduced-motion: reduce) {
          .hbs-inner {
            animation: none;
          }
          .hbs-dot {
            transition: none;
          }
        }

        @media (max-width: 576px) {
          .hbs-clip {
            padding: 64px 16px 120px;
          }
          .hbs-arc {
            height: 140px;
          }
          .hbs-dots {
            bottom: 28px;
          }
        }
      `}</style>
    </section>
  );
}
