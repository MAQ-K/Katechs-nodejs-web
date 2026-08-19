import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Hero from "../../../components/AppDev/Hero";
import Platforms from "../../../components/AppDev/Platforms";
import Process from "../../../components/AppDev/Process";
import Pricing from "../../../components/AppDev/Pricing";
import FeaturesPlaceholder from "../../../components/AppDev/FeaturesPlaceholder";
import FaqPlaceholder from "../../../components/AppDev/FaqPlaceholder";
import Footer from "../../../components/Layouts/Footer";

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Platforms />

      <Process />

      <Pricing />

      <FeaturesPlaceholder />

      <FaqPlaceholder />

      <Footer />
    </>
  );
}
