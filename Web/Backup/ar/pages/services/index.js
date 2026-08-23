import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";

// Wireframe-only page: grey boxes, no visual design yet.
// 3 web service types, each an "area" made of multiple stacked sub-sections.
// Names are placeholders - to be edited later.
const areas = [
  {
    id: "type-1",
    label: "النوع الأول",
    subs: ["نظرة عامة", "المميزات", "السعر / طلب الخدمة"],
  },
  {
    id: "type-2",
    label: "النوع الثاني",
    subs: ["نظرة عامة", "المميزات", "السعر / طلب الخدمة"],
  },
  {
    id: "type-3",
    label: "النوع الثالث",
    subs: ["نظرة عامة", "المميزات", "السعر / طلب الخدمة"],
  },
];

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

export default function ServicesHubWireframe() {
  const [activeArea, setActiveArea] = useState(areas[0].id);
  const areaRefs = useRef({});

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
        <title>الخدمات - Wireframe</title>
      </Head>

      <Navbar />

      {/* floating side nav - mirrors the tabs, follows scroll */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
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

      <main style={{ padding: "40px 20px", maxWidth: 1140, margin: "0 auto" }}>
        {/* HERO: image placeholder + title/about placeholder */}
        <section
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            marginTop: 40,
            marginBottom: 24,
          }}
        >
          <div style={{ ...box, flex: "1 1 320px", height: 260 }}>
            صورة / Hero Image
          </div>
          <div
            style={{
              ...box,
              flex: "1 1 400px",
              height: 260,
              flexDirection: "column",
              gap: 10,
              alignItems: "stretch",
            }}
          >
            <div style={{ ...box, height: 36, width: "60%" }}>العنوان</div>
            <div style={{ ...box, height: 90 }}>
              نبذة عن الخدمة - جملة أو جملتين توضح للزائر أنه في المكان
              الصحيح
            </div>
          </div>
        </section>

        {/* TABS - each takes you to its own area (which can span multiple sections) */}
        <section
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          {areas.map((a) => (
            <button
              key={a.id}
              onClick={() => scrollTo(a.id)}
              style={{
                ...box,
                flex: "1 1 200px",
                height: 60,
                cursor: "pointer",
                fontSize: 15,
                borderColor: activeArea === a.id ? "#555" : "#9a9a9a",
                borderWidth: activeArea === a.id ? 3 : 2,
              }}
            >
              {a.label}
            </button>
          ))}
        </section>

        {/* AREAS - each is a group of stacked sections for one web service type */}
        {areas.map((a) => (
          <div
            key={a.id}
            id={a.id}
            ref={(el) => (areaRefs.current[a.id] = el)}
            style={{
              marginBottom: 56,
              paddingTop: 12,
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
            {a.subs.map((subLabel, i) => (
              <section
                key={i}
                style={{
                  ...box,
                  height: 180,
                  marginBottom: 20,
                }}
              >
                {subLabel}
              </section>
            ))}
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
