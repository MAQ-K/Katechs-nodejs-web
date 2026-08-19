import React from "react";
import { box } from "./wireframeStyles";

const bullets = ["نبذة 1", "نبذة 2", "نبذة 3"];

const Hero = () => {
  return (
    <section className="wireframe-dm-hero" style={{ paddingTop: 160, paddingBottom: 60 }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div style={{ ...box, height: 30, width: 170, marginBottom: 16, fontSize: 12 }}>
              Eyebrow / تصنيف
            </div>

            <div style={{ ...box, height: 100, marginBottom: 16, justifyContent: "flex-start", padding: 16, fontSize: 22 }}>
              العنوان الرئيسي (H1)
            </div>

            <div style={{ ...box, height: 80, marginBottom: 24, justifyContent: "flex-start", alignItems: "flex-start", padding: 16 }}>
              الفقرة التعريفية (Paragraph)
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              {bullets.map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #9ca3af", flexShrink: 0 }} />
                  <span style={{ color: "#6b7280" }}>{text}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div style={{ ...box, height: 50, width: 180 }}>زر: اطلب عرض سعر</div>
              <div style={{ ...box, height: 50, width: 150 }}>زر ثانوي</div>
            </div>

            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 12 }}>
              الزر الأساسي يشير حاليا إلى /digital-market-order
            </div>
          </div>

          <div className="col-lg-6">
            <div style={{ ...box, aspectRatio: "4 / 5", width: "100%", maxWidth: 440, margin: "0 auto", flexDirection: "column", gap: 8 }}>
              <div>صورة / رسم توضيحي</div>
              <div style={{ fontSize: 12 }}>(حملات + نمو)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
