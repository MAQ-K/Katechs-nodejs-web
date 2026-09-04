import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import HeroNav from "../components/HpNew/HeroNav";
import Footer from "../components/Layouts/Footer";
import HeroSlider from "../components/HpNew/HeroSlider";
import DomainSearch from "../components/HpNew/DomainSearch";
import SectionNav from "../components/HpNew/SectionNav";
import WebServicesBrief from "../components/HpNew/WebServicesBrief";
import ProjectsMarquee from "../components/HpNew/ProjectsMarquee";
import WebServicesPlans from "../components/HpNew/WebServicesPlans";
import AppServices from "../components/HpNew/AppServices";
import { sectionNav } from "../data/home-new/data";

// === New homepage — independent rebuild ===
// STRUCTURE PASS (2026-09-03): hero, domain search, floating section nav.
// Greyscale on purpose — we are judging layout, hierarchy and interaction, not
// colour. Nothing here touches pages/index.js, components/Common/** or
// styles/style.scss. Working folder: Web/Backup/ar/Homepage/
//
// This page owns the scroll state for the navigator, exactly as
// pages/services/index.js owns it for its SideRail: the nav component is
// presentational, the page decides what is active and when it floats.
//
// NOTE: do NOT call useSmoothScroll() here. _app.js already mounts
// SmoothScrollGlobal on every route except /services, and two live instances
// both preventDefault the same wheel event and both write window.scrollTo.
// The native smooth scroll below still animates: html.wsv-smooth sets
// `scroll-behavior: auto`, which only changes the default for behavior:"auto"
// calls, not an explicit behavior:"smooth".

// Breathing room between a fixed bar and the thing it must not cover.
const GAP = 16;

// Section slots the navigator points at that are not built yet. The domain bar
// and web-services are real sections above and carry their own ids.
const PLACEHOLDERS = [
  { id: "mail", label: "البريد الإلكتروني" },
  { id: "marketing", label: "التسويق" },
];

// Measured per call, never cached: this bar changes height at the 1199px
// breakpoint, and the shared .navbar-area it replaced also shrank when it gained
// .is-sticky. A stale value lands every jump about 10px off.
// .navbar-area is kept as a fallback so this keeps working if the page is ever
// switched back to the shared Layouts/Navbar.
const navbarHeight = () => {
  const el =
    document.querySelector(".hp-topnav") ||
    document.querySelector(".navbar-area");
  return el ? el.getBoundingClientRect().height : 74;
};

export default function HpNewPage() {
  const [activeId, setActiveId] = useState(sectionNav[0].id);
  const [floating, setFloating] = useState(false);
  const [navTop, setNavTop] = useState(90);

  // The nav's slot in normal flow. Height is read from it before it detaches so
  // the slot can hold the space open — otherwise the page jumps by the nav's
  // height at the moment it goes fixed.
  const slotRef = useRef(null);
  const slotHeight = useRef(0);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const nav = navbarHeight();
      setNavTop(nav + 8);

      const slot = slotRef.current;
      if (slot) {
        const rect = slot.getBoundingClientRect();
        // Only trust the measurement while the nav is still in flow; once it is
        // fixed the slot is an empty spacer and reports its reserved height.
        if (!floating && rect.height > 0) slotHeight.current = rect.height;
        setFloating(rect.top <= nav + 8);
      }

      // Scroll-spy. Read line at the middle of the readable band (viewport
      // minus the fixed navbar); the last section starting above it wins. Same
      // line pages/services/index.js uses.
      //
      // getBoundingClientRect().top + scrollY, never offsetTop: offsetTop is
      // measured from the nearest POSITIONED ancestor, so wrapping these
      // sections in anything with position:relative would silently shift every
      // reading here.
      const band = window.innerHeight - nav;
      const line = window.scrollY + nav + band / 2;
      let current = sectionNav[0].id;
      sectionNav.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) {
          current = item.id;
        }
      });
      setActiveId(current);
    };

    // One rAF-gated listener drives both the highlight and the float — they
    // read the same numbers, and two listeners would measure twice per tick.
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
  }, [floating]);

  // Land the section's top edge clear of BOTH fixed bars. Ignoring the floating
  // nav is what leaves every heading half-covered.
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = navbarHeight() + slotHeight.current + GAP;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>الصفحة الرئيسية — نسخة جديدة</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <HeroNav />

      <main>
        <HeroSlider />

        <DomainSearch />

        <div
          ref={slotRef}
          style={{
            "--hp-nav-top": `${navTop}px`,
            minHeight: floating ? slotHeight.current : undefined,
          }}
        >
          <SectionNav
            items={sectionNav}
            activeId={activeId}
            onSelect={scrollTo}
            floating={floating}
          />
        </div>

        {/* --- Web services: brief → projects marquee → plans --- */}
        <section id="web-services">
          <WebServicesBrief />
          <ProjectsMarquee />
          <WebServicesPlans />
        </section>

        {/* --- App services: talk + the 3D phone stage --- */}
        <section id="app-dev">
          <AppServices />
        </section>

        {/* --- section slots — nothing designed yet --- */}
        {PLACEHOLDERS.map((s) => (
          <section key={s.id} id={s.id} className="hp-slot">
            <span className="hp-slot-label">{s.label}</span>
            <span className="hp-slot-note">قسم قيد التصميم</span>
          </section>
        ))}
      </main>

      <Footer />

      <style jsx>{`
        .hp-slot {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-bottom: 1px dashed #d9d9d9;
          background: #fafafa;
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-slot:nth-child(even) {
          background: #f2f2f2;
        }
        .hp-slot-label {
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 700;
          color: #333;
        }
        .hp-slot-note {
          font-size: 14px;
          color: #8a8a8a;
        }
      `}</style>
    </Fragment>
  );
}
