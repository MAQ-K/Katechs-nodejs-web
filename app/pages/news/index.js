import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NewsGridCard from "../../components/News/NewsGridCard";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

export default function NewsGridPage() {
  return (
    <>

    <Head>
      <title>تصميم موقع الكتروني</title>
      <meta name="description" content="يمكن لتصميم موقع إلكتروني جذاب وفعال أن يكون عاملًا رئيسيًا في جذب الزوار وتحويلهم إلى عملاء"/>
      <meta name="keywords" content="تكلفة تصميم الموقع الإلكتروني، تصميم موقع إلكتروني "/>
    </Head>


      <Navbar />

      <PageBanner
        pageTitle="المدونه"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      {/* `.news-grid-page` — see "=== SUB-PAGE: /news + /useful-articles ===" in
          styles/style.scss. Scoped for the same two reasons as .about-page:
          rtl.css sets flat `.single-news` rules after style.css loads, and
          this wrapper's specificity beats it regardless of load order. */}
      <div className="news-grid-page">
        <NewsGridCard />
      </div>

      <Footer />
    </>
  );
}
