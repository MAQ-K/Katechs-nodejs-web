import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import HeroBuildSmarter from "../../components/Sections/HeroBuildSmarter";
import Projects from "../../components/Services/Projects";
import ServiceNav from "../../components/Services/ServiceNav";
import SideRail from "../../components/Services/SideRail";
import useSectionSnap from "../../components/Services/useSectionSnap";
import BwOverview from "../../components/Services/BusinessWebsites/Overview";
import BwPlans from "../../components/Services/BusinessWebsites/Plans";
import { heroMedia, heroSlides } from "../../data/services/data";

// Wireframe-only below Area 1: grey boxes, no visual design yet.
// Each "area" is one web service type, made of stacked blocks. `kind` picks the
// block's shape - see renderBlock. `note` is the brief for that block: what the
// customer needs from it, so the intent survives until we design it.
// `icon` (boxicons) is what the floating SideRail shows for the area.
const areas = [
  {
    id: "business-websites",
    label: "مواقع الشركات",
    icon: "bx bx-buildings",
    blocks: [
      { kind: "split", label: "نظرة عامة", note: "مصداقية + وضوح: من نحن وماذا نقدم" },
      { kind: "cards3", label: "الباقات", note: "ماذا أحصل عليه مقابل المبلغ؟" },
      { kind: "faq", label: "الأسئلة الشائعة", note: "المدة، التعديلات، ما بعد الإطلاق" },
    ],
  },
  {
    id: "type-2",
    label: "النوع الثاني",
    icon: "bx bx-cart-alt",
    blocks: [
      { kind: "box", label: "نظرة عامة" },
      { kind: "box", label: "المميزات" },
      { kind: "box", label: "السعر / طلب الخدمة" },
    ],
  },
  {
    id: "type-3",
    label: "النوع الثالث",
    icon: "bx bx-layer",
    blocks: [
      { kind: "box", label: "نظرة عامة" },
      { kind: "box", label: "المميزات" },
      { kind: "box", label: "السعر / طلب الخدمة" },
    ],
  },
  {
    id: "type-4",
    label: "النوع الرابع",
    icon: "bx bx-cube",
    blocks: [
      { kind: "box", label: "نظرة عامة" },
      { kind: "box", label: "المميزات" },
      { kind: "box", label: "السعر / طلب الخدمة" },
    ],
  },
];

// Spacing scale — the break between areas is ~4x the gap between the sections
// inside one, so the page reads as areas first, sections second. 2:1 was tried
// and read as "the same": next to 180px-tall blocks a gap has to be far bigger
// than its neighbour to register as a different kind of break.
// Mirrors $wsv-gap-section / $wsv-gap-area in style.scss; keep them in sync.
const SECTION_GAP = "clamp(32px, 4vw, 48px)";
const AREA_GAP = "clamp(170px, 21vw, 320px)";

const box = {
  border: "2px dashed #9a9a9a",
  background: "#eaeaea",
  color: "#6b6b6b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontFamily: "sans-serif",
  boxSizing: "border-box",
};

// The one-line brief under each block - keeps "what is this for" visible while
// the page is still a wireframe.
const noteStyle = {
  fontFamily: "sans-serif",
  fontSize: 12,
  color: "#8a8a8a",
  marginTop: 6,
  textAlign: "center",
};

// One renderer for every area. Shapes come from the Area 2 structure draft;
// `box` is the generic 180px block the untouched areas still use.
function renderBlock(b, i) {
  switch (b.kind) {
    case "split":
      return (
        <div key={i}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ ...box, flex: "1 1 320px", height: 260 }}>
              صورة / وسائط
            </div>
            <div
              style={{
                ...box,
                flex: "1 1 380px",
                height: 260,
                flexDirection: "column",
                gap: 10,
                alignItems: "stretch",
                padding: 16,
              }}
            >
              <div style={{ ...box, height: 40 }}>{b.label}</div>
              <div style={{ ...box, flex: 1 }}>نص تعريفي</div>
            </div>
          </div>
          <div style={noteStyle}>{b.note}</div>
        </div>
      );

    case "cards3":
      return (
        <div key={i}>
          <div style={{ ...box, height: 44, marginBottom: 16 }}>{b.label}</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {["الباقة الأولى", "الباقة الثانية", "الباقة الثالثة"].map((p) => (
              <div key={p} style={{ ...box, height: 380 }}>
                {p}
              </div>
            ))}
          </div>
          <div style={noteStyle}>{b.note}</div>
        </div>
      );

    case "faq":
      return (
        <div key={i}>
          <div style={{ ...box, height: 300 }}>{b.label}</div>
          <div style={noteStyle}>{b.note}</div>
        </div>
      );

    default:
      return (
        <div key={i}>
          <div style={{ ...box, height: 180 }}>{b.label}</div>
          {b.note ? <div style={noteStyle}>{b.note}</div> : null}
        </div>
      );
  }
}

// Hero slide rotation. This used to live inside components/Services/Hero.js;
// HeroBuildSmarter is a portable presentational section, so the timer and the
// active index belong to the page that uses it.
const HERO_AUTOPLAY_MS = 6000;

export default function ServicesHubWireframe() {
  const [activeArea, setActiveArea] = useState(areas[0].id);
  const [railVisible, setRailVisible] = useState(false);
  const areaRefs = useRef({});
  const router = useRouter();

  // Desktop-only section snapping. Returns markProgrammatic so the rail's own
  // jump below can tell it to stand down instead of the two fighting.
  const { markProgrammatic } = useSectionSnap();

  const [heroSlide, setHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const hero = heroSlides[heroSlide];

  useEffect(() => {
    if (heroPaused || heroSlides.length < 2) return undefined;
    const t = setInterval(
      () => setHeroSlide((i) => (i + 1) % heroSlides.length),
      HERO_AUTOPLAY_MS
    );
    return () => clearInterval(t);
  }, [heroPaused, heroSlide]);

  // Scroll-spy for the rail. The read line sits a third down the viewport; the
  // last area starting above it wins. rAF-gated because this runs on every
  // scroll tick, and run once on mount so a deep link (/services/#type-3)
  // highlights the right item before the user scrolls at all.
  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = areas[0].id;
      areas.forEach((a) => {
        const el = areaRefs.current[a.id];
        if (el && el.offsetTop <= scrollPos) {
          current = a.id;
        }
      });
      setActiveArea(current);

      // The rail only exists to jump between the areas, so it stays out of the
      // way until the projects carousel has gone by. Threshold is the viewport
      // middle because that is where the rail itself sits — it appears exactly
      // as the carousel clears its position, rather than popping in over it.
      const projects = document.getElementById("wsv-projects");
      setRailVisible(
        projects
          ? projects.getBoundingClientRect().bottom <= window.innerHeight / 2
          : true
      );
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

  // Rail clicks land the area's top edge just under the fixed navbar.
  // scrollIntoView({block:"start"}) puts it at y=0, where .navbar-area covers the
  // heading, so the area looks like it starts part-way in. Measure the navbar at
  // click time - its height changes with .is-sticky - and subtract it.
  const scrollTo = (id) => {
    const el = areaRefs.current[id] || document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector(".navbar-area");
    const offset = (nav ? nav.getBoundingClientRect().height : 0) + 16;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    markProgrammatic();
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>خدمات الويب</title>
      </Head>

      <Navbar />

      {/* Floating section rail — visible from first paint, not gated on scroll. */}
      <SideRail
        items={areas}
        activeId={activeArea}
        onSelect={scrollTo}
        visible={railVisible}
      />

      {/* ===== AREA 1 — the brief area (designed) ===== */}
      {/* Hover pauses the rotation — the wrapper carries it because the section
          itself is portable and takes no mouse handlers. */}
      <div
        className="wsv-snap-stop"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        <HeroBuildSmarter
          badgeText={hero.badge}
          headlineBold={hero.headlineBold}
          headlineLight={hero.headlineLight}
          subtitle={hero.text}
          ctaText={hero.primary.label}
          ctaHref={hero.primary.href}
          // The section uses a plain <a> to stay dependency-free, which would
          // hard-reload the app. Intercept for client-side nav; the href stays
          // real so middle-click and crawlers still work.
          onCtaClick={(e) => {
            e.preventDefault();
            router.push(hero.primary.href);
          }}
          backgroundImage={heroMedia.type === "image" ? heroMedia.src : null}
          // cover (the default) fills the section edge to edge. The photo is
          // 1920x1440, so up to a 1920-wide viewport this crops without
          // enlarging anything — it is never scaled past 1:1 on a normal screen.
          bottomRadius="32px"
          minHeight="85vh"
          marginBottom="5px"
          overlay={0.45}
          slideCount={heroSlides.length}
          activeSlide={heroSlide}
          onSlideSelect={setHeroSlide}
          slideLabel={(i) => `الشريحة ${i + 1}`}
        />
      </div>
      <Projects />
      <ServiceNav />

      {/* ===== AREA 1 — business websites (designed) ===== */}
      {/* Rendered outside <main> on purpose: these sections are full-bleed and
          bring their own .container, so the wireframe wrapper's 1140px cap and
          side padding must not apply to them. Keeps the id + ref the SideRail
          scroll-spy and the deep link /services/#business-websites depend on. */}
      <div
        id="business-websites"
        data-area="business-websites"
        ref={(el) => (areaRefs.current["business-websites"] = el)}
        style={{ marginBottom: `calc(${AREA_GAP} / 2)` }}
      >
        <BwOverview />
        <BwPlans />
      </div>

      {/* ===== AREAS 2+ — still wireframe grey boxes ===== */}
      {/* Area 1's gap to here is .wsv-nav's padding-bottom, so main adds none. */}
      <main>
        {/* AREAS - each is a group of stacked sections for one web service type */}
        {areas.slice(1).map((a, ai) => (
          // Alternating ground, so crossing an area boundary is felt rather
          // than merely passed. ai=0 is type-2, which follows .wsv-plans
          // ($wsv-band) — so it takes white and the alternation runs from there.
          // The old 3px grey borderTop is gone: the band now does that job.
          <div
            key={a.id}
            id={a.id}
            data-area={a.id}
            ref={(el) => (areaRefs.current[a.id] = el)}
            className={`wsv-area${ai % 2 === 1 ? " is-alt" : ""}`}
          >
            <div className="wsv-area-inner">
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#444",
                  marginBottom: 16,
                  fontFamily: "sans-serif",
                }}
              >
                {a.label} (area - can hold more sections)
              </div>
              {a.blocks.map((b, bi) => (
                <section
                  key={bi}
                  className="wsv-snap-stop"
                  style={{
                    marginBottom: bi === a.blocks.length - 1 ? 0 : SECTION_GAP,
                  }}
                >
                  {renderBlock(b, bi)}
                </section>
              ))}
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
