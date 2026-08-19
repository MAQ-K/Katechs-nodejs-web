import React from "react";
import { box } from "./wireframeStyles";

// Section 10 — objection handling. Real accordion comes in the UI phase; the
// Emails and App Development pages both use react-accessible-accordion.
const questions = ["سؤال 1", "سؤال 2", "سؤال 3", "سؤال 4", "سؤال 5"];

const Faq = () => {
  return (
    <section className="wireframe-seo-faq pb-100">
      <div className="container">
        <div style={{ ...box, height: 44, width: 280, margin: "0 auto 40px" }}>
          عنوان القسم (Section Title)
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {questions.map((label) => (
            <div
              key={label}
              style={{ ...box, height: 62, marginBottom: 12, justifyContent: "space-between", paddingInline: 20 }}
            >
              <span>{label}</span>
              <span style={{ color: "#9ca3af" }}>+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
