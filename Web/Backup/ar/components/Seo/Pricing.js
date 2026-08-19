import React from "react";
import { box, line, needsData } from "./wireframeStyles";

// Section 9 — research says monthly retainer tiers are the norm for SEO
// (unlike app development, which is genuinely quote-based). Model still needs
// confirming with the client — see data/seo/structure.md, open question 3.
const plans = ["الباقة الأساسية", "الباقة المتقدمة", "باقة الشركات"];

const Pricing = () => {
  return (
    <section className="wireframe-seo-pricing pb-100" id="pricing">
      <div className="container">
        <div style={{ ...box, height: 44, width: 280, margin: "0 auto 16px" }}>
          عنوان القسم (Section Title)
        </div>

        <div style={{ ...needsData, height: 36, maxWidth: 560, margin: "0 auto 30px", fontSize: 12 }}>
          سؤال مفتوح: اشتراك شهري أم تسعير حسب المشروع؟
        </div>

        <div className="row justify-content-center">
          {plans.map((label) => (
            <div className="col-lg-4 col-md-6" key={label}>
              <div style={{ ...box, flexDirection: "column", gap: 12, height: 360, marginBottom: 24, padding: 20 }}>
                <div>{label}</div>
                <div style={{ ...box, height: 40, width: "55%" }}>السعر</div>
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...box, height: 44, width: "80%", marginTop: "auto" }}>زر الاشتراك</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
