import React from "react";

// UX PROTOTYPE. Copy already exists in components/digitalfeature/WhatWeOffer.js
// — reused rather than rewritten.
const items = [
  "إعداد خطة محتوى استراتيجية شهرية",
  "تصميم منشورات جذابة بصريًا وكتابيًا",
  "التفاعل مع الجمهور والرد على الاستفسارات",
];

const platforms = ["فيسبوك", "إنستغرام", "تويتر", "لينكد إن", "تيك توك"];

const SocialMedia = () => {
  return (
    <section className="ux-section">
      <div className="container">
        <div className="ux-split">
          <div>
            <div className="ux-media">
              مساحة صورة — منشورات وتفاعل
            </div>
          </div>

          <div>
            <span className="ux-eyebrow">منصات التواصل</span>
            <h2 className="ux-h2">بناء حضور رقمي مؤثر، لا مجرد نشر منتظم</h2>

            <p className="ux-p">
              ندير حساباتك على مختلف المنصات بخطة واضحة، من المحتوى إلى الرد
              على العملاء.
            </p>

            <ul className="ux-list">
              {items.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>

            <div className="ux-tag-row">
              {platforms.map((p) => (
                <span className="ux-tag" key={p}>
                  {p}
                </span>
              ))}
            </div>

            <p className="ux-note">
              النص أعلاه مكتوب فعليًا في
              components/digitalfeature/WhatWeOffer.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
