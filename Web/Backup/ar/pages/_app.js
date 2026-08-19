import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../styles/style.css";
import "../styles/responsive.css";
// Global RTL styles
import "../styles/rtl.css";
import "../styles/homepage-sections.css";
// TEMPORARY — neutral styling for the Stage-2.5 functional-UX prototypes
// (SEO, Digital Marketing, Training). Delete this import together with
// styles/ux-prototype.css when those pages enter the visual design phase.
import "../styles/ux-prototype.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
       
        <title> كنوز الجيل للتكنولوجيا المتطورة (KATECHS): رواد استضافة وتصميم مواقع الكترونية </title>
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
