import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import Image from "next/image";
import whatsimg from "../public/images/whatsapp.png";

export default function UsefulArticlesPage() {
  return (
    <>
      <Head>
        <title>مقالات مفيدة</title>
      </Head>

      <Navbar />

      <PageBanner pageTitle="مقالات مفيدة" homePageUrl="/" />

      <News />

      <a href="https://wa.me/+201555085828" className="floatwhats" target="_blank" rel="noreferrer">
        <Image src={whatsimg} className="my-floatwhats" alt="Image" />
      </a>

      <Footer />
    </>
  );
}
