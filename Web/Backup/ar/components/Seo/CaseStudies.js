import React from "react";
import { box, line, needsData } from "./wireframeStyles";

// Section 7 — before/after evidence. WebFX runs this as a carousel of client
// cards, each with industry + the metric that moved. Nothing here can be
// written without real client data.
const cases = ["دراسة حالة 1", "دراسة حالة 2", "دراسة حالة 3"];

const CaseStudies = () => {
  return (
    <section className="wireframe-seo-cases pb-100">
      <div className="container">
        <div style={{ ...box, height: 44, width: 280, margin: "0 auto 16px" }}>
          عنوان القسم (Section Title)
        </div>

        <div style={{ ...needsData, height: 36, maxWidth: 560, margin: "0 auto 30px", fontSize: 12 }}>
          تنبيه: دراسات حالة حقيقية مطلوبة من العميل — لا تختلق
        </div>

        <div className="row justify-content-center">
          {cases.map((label) => (
            <div className="col-lg-4 col-md-6" key={label}>
              <div style={{ ...box, height: 280, marginBottom: 24, flexDirection: "column", gap: 12, padding: 20 }}>
                <div style={{ ...box, height: 26, width: 110, fontSize: 11 }}>المجال</div>
                <div>{label}</div>
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...line, width: "60%" }} />
                <div style={{ ...box, height: 60, width: "80%", marginTop: "auto", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 18 }}>+00%</div>
                  <div style={{ fontSize: 11 }}>النتيجة</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
