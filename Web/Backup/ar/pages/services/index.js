import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import Hero from "../../components/Services/Hero";
import Projects from "../../components/Services/Projects";
import ServiceNav from "../../components/Services/ServiceNav";
import SideRail from "../../components/Services/SideRail";

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
const AREA_GAP = "clamp(110px, 14vw, 200px)";

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

export default function ServicesHubWireframe() {
  const [activeArea, setActiveArea] = useState(areas[0].id);
  const areaRefs = useRef({});

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

  const scrollTo = (id) => {
    const el = areaRefs.current[id] || document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>خدمات الويب</title>
      </Head>

      <Navbar />

      {/* Floating section rail — visible from first paint, not gated on scroll. */}
      <SideRail items={areas} activeId={activeArea} onSelect={scrollTo} />

      {/* ===== AREA 1 — the brief area (designed) ===== */}
      <Hero />
      <Projects />
      <ServiceNav />

      {/* ===== AREAS 2+ — still wireframe grey boxes ===== */}
      {/* Area 1's gap to here is .wsv-nav's padding-bottom, so main adds none. */}
      <main style={{ padding: "0 20px", maxWidth: 1140, margin: "0 auto" }}>
        {/* AREAS - each is a group of stacked sections for one web service type */}
        {areas.map((a) => (
          <div
            key={a.id}
            id={a.id}
            ref={(el) => (areaRefs.current[a.id] = el)}
            style={{
              marginBottom: AREA_GAP,
              paddingTop: 24,
              borderTop: "3px solid #555",
            }}
          >
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
            {a.blocks.map((b, i) => (
              <section
                key={i}
                style={{
                  marginBottom: i === a.blocks.length - 1 ? 0 : SECTION_GAP,
                }}
              >
                {renderBlock(b, i)}
              </section>
            ))}
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
