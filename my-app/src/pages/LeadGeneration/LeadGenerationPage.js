import Navbar from "../../Components/Navbar.js";
import Cursor from "../../Components/Cursor.js";
import Scene3 from "../../Components/Scene3.js";
import Contact from "../../Components/Contact.js";
import Footer from "../../Components/Footer.js";

import ServiceSplitSection from "../../Components/ServicePage/ServiceSplitSection.js";
import ServiceCapabilities from "../../Components/ServicePage/ServiceCapabilities.js";
import ServiceProcess from "../../Components/ServicePage/ServiceProcess.js";
import ServicePackages from "../../Components/ServicePage/ServicePackages.js";
import ServiceFAQ from "../../Components/ServicePage/ServiceFAQ.js";
import ServiceFinalCTA from "../../Components/ServicePage/ServiceFinalCTA.js";
import useServicePageAnimations from "../../Components/ServicePage/useServicePageAnimations.js";

import {
  LeadGenerationIllustration,
  LeadGenerationWhyIllustration,
  LeadGenerationProcessIllustration,
  LeadGenerationFaqIllustration
} from "./illustrations/LeadGenerationIllustrations.js";

import leadGenerationData from "./leadGeneration.data.js";

import "../../Components/ServicePage/ServicePage.css";

export default function LeadGenerationPage() {
  useServicePageAnimations(".lead-service-page");

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = leadGenerationData;

  return (
    <main
      className="service-page lead-service-page"
      data-service="lead"
    >
      <Cursor />
      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="corporate"
      />

      <ServiceSplitSection
        sectionId="lead-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <LeadGenerationIllustration />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="lead-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <LeadGenerationWhyIllustration />
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
          <LeadGenerationProcessIllustration />
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
          <LeadGenerationFaqIllustration />
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
