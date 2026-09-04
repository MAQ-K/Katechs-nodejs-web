import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Hero from "../../components/Training/Hero";
import Stats from "../../components/Training/Stats";
import Catalog from "../../components/Training/Catalog";
import Formats from "../../components/Training/Formats";
import LearningPath from "../../components/Training/LearningPath";
import Instructors from "../../components/Training/Instructors";
import Outcomes from "../../components/Training/Outcomes";
import Certificate from "../../components/Training/Certificate";
import Schedule from "../../components/Training/Schedule";
import Pricing from "../../components/Training/Pricing";
import Faq from "../../components/Training/Faq";
import CtaBand from "../../components/Training/CtaBand";
import Footer from "../../components/Layouts/Footer";

export default function TrainingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Catalog />

      <Formats />

      <LearningPath />

      <Instructors />

      <Outcomes />

      <Certificate />

      <Schedule />

      <Pricing />

      <Faq />

      <CtaBand />

      <Footer />
    </>
  );
}

// Page hidden for now (user request, 2026-09-04: "hide whole page for now").
// notFound routes this to pages/404.js instead of rendering the page below —
// reversible by deleting this export alone. The nav link is also commented
// out in components/Layouts/Navbar.js so the route isn't discoverable, but a
// direct visit to /training/ still has to 404 on its own; this is what does
// that. All imports/JSX above are untouched and come straight back once this
// is removed.
export async function getStaticProps() {
  return { notFound: true };
}
