import React from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "../Common/Reveal";

// Bottom-anchored mini-mockups, built from divs and clipped by the card's
// bottom edge — the same "UI peeking out of the card" device the reference
// uses. No new assets, and they scale cleanly.
const visuals = {
  // Interactive prototypes — three phone frames, the middle one accented.
  screens: (
    <div className="app-fv-screens">
      {[0, 1, 2].map((n) => (
        <span
          className={`app-fv-screen${n === 1 ? " is-active" : ""}`}
          key={n}
        >
          <span className="app-fv-notch"></span>
          <span className="app-fv-bar w-80"></span>
          <span className="app-fv-bar w-55"></span>
          <span className="app-fv-block"></span>
        </span>
      ))}
    </div>
  ),

  // Clean native code — an editor panel with indented "code" rows.
  code: (
    <div className="app-fv-code">
      {[
        { indent: 0, width: "62%", accent: true },
        { indent: 1, width: "80%" },
        { indent: 1, width: "54%", accent: true },
        { indent: 2, width: "68%" },
        { indent: 1, width: "44%" },
        { indent: 0, width: "36%" },
      ].map((row, i) => (
        <span className="app-fv-row" key={i}>
          <span className="app-fv-dot"></span>
          <span
            className={`app-fv-bar${row.accent ? " is-accent" : ""}`}
            style={{ width: row.width, marginInlineStart: row.indent * 14 }}
          ></span>
        </span>
      ))}
    </div>
  ),

  // Store listing + a support bubble underneath.
  store: (
    <div className="app-fv-store">
      <span className="app-fv-listing">
        <span className="app-fv-appicon">
          <i className="bx bx-mobile-alt"></i>
        </span>
        <span className="app-fv-listing-text">
          <span className="app-fv-bar w-70"></span>
          <span className="app-fv-stars">
            {[0, 1, 2, 3, 4].map((s) => (
              <i className="bx bx-star" key={s}></i>
            ))}
          </span>
        </span>
        <span className="app-fv-install">تثبيت</span>
      </span>

      <span className="app-fv-bubble">
        <i className="bx bx-message-rounded-dots"></i>
        دعم بعد الإطلاق
      </span>
    </div>
  ),
};

const features = [
  {
    icon: "bx bx-grid-alt",
    title: "نماذج تفاعلية قبل البرمجة",
    text: "نسلّمك تصميمًا تفاعليًا لكل شاشة قبل كتابة أول سطر من الكود، فتوافق على التجربة قبل أن يبدأ التطوير.",
    visual: "screens",
  },
  {
    icon: "bx bx-code-alt",
    title: "كود نظيف قابل للتوسّع",
    text: "نكتب التطبيق بلغات المنصة نفسها — Swift و Kotlin — أو بكود موحّد عبر Flutter، بما يناسب جمهورك وخطة نموّك.",
    visual: "code",
  },
  {
    icon: "bx bx-cloud-upload",
    title: "نشر على المتاجر ودعم مستمر",
    text: "نتولّى رفع التطبيق على App Store و Google Play، ونواصل الدعم والتحديثات بعد الإطلاق.",
    visual: "store",
  },
];

const Features = () => {
  const reduced = useReducedMotion();

  return (
    <section className="app-features" id="features">
      <div className="container">
        <Reveal as="h2" className="app-features-title">
          نبني تطبيقك بمعايير
          <br />
          تجعله جاهزًا للنشر والنموّ
        </Reveal>

        <div className="row app-features-row">
          {features.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <Reveal
                className="app-feature-card"
                delay={0.08 * i}
                whileHover={reduced ? undefined : { y: -10 }}
              >
                <span className="app-feature-icon">
                  <i className={item.icon}></i>
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <div className="app-feature-visual">
                  {visuals[item.visual]}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
