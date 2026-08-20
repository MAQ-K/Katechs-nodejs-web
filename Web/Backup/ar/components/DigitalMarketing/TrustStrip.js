import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass. Copy/flag unchanged — no real client logos exist yet.
const logos = [1, 2, 3, 4, 5];

const TrustStrip = () => {
  return (
    <section className="dm-section dm-alt">
      <div className="container">
        <Reveal>
          <div
            className="dm-flag"
            style={{ display: "flex", marginInline: "auto", maxWidth: 640, marginBottom: 36 }}
          >
            <div>
              <strong>مطلوب من العميل:</strong> شعارات عملاء حقيقية أو أرقام
              موثقة. لن يُكتب أي رقم هنا دون بيانات فعلية.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="dm-strip-label">عملاء نعمل معهم</p>
        </Reveal>

        <motion.div
          className="dm-logo-row"
          variants={staggerParent(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {logos.map((n) => (
            <motion.div className="dm-logo-box" key={n} variants={staggerItem()}>
              شعار
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
