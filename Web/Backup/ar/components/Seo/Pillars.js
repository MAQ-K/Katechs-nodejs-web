import React from "react";
import { box } from "./wireframeStyles";

// Section 4 — the core "what is included" grid. Pillar list follows Backlinko's
// canonical breakdown, cross-checked against the five pillars already stated in
// components/Common/SeoShowcase.js (live on the homepage).
const pillars = [
  "السيو التقني",
  "سيو داخل الصفحة",
  "بناء الروابط الخلفية",
  "المحتوى وتحليل الكلمات المفتاحية",
  "السيو المحلي (خرائط جوجل)",
  "سيو المتاجر الإلكترونية",
];

const Pillars = () => {
  return (
    <section className="wireframe-seo-pillars pb-100">
      <div className="container">
        <div style={{ ...box, height: 44, width: 280, margin: "0 auto 40px" }}>
          عنوان القسم (Section Title)
        </div>

        <div className="row justify-content-center">
          {pillars.map((label) => (
            <div className="col-lg-4 col-md-6" key={label}>
              <div style={{ ...box, height: 190, marginBottom: 24, flexDirection: "column", gap: 12, padding: 20 }}>
                <div style={{ ...box, width: 48, height: 48, borderRadius: 10 }} />
                <div>{label}</div>
                <div style={{ ...box, height: 34, width: "85%", fontSize: 11 }}>وصف قصير</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
