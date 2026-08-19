import React from "react";
import { box } from "./wireframeStyles";

const platforms = ["تطبيقات iOS", "تطبيقات Android", "تطبيقات متعددة المنصات"];

const Platforms = () => {
  return (
    <section className="wireframe-platforms pb-100">
      <div className="container">
        <div style={{ ...box, height: 44, width: 260, margin: "0 auto 40px" }}>
          عنوان القسم (Section Title)
        </div>

        <div className="row justify-content-center">
          {platforms.map((label) => (
            <div className="col-lg-4 col-sm-6" key={label}>
              <div style={{ ...box, height: 180, marginBottom: 20, flexDirection: "column", gap: 10 }}>
                <div style={{ ...box, width: 60, height: 60, borderRadius: "50%" }} />
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
