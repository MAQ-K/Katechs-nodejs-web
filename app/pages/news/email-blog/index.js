import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/email-blog-Content";
import Footer from "../../../components/Layouts/Footer";
import Head from "next/head";

export default function NewsDetailsPage() {
  return (
    <>

    <Head>
        <title> بريد الكتروني</title>
        <meta name="description" content="يُعتبر البريد الإلكتروني واحدًا من أهم وسائل الاتصال الإلكتروني في العصر الحديث، حيث يُمثل وسيلة فعّالة لتبادل الرسائل والمعلومات عبر الإنترنت."/>
        <meta name="keywords" content="بريد الكتروني، انشاء بريد الكتروني، اهمية البريد الالكتروني، خدمات البريد الالكتروني"/>
    </Head>

    
      <Navbar />

      <PageBanner
        pageTitle=" بريد الكتروني"
        homePageUrl="/"
        homePageText=""
        activePageText=" "
      />
      {/* `.news-details-page` — see "=== SUB-PAGE: /news/*-blog ===" in
          styles/style.scss. rtl.css sets flat, three-levels-deep
          `.news-details-area .widget-area ...` rules after style.css loads;
          this wrapper's extra scope level beats them regardless of load
          order, the same mechanism as .about-page. */}
      <div className="news-details-page">
        <NewsDetailsContent />
      </div>

      <Footer />
    </>
  );
}
