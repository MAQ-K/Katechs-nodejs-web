import React from "react";
import Reveal from "../Common/Reveal";

// Visual pass — split layout, same pattern as components/Seo/AiSearch.js.
// Copy unchanged, already written in components/digitalfeature/WhatWeOffer.js.
const items = [
  "إعداد خطة محتوى استراتيجية شهرية",
  "تصميم منشورات جذابة بصريًا وكتابيًا",
  "التفاعل مع الجمهور والرد على الاستفسارات",
];

const platforms = [
  { name: "فيسبوك", icon: "bxl-facebook-circle" },
  { name: "إنستغرام", icon: "bxl-instagram-alt" },
  { name: "تويتر", icon: "bxl-twitter" },
  { name: "لينكد إن", icon: "bxl-linkedin-square" },
  { name: "تيك توك", icon: "bxl-tiktok" },
];

const SocialMedia = () => {
  return (
    <section className="dm-section">
      <div className="container">
        <div className="dm-split">
          <div>
            <Reveal>
              <div className="dm-media-panel">
                <div className="dm-post-card">
                  <span className="dm-skel-badge">
                    <i className="bx bx-comment-detail"></i>
                    تفاعل هذا الأسبوع
                  </span>
                  <div className="dm-post-row">
                    <span className="dm-post-avatar"></span>
                    <div className="dm-skel-line w80"></div>
                  </div>
                  <div className="dm-post-thumb"></div>
                  <div className="dm-post-stats">
                    <span>
                      <i className="bx bx-heart"></i> إعجاب
                    </span>
                    <span>
                      <i className="bx bx-comment"></i> تعليق
                    </span>
                    <span>
                      <i className="bx bx-share"></i> مشاركة
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.05}>
              <span className="dm-eyebrow">
                <span className="dot"></span>
                منصات التواصل
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="dm-h2">
                بناء حضور رقمي مؤثر، لا مجرد نشر منتظم
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="dm-p">
                ندير حساباتك على مختلف المنصات بخطة واضحة، من المحتوى إلى
                الرد على العملاء.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="dm-list" style={{ marginTop: 20 }}>
                {items.map((text) => (
                  <li key={text}>
                    <i className="bx bx-check"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="dm-tag-row">
                {platforms.map((p) => (
                  <span className="dm-tag" key={p.name}>
                    <i className={`bx ${p.icon}`}></i>
                    {p.name}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="dm-note">
                النص أعلاه مكتوب فعليًا في
                components/digitalfeature/WhatWeOffer.js
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
