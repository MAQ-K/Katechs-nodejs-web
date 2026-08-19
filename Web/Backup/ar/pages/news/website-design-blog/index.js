import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/website-blog-Content";
import Footer from "../../../components/Layouts/Footer";

export default function NewsDetailsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="  تصميم موقع إلكتروني "
        homePageUrl="/"
        homePageText=""
        activePageText=" "
      />

      <NewsDetailsContent />
     

      <Footer />
    </>
  );
}
