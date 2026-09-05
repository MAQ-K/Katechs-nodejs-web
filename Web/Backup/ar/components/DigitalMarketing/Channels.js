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

// `showNote` gates the trailing open question, which is a note to OURSELVES
// ("which ad platforms do we name?"), not customer-facing copy. Defaults true
// so /services/digital-marketing is unchanged; /hp-new passes false — an
// unanswered internal question has no business on the homepage.
const Channels = ({ showNote = true }) => {
  return (
    <section className="dm-section dm-dark" id="channels">
      <div className="container">
        <Reveal>
          <div className="dm-head dm-center" style={{ maxWidth: 640, marginInline: "auto" }}>
            <h2 className="dm-h2">القنوات التي نعمل عليها</h2>
            <p className="dm-p">
              لا نستخدم كل القنوات لكل عميل — نختار ما يناسب جمهورك
              وميزانيتك.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="dm-grid"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {channels.map((item) => (
            <motion.div className="dm-card dm-card-dark" key={item.title} variants={staggerItem()}>
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

        {showNote && (
          <Reveal delay={0.1}>
            <p className="dm-note">
              سؤال مفتوح: أي منصات إعلانية نذكرها بالاسم — Google، Meta،
              TikTok، Snapchat، X؟
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Channels;
