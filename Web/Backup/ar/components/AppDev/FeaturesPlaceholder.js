import React from "react";
import { box } from "./wireframeStyles";

const FeaturesPlaceholder = () => {
  return (
    <section className="wireframe-features pb-100">
      <div className="container">
        <div style={{ ...box, height: 220 }}>Features section</div>
      </div>
    </section>
  );
};

export default FeaturesPlaceholder;
