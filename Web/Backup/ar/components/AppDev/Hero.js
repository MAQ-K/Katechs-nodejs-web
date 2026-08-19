import React from "react";
import { box } from "./wireframeStyles";

const bullets = ["نبذة 1", "نبذة 2", "نبذة 3"];

const Hero = () => {
  return (
    <section className="wireframe-hero" style={{ paddingTop: 160, paddingBottom: 80 }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div style={{ ...box, aspectRatio: "3 / 4", width: "100%", maxWidth: 440, margin: "0 auto" }}>
              صورة (Hero Image)
            </div>
          </div>

          <div className="col-lg-6">
            <div style={{ ...box, height: 56, marginBottom: 16, justifyContent: "flex-start", paddingInline: 16, fontSize: 22 }}>
              العنوان (Title)
            </div>

            <div style={{ ...box, height: 90, marginBottom: 24, justifyContent: "flex-start", alignItems: "flex-start", padding: 16 }}>
              الفقرة (Paragraph)
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              {bullets.map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #9ca3af", flexShrink: 0 }} />
                  <span style={{ color: "#6b7280" }}>{text}</span>
                </li>
              ))}
            </ul>

            <div style={{ ...box, height: 50, width: 160 }}>زر CTA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
