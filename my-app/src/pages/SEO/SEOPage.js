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
import MarketingImageVisual from "../../Components/MarketingPage/MarketingImageVisual.js";

import {

  SEOWhyIllustration,
  SEOProcessIllustration,
  SEOFaqIllustration
} from "./illustrations/SEOIllustrations.js";

import seoData from "./seo.data.js";

import "../../Components/ServicePage/ServicePage.css";

export default function SEOPage() {
  useServicePageAnimations(".seo-service-page");

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = seoData;

  return (
    <main
      className="service-page seo-service-page"
      data-service="seo"
    >
      <Cursor />
      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="corporate"
      />

      <ServiceSplitSection
        sectionId="seo-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <MarketingImageVisual
            src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055?auto=format&fit=crop&fm=jpg&q=82&w=1800"
            alt="Analytics dashboard on a computer screen"
            eyebrow="Search performance"
          />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="seo-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <SEOWhyIllustration />
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
          <SEOProcessIllustration />
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
          <SEOFaqIllustration />
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
