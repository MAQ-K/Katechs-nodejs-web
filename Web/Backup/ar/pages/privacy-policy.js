import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="الشروط والاحكام"
        homePageUrl="/"
      
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
