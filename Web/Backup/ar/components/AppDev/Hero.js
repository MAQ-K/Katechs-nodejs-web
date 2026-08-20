import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { staggerParent, staggerItem, EASE } from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";
import ParticleField from "../Common/ParticleField";
import Tilt3D from "../Emails/Tilt3D";

import heroMockup from "../../public/images/mobile-app/app-mockup.png";

const tags = ["تطبيقات iOS", "أندرويد", "تطبيقات هجينة"];

// Badges that float around the device at real translateZ depths, so they
// parallax against the mockup when the card tilts (Motion Lab "Layered depth
// card") instead of sliding as one flat plane.
const floaters = [
  { icon: "bx bxl-apple", label: "App Store", cls: "is-one", z: 70, delay: 0 },
  { icon: "bx bxl-google-play", label: "Google Play", cls: "is-two", z: 55, delay: 0.9 },
  { icon: "bx bx-bolt-circle", label: "أداء أصلي", cls: "is-three", z: 85, delay: 1.7 },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  // useScroll/useTransform resolve their scroll-linked value differently on
  // the server (no DOM to measure) than on the client's first paint (before
  // the first measurement lands) — feeding that straight into `style` was
  // causing a real hydration mismatch on `.app-hero-scroll-cue`. Rendering
  // the same static value on the server and the client's first paint, then
  // switching to the live scroll-linked value only after mount, keeps both
  // renders identical.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Scroll-linked parallax: the media column drifts up and the headline block
  // drifts down slightly as the hero leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  const mediaY = useTransform(smooth, [0, 1], [0, -70]);
  const textY = useTransform(smooth, [0, 1], [0, 55]);
  const fade = useTransform(smooth, [0, 0.85], [1, 0.25]);

  const parallax = reduced || !mounted ? {} : { y: mediaY, opacity: fade };
  const textParallax = reduced || !mounted ? {} : { y: textY, opacity: fade };

  return (
    <section className="app-hero" ref={sectionRef}>
      <ParticleField className="app-hero-particles" count={44} />
      <span className="app-hero-glow" aria-hidden="true"></span>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div style={textParallax}>
              <motion.div
                className="app-hero-text"
                initial="hidden"
                animate="show"
                variants={staggerParent(0.12, 0.1)}
              >
                <motion.div className="app-hero-eyebrow" variants={staggerItem(14)}>
                  <span className="app-hero-dot"></span>
                  {tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      {i > 0 && <span className="app-hero-sep">/</span>}
                      <span>{tag}</span>
                    </React.Fragment>
                  ))}
                </motion.div>

                <motion.h1 variants={staggerItem(22)}>
                  نحوّل فكرتك إلى تطبيق يستخدمه عملاؤك كل يوم
                </motion.h1>

                <motion.p variants={staggerItem(20)}>
                  من التخطيط والتصميم إلى التطوير والإطلاق، نبني لك تطبيق جوال
                  احترافي بتجربة استخدام سلسة وأداء سريع على iOS وأندرويد.
                </motion.p>

                <motion.div className="app-hero-actions" variants={staggerItem(16)}>
                  <Magnetic>
                    <Link href="/contactWeb" className="default-btn app-btn-shine">
                      ابدأ مشروعك
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <Link href="#process" className="app-hero-ghost-btn">
                      خطوات العمل
                    </Link>
                  </Magnetic>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              style={parallax}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              <Tilt3D className="app-hero-frame" max={8} preserve3d>
                <div className="app-hero-media">
                  <Image
                    src={heroMockup}
                    alt="تصميم وتطوير تطبيقات الجوال - KaTechs"
                    width={480}
                    height={600}
                    priority
                  />

                  <span className="app-hero-scan" aria-hidden="true"></span>

                  <div className="app-hero-caption">
                    <p>
                      تطبيقات أصلية بأداء عالٍ
                      <br />
                      لمنصتي iOS وأندرويد.
                    </p>
                    <span className="app-hero-caption-num">01</span>
                  </div>
                </div>

                {floaters.map((f) => (
                  <span
                    key={f.label}
                    className={`app-hero-floater ${f.cls}`}
                    style={{
                      transform: `translateZ(${f.z}px)`,
                      animationDelay: `${f.delay}s`,
                    }}
                  >
                    <i className={f.icon}></i>
                    {f.label}
                  </span>
                ))}
              </Tilt3D>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.span
        className="app-hero-scroll-cue"
        aria-hidden="true"
        style={reduced || !mounted ? {} : { opacity: fade }}
      >
        <i className="bx bx-chevron-down"></i>
      </motion.span>
    </section>
  );
};

export default Hero;
