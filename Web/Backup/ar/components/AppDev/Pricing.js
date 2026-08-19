import React from "react";
import { box, line } from "./wireframeStyles";

const plans = ["الباقة الأساسية", "الباقة المتقدمة", "باقة الشركات"];

const Pricing = () => {
  return (
    <section className="wireframe-pricing pb-100">
      <div className="container">
        <div style={{ ...box, height: 44, width: 260, margin: "0 auto 40px" }}>
          عنوان القسم (Section Title)
        </div>

        <div className="row justify-content-center">
          {plans.map((label) => (
            <div className="col-lg-4 col-md-6" key={label}>
              <div style={{ ...box, flexDirection: "column", gap: 12, height: 320, marginBottom: 24, padding: 20 }}>
                <div>{label}</div>
                <div style={{ ...line, width: "40%" }} />
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...line, width: "80%" }} />
                <div style={{ ...box, height: 40, width: "70%", marginTop: "auto" }}>زر الحجز</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
