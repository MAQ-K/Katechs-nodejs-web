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
import EmailServices from "../components/HpNew/EmailServices";
import Stores from "../components/HpNew/Stores";
// --- four sections lifted whole from the OLD homepage (user, 2026-09-05) ---
// Imported, not copied — same components pages/index.js renders, so they cannot
// drift. Their CSS is global already: homepage-sections.css (imported in
// _app.js) covers the SEO, trust and FAQ areas, and .logo-section lives in
// style.scss — so unlike AppOrbit these need no wrapper class to style up.
import SeoShowcase from "../components/Common/SeoShowcase";
import Partner from "../components/Common/Partner";
import TrustedCustomers from "../components/Common/TrustedCustomers";
import FaqHorizontal from "../components/Common/FaqHorizontal";
import WhyChooseUs from "../components/HpNew/WhyChooseUs";
import useSmoothScroll from "../components/Services/useSmoothScroll";
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
// This page mounts its OWN useSmoothScroll, so _app.js must leave
// SmoothScrollGlobal out for /hp-new (it does — see pageOwnsScroll there).
// Exactly one instance may be live: two would both preventDefault the same
// wheel event and both write window.scrollTo.
//
// Jumps go through the hook own scrollToY, NOT window.scrollTo({behavior:
// "smooth"}). An earlier revision used the native call and the pills did
// nothing at all: once the hook has handled a single wheel event its rAF loop
// keeps writing the scroll position with behavior:"instant" every frame, which
// cancels the native animation immediately. Verified in a headless browser —
// the loop was pinning scrollY and firing scrollTo ~60x a second. GoTop.js ran
// into the same wall and documents it too.

// Breathing room between a fixed bar and the thing it must not cover.
const GAP = 16;

// Absorbs the gap between where scrollTo's offset formula PREDICTS a section
// lands and where it actually settles (measured ~8px in a real browser — see
// the scroll-spy comment below for why). Used only by the scroll-spy's read
// line, never by the jump itself.
const LINE_SLACK = 24;

// Section slots the navigator points at that are not built yet. EMPTY as of
// 2026-09-08 — marketing (the last placeholder) is a real section again, this
// time the SEO showcase. Kept, with .hp-slot below, for whatever is next.
const PLACEHOLDERS = [];

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
  // Owns the sliding wheel scroll for this route, and hands back the eased
  // programmatic jump the navigator needs. snap:false (the default) — the
  // push-to-cross area mechanic stays exclusive to /services.
  const { scrollToY } = useSmoothScroll();

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

      // Scroll-spy: the last section whose top has crossed a line just below
      // the fixed chrome wins — the classic near-top scrollspy read, not a
      // mid-viewport one.
      //
      // Two things were tried and measured wrong before landing on this:
      //
      // 1. Mid-band line (pages/services/index.js's approach): works when every
      //    section is roughly viewport-height or taller, which is true on
      //    /services but not here. `domain` is a ~180px search strip between
      //    the hero and web-services; landing on it put the mid-band line past
      //    domain's OWN bottom on arrival, so web-services — whose top had also
      //    already crossed that same line — won the read the instant you got
      //    there.
      //
      // 2. Majority-of-band overlap (whichever section covers the most of the
      //    readable band): measured in a real browser and it ALSO picked
      //    web-services over domain. A short section fully on screen can still
      //    lose an area contest to a tall neighbour occupying the rest of the
      //    band — domain covers ~190px, web-services (which starts right below
      //    it and runs for thousands of px) covers the remaining ~500px+ of the
      //    same band. Area majority is the wrong question.
      //
      // The line here is deliberately close to the SAME offset scrollTo lands
      // sections at (nav + slotHeight + GAP), so a freshly-clicked section's
      // top sits almost exactly ON the line and wins on arrival, by
      // construction — rather than needing to out-cover whatever tall section
      // follows it.
      //
      // "almost exactly" is doing real work in that sentence: measured in a
      // real browser, a section lands ~8px BELOW where the plain formula
      // predicts (slotHeight.current is frozen the moment the nav starts
      // floating, and that freeze can catch a transitional frame a few px off
      // from the settled value read here later). Rather than chase that skew
      // to zero, LINE_SLACK absorbs it — generous enough to cover the drift,
      // still small enough that this stays a near-top read, not a mid-band one
      // that would swallow `domain` again.
      //
      // getBoundingClientRect() is viewport-relative already, so this compares
      // directly against that line — no scrollY term needed, and no offsetTop
      // (which is relative to the nearest POSITIONED ancestor and would
      // silently shift every reading if a wrapper ever gained
      // position:relative).
      const line = nav + slotHeight.current + GAP + LINE_SLACK;
      let current = sectionNav[0].id;
      sectionNav.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) {
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
  const scrollTo = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = navbarHeight() + slotHeight.current + GAP;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      // scrollToY, never window.scrollTo({behavior:"smooth"}) — see the note at
      // the top of this file. The native call did nothing at all here.
      scrollToY(Math.max(0, top));
    },
    [scrollToY]
  );

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

        {/* --- Email services: side tabs, talk over image --- */}
        <section id="mail">
          <EmailServices />
        </section>

        {/* --- Stores: the web services page e-commerce area.
            No nav pill: the floating navigator has the five the user fixed
            (domain, web services, app dev, mail, marketing) and stores is not
            one of them. Add a row to sectionNav if that changes. --- */}
        <section id="stores">
          <Stores />
        </section>

        {/* --- Marketing: "this section [تصدّر نتائج البحث] IS the marketing
            section" (user, 2026-09-08). Was two things at once before today —
            an untargeted id="seo" section AND an empty id="marketing"
            placeholder the fixed nav pill pointed at. Merged into the one the
            pill actually needs. `banner` is an opt-in prop; pages/index.js
            still renders this component with none and is unaffected — see
            components/Common/SeoShowcase.js. --- */}
        <section id="marketing">
          <SeoShowcase banner />
        </section>

        {/* --- Why choose us: the four reasons, with a vertical carousel of
            client work running alongside. Sits between the marketing band and
            the trust band, which is the argument it sets up. No nav pill —
            sectionNav has the five the user fixed. --- */}
        <section id="why-us">
          <WhyChooseUs />
        </section>

        {/* --- section slots — nothing designed yet --- */}
        {PLACEHOLDERS.map((s) => (
          <section key={s.id} id={s.id} className="hp-slot">
            <span className="hp-slot-label">{s.label}</span>
            <span className="hp-slot-note">قسم قيد التصميم</span>
          </section>
        ))}

        {/* --- trust band: the tech stack strip, then the years-of-trust
            testimonials, then five FAQs. Same order the old homepage uses. --- */}
        <div className="pt-70">
          <Partner />
        </div>

        <TrustedCustomers />

        {/* 5 of the 10, per the user. FaqHorizontal keeps all ten by default so
            pages/index.js is unaffected. */}
        <FaqHorizontal limit={5} />
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
