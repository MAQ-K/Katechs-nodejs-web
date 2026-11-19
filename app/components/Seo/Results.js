import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// From "seo page inspiration/numbers section 2nd.png" — a bordered white
// card holding the number row, not the numbers loose on the section bg.
// Figures filled in at the user's request (2026-09-28, "add a good results
// data"). 240% matches the hero badge; 15 years matches the site's other
// copy. ⚠️ The rest are illustrative — confirm with the client before launch.
const stats = [
  { value: "+120", label: "مواقع نعمل عليها" },
  { value: "+3,500", label: "كلمات في الصفحة الأولى" },
  { value: "240%", label: "متوسط نمو الزيارات" },
  { value: "+15", label: "سنوات خبرة" },
];

const Results = () => {
  return (
    <section className="seo-section">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center">
            <h2 className="seo-h2">نتائج نقيسها، لا وعود</h2>
          </div>
        </Reveal>


        <div className="seo-stats-card">
          <motion.div
            className="seo-stats-row"
            variants={staggerParent(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {stats.map(({ value, label }) => (
              <motion.div className="seo-stat" key={label} variants={staggerItem()}>
                <span className="seo-stat-value" dir="ltr">{value}</span>
                <span className="seo-stat-label">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
