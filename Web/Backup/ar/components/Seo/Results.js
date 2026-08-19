import React from "react";
import { box, needsData } from "./wireframeStyles";

const stats = ["إحصائية 1", "إحصائية 2", "إحصائية 3", "إحصائية 4"];

// Section 3 — proof in numbers. WebFX leads hard on measurable ROI rather than
// on rankings alone; this is the section that carries that weight.
const Results = () => {
  return (
    <section className="wireframe-seo-results pb-100">
      <div className="container">
        <div style={{ ...box, height: 44, width: 280, margin: "0 auto 16px" }}>
          عنوان القسم (Section Title)
        </div>

        <div style={{ ...needsData, height: 36, maxWidth: 520, margin: "0 auto 30px", fontSize: 12 }}>
          تنبيه: أرقام حقيقية مطلوبة من العميل — لا تختلق
        </div>

        <div className="row justify-content-center">
          {stats.map((label) => (
            <div className="col-lg-3 col-sm-6" key={label}>
              <div style={{ ...box, height: 130, marginBottom: 20, flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 20 }}>00</div>
                <div style={{ fontSize: 12 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
