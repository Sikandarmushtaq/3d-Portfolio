import Navbar from "../../Components/Navbar";
import Cursor from "../../Components/Cursor";
import Scene3 from "../../Components/Scene3";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

import ServiceSplitSection from "../../Components/ServicePage/ServiceSplitSection";
import ServiceCapabilities from "../../Components/ServicePage/ServiceCapabilities";
import ServiceProcess from "../../Components/ServicePage/ServiceProcess";
import ServicePackages from "../../Components/ServicePage/ServicePackages";
import ServiceFAQ from "../../Components/ServicePage/ServiceFAQ";
import ServiceFinalCTA from "../../Components/ServicePage/ServiceFinalCTA";
import useServicePageAnimations from "../../Components/ServicePage/useServicePageAnimations";
import MarketingImageVisual from "../../Components/MarketingPage/MarketingImageVisual";

import {
  PPCAdsIllustration,
  PPCAdsWhyIllustration,
  PPCAdsProcessIllustration,
  PPCAdsFaqIllustration
} from "./illustrations/PPCAdsIllustrations";

import ppcData from "./ppcAds.data.js";

import "../../Components/ServicePage/ServicePage.css";

export default function PPCAdsPage() {
  useServicePageAnimations(".ppc-service-page");

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = ppcData;

  return (
    <main
      className="service-page ppc-service-page"
      data-service="ppc"
    >
      <Cursor />
      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="corporate"
      />

      <ServiceSplitSection
        sectionId="ppc-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <MarketingImageVisual
            src="https://images.unsplash.com/photo-1784729553968-07da5d7b7c99?auto=format&fit=crop&fm=jpg&q=82&w=1800"
            alt="Paid media analytics displayed on a laptop"
            eyebrow="Campaign analytics"
          />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="ppc-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <PPCAdsWhyIllustration />
        }
        reverse
        imageFirstMobile
      />

      <ServiceCapabilities
        title={capabilities.title}
        items={capabilities.items}
      />

      <ServiceProcess
        title={process.title}
        description={process.description}
        steps={process.steps}
        button={process.button}
        illustration={
          <PPCAdsProcessIllustration />
        }
      />

      <ServicePackages
        title={packages.title}
        plans={packages.plans}
      />

      <ServiceFAQ
        title={faq.title}
        items={faq.items}
        illustration={
          <PPCAdsFaqIllustration />
        }
      />

      <Contact
        showNavbar={false}
        showCursor={false}
        showMarquee={false}
        showLeftPanel
        twoColumnInputs={false}
        variant="service"
        minHeight="auto"
        maxWidth="1240px"
        paddingTop={72}
        paddingY={88}
        gap={80}
        inputPadding={17}
        fontSize={0.92}
        contextLabel="SERVICE TITLE"
        contextPlaceholder="Enter Your Service Title"
        submitLabel="Contact Us Now"
        submitIcon="phone"
      />

      <ServiceFinalCTA />
      <Footer />
    </main>
  );
}
