import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Hero from "../../../components/HostingServices/Hero";
import ServicesStyleTwo from "../../../components/Services/ServicesStyleTwo";
import Pricing from "../../../components/HostingServices/Pricing";
import CpanelBanner from "../../../components/HostingServices/CpanelBanner";
import FeatureGrid from "../../../components/HostingServices/FeatureGrid";
import Footer from "../../../components/Layouts/Footer";

export default function Services2Page() {
  return (
    <>
      <Navbar theme="navy" />

      {/* Hidden for now */}
      {/* <Breadcrumb
        items={[
          { label: "الرئيسية", href: "/", icon: "bx bx-home-alt" },
          { label: "دومين و استضافة", icon: "bx bx-server" },
        ]}
      /> */}

      <Hero />

      {/* Hidden for now — استضافة سريعة وموثوقة */}
      {/* <ServicesStyleTwo /> */}

      <div id="pricing">
        <Pricing />
      </div>

      <CpanelBanner />

      <FeatureGrid />

      <Footer />
    </>
  );
}
