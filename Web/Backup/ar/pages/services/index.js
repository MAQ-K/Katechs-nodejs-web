import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import HeroBuildSmarter from "../../components/Sections/HeroBuildSmarter";
import Projects from "../../components/Services/Projects";
import ServiceNav from "../../components/Services/ServiceNav";
import SideRail from "../../components/Services/SideRail";
import useSmoothScroll from "../../components/Services/useSmoothScroll";
import ScrollProgress from "../../components/Services/ScrollProgress";
import AreaOverview from "../../components/Services/ServiceArea/Overview";
import AreaPlans from "../../components/Services/ServiceArea/Plans";
import AreaFaq from "../../components/Services/ServiceArea/Faq";
import AreaCta from "../../components/Services/ServiceArea/Cta";
import EcomIntro from "../../components/Services/Ecommerce/Intro";
import EcomCapabilities from "../../components/Services/Ecommerce/Capabilities";
import ConsIntro from "../../components/Services/Consulting/Intro";
import ConsDiagnostic from "../../components/Services/Consulting/Diagnostic";
import {
  heroMedia,
  heroSlides,
  businessWebsites,
  wordpress,
  ecommerce,
  consulting,
} from "../../data/services/data";

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
    label: "ووردبريس",
    icon: "bx bx-window-alt",
    // Built — see BUILT_AREAS. blocks[] is unused for built areas but kept so
    // the shape stays uniform across the table.
    blocks: [
      { kind: "split", label: "نظرة عامة" },
      { kind: "cards3", label: "الباقات" },
      { kind: "faq", label: "الأسئلة الشائعة" },
    ],
  },
  {
    id: "type-3",
    label: "متجر إلكتروني",
    icon: "bx bx-cart-alt",
    // Built — see BUILT_AREAS. `blocks` is unused for built areas; kept so the
    // table's shape stays uniform.
    blocks: [
      { kind: "split", label: "نظرة عامة" },
      { kind: "box", label: "ما تديره بنفسك" },
      { kind: "box", label: "اطلب عرضاً" },
    ],
  },
  {
    id: "type-4",
    label: "استشارات وتحسين",
    icon: "bx bx-line-chart",
    // Built — see BUILT_AREAS. `blocks` is unused for built areas; kept so the
    // table's shape stays uniform.
    blocks: [
      { kind: "split", label: "نظرة عامة" },
      { kind: "box", label: "الفحص والخطة" },
      { kind: "box", label: "حلّل موقعي" },
    ],
  },
];

// Areas that have real UI, in page order. Adding one here and a matching data
// key is the whole job — the three section components are generic and must not
// be forked per area. Order MUST match the head of `areas` above, since the
// wireframe loop below renders `areas.slice(BUILT_AREAS.length)`.
const BUILT_AREAS = [
  // `kind` picks the section layout. The first two are the standard
  // overview/plans/FAQ shape; the last two are bespoke because their brief
  // (rest of web servicespage areas.md) rules out pricing cards entirely —
  // e-commerce scope is too variable to price on a card, and a consulting
  // visitor cannot pick a tier before they know what is wrong with their site.
  { id: "business-websites", kind: "standard", data: businessWebsites },
  { id: "type-2", kind: "standard", data: wordpress },
  { id: "type-3", kind: "ecommerce", data: ecommerce },
  { id: "type-4", kind: "consulting", data: consulting },
];

// Spacing scale — the break between areas is ~4x the gap between the sections
// inside one, so the page reads as areas first, sections second. 2:1 was tried
// and read as "the same": next to 180px-tall blocks a gap has to be far bigger
// than its neighbour to register as a different kind of break.
//
// Only the section gap is mirrored here now: the area gap became `.wsv-area`'s
// margin-bottom in style.scss when areas gained their own backgrounds, so there
// is one definition of it again rather than two to keep in sync.
// Mirrors $wsv-gap-section; keep the two in step.
const SECTION_GAP = "clamp(32px, 4vw, 48px)";

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

  // Eased "sliding" wheel scrolling. Returns scrollToY so the rail's own jump
  // below rides the same easing — the hook disables CSS smooth scrolling, so a
  // plain scrollTo({behavior:"smooth"}) would land instantly instead.
  const { scrollToY } = useSmoothScroll();

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

  // Scroll-spy for the rail. The read line sits at the middle of the readable
  // band (viewport minus the fixed navbar); the last area starting above it
  // wins. This has to be the SAME line useSmoothScroll.js uses to decide the
  // "current" area for its push-to-cross logic — they used to disagree (a
  // flat third-down-viewport here vs. nav-offset + half-band there), which let
  // the rail and the actual scroll mechanic pick different "current" areas
  // right at a boundary. Business-websites sat exactly on that seam, right
  // after the long intro block, which is why its highlight looked unreliable.
  // rAF-gated because this runs on every scroll tick, and run once on mount so
  // a deep link (/services/#type-3) highlights the right item before the user
  // scrolls at all.
  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const nav =
        (document.querySelector(".navbar-area")?.getBoundingClientRect()
          .height || 74) + 16;
      const band = window.innerHeight - nav;
      const scrollPos = window.scrollY + nav + band / 2;
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
    scrollToY(Math.max(0, top));
  };

  return (
    <>
      <Head>
        <title>خدمات الويب</title>
      </Head>

      <Navbar theme="navy" />
      <ScrollProgress />

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
      {/* The intro IS an area (the user counts it as area 1), so it is one
          snap stop: hero, carousel and navigator scroll through normally and a
          single gesture at the end crosses into the first service area.
          data-area makes that crossing register as an area change for the blur. */}
      <div className="wsv-snap-stop" data-area="intro">
      <div
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
      </div>

      {/* ===== BUILT AREAS ===== */}
      {/* Rendered outside <main> on purpose: these sections are full-bleed and
          bring their own .container, so the wireframe wrapper's 1140px cap and
          side padding must not apply to them. Keeps the id + ref the SideRail
          scroll-spy and the deep links (/services/#business-websites) need. */}
      {BUILT_AREAS.map(({ id, kind, data }, i) => (
        <div
          key={id}
          id={id}
          data-area={id}
          // .wsv-area's margin-bottom is the gap to the NEXT area. The last
          // one has no next area — footer follows instead — so without this
          // modifier that same gap just dangles as unexplained empty space
          // before the footer. If more areas ever get added after
          // BUILT_AREAS (the wireframe loop below is currently empty), this
          // needs to move to whichever one renders last.
          className={`wsv-area${i === BUILT_AREAS.length - 1 ? " wsv-area-last" : ""}`}
          ref={(el) => (areaRefs.current[id] = el)}
        >
          {kind === "standard" && (
            <>
              <AreaOverview area={data} id={`${id}-overview`} />
              <AreaPlans area={data} id={`${id}-plans`} />
              <AreaFaq area={data} id={`${id}-faq`} />
            </>
          )}

          {kind === "ecommerce" && (
            <>
              <EcomIntro area={data} id={`${id}-intro`} />
              <EcomCapabilities area={data} id={`${id}-caps`} />
              <AreaCta cta={data.cta} id={`${id}-cta`} />
            </>
          )}

          {kind === "consulting" && (
            <>
              <ConsIntro area={data} id={`${id}-intro`} />
              <ConsDiagnostic area={data} id={`${id}-flow`} />
              <AreaCta cta={data.cta} id={`${id}-cta`} />
            </>
          )}
        </div>
      ))}

      {/* ===== REMAINING AREAS — still wireframe grey boxes ===== */}
      {/* Area 1's gap to here is .wsv-nav's padding-bottom, so main adds none. */}
      <main>
        {/* AREAS - each is a group of stacked sections for one web service type */}
        {areas.slice(BUILT_AREAS.length).map((a) => (
          // Each area carries its own ground, keyed off [data-area] in the
          // stylesheet, and every section inside it shares that colour. The old
          // 3px grey borderTop is gone — the colour change does that job now.
          <div
            key={a.id}
            id={a.id}
            data-area={a.id}
            ref={(el) => (areaRefs.current[a.id] = el)}
            className="wsv-area"
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
              {/* No longer individual snap stops — the .wsv-area wrapper
                  around this whole loop is the stop now, so scrolling through
                  these blocks is plain native scroll. */}
              {a.blocks.map((b, bi) => (
                <section
                  key={bi}
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
