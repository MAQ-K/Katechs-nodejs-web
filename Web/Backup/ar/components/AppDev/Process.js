import React from "react";
import { box } from "./wireframeStyles";

const steps = ["التخطيط والدراسة", "تصميم UI/UX", "التطوير والبرمجة", "الإطلاق والدعم"];

const Process = () => {
  return (
    <section className="wireframe-process pb-100">
      <div className="container">
        <div style={{ ...box, height: 44, width: 260, margin: "0 auto 40px" }}>
          عنوان القسم (Section Title)
        </div>

        <div className="row justify-content-center">
          {steps.map((label, i) => (
            <div className="col-lg-3 col-sm-6" key={label}>
              <div style={{ ...box, height: 160, marginBottom: 20, flexDirection: "column", gap: 10, position: "relative" }}>
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
