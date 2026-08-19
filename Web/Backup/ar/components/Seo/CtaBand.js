import React from "react";
import { box } from "./wireframeStyles";

// Section 11 — final conversion band before the footer.
const CtaBand = () => {
  return (
    <section className="wireframe-seo-cta pb-100">
      <div className="container">
        <div style={{ ...box, height: 220, flexDirection: "column", gap: 14, padding: 30 }}>
          <div style={{ ...box, height: 44, width: 340 }}>عنوان الدعوة للتواصل</div>
          <div style={{ ...box, height: 30, width: 420, fontSize: 12 }}>سطر توضيحي</div>
          <div style={{ ...box, height: 50, width: 180 }}>زر CTA</div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
