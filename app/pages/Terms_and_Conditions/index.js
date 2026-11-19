import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NewsDetailsContent from "../../components/News/Terms_and_Conditions";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

export default function NewsDetailsPage() {
  return (
    <>

    <Head>
        <title> الشروط والاحكام</title>
        <meta name="description" content="تُعتبر حماية شبكات الشركة أمرًا حيويًا لضمان سلامة البيانات والمعلومات الحساسة وضمان استمرارية العمليات التجارية"/>
        <meta name="keywords" content="الأمن السيبراني، حماية الشبكات، حماية البيانات، أمن وحماية الشبكات" />
    </Head>



      <Navbar />

      <PageBanner
        pageTitle="  الشروط والاحكام "
        homePageUrl="/"
        homePageText=""
        activePageText=" "
      />

      <NewsDetailsContent />
     

      <Footer />
    </>
  );
}
