import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import LoginForm from "../../components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      {/* Translated to Arabic 2026-09-08 (user: "fix layout" on a page that
          was, along with its form below, entirely in English on an Arabic RTL
          site — flagged but deliberately left alone by an earlier pass, see
          the NOTE above .user-area-all-style in styles/style.scss). */}
      <PageBanner
        pageTitle="تسجيل الدخول"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="تسجيل الدخول"
      />

      <LoginForm />

      <Footer />
    </>
  );
}
