import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal, { EASE } from "../Common/Reveal";
import Tilt3D from "../Emails/Tilt3D";
import AppOrbit from "./AppOrbit";

const platforms = [
  {
    icon: "bxl-apple bx",
    title: "تطبيقات iOS",
    meta: "Swift · آيفون وآيباد",
  },
  {
    icon: "bxl-android bx",
    title: "تطبيقات أندرويد",
    meta: "Kotlin · هواتف وأجهزة أندرويد",
  },
  {
    icon: "bx bx-devices",
    title: "تطبيقات هجينة",
    meta: "Flutter · المنصتان بكود واحد",
  },
];

const Platforms = () => {
  return (
    <section className="app-platforms" id="platforms">
      <div className="container">
        <div className="app-platforms-head">
          <Reveal as="h2">
            نطوّر على المنصة
            <br />
            التي يستخدمها عملاؤك
          </Reveal>

          <Reveal as="p" delay={0.1}>
            نختار التقنية المناسبة لمشروعك بناءً على جمهورك وميزانيتك وخطة
            نموّك — سواء كان تطبيقًا أصليًا لمنصة واحدة أو تطبيقًا هجينًا يغطي
            المنصتين بكود واحد.
          </Reveal>
        </div>

        <div className="app-platforms-body">
          <div className="app-platforms-orbit">
            <AppOrbit />
          </div>

          <div className="app-platforms-cards">
            {platforms.map((item, i) => (
              <Reveal className="app-platform-card" delay={0.08 * i} key={item.title}>
                <Tilt3D className="app-platform-tilt" max={9} glare={false}>
                  <div className="app-platform-media">
                    <span className="app-platform-sheen" aria-hidden="true"></span>
                    <motion.i
                      className={item.icon}
                      whileHover={{ scale: 1.12, rotate: -6 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    ></motion.i>
                  </div>
                </Tilt3D>

                <div className="app-platform-meta">
                  <div>
                    <h3>{item.title}</h3>
                    <span>{item.meta}</span>
                  </div>

                  <Link href="#pricing" className="app-platform-link">
                    الباقات
                    <i className="bx bx-left-arrow-alt"></i>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
