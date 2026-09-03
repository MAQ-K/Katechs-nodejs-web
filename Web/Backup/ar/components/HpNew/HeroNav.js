import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import whiteLogo from "../../public/images/white-logo.png";

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
// Logo and links stay white throughout, which is why the glassy state is dark
// rather than light — a white-on-white bar would need a logo swap and a colour
// swap on every link.

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
        <Link href="/" className="hp-topnav-brand" aria-label="الصفحة الرئيسية">
          <Image src={whiteLogo} alt="كنوز الجيل للتكنولوجيا المتطورة" height={34} />
        </Link>

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

        <Link href={CTA.href} className="hp-topnav-cta">
          {CTA.label}
        </Link>

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
        <Link href={CTA.href} className="hp-topnav-panel-cta">
          {CTA.label}
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
          transition: background 0.3s ease, backdrop-filter 0.3s ease;
        }
        .hp-topnav.is-solid,
        .hp-topnav.is-open {
          /* Dark rather than light, so the white logo and white links need no
             second colour scheme once the bar has a surface of its own. */
          background: rgba(10, 22, 40, 0.82);
          -webkit-backdrop-filter: saturate(140%) blur(14px);
          backdrop-filter: saturate(140%) blur(14px);
        }
        .hp-topnav-inner {
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
        }
        .hp-topnav-links {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.6vw, 28px);
        }
        .hp-topnav-links a {
          position: relative;
          color: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(13px, 1vw, 15px);
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          padding-block: 6px;
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }
        .hp-topnav-links a:hover {
          opacity: 1;
          color: #fff;
        }
        /* Underline drawn only on the active link, so hover and active never
           read the same — the exact fix Layouts/Navbar.js needed. */
        .hp-topnav-links a.is-active {
          opacity: 1;
          font-weight: 700;
        }
        .hp-topnav-links a.is-active::after {
          content: "";
          position: absolute;
          inset-block-end: 0;
          inset-inline: 0;
          height: 2px;
          background: #fff;
        }
        .hp-topnav-cta {
          flex: 0 0 auto;
          display: inline-block;
          padding: 11px 26px;
          border-radius: 999px;
          background: #fff;
          color: #0a1628;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }
        .hp-topnav-cta:hover {
          opacity: 0.86;
          color: #0a1628;
        }
        .hp-topnav-toggle {
          display: none;
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          padding: 10px;
          border: 0;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
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
        .hp-topnav-panel a {
          color: #fff;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          padding-block: 11px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }
        .hp-topnav-panel a.is-active {
          font-weight: 800;
        }
        .hp-topnav-panel-cta {
          margin-top: 14px;
          text-align: center;
          border: 0 !important;
          border-radius: 999px;
          background: #fff;
          color: #0a1628 !important;
          padding-block: 13px !important;
        }

        /* The nine links stop fitting well before the bar does. */
        @media (max-width: 1199px) {
          .hp-topnav-inner {
            width: calc(100% - 32px);
            min-height: 68px;
          }
          .hp-topnav-links,
          .hp-topnav-cta {
            display: none;
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
