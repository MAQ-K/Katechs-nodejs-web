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

      <NewsGridCard />

      <Footer />
    </>
  );
}
