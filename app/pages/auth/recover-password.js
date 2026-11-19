import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import RecoverPasswordForm from "../../components/Auth/RecoverPasswordForm";

export default function RecoverPasswordPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Recover Password"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Recover Password"
      />

      <RecoverPasswordForm />

      <Footer />
    </>
  );
}
