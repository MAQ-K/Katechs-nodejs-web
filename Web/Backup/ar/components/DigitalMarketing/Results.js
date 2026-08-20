import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "seo page inspiration/cards.png" (dark, 3-card grid),
// same treatment as components/Seo/CaseStudies.js including the
// pending-data shimmer instead of a static "+00%" (no real case studies
// exist yet — see the flag).
const cases = [1, 2, 3];

const Results = () => {
  return (
    <section className="dm-section dm-dark">
      <div className="container">
        <Reveal>
          <div className="dm-head dm-center" style={{ maxWidth: 640, marginInline: "auto" }}>
            <h2 className="dm-h2">نتائج عملاء</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="dm-flag dm-flag-dark"
            style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}
          >
            <div>
              <strong>مطلوب من العميل:</strong> دراسات حالة حقيقية — القطاع،
              المشكلة، ما نُفّذ، والرقم الذي تغيّر. لا يمكن كتابة هذا القسم
              بدونها.
            </div>
          </div>
        </Reveal>

        <motion.div
          className="dm-grid"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cases.map((n) => (
            <motion.div className="dm-card dm-card-dark" key={n} variants={staggerItem()}>
              <div className="dm-tag-row">
                <span className="dm-tag">القطاع</span>
              </div>

              <h3 className="dm-h3">اسم العميل أو القطاع</h3>
              <p className="dm-p">
                وصف مختصر للوضع قبل الحملة والهدف المطلوب تحقيقه.
              </p>

              <div style={{ marginTop: "auto", paddingTop: 20 }}>
                <span className="dm-stat-pending" aria-label="بيانات قادمة">
                  <span className="dm-stat-pending-bar dm-stat-pending-bar-dark"></span>
                </span>
                <span className="dm-stat-label">النتيجة خلال 00 شهرًا</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
