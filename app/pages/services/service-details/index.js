import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/hostingDetails/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function ServiceDetailsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
