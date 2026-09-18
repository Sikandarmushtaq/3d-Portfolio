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
  EducationPlatformIllustration,
  EducationPortalIllustration,
  EducationProcessIllustration,
  EducationFaqIllustration
} from "./illustrations/EducationTechnologyIllustrations";

import educationTechnologyData from "./educationTechnology.data";

import "../../Components/ServicePage/ServicePage.css";

export default function EducationTechnologyPage() {
  useServicePageAnimations(
    ".education-technology-service-page"
  );

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = educationTechnologyData;

  return (
    <main
      className="service-page education-technology-service-page"
      data-service="education-technology"
    >
      <Cursor />

      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="development"
      />

      <ServiceSplitSection
        sectionId="education-technology-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <EducationPlatformIllustration />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="education-technology-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <EducationPortalIllustration />
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
          <EducationProcessIllustration />
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
          <EducationFaqIllustration />
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