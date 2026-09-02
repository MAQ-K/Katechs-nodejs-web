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
import { useRouter } from "next/router";
import GoTop from "../components/Shared/GoTop";
import SmoothScrollGlobal from "../components/Shared/SmoothScrollGlobal";
import WhatsAppFab from "../components/Shared/WhatsAppFab";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // /services mounts its own useSmoothScroll with the area-snap enabled, so
  // the global one must not also be live there: two instances would both
  // preventDefault the same wheel event and both write window.scrollTo,
  // fighting each other every frame. pathname, not asPath — asPath carries the
  // trailing slash and any #hash, and would stop matching on a deep link.
  const pageOwnsScroll = router.pathname === "/services";

  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
       
        <title> كنوز الجيل للتكنولوجيا المتطورة (KATECHS): رواد استضافة وتصميم مواقع الكترونية </title>
      </Head>

      {/* The sliding scroll, everywhere except the page that brings its own. */}
      {!pageOwnsScroll && <SmoothScrollGlobal />}

      <Component {...pageProps} />

      {/* Floating contact + back to top. Mounted here so they exist on every
          page — the WhatsApp button used to be pasted into seven page files and
          missing from the other thirty-five. */}
      <WhatsAppFab />

      <GoTop />
    </>
  );
}

export default MyApp;
