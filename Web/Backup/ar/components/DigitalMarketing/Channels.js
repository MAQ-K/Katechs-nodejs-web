import React from "react";
import { box } from "./wireframeStyles";

// Section 3 — the core offering. Taxonomy follows Digital Agency Network's
// 2026 services list (SEO, SEM/PPC, social, content, email are the core five).
//
// The SEO card deliberately CROSS-LINKS to /services/seo/ instead of restating
// it — repeating that content here would put two of our own pages in
// competition for the same intent. See data/digital-marketing/structure.md.
const channels = [
  { label: "تحسين محركات البحث (SEO)", link: "/services/seo/" },
  { label: "الإعلانات المدفوعة (Google Ads)" },
  { label: "إعلانات السوشيال ميديا" },
  { label: "إدارة منصات التواصل" },
  { label: "التسويق بالمحتوى" },
  { label: "التسويق بالبريد الإلكتروني" },
];

const Channels = () => {
  return (
    <section className="wireframe-dm-channels pb-100" id="channels">
      <div className="container">
        <div style={{ ...box, height: 44, width: 280, margin: "0 auto 40px" }}>
          عنوان القسم (Section Title)
        </div>

        <div className="row justify-content-center">
          {channels.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.label}>
              <div style={{ ...box, height: 200, marginBottom: 24, flexDirection: "column", gap: 12, padding: 20 }}>
                <div style={{ ...box, width: 48, height: 48, borderRadius: 10 }} />
                <div>{item.label}</div>
                <div style={{ ...box, height: 34, width: "85%", fontSize: 11 }}>وصف قصير</div>
                {item.link && (
                  <div style={{ fontSize: 11, color: "#6b7280" }}>
                    رابط داخلي إلى {item.link}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
