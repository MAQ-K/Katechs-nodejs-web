import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

export default function UsefulArticlesPage() {
  return (
    <>
      <Head>
        <title>مقالات مفيدة</title>
      </Head>

      <Navbar />

      <PageBanner pageTitle="مقالات مفيدة" homePageUrl="/" />

      <News />

      <Footer />
    </>
  );
}
