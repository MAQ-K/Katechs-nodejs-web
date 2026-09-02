import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhyChooseUs from "../components/AboutOne/WhyChooseUs";
import Testimonials from "../components/Common/Testimonials";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { Fragment } from 'react'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <Head>
        <title>من نحن: خدمات تصميم المواقع الإلكترونية</title>
        <meta name="description" content="تقديم أفضل خدمات تصميم المواقع الإلكترونية بأفضل الأسعار مع اتباع الأساليب الحديثة"/>
        <meta property="og:title" content="خدمات تصميم المواقع الإلكترونية" />
      </Head>

      <PageBanner
        pageTitle="من نحن"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      <About />

      <MakeYourBusiness />

      <WhyChooseUs />

      <Testimonials />

      

      

   

   {/*    <a href="https://form.jotform.com/241284812756562" className="float" target="_blank"  rel="noreferrer">
      طلب استشاره
      </a> */}

      <Footer />
    </>
  );
}
