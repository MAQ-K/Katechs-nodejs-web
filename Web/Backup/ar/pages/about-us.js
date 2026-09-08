import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutOne/About";
// Swapped 2026-09-08 (user: "use 'why chose katecks' section from homepage").
// components/AboutOne/WhyChooseUs.js is no longer imported anywhere — left in
// place, not deleted, same as every other orphaned file this rebuild has
// produced. The homepage version is fully self-contained (styled-jsx, no
// styles/style.scss dependency, no homepage-only measurement it needs), so it
// drops in here with nothing else to wire up.
import WhyChooseUs from "../components/HpNew/WhyChooseUs";
import Testimonials from "../components/Common/Testimonials";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <Head>
        <title>من نحن: خدمات تصميم المواقع الإلكترونية</title>
        <meta name="description" content="تقديم أفضل خدمات تصميم المواقع الإلكترونية بأفضل الأسعار مع اتباع الأساليب الحديثة"/>
        <meta property="og:title" content="خدمات تصميم المواقع الإلكترونية" />
      </Head>

      {/* `.about-page` is the scoping hook for this page's styles — see the
          "=== SUB-PAGE: /about-us ===" block at the end of styles/style.scss.
          It exists for two reasons, both load-bearing:
          1. Testimonials is components/Common/** shared with the (frozen)
             homepage. Scoping under this wrapper restyles it HERE only.
          2. styles/rtl.css is imported AFTER style.css and sets flat
             `.choose-card` / `.about-content ul li` rules. A flat selector
             appended to style.scss would lose that tie; `.about-page .x` wins
             on specificity regardless of load order.
          Removing this div silently reverts the page's styling. */}
      <div className="about-page">
        <PageBanner
          pageTitle="من نحن"
          homePageUrl="/"
          homePageText=""
          activePageText=""
        />

        <About />

        {/* MakeYourBusiness removed 2026-09-08 (user: "remove the old why
            chose us"). It renders its own "لماذا تختار كاتكس؟" — the same
            heading and the same four reasons (الخبرة/الدعم/الحلول المتكاملة/
            جودة التزام وضمان استرداد) WhyChooseUs below already covers, back
            to back on the page. Not deleted — components/Common/
            MakeYourBusiness.js is still imported by pages/index.js. */}

        <WhyChooseUs />

        <Testimonials />
      </div>

      <Footer />
    </>
  );
}
