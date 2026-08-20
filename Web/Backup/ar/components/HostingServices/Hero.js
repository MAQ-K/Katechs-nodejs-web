import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { heroBanner } from "../../data/hosting-services/data";
import { staggerParent, staggerItem } from "../Common/Reveal";
import Tilt3D from "../Emails/Tilt3D";
import Magnetic from "../Common/Magnetic";

const Hero = () => {
  return (
    <section className="hosting-hero">
      <span className="hosting-hero-glow" aria-hidden="true"></span>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Tilt3D className="hosting-hero-img" max={8} preserve3d>
              <Image
                src={heroBanner.image}
                alt={heroBanner.heading}
                width={520}
                height={520}
              />

              <div
                className="hosting-hero-domain-card"
                style={{ transform: "translateZ(40px)" }}
              >
                <span className="hosting-hero-icon-badge">
                  <i className="bx bx-shield-quarter"></i>
                </span>
                <span className="hosting-hero-domain-pill">
                  <i className="bx bx-globe"></i>
                  <span>{heroBanner.floatingCard.domain}</span>
                  <i className="bx bx-pointer hosting-hero-domain-pointer"></i>
                </span>
              </div>
            </Tilt3D>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="hosting-hero-text"
              initial="hidden"
              animate="show"
              variants={staggerParent(0.12, 0.05)}
            >
              <motion.span variants={staggerItem(14)}>
                {heroBanner.eyebrow}
              </motion.span>

              <motion.h1 variants={staggerItem(22)}>
                {heroBanner.heading}
              </motion.h1>

              <motion.p variants={staggerItem(18)}>
                {heroBanner.subheading}
              </motion.p>

              <motion.div className="hosting-hero-badge" variants={staggerItem(16)}>
                <i className="bx bx-check-shield"></i>
                {heroBanner.badge}
              </motion.div>

              <motion.div className="hosting-hero-btn" variants={staggerItem(16)}>
                <Magnetic strength={0.25}>
                  <Link href={heroBanner.cta.href} className="default-btn app-btn-shine">
                    {heroBanner.cta.text}
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </Magnetic>
              </motion.div>

              <motion.div className="hosting-hero-trust" variants={staggerItem(14)}>
                <span className="hosting-hero-trust-stars">
                  {Array.from({ length: heroBanner.trustBadge.rating }).map((_, i) => (
                    <i className="bx bxs-star" key={i}></i>
                  ))}
                </span>
                <span className="hosting-hero-trust-text">
                  {heroBanner.trustBadge.text}
                </span>
                <span className="hosting-hero-trust-caption">
                  {heroBanner.trustBadge.caption}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
