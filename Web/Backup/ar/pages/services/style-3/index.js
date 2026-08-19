import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import FeatureHost from "../../../components/Services/hostingFeature";
import Footer from "../../../components/Layouts/Footer";

export default function Services3Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Three"
      />

      <FeatureHost />

      <Footer />
    </>
  );
}
