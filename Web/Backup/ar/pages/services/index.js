import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import Hero from "../../components/Services/Hero";
import Projects from "../../components/Services/Projects";
import ServiceNav from "../../components/Services/ServiceNav";

// Wireframe-only below Area 1: grey boxes, no visual design yet.
// Each "area" is one web service type, made of stacked blocks. `kind` picks the
// block's shape - see renderBlock. `note` is the brief for that block: what the
// customer needs from it, so the intent survives until we design it.
const areas = [
  {
    id: "business-websites",
    label: "مواقع الشركات",
    blocks: [
      { kind: "split", label: "نظرة عامة", note: "مصداقية + وضوح: من نحن وماذا نقدم" },
      { kind: "cards3", label: "الباقات", note: "ماذا أحصل عليه مقابل المبلغ؟" },
      { kind: "faq", label: "الأسئلة الشائعة", note: "المدة، التعديلات، ما بعد الإطلاق" },
    ],
  },
  {
    id: "type-2",
    label: "النوع الثاني",
    blocks: [
      { kind: "box", label: "نظرة عامة" },
      { kind: "box", label: "المميزات" },
      { kind: "box", label: "السعر / طلب الخدمة" },
    ],
  },
  {
    id: "type-3",
    label: "النوع الثالث",
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
  const [navVisible, setNavVisible] = useState(false);
  const areaRefs = useRef({});
  const sentinelRef = useRef(null);

  // The side nav belongs to the service areas, not to Area 1 — it only appears
  // once the 4 nav boxes have scrolled past the top of the viewport.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setNavVisible(entry.boundingClientRect.top <= 0),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

      {/* floating side nav - hidden until the nav boxes scroll past */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: 16,
          transform: `translateY(-50%) translateX(${navVisible ? 0 : -12}px)`,
          opacity: navVisible ? 1 : 0,
          pointerEvents: navVisible ? "auto" : "none",
          transition: "opacity .4s ease, transform .4s ease",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          zIndex: 50,
        }}
      >
        {areas.map((a) => (
          <button
            key={a.id}
            onClick={() => scrollTo(a.id)}
            style={{
              ...box,
              padding: "10px 14px",
              cursor: "pointer",
              fontSize: 13,
              whiteSpace: "nowrap",
              borderColor: activeArea === a.id ? "#555" : "#9a9a9a",
              borderWidth: activeArea === a.id ? 3 : 2,
              fontWeight: activeArea === a.id ? "bold" : "normal",
              color: activeArea === a.id ? "#333" : "#6b6b6b",
            }}
          >
            {a.label}
          </button>
        ))}
      </div>

      {/* ===== AREA 1 — the brief area (designed) ===== */}
      <Hero />
      <Projects />
      <ServiceNav />

      {/* crossing this line is what reveals the floating side nav */}
      <div ref={sentinelRef} aria-hidden="true" />

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
