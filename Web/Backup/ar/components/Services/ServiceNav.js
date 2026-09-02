import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { serviceNav } from "../../data/services/data";

// Four large boxes — the decision point of the page.
// Each says what it is and, more importantly, WHEN you need it.
//
// `onNavigate` is optional and takes the bare area id. Without it these stay
// plain in-page anchors, which is what a crawler and a middle-click should see.
// With it the click is intercepted and handed to the page's eased scroll, so
// picking a service GLIDES to its area instead of teleporting — the page
// disables CSS `scroll-behavior: smooth` for the whole route (see
// useSmoothScroll.js), which is why a native `#hash` jump here lands instantly
// and looks like nothing happened.
const ServiceNav = ({ onNavigate }) => {
  const reduced = useReducedMotion();

  const handleClick = (event, href) => {
    if (!onNavigate || !href.startsWith("#")) return;
    // Modified clicks are the user asking for a new tab/window — leave them.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    onNavigate(href.slice(1));
  };

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
              <Link
                href={item.href}
                className="wsv-nav-card"
                onClick={(e) => handleClick(e, item.href)}
              >
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
