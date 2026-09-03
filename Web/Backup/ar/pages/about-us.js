import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhyChooseUs from "../components/AboutOne/WhyChooseUs";
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
          1. MakeYourBusiness and Testimonials are components/Common/** shared
             with the (frozen) homepage. Scoping under this wrapper restyles
             them HERE only.
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

        <MakeYourBusiness />

        <WhyChooseUs />

        <Testimonials />
      </div>

      <Footer />
    </>
  );
}
