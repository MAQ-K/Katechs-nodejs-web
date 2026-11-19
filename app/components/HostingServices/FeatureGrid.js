import React from "react";
import { motion } from "framer-motion";

import { featureGrid } from "../../data/hosting-services/data";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";

const FeatureGrid = () => {
  return (
    <section className="hosting-feature-grid-section">
      <div className="container">
        <Reveal as="div" className="hosting-feature-grid-title">
          <h2>{featureGrid.title}</h2>
        </Reveal>

        <motion.div
          className="hosting-feature-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerParent(0.07)}
        >
          {featureGrid.items.map((item) => (
            <motion.div
              className="hosting-feature-grid-item"
              key={item.title}
              variants={staggerItem(18)}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;
