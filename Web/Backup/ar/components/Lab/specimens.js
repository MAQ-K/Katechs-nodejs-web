// The component gallery's registry.
//
// Explicit on purpose — a glob would drag every legacy template component into
// the bundle and half of them need props their page supplies. Everything listed
// here has been checked to render standalone (no required props).
//
// Adding a component? Add it here in the same commit you add its row to
// brain/components/REGISTRY.md. The gallery reads that file for status/data.

import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

import HostingHero from "../HostingServices/Hero";
import HostingPricing from "../HostingServices/Pricing";
import CpanelBanner from "../HostingServices/CpanelBanner";
import FeatureGrid from "../HostingServices/FeatureGrid";

import EmailsHero from "../Emails/Hero";
import EmailsPricingFlow from "../Emails/PricingFlow";
import EmailsFeatures from "../Emails/Features";
import EmailsFaq from "../Emails/Faq";

import AppHero from "../AppDev/Hero";
import AppStats from "../AppDev/Stats";
import AppPlatforms from "../AppDev/Platforms";
import AppProcess from "../AppDev/Process";
import AppFeatures from "../AppDev/Features";
import AppPricing from "../AppDev/Pricing";
import AppFaq from "../AppDev/Faq";

import SeoHero from "../Seo/Hero";
import SeoAuditForm from "../Seo/AuditForm";
import SeoResults from "../Seo/Results";
import SeoPillars from "../Seo/Pillars";
import SeoAiSearch from "../Seo/AiSearch";
import SeoProcess from "../Seo/Process";
import SeoCaseStudies from "../Seo/CaseStudies";
import SeoReporting from "../Seo/Reporting";
import SeoPricing from "../Seo/Pricing";
import SeoFaq from "../Seo/Faq";
import SeoCtaBand from "../Seo/CtaBand";

import DmHero from "../DigitalMarketing/Hero";
import DmTrustStrip from "../DigitalMarketing/TrustStrip";
import DmChannels from "../DigitalMarketing/Channels";
import DmStrategy from "../DigitalMarketing/Strategy";
import DmSocialMedia from "../DigitalMarketing/SocialMedia";
import DmWhyUs from "../DigitalMarketing/WhyUs";
import DmResults from "../DigitalMarketing/Results";
import DmReporting from "../DigitalMarketing/Reporting";
import DmPricing from "../DigitalMarketing/Pricing";
import DmFaq from "../DigitalMarketing/Faq";
import DmCtaBand from "../DigitalMarketing/CtaBand";

import TrHero from "../Training/Hero";
import TrStats from "../Training/Stats";
import TrCatalog from "../Training/Catalog";
import TrFormats from "../Training/Formats";
import TrLearningPath from "../Training/LearningPath";
import TrInstructors from "../Training/Instructors";
import TrOutcomes from "../Training/Outcomes";
import TrCertificate from "../Training/Certificate";
import TrSchedule from "../Training/Schedule";
import TrPricing from "../Training/Pricing";
import TrFaq from "../Training/Faq";
import TrCtaBand from "../Training/CtaBand";

const s = (id, title, path, Component, note) => ({ id, title, path, Component, note });

const SPECIMENS = [
  {
    group: "Shell — shared by every page",
    warn:
      "Manager-gated. Changing these changes the whole site (goal G4 / task T-013). Navbar is rendered with no theme prop here, the same as most pages call it.",
    items: [
      s("navbar", "Navbar", "components/Layouts/Navbar.js", Navbar),
      s("footer", "Footer", "components/Layouts/Footer.js", Footer),
    ],
  },
  {
    group: "Hosting Services — shipped, current direction",
    items: [
      s("hosting-hero", "Hero", "components/HostingServices/Hero.js", HostingHero),
      s("hosting-pricing", "Pricing", "components/HostingServices/Pricing.js", HostingPricing),
      s("hosting-cpanel", "cPanel Banner", "components/HostingServices/CpanelBanner.js", CpanelBanner),
      s("hosting-features", "Feature Grid", "components/HostingServices/FeatureGrid.js", FeatureGrid),
    ],
  },
  {
    group: "Emails — shipped",
    items: [
      s("emails-hero", "Hero", "components/Emails/Hero.js", EmailsHero),
      s("emails-pricingflow", "Option cards + synced tabs", "components/Emails/PricingFlow.js", EmailsPricingFlow),
      s("emails-features", "Features", "components/Emails/Features.js", EmailsFeatures),
      s("emails-faq", "FAQ", "components/Emails/Faq.js", EmailsFaq),
    ],
  },
  {
    group: "App Development",
    items: [
      s("app-hero", "Hero", "components/AppDev/Hero.js", AppHero),
      s("app-stats", "Stats (scroll count-up)", "components/AppDev/Stats.js", AppStats),
      s("app-platforms", "Platforms", "components/AppDev/Platforms.js", AppPlatforms),
      s("app-process", "Process", "components/AppDev/Process.js", AppProcess),
      s("app-features", "Features", "components/AppDev/Features.js", AppFeatures),
      s("app-pricing", "Pricing", "components/AppDev/Pricing.js", AppPricing),
      s("app-faq", "FAQ", "components/AppDev/Faq.js", AppFaq),
    ],
  },
  {
    group: "SEO — rebuild target (T-010 → T-012)",
    warn:
      "UX prototype + an ad-hoc visual pass under the `seo-` prefix. Scheduled for a proper library → implement → animate rebuild.",
    items: [
      s("seo-hero", "Hero", "components/Seo/Hero.js", SeoHero),
      s("seo-audit", "Free audit (lead capture)", "components/Seo/AuditForm.js", SeoAuditForm),
      s("seo-results", "Results", "components/Seo/Results.js", SeoResults),
      s("seo-pillars", "Pillars", "components/Seo/Pillars.js", SeoPillars),
      s("seo-aisearch", "AI search / GEO", "components/Seo/AiSearch.js", SeoAiSearch),
      s("seo-process", "Process", "components/Seo/Process.js", SeoProcess),
      s("seo-cases", "Case studies", "components/Seo/CaseStudies.js", SeoCaseStudies),
      s("seo-reporting", "Reporting", "components/Seo/Reporting.js", SeoReporting),
      s("seo-pricing", "Pricing", "components/Seo/Pricing.js", SeoPricing),
      s("seo-faq", "FAQ", "components/Seo/Faq.js", SeoFaq),
      s("seo-cta", "CTA band", "components/Seo/CtaBand.js", SeoCtaBand),
    ],
  },
  {
    group: "Digital Marketing — rebuild target (T-010 → T-012)",
    items: [
      s("dm-hero", "Hero", "components/DigitalMarketing/Hero.js", DmHero),
      s("dm-trust", "Trust strip", "components/DigitalMarketing/TrustStrip.js", DmTrustStrip),
      s("dm-channels", "Channels", "components/DigitalMarketing/Channels.js", DmChannels),
      s("dm-strategy", "Strategy", "components/DigitalMarketing/Strategy.js", DmStrategy),
      s("dm-social", "Social media", "components/DigitalMarketing/SocialMedia.js", DmSocialMedia),
      s("dm-whyus", "Why us", "components/DigitalMarketing/WhyUs.js", DmWhyUs),
      s("dm-results", "Results", "components/DigitalMarketing/Results.js", DmResults),
      s("dm-reporting", "Reporting", "components/DigitalMarketing/Reporting.js", DmReporting),
      s("dm-pricing", "Pricing", "components/DigitalMarketing/Pricing.js", DmPricing),
      s("dm-faq", "FAQ", "components/DigitalMarketing/Faq.js", DmFaq),
      s("dm-cta", "CTA band", "components/DigitalMarketing/CtaBand.js", DmCtaBand),
    ],
  },
  {
    group: "Training — rebuild target (T-010 → T-012)",
    warn: "The only page aimed at individuals rather than businesses — tone can be lighter.",
    items: [
      s("tr-hero", "Hero", "components/Training/Hero.js", TrHero),
      s("tr-stats", "Stats", "components/Training/Stats.js", TrStats),
      s("tr-catalog", "Catalog + filters", "components/Training/Catalog.js", TrCatalog),
      s("tr-formats", "Formats", "components/Training/Formats.js", TrFormats),
      s("tr-path", "Learning path", "components/Training/LearningPath.js", TrLearningPath),
      s("tr-instructors", "Instructors", "components/Training/Instructors.js", TrInstructors),
      s("tr-outcomes", "Outcomes", "components/Training/Outcomes.js", TrOutcomes),
      s("tr-certificate", "Certificate", "components/Training/Certificate.js", TrCertificate),
      s("tr-schedule", "Schedule", "components/Training/Schedule.js", TrSchedule),
      s("tr-pricing", "Pricing", "components/Training/Pricing.js", TrPricing),
      s("tr-faq", "FAQ", "components/Training/Faq.js", TrFaq),
      s("tr-cta", "CTA band", "components/Training/CtaBand.js", TrCtaBand),
    ],
  },
];

export const findSpecimen = (id) => {
  for (const group of SPECIMENS) {
    const hit = group.items.find((item) => item.id === id);
    if (hit) return hit;
  }
  return null;
};

export default SPECIMENS;
