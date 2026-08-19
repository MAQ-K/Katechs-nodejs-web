import React from "react";
import { box } from "./wireframeStyles";

// Section 6 — de-risks the engagement by showing what actually happens after
// signup. SEO is a long-cycle purchase, so the process section carries more
// weight here than it does on the app-development page.
const steps = [
  "تحليل الموقع والمنافسين",
  "استراتيجية وكلمات مفتاحية",
  "التنفيذ والتحسين",
  "التقارير والمتابعة الشهرية",
];

const Process = () => {
  return (
    <section className="wireframe-seo-process pb-100" id="process">
      <div className="container">
        <div style={{ ...box, height: 44, width: 280, margin: "0 auto 40px" }}>
          عنوان القسم (Section Title)
        </div>

        <div className="row justify-content-center">
          {steps.map((label, i) => (
            <div className="col-lg-3 col-sm-6" key={label}>
              <div style={{ ...box, height: 170, marginBottom: 20, flexDirection: "column", gap: 10, padding: 16, position: "relative" }}>
                <span style={{ position: "absolute", top: 10, insetInlineStart: 14, color: "#9ca3af", fontSize: 13 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
