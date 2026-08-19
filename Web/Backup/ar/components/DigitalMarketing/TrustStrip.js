import React from "react";
import { box, needsData } from "./wireframeStyles";

// Section 2 — WebFX puts social proof immediately after the hero. Across every
// source consulted, the credibility markers that actually work are client
// logos, verified review scores and concrete numbers — not vague promises.
const logos = ["شعار 1", "شعار 2", "شعار 3", "شعار 4", "شعار 5"];

const TrustStrip = () => {
  return (
    <section className="wireframe-dm-trust pb-100">
      <div className="container">
        <div style={{ ...needsData, height: 36, maxWidth: 560, margin: "0 auto 24px", fontSize: 12 }}>
          تنبيه: شعارات عملاء أو أرقام حقيقية مطلوبة من العميل — لا تختلق
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          {logos.map((label) => (
            <div key={label} style={{ ...box, height: 70, width: 150, fontSize: 12 }}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
