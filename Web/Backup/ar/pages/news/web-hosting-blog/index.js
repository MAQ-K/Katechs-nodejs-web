import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/hosting-blog-Content";
import Footer from "../../../components/Layouts/Footer";
import Head from "next/head";

export default function NewsDetailsPage() {
  return (
    <>

  

    <Head>
        <title> استضافة المواقع </title>
        <meta name="description" content="تُعدّ استضافة المواقع أحد الجوانب الأساسية لنجاح أي موقع على الويب. يوفر استضافة المواقع البنية التحتية اللازمة لجعل المواقع متاحة على الإنترنت"/>
        <meta name="keywords" content="استضافة المواقع، استضافة رخيصه"/>
    </Head>


      <Navbar />

      <PageBanner
        pageTitle="   استضافة المواقع"
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
