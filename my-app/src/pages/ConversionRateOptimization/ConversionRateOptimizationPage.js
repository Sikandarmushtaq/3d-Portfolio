import Navbar from "../../Components/Navbar.js";
import Cursor from "../../Components/Cursor.js";
import Scene3 from "../../Components/Scene3.jsx";
import Contact from "../../Components/Contact.jsx";
import Footer from "../../Components/Footer.js";

import ServiceSplitSection from "../../Components/ServicePage/ServiceSplitSection.js";
import ServiceCapabilities from "../../Components/ServicePage/ServiceCapabilities.js";
import ServiceProcess from "../../Components/ServicePage/ServiceProcess.js";
import ServicePackages from "../../Components/ServicePage/ServicePackages.js";
import ServiceFAQ from "../../Components/ServicePage/ServiceFAQ.js";
import ServiceFinalCTA from "../../Components/ServicePage/ServiceFinalCTA.js";
import useServicePageAnimations from "../../Components/ServicePage/useServicePageAnimations.js";
import MarketingImageVisual from "../../Components/MarketingPage/MarketingImageVisual.jsx";

import {

  ConversionRateOptimizationWhyIllustration,
  ConversionRateOptimizationProcessIllustration,
  ConversionRateOptimizationFaqIllustration
} from "./illustrations/ConversionRateOptimizationIllustrations.jsx";

import croData from "./conversionRateOptimization.data.js";

import "../../Components/ServicePage/ServicePage.css";

export default function ConversionRateOptimizationPage() {
  useServicePageAnimations(".cro-service-page");

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = croData;

  return (
    <main
      className="service-page cro-service-page"
      data-service="cro"
    >
      <Cursor />
      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="corporate"
      />

      <ServiceSplitSection
        sectionId="cro-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <MarketingImageVisual
            src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055?auto=format&fit=crop&fm=jpg&q=82&w=1800"
            alt="Analytics retention dashboard on a screen"
            eyebrow="Conversion analytics"
          />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="cro-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <ConversionRateOptimizationWhyIllustration />
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
          <ConversionRateOptimizationProcessIllustration />
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
          <ConversionRateOptimizationFaqIllustration />
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
