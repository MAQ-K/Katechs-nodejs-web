import React from "react";
import { box } from "./wireframeStyles";

// Section 5 — GEO/AEO. Every 2026 source treats visibility inside Google AI
// Overviews and ChatGPT as mandatory on an SEO service page now, and it is the
// clearest differentiator against older local competitors.
const points = ["نقطة 1", "نقطة 2", "نقطة 3"];

const AiSearch = () => {
  return (
    <section className="wireframe-seo-ai pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div style={{ ...box, height: 30, width: 190, marginBottom: 14, fontSize: 12 }}>
              Eyebrow: بحث الذكاء الاصطناعي
            </div>

            <div style={{ ...box, height: 70, marginBottom: 16, justifyContent: "flex-start", padding: 16, fontSize: 18 }}>
              عنوان: الظهور في نتائج الذكاء الاصطناعي
            </div>

            <div style={{ ...box, height: 70, marginBottom: 20, justifyContent: "flex-start", alignItems: "flex-start", padding: 16 }}>
              فقرة توضيحية
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {points.map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 3, border: "2px solid #9ca3af", flexShrink: 0 }} />
                  <span style={{ color: "#6b7280" }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <div style={{ ...box, height: 300, flexDirection: "column", gap: 8 }}>
              <div>رسم توضيحي</div>
              <div style={{ fontSize: 12 }}>(AI Overviews / ChatGPT)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSearch;
