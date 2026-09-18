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

  SocialMediaManagementWhyIllustration,
  SocialMediaManagementProcessIllustration,
  SocialMediaManagementFaqIllustration
} from "./illustrations/SocialMediaManagementIllustrations.js";

import socialMediaData from "./socialMediaManagement.data.js";

import "../../Components/ServicePage/ServicePage.css";

export default function SocialMediaManagementPage() {
  useServicePageAnimations(".social-service-page");

  const {
    hero,
    intro,
    whyChoose,
    capabilities,
    process,
    packages,
    faq
  } = socialMediaData;

  return (
    <main
      className="service-page social-service-page"
      data-service="social"
    >
      <Cursor />
      <Navbar />

      <Scene3
        title={hero.title}
        description={hero.description}
        variant="corporate"
      />

      <ServiceSplitSection
        sectionId="social-intro"
        title={intro.title}
        description={intro.description}
        button={intro.button}
        illustration={
          <MarketingImageVisual
            src="https://images.unsplash.com/photo-1769596722257-282ec3fe8594?auto=format&fit=crop&fm=jpg&q=82&w=1800"
            alt="Laptop showing a social media content calendar"
            eyebrow="Content planning"
          />
        }
        imageFirstMobile
      />

      <ServiceSplitSection
        sectionId="social-why"
        title={whyChoose.title}
        description={whyChoose.description}
        bullets={whyChoose.bullets}
        illustration={
          <SocialMediaManagementWhyIllustration />
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
          <SocialMediaManagementProcessIllustration />
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
          <SocialMediaManagementFaqIllustration />
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
