import React from "react";
import AppServices from "../HpNew/AppServices";

// Same element as the homepage's app section (components/HpNew/AppServices.js
// — streak backdrop, iPhone orbit), rendered, not copied. One change, user
// 2026-09-28: phone in the middle, talk on the right, features on the left —
// that's the `features` prop. The previous version (orbit + three tilt cards)
// is in git history.
const content = {
  eyebrow: "المنصات",
  heading: "نطوّر على المنصة التي يستخدمها عملاؤك",
  body:
    "نختار التقنية المناسبة لمشروعك بناءً على جمهورك وميزانيتك وخطة نموّك — سواء كان تطبيقًا أصليًا لمنصة واحدة أو تطبيقًا هجينًا يغطي المنصتين بكود واحد.",
  points: [],
  cta: { label: "اطلب الآن", href: "/contactWeb" },
};

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

const Platforms = () => (
  <section id="platforms">
    <AppServices content={content} features={platforms} />
  </section>
);

export default Platforms;
