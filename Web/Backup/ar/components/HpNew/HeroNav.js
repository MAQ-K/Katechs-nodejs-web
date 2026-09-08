import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/images/logo-konoz-ar.png";

// The homepage's own top navigation — tabs sitting ON the hero slide rather
// than in a bar above it, per Homepage/structure-drafts/taps style example .png
// (placement borrowed, not that reference's visual style).
//
// ---- why this is a NEW component and not an edit to Layouts/Navbar.js ----
// components/Layouts/Navbar.js is rendered by every page on the site, and the
// project rule is explicit: never edit a shared component to fix one page, make
// a page-scoped one instead (CLAUDE.md, and T-013 in brain/MANAGEMENT.md is
// Manager-gated and "runs alone"). pages/hp-new.js renders this instead of
// Navbar; every other route keeps the shared bar untouched. If this treatment
// is later adopted sitewide, that is a deliberate T-013 run, not a side effect
// of the homepage rebuild.
//
// Links are copied from Layouts/Navbar.js so the two cannot silently disagree
// about the site's menu — if a route is added there, add it here too.
//
// Transparent over the hero, glassy once the hero has scrolled past. The brief
// said "invisible navbar or glassy"; this is both, in the order they make sense.
// The glassy state is DARK so the white links need no second colour scheme.
//
// ---- DESIGN PASS (2026-09-08) ----
// "I want an invisible navbar ... make sure tabs appear and logo appear, they
// are white" (user). Invisible now means literally nothing of its own on the
// hero: no bar, no border, no shadow. What keeps the white links legible over a
// bright video frame is a scrim, not a surface -- HeroSlider paints one from the
// top of the hero and this file adds a second, shorter one of its own so the
// bar still works if it is ever put over different footage. Both fade out the
// moment the bar turns solid, so they never double up.
//
// Type went down, not up: 14px at 500 weight with a little tracking reads as
// premium chrome; 15px/600 read as a template menu. Active state is a short
// cyan underline (the brand accent, used once) instead of a white one, so
// active and hover can never be confused.
//
// The navy here is the SAME #050C1A the hero wash is built from -- if one
// changes, change both, or the bar will read as a different blue the instant
// it goes solid.
//
// ---- brand and support button are the SITE'S, not this file's ----
// The instruction was "just the way it above the hero, not the whole style", so:
//   * the logo is logo-konoz-ar.png, the same asset Layouts/Navbar.js uses,
//     untouched and at its real 180x37 wordmark ratio. (An earlier revision used
//     white-logo.png — that is the JUMPX TEMPLATE's logo, not Katechs'. Do not
//     reintroduce it.)
//   * the support button uses the global `.default-btn` from styles/style.scss,
//     icon and all, so it is pixel-identical to every other page and follows any
//     future restyle of that button.
//
// That `.default-btn` is a DELIBERATE EXCEPTION to the components/HpNew/ rule of
// taking nothing from style.scss — chosen so the button cannot drift from the
// rest of the site. It is the only such dependency in this folder.
//
// ---- styled-jsx and <Link> ----
// styled-jsx only adds its scope class to DOM elements it renders ITSELF, never
// to a component. A rule written as `.hp-topnav-cta { }` compiles to
// `.hp-topnav-cta.jsx-hash` and can never match the <a> that next/link renders,
// so it silently does nothing and the link falls back to Bootstrap's blue.
// Every rule below that targets a <Link> is therefore anchored on its scoped
// PARENT and wraps the target in :global().

const NAV_LINKS = [
  { href: "/about-us/", label: "عن الشركة" },
  { href: "/services/hosting-services/", label: "دومين و استضافة" },
  { href: "/services/emails/", label: "بريد إلكتروني" },
  { href: "/services/website-design/", label: "مواقع ويب" },
  { href: "/services/app-development/", label: "تطبيقات الموبايل" },
  { href: "/services/seo/", label: "سيو" },
  { href: "/services/digital-marketing/", label: "تسويق إلكتروني" },
  { href: "/news/", label: "المدونة" },
  { href: "/training/", label: "التدريب" },
];

const CTA = { href: "/support/", label: "الدعم الفني" };

// Fraction of the viewport scrolled before the bar turns glassy. The hero is
// roughly full-height, so this lands the change as the hero leaves rather than
// a few pixels in — which would defeat the point of it being invisible on it.
const SOLID_AT = 0.75;

const HeroNav = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Normalise both sides before comparing: every href here carries a trailing
  // slash, asPath may carry a query or hash. This is the same bug that left
  // four dead highlights in Layouts/Navbar.js (see brain/logs/2026-09-02.md).
  const isActive = (href) => {
    const clean = (s) => {
      const base = String(s).split("?")[0].split("#")[0];
      return base.endsWith("/") ? base : base + "/";
    };
    return clean(router.asPath) === clean(href);
  };

  useEffect(() => {
    let frame = null;
    const measure = () => {
      frame = null;
      setSolid(window.scrollY > window.innerHeight * SOLID_AT);
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

  // A menu left open while the page navigates would stay open on the next
  // route, over content it no longer belongs to.
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  return (
    <header
      className={
        "hp-topnav" + (solid ? " is-solid" : "") + (open ? " is-open" : "")
      }
    >
      <div className="hp-topnav-inner">
        <div className="hp-topnav-brand">
          <Link href="/" aria-label="الصفحة الرئيسية">
            {/* Same asset and same 180x37 as Layouts/Navbar.js — the wordmark is
                wide, and forcing a height alone would squash it. */}
            <Image
              src={logo}
              alt="كنوز الجيل للتكنولوجيا المتطورة"
              width={180}
              height={37}
            />
          </Link>
        </div>

        <nav className="hp-topnav-links" aria-label="القائمة الرئيسية">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "is-active" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* The site's own button, global class and all — see the header note.
            The wrapper owns placement so the class owns appearance. */}
        <div className="hp-topnav-cta">
          <Link href={CTA.href} className="default-btn">
            {CTA.label} <i className="bx bx-log-in-circle"></i>
          </Link>
        </div>

        <button
          type="button"
          className="hp-topnav-toggle"
          aria-expanded={open}
          aria-controls="hp-topnav-panel"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div className="hp-topnav-panel" id="hp-topnav-panel" hidden={!open}>
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "is-active" : undefined}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Link href={CTA.href} className="default-btn hp-topnav-panel-cta">
          {CTA.label} <i className="bx bx-log-in-circle"></i>
        </Link>
      </div>

      <style jsx>{`
        .hp-topnav {
          position: fixed;
          inset-block-start: 0;
          inset-inline: 0;
          z-index: 1030;
          /* Transparent while it sits on the hero. No border, no shadow — the
             slide runs underneath it. */
          background: transparent;
          transition: background 0.35s ease, backdrop-filter 0.35s ease,
            border-color 0.35s ease;
          border-bottom: 1px solid transparent;
        }
        /* The scrim — a gradient the bar CASTS on whatever is under it, so the
           white links keep their contrast without the bar becoming a surface.
           pointer-events:none, or it would swallow every click that lands in
           the gaps between the links. */
        .hp-topnav::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline: 0;
          height: 160px;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            rgba(5, 12, 26, 0.55) 0%,
            rgba(5, 12, 26, 0.22) 55%,
            transparent 100%
          );
          opacity: 1;
          transition: opacity 0.35s ease;
        }
        .hp-topnav.is-solid::before,
        .hp-topnav.is-open::before {
          /* The bar has a real surface now; a scrim on top of it would only
             muddy the top edge. */
          opacity: 0;
        }
        .hp-topnav.is-solid,
        .hp-topnav.is-open {
          /* Dark rather than light, so the white logo and white links need no
             second colour scheme once the bar has a surface of its own. Same
             navy as the hero wash — see the header note. */
          background: rgba(5, 12, 26, 0.78);
          -webkit-backdrop-filter: saturate(160%) blur(18px);
          backdrop-filter: saturate(160%) blur(18px);
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }
        .hp-topnav-inner {
          position: relative;
          z-index: 1;
          width: min(1600px, 100% - 48px);
          margin-inline: auto;
          min-height: 78px;
          display: flex;
          align-items: center;
          gap: clamp(12px, 2vw, 32px);
        }
        .hp-topnav-brand {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          /* The wordmark is white artwork sitting on a video — the scrim
             carries most of the contrast, this catches the bright frames it
             does not. */
          filter: drop-shadow(0 2px 10px rgba(5, 12, 26, 0.55));
        }
        .hp-topnav-links {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.6vw, 28px);
        }
        /* :global() because next/link renders the <a> — see the header note.
           Anchored on .hp-topnav-links, which IS scoped, so this cannot leak. */
        .hp-topnav-links :global(a) {
          position: relative;
          color: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(13px, 0.95vw, 14px);
          font-weight: 500;
          letter-spacing: 0.2px;
          text-decoration: none;
          white-space: nowrap;
          padding-block: 8px;
          opacity: 0.82;
          text-shadow: 0 1px 12px rgba(5, 12, 26, 0.45);
          transition: opacity 0.2s ease;
        }
        .hp-topnav-links :global(a:hover) {
          opacity: 1;
          color: #fff;
        }
        .hp-topnav-links :global(a:focus-visible) {
          outline: 2px solid #1dd3f8;
          outline-offset: 4px;
          border-radius: 4px;
          opacity: 1;
        }
        /* Underline drawn only on the active link, so hover and active never
           read the same — the exact fix Layouts/Navbar.js needed. */
        .hp-topnav-links :global(a.is-active) {
          opacity: 1;
          font-weight: 700;
        }
        /* Cyan, and only 16px of it, centred under the label: hover changes
           opacity, active draws the accent — two different signals, never the
           same one twice. */
        .hp-topnav-links :global(a.is-active)::after {
          content: "";
          position: absolute;
          inset-block-end: 0;
          inset-inline-start: 50%;
          transform: translateX(50%);
          width: 16px;
          height: 2px;
          border-radius: 2px;
          background: #1dd3f8;
        }
        /* Placement only. Appearance belongs to the global .default-btn so this
           button stays identical to the one on every other page. */
        .hp-topnav-cta {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
        }
        .hp-topnav-toggle {
          display: none;
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          padding: 10px;
          border: 0;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          cursor: pointer;
        }
        .hp-topnav-toggle span {
          display: block;
          height: 2px;
          border-radius: 2px;
          background: #fff;
        }
        .hp-topnav-toggle span + span {
          margin-top: 4px;
        }
        .hp-topnav-panel {
          display: none;
          flex-direction: column;
          gap: 2px;
          padding: 8px 24px 20px;
        }
        .hp-topnav-panel :global(a) {
          color: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          padding-block: 11px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }
        .hp-topnav-panel :global(a.is-active) {
          font-weight: 800;
        }
        /* The panel CTA carries .default-btn too, so it only needs spacing and
           the panel's own link border removed. */
        .hp-topnav-panel :global(.hp-topnav-panel-cta) {
          margin-top: 16px;
          text-align: center;
          border-bottom: 0;
        }

        /* The nine links stop fitting well before the bar does. */
        @media (max-width: 1199px) {
          .hp-topnav-inner {
            width: calc(100% - 32px);
            min-height: 68px;
          }
          .hp-topnav-links,
          .hp-topnav-cta {
            display: none !important;
          }
          .hp-topnav-toggle {
            display: block;
            margin-inline-start: auto;
          }
          .hp-topnav-panel {
            display: flex;
          }
          /* The hidden attribute only sets display:none at the UA level, which
             the rule above would override — the panel would be permanently
             open on mobile. */
          .hp-topnav-panel[hidden] {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-topnav,
          .hp-topnav-links a,
          .hp-topnav-cta {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
};

export default HeroNav;
