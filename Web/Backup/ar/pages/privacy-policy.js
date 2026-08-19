import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";
import Image from "next/image";
import whatsimg from "../public/images/whatsapp.png";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="الشروط والاحكام"
        homePageUrl="/"
      
      />

      <PrivacyPolicyContent />

      <a href="https://wa.me/+201555085828" className="floatwhats" target="_blank" rel="noreferrer">
      <Image src={whatsimg} className="my-floatwhats" alt="Image" />
      </a>

      <Footer />
    </>
  );
}
