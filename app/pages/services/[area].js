import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import HeroBuildSmarter from "../../components/Sections/HeroBuildSmarter";
import AreaOverview from "../../components/Services/ServiceArea/Overview";
import AreaPlans from "../../components/Services/ServiceArea/Plans";
import AreaFaq from "../../components/Services/ServiceArea/Faq";
import AreaCta from "../../components/Services/ServiceArea/Cta";
import EcomIntro from "../../components/Services/Ecommerce/Intro";
import EcomCapabilities from "../../components/Services/Ecommerce/Capabilities";
import StorePlans from "../../components/Services/Ecommerce/StorePlans";
import {
  heroMedia,
  serviceNav,
  businessWebsites,
  wordpress,
  ecommerce,
} from "../../data/services/data";

// One page per web service, split off the /services hub (2026-10-15). The hub
// keeps the brief; the full detail (plans, FAQ, store journey) lives here.
// Consulting has no page on purpose — it stays whole on the hub (user).
// Static folders under pages/services/ win over this route, so it only ever
// catches the slugs below; anything else 404s via fallback:false.
const SERVICES = {
  "custom-website": { nav: "nav-1", data: businessWebsites, kind: "standard" },
  wordpress: { nav: "nav-2", data: wordpress, kind: "standard" },
  "online-store": { nav: "nav-3", data: ecommerce, kind: "store" },
};

export default function WebServicePage({ slug }) {
  const router = useRouter();
  const { data, kind, nav } = SERVICES[slug];
  const item = serviceNav.find((n) => n.id === nav);

  return (
    <>
      <Head>
        <title>{`${item.title} | كاتكس`}</title>
        <meta name="description" content={item.brief} />
      </Head>

      <Navbar theme="navy" />

      <HeroBuildSmarter
        badgeText="خدمات تصميم المواقع"
        headlineBold={item.title}
        subtitle={item.brief}
        ctaText="اطلب عرض سعر"
        ctaHref="/website-order"
        onCtaClick={(e) => {
          e.preventDefault();
          router.push("/website-order");
        }}
        backgroundImage={heroMedia.type === "image" ? heroMedia.src : null}
        bottomRadius="32px"
        minHeight="60vh"
        overlay={0.45}
      />

      <AreaOverview area={data} id="overview" />

      {kind === "standard" && (
        <>
          <AreaPlans area={data} id="plans" />
          <AreaFaq area={data} id="faq" />
        </>
      )}

      {kind === "store" && (
        <>
          <EcomIntro area={data} id="journey" />
          <EcomCapabilities area={data} id="capabilities" />
          <StorePlans area={data} id="plans" />
          <AreaCta cta={data.cta} id="cta" />
        </>
      )}

      <Footer />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: Object.keys(SERVICES).map((area) => ({ params: { area } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.area } };
}
