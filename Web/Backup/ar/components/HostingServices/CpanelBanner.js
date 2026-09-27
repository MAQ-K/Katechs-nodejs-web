import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cpanelBanner } from "../../data/hosting-services/data";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

const CpanelBanner = () => {
  return (
    <section className="hosting-cpanel-banner-section">
      <div className="container">
        <div className="hosting-cpanel-banner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                className="hosting-cpanel-banner-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerParent(0.12)}
              >
                <motion.h2 variants={staggerItem(18)}>
                  {cpanelBanner.heading}
                </motion.h2>
                <motion.p variants={staggerItem(16)}>
                  {cpanelBanner.description}
                </motion.p>
                <motion.div variants={staggerItem(14)}>
                  <div className="d-inline-block">
                    <Link href={cpanelBanner.cta.href} className="default-btn">
                      {cpanelBanner.cta.text}
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <Reveal className="hosting-cpanel-banner-img" delay={0.1} y={40}>
                <div className="svc-img-hover">
                  <Image
                    src={cpanelBanner.image}
                    alt={cpanelBanner.heading}
                    width={780}
                    height={520}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpanelBanner;
