import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { serviceNav } from "../../data/services/data";

// Four large boxes — the decision point of the page.
// Each says what it is and, more importantly, WHEN you need it.

const ServiceNav = () => {
  const reduced = useReducedMotion();

  return (
    <section className="wsv-nav">
      <div className="container">
        <Reveal>
          <div className="wsv-nav-head">
            <span className="wsv-eyebrow">اختر ما يناسبك</span>
            <h2>أي خدمة تحتاج؟</h2>
          </div>
        </Reveal>

        <motion.div
          className="wsv-nav-grid"
          variants={reduced ? undefined : staggerParent(0.09)}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
        >
          {serviceNav.map((item) => (
            <motion.div key={item.id} variants={reduced ? undefined : staggerItem()}>
              <Link href={item.href} className="wsv-nav-card">
                <span className="wsv-nav-icon">
                  <i className={item.icon}></i>
                </span>
                <h3>{item.title}</h3>
                <p>{item.brief}</p>
                <span className="wsv-nav-arrow">
                  <i className="bx bx-left-arrow-alt"></i>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceNav;
