import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/security-blog-Content";
import Footer from "../../../components/Layouts/Footer";
import Head from "next/head";

export default function NewsDetailsPage() {
  return (
    <>

    <Head>
        <title> أمن وحماية الشبكات</title>
        <meta name="description" content="تُعتبر حماية شبكات الشركة أمرًا حيويًا لضمان سلامة البيانات والمعلومات الحساسة وضمان استمرارية العمليات التجارية"/>
        <meta name="keywords" content="الأمن السيبراني، حماية الشبكات، حماية البيانات، أمن وحماية الشبكات" />
    </Head>



      <Navbar />

      <PageBanner
        pageTitle="  أمن وحماية الشبكات  "
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
