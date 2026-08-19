import React from "react";

import { featureGrid } from "../../data/hosting-services/data";

const FeatureGrid = () => {
  return (
    <section className="hosting-feature-grid-section">
      <div className="container">
        <div className="hosting-feature-grid-title">
          <h2>{featureGrid.title}</h2>
        </div>

        <div className="hosting-feature-grid">
          {featureGrid.items.map((item) => (
            <div className="hosting-feature-grid-item" key={item.title}>
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
