import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cpanelBanner } from "../../data/hosting-services/data";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import Tilt3D from "../Emails/Tilt3D";
import Magnetic from "../Common/Magnetic";
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
                  <Magnetic strength={0.25}>
                    <Link href={cpanelBanner.cta.href} className="default-btn">
                      {cpanelBanner.cta.text}
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </Magnetic>
                </motion.div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <Reveal className="hosting-cpanel-banner-img" delay={0.1} y={40}>
                <Tilt3D max={7} glare={false}>
                  <Image
                    src={cpanelBanner.image}
                    alt={cpanelBanner.heading}
                    width={780}
                    height={520}
                  />
                </Tilt3D>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpanelBanner;
