import React from "react";
import Link from "next/link";
import Head from "next/head";

const platformsData = [
  {
    key: "salla",
    listIcon: "bx-store",
    headline: "متجرك جاهز للبيع في السعودية",
    description: "أفضل حل لو بتستهدف عملاء السعودية",
    schemaDescription:
      "نوفر لك خدمة متكاملة لإنشاء متجرك الإلكتروني على منصة سلة، المنصة العربية الأولى للتجارة الإلكترونية، مع تهيئة كاملة تناسب السوق السعودي والخليجي.",
    ctaLink: "/contactWeb",
    schemaAreaServed: ["SA", "AE", "KW", "QA", "BH", "OM"],
  },
  {
    key: "shopify",
    listIcon: "bx-cart",
    headline: "متجرك يفتحلك السوق العالمي",
    description: "أفضل حل لو بتستهدف عملاء من كل مكان",
    schemaDescription:
      "نساعدك على بناء متجر احترافي على Shopify، المنصة العالمية الأقوى للتجارة الإلكترونية، مناسبة للبيع محليًا وعالميًا مع مرونة كاملة في التخصيص.",
    ctaLink: "/contactWeb",
    schemaAreaServed: "Worldwide",
  },
  {
    key: "easyorder",
    iconClass: "platform-icon-easyorder",
    listIcon: "bx-store-alt",
    headline: "متجرك جاهز للبيع في مصر",
    description: "أفضل حل لو بتستهدف عملاء مصر",
    schemaDescription:
      "نبني لك متجرك الإلكتروني على منصة إيزي أوردر، المناسبة للبيع محليًا في مصر مع دعم كامل للدفع عند الاستلام وشركات الشحن المحلية.",
    ctaLink: "/contactWeb",
    schemaAreaServed: "EG",
  },
  {
    key: "dropship",
    iconClass: "platform-icon-dropship",
    listIcon: "bx-package",
    headline: "مشروع دروب شيبينج كامل، من الفكرة للانطلاق",
    description: "أفضل حل لو بتبدأ من الصفر وعايز نصيحة في اختيار المنتج",
    schemaDescription:
      "نساعدك تبدأ مشروع دروب شيبينج من الصفر، من اختيار المنتج المناسب وحتى بناء المتجر وربطه بالموردين وإدارة الطلبات.",
    ctaLink: "/contactWeb",
    schemaAreaServed: "Worldwide",
  },
];

const platformsSchema = {
  "@context": "https://schema.org",
  "@graph": platformsData.map((platform) => ({
    "@type": "Service",
    serviceType: "E-commerce Store Setup",
    name: platform.headline,
    description: platform.schemaDescription,
    provider: {
      "@type": "Organization",
      name: "KaTechs",
    },
    areaServed: platform.schemaAreaServed,
  })),
};

const EcommercePlatforms = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(platformsSchema) }}
        />
      </Head>

      <div className="platform-section pt-100 pb-70">
        <div className="platform-wave platform-wave-top">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C360,110 1080,-30 1440,40 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        <div className="platform-blob platform-blob-one"></div>
        <div className="platform-blob platform-blob-two"></div>

        <div className="container">
          <div className="platform-split-row">
            <div className="platform-split-text">
              <h2 className="platform-title-nowrap">
                من فكرتك... إلى متجر يبيع فعلاً
              </h2>
              <h3 className="platform-section-subtitle">
                <span className="platform-section-subtitle-brand">كاتكس</span> تبني متجرك وتديره، على المنصة الأنسب لسوقك
              </h3>
              <p>
                عندك فكرة منتج أو خدمة؟ إحنا نبنيلك متجرك، ندير كل التفاصيل التقنية، وانت تركز على البيع بس.
              </p>

              <ul className="platform-split-list">
                {platformsData.map((platform) => (
                  <li key={platform.key}>
                    <Link href={platform.ctaLink} className="platform-split-list-link">
                      <span
                        className={`platform-split-list-icon ${platform.iconClass || ""}`}
                      >
                        <i className={`bx ${platform.listIcon}`}></i>
                      </span>
                      <span className="platform-split-list-copy">
                        <strong>{platform.headline}</strong>
                        <span>{platform.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="platform-section-buttons">
                <Link href="/contact" className="default-btn outline platform-cta-btn">
                  جاهز تبدأ الآن
                </Link>
              </div>
            </div>

            <div className="platform-split-visual">
              <div className="platform-split-box">
                <video
                  className="platform-split-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/store-services.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="platform-wave platform-wave-bottom">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C360,-10 1080,130 1440,60 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default EcommercePlatforms;
