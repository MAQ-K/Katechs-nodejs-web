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
