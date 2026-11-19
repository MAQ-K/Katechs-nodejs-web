import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/ssl-blog-Content";
import Footer from "../../../components/Layouts/Footer";
import Head from "next/head";
export default function NewsDetailsPage() {
  return (
    <>
      <Navbar />

      <Head>
        <title> شهادات SSL</title>
        <meta name="description" content="تعتبر شهادات SSL أساسية لأمن الإنترنت. يتم استخدامها لإنشاء اتصال مشفر والسماح بنقل البيانات بشكل آمن بين المتصفح أو كمبيوتر المستخدم والخادم أو موقع الويب."/>
        <meta name="keywords" content="شهادة SSL، أمان وحماية الموقع، تأمين موقع الانترنت"/>
      </Head>


      <PageBanner
        pageTitle="  شهادات SSL  "
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
