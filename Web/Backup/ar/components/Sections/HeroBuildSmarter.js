import React from "react";

/**
 * HeroBuildSmarter — fully self-contained hero section.
 * Portable: no external CSS, icon fonts, or data files required.
 * Drop this single file into any Next.js project and import it directly.
 */
export default function HeroBuildSmarter({
  badgeText = "NEXT-GEN PRODUCTIVITY",
  headlineBold = "Build smarter tools for",
  headlineLight = "modern teams",
  ctaText = "Get Started",
  ctaHref = "#",
  onCtaClick,
  backgroundImage = null,
}) {
  return (
    <section className="hbs-root">
      <div
        className="hbs-clip"
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
      {backgroundImage ? <div className="hbs-overlay" aria-hidden="true" /> : null}
      <div className="hbs-inner">
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

        <h1 className="hbs-headline">
          <span className="hbs-headline-bold">{headlineBold} </span>
          <span className="hbs-headline-light">{headlineLight}</span>
        </h1>

        <a
          className="hbs-cta"
          href={ctaHref}
          onClick={onCtaClick}
        >
          {ctaText}
        </a>
      </div>

      <div className="hbs-arc" aria-hidden="true">
        <svg
          viewBox="0 0 1920 400"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <defs>
            <radialGradient id="hbsArcGradient" cx="50%" cy="0%" r="75%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#000000" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M0,400 C 480,80 1440,80 1920,400 L1920,400 L0,400 Z"
            fill="url(#hbsArcGradient)"
          />
          <path
            d="M0,400 C 480,80 1440,80 1920,400"
            fill="none"
            stroke="#000000"
            strokeOpacity="1"
            strokeWidth="1"
          />
        </svg>
      </div>
      </div>

      <style jsx>{`
        .hbs-root {
          position: relative;
          width: 100%;
          background: #ffffff;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
        }

        .hbs-clip {
          position: relative;
          overflow: hidden;
          padding: 96px 24px 160px;
          box-sizing: border-box;
        }

        .hbs-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.86) 0%,
            rgba(255, 255, 255, 0.72) 60%,
            rgba(255, 255, 255, 0.55) 100%
          );
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
        }

        .hbs-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 999px;
          background: #ffffff;
          color: #1a1a1a;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          cursor: default;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          margin-bottom: 32px;
        }

        .hbs-badge-chevron {
          flex-shrink: 0;
        }

        .hbs-headline {
          margin: 0 0 36px;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          font-size: clamp(32px, 6vw, 72px);
        }

        .hbs-headline-bold {
          color: #111111;
        }

        .hbs-headline-light {
          color: #8a8a8a;
        }

        .hbs-cta {
          display: inline-block;
          padding: 16px 36px;
          border-radius: 10px;
          border: 1.5px solid #111111;
          background: #111111;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            background 0.2s ease, border-color 0.2s ease;
        }

        .hbs-cta:hover {
          background: #000000;
          border-color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
          color: #ffffff;
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

        @media (max-width: 576px) {
          .hbs-clip {
            padding: 64px 16px 120px;
          }
          .hbs-arc {
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
