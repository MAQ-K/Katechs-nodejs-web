import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import CTA from "../../../components/Common/CTA";
import Footer from "../../../components/Layouts/Footer";

export default function CaseStudiesDetailsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies Details"
      />

      {/* `.case-details-page` — see "=== SUB-PAGE: /case-studies-details ===" in
          styles/style.scss. `.service-details-wrap` gets rtl.css overrides too;
          scoped for the same reason as every wrapper on this pass. `Common/CTA`
          is used only here, so it's the one shared component this pass restyles
          without needing the scope for isolation — kept scoped anyway since the
          rtl.css tie is still live. */}
      <div className="case-details-page">
        <CaseStudiesDetailsContent />

        <CTA />
      </div>

      <Footer />
    </>
  );
}
