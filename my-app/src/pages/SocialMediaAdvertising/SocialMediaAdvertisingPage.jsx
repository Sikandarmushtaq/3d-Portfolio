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

import {
  SocialMediaAdvertisingIllustration,
  SocialMediaAdvertisingWhyIllustration,
  SocialMediaAdvertisingProcessIllustration,
  SocialMediaAdvertisingFaqIllustration
} from "./illustrations/SocialMediaAdvertisingIllustrations";

import socialAdsData from "./socialMediaAdvertising.data.js";

import "../../Components/ServicePage/ServicePage.css";

export default function SocialMediaAdvertisingPage() {
  useServicePageAnimations(".socialAds-service-page");

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = socialAdsData;

  return (
    <main
      className="service-page socialAds-service-page"
      data-service="socialAds"
    >
      <Cursor />
      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="corporate"
      />

      <ServiceSplitSection
        sectionId="socialAds-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <SocialMediaAdvertisingIllustration />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="socialAds-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <SocialMediaAdvertisingWhyIllustration />
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
          <SocialMediaAdvertisingProcessIllustration />
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
          <SocialMediaAdvertisingFaqIllustration />
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
