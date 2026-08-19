import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleTwo from "../../../components/Services/ServicesStyleTwo";
import PricingVpsHosting from "/components/PricingVpsHosting/PricingStyleOne";
import FeatureHost from "/components/Services/hostingFeature";
import FaqContent from "/components/Faq/FaqContent";
import Footer from "../../../components/Layouts/Footer";

export default function Services2Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="سيرفرات VPS"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      <ServicesStyleTwo />

      <PricingVpsHosting />
      

      <FaqContent />

      <FeatureHost />

  


      <Footer />
    </>
  );
}
