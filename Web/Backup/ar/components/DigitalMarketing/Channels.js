import React from "react";
import Link from "next/link";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "seo page inspiration/3rd section.png" (dark, 6-card
// grid). Copy/taxonomy unchanged — SEO card still cross-links to
// /services/seo/ instead of restating it. See data/digital-marketing/structure.md.
const channels = [
  {
    icon: "bx-search-alt",
    title: "تحسين محركات البحث (SEO)",
    text: "ظهور دائم في نتائج البحث دون دفع مقابل كل زيارة.",
    href: "/services/seo/",
    linkText: "صفحة السيو",
  },
  {
    icon: "bx-money",
    title: "الإعلانات المدفوعة",
    text: "حملات على محركات البحث تصل لمن يبحث عن خدمتك في نفس اللحظة.",
  },
  {
    icon: "bx-target-lock",
    title: "إعلانات السوشيال ميديا",
    text: "استهداف دقيق حسب الاهتمام والموقع والسلوك على منصات التواصل.",
  },
  {
    icon: "bx-group",
    title: "إدارة منصات التواصل",
    text: "خطة محتوى شهرية وتصميم منشورات وإدارة التفاعل مع جمهورك.",
  },
  {
    icon: "bx-edit-alt",
    title: "التسويق بالمحتوى",
    text: "محتوى يبني ثقة جمهورك بك قبل أن يطلب منك شيئًا.",
  },
  {
    icon: "bx-envelope-open",
    title: "التسويق بالبريد الإلكتروني",
    text: "حملات بريدية تعيد العملاء الحاليين بدل ملاحقة عملاء جدد فقط.",
  },
];

const Channels = () => {
  return (
    <section className="dm-section dm-dark" id="channels">
      <div className="container">
        <Reveal>
          <div className="dm-head dm-center" style={{ maxWidth: 640, marginInline: "auto" }}>
            <h2 className="dm-h2">القنوات التي نعمل عليها</h2>
            <p className="dm-p">
              لا نستخدم كل القنوات لكل عميل، نختار ما يناسب جمهورك
              وميزانيتك.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="dm-bento"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* 4-col bento: first and last cards span two columns and sit on
              glass instead of white, so the six channels read as 2 rows of
              varied tiles, not a repeat of the page's other card grids. */}
          {channels.map((item, i) => (
            <motion.div
              className={`dm-card dm-card-dark${i === 0 || i === channels.length - 1 ? " is-wide" : ""}`}
              key={item.title}
              variants={staggerItem()}
            >
              <span className="dm-icon-well">
                <i className={`bx ${item.icon}`}></i>
              </span>
              <h3 className="dm-h3">{item.title}</h3>
              <p className="dm-p">{item.text}</p>

              {item.href && (
                <div style={{ marginTop: "auto", paddingTop: 16 }}>
                  <Link href={item.href} className="dm-inline-link">
                    {item.linkText}
                    <i className="bx bx-left-arrow-alt"></i>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Channels;
