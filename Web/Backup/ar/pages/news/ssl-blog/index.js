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

      <NewsDetailsContent />
     

      <Footer />
    </>
  );
}
