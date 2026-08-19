import React from "react";
import { box } from "./wireframeStyles";

// Section 2 — the free-audit lead capture. Present on nearly every top SEO
// provider service page (WebFX, Victorious); it is the page's main soft
// conversion, sitting ahead of the pricing CTA.
const AuditForm = () => {
  return (
    <section className="wireframe-seo-audit pb-100">
      <div className="container">
        <div style={{ ...box, flexDirection: "column", gap: 16, padding: 40 }}>
          <div style={{ ...box, height: 40, width: 320 }}>عنوان: تحليل مجاني لموقعك</div>
          <div style={{ ...box, height: 30, width: 420, fontSize: 12 }}>سطر توضيحي قصير</div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
            <div style={{ ...box, height: 52, width: 300, background: "#f3f4f6" }}>
              حقل إدخال: رابط الموقع
            </div>
            <div style={{ ...box, height: 52, width: 160 }}>زر: احصل على التحليل</div>
          </div>

          <div style={{ fontSize: 12, color: "#6b7280" }}>
            سؤال مفتوح: هل يرسل النموذج إلى /api/contact أم يفتح نموذج التواصل؟
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
