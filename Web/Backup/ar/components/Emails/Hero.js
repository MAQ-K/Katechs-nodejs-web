import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerParent, staggerItem } from "../Common/Reveal";
import Tilt3D from "./Tilt3D";

const bullets = [
  { icon: "bx bx-support", text: "دعم فني على مدار الساعة" },
  { icon: "bx bx-shield-quarter", text: "ضمان تشغيل 99.9%" },
  { icon: "bx bx-rocket", text: "إعداد سريع وسهل" },
];

const EASE = [0.22, 1, 0.36, 1];

const Hero = () => {
  return (
    <section className="email-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className="email-hero-text"
              initial="hidden"
              animate="show"
              variants={staggerParent(0.12, 0.1)}
            >
              <motion.span
                className="email-hero-eyebrow"
                variants={staggerItem(14)}
              >
                بريد إلكتروني احترافي
              </motion.span>

              <motion.h1 variants={staggerItem(20)}>
                بريدك الإلكتروني بإسم نشاطك التجاري
              </motion.h1>

              <motion.p variants={staggerItem(20)}>
                احصل على بريد إلكتروني احترافي يعكس هوية علامتك التجارية، مع
                حماية متقدمة من الفيروسات والبريد العشوائي، وتوافق كامل مع
                جميع الأجهزة والمتصفحات.
              </motion.p>

              <motion.ul
                className="email-hero-bullets"
                variants={staggerParent(0.09)}
              >
                {bullets.map((item) => (
                  <motion.li key={item.text} variants={staggerItem(14)}>
                    <i className={item.icon}></i>
                    {item.text}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={staggerItem(16)}>
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  style={{ display: "inline-block" }}
                >
                  <Link href="#pricing" className="default-btn">
                    اطلب الآن
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              <Tilt3D className="email-hero-img" max={10}>
                <motion.i
                  className="bx bx-envelope"
                  animate={{ y: [0, -14, 0], rotate: [0, -3, 0, 3, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.i>
              </Tilt3D>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
