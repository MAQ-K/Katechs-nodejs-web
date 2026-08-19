import React from "react";
import Link from "next/link";

// UX PROTOTYPE. Taxonomy follows Digital Agency Network's 2026 services list.
//
// The SEO card CROSS-LINKS to /services/seo/ rather than restating it —
// repeating that content here would put two of our own pages in competition
// for the same intent. See data/digital-marketing/structure.md.
const channels = [
  {
    title: "تحسين محركات البحث (SEO)",
    text: "ظهور دائم في نتائج البحث دون دفع مقابل كل زيارة.",
    href: "/services/seo/",
    linkText: "صفحة السيو",
  },
  {
    title: "الإعلانات المدفوعة",
    text: "حملات على محركات البحث تصل لمن يبحث عن خدمتك في نفس اللحظة.",
  },
  {
    title: "إعلانات السوشيال ميديا",
    text: "استهداف دقيق حسب الاهتمام والموقع والسلوك على منصات التواصل.",
  },
  {
    title: "إدارة منصات التواصل",
    text: "خطة محتوى شهرية وتصميم منشورات وإدارة التفاعل مع جمهورك.",
  },
  {
    title: "التسويق بالمحتوى",
    text: "محتوى يبني ثقة جمهورك بك قبل أن يطلب منك شيئًا.",
  },
  {
    title: "التسويق بالبريد الإلكتروني",
    text: "حملات بريدية تعيد العملاء الحاليين بدل ملاحقة عملاء جدد فقط.",
  },
];

const Channels = () => {
  return (
    <section className="ux-section" id="channels">
      <div className="container">
        <div className="ux-head">
          <h2 className="ux-h2">القنوات التي نعمل عليها</h2>
          <p className="ux-p">
            لا نستخدم كل القنوات لكل عميل — نختار ما يناسب جمهورك وميزانيتك.
          </p>
        </div>

        <div className="ux-grid ux-grid-3">
          {channels.map((item) => (
            <div className="ux-card" key={item.title}>
              <span className="ux-icon" aria-hidden="true"></span>
              <h3 className="ux-h3">{item.title}</h3>
              <p className="ux-p">{item.text}</p>

              {item.href && (
                <div style={{ marginTop: "auto", paddingTop: 8 }}>
                  <Link href={item.href} className="ux-btn ux-btn-secondary ux-btn-sm">
                    {item.linkText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="ux-note">
          سؤال مفتوح: أي منصات إعلانية نذكرها بالاسم — Google، Meta، TikTok،
          Snapchat، X؟
        </p>
      </div>
    </section>
  );
};

export default Channels;
