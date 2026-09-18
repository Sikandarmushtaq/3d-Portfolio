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
  EnterprisePlatformIllustration,
  EnterpriseOperationsIllustration,
  EnterpriseProcessIllustration,
  EnterpriseFaqIllustration
} from "./illustrations/EnterpriseSoftwareIllustrations";

import enterpriseSoftwareData from "./enterpriseSoftware.data";

import "../../Components/ServicePage/ServicePage.css";

export default function EnterpriseSoftwarePage() {
  useServicePageAnimations(
    ".enterprise-software-service-page"
  );

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = enterpriseSoftwareData;

  return (
    <main
      className="service-page enterprise-software-service-page"
      data-service="enterprise-software"
    >
      <Cursor />

      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="development"
      />

      <ServiceSplitSection
        sectionId="enterprise-software-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <EnterprisePlatformIllustration />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="enterprise-software-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <EnterpriseOperationsIllustration />
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
          <EnterpriseProcessIllustration />
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
          <EnterpriseFaqIllustration />
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