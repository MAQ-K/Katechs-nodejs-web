import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Hero from "../../../components/AppDev/Hero";
import TechMarquee from "../../../components/AppDev/TechMarquee";
import Platforms from "../../../components/AppDev/Platforms";
import Process from "../../../components/AppDev/Process";
import Stats from "../../../components/AppDev/Stats";
import Pricing from "../../../components/AppDev/Pricing";
import Features from "../../../components/AppDev/Features";
import Faq from "../../../components/AppDev/Faq";
import Footer from "../../../components/Layouts/Footer";

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <TechMarquee />

      <Platforms />

      <Process />

      <Stats />

      <Pricing />

      <Features />

      <Faq />

      <Footer />
    </>
  );
}
