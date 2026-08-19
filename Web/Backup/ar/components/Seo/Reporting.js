import React from "react";
import { box } from "./wireframeStyles";

// Section 8 — kills the "SEO is a black box" objection by showing exactly what
// the client receives every month. Grounded in the "تقارير أداء شهرية" pillar
// already stated in components/Common/SeoShowcase.js.
const items = ["تقرير 1", "تقرير 2", "تقرير 3"];

const Reporting = () => {
  return (
    <section className="wireframe-seo-reporting pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div style={{ ...box, height: 320, flexDirection: "column", gap: 8 }}>
              <div>لقطة لوحة التقارير</div>
              <div style={{ fontSize: 12 }}>(ترتيب الكلمات + الزيارات)</div>
            </div>
          </div>

          <div className="col-lg-6">
            <div style={{ ...box, height: 70, marginBottom: 16, justifyContent: "flex-start", padding: 16, fontSize: 18 }}>
              عنوان: تعرف على ما يحدث شهريا
            </div>

            <div style={{ ...box, height: 70, marginBottom: 20, justifyContent: "flex-start", alignItems: "flex-start", padding: 16 }}>
              فقرة توضيحية
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 3, border: "2px solid #9ca3af", flexShrink: 0 }} />
                  <span style={{ color: "#6b7280" }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
