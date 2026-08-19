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

      <NewsDetailsContent />
     

      <Footer />
    </>
  );
}
