import Navbar from "../Components/Navbar.js";
import Cursor from "../Components/Cursor.js";
import Scene3 from "../Components/Scene3.js";
import Contact from "../Components/Contact.js";
import Footer from "../Components/Footer.js";

import ServicePackages from "../Components/ServicePage/ServicePackages.js";
import ServiceFAQ from "../Components/ServicePage/ServiceFAQ.js";
import ServiceFinalCTA from "../Components/ServicePage/ServiceFinalCTA.js";

import PackagesIntro, {
  PackagesInfrastructureVisual
} from "../Components/Packages/PackagesIntro.js";

import PackagesOverview from "../Components/Packages/PackagesOverview.js";
import PackagesWhy from "../Components/Packages/PackagesWhy.js";

import "../Components/ServicePage/ServicePage.css";
import "./Packages.css";

const PACKAGE_PLANS = [
  {
    name: "Launch Package",
    tone: "pink",
    features: [
      {
        title: "Business Website",
        text:
          "A responsive company website designed around your brand, services and business goals."
      },
      {
        title: "UI/UX Foundation",
        text:
          "Clean responsive interfaces built around a consistent visual experience."
      },
      {
        title: "Lead Capture",
        text:
          "Conversion-focused forms and customer enquiry paths."
      },
      {
        title: "SEO Foundation",
        text:
          "Core technical and on-page setup for a search-ready foundation."
      },
      {
        title: "Production Deployment",
        text:
          "Production configuration and deployment support."
      }
    ]
  },
  {
    name: "Growth Package",
    tone: "purple",
    features: [
      {
        title: "Custom Web Experience",
        text:
          "An advanced web platform structured around your business workflows."
      },
      {
        title: "Content Management",
        text:
          "Tools for managing important website and platform content."
      },
      {
        title: "API Integrations",
        text:
          "Connections with relevant third-party services and business systems."
      },
      {
        title: "Conversion Strategy",
        text:
          "User journeys designed around meaningful customer actions."
      },
      {
        title: "Analytics Setup",
        text:
          "Analytics-ready implementation for understanding user behaviour."
      }
    ]
  },
  {
    name: "Product Package",
    tone: "purple",
    features: [
      {
        title: "Web App or SaaS",
        text:
          "A scalable digital product designed around real users and workflows."
      },
      {
        title: "Authentication & Roles",
        text:
          "Secure account flows and role-based access where required."
      },
      {
        title: "Backend & Database",
        text:
          "Structured APIs, database architecture and application logic."
      },
      {
        title: "AI & Automation",
        text:
          "Intelligent integrations and automation where they create practical value."
      },
      {
        title: "Production Architecture",
        text:
          "Maintainable architecture prepared for future product growth."
      }
    ]
  },
  {
    name: "Custom Engagement",
    tone: "pink",
    features: [
      {
        title: "Custom Software Scope",
        text:
          "A tailored engagement for complex platforms and software systems."
      },
      {
        title: "Advanced Integrations",
        text:
          "APIs, internal systems, payments and operational platform integrations."
      },
      {
        title: "Multi-Role Platforms",
        text:
          "Dashboards and portals designed for multiple users and permissions."
      },
      {
        title: "Cloud & Deployment",
        text:
          "Infrastructure planning aligned with the technical requirements."
      },
      {
        title: "Flexible Delivery",
        text:
          "Project phases defined around discovery and actual requirements."
      }
    ]
  }
];

const PACKAGE_FAQS = [
  {
    question:
      "Are SyncSolvo packages fixed or can they be customized?",
    answer:
      "Our packages provide a clear starting point. The final scope can be adjusted according to your requirements, integrations, features and business priorities."
  },
  {
    question:
      "How do I know which package is right for my project?",
    answer:
      "The right engagement depends on what you are building, its technical complexity, integrations and your current business stage. We review these requirements before finalizing the scope."
  },
  {
    question:
      "Can a package include AI, automation or mobile development?",
    answer:
      "Yes. AI integrations, automation, mobile applications and other specialized capabilities can be included when relevant to the project."
  },
  {
    question:
      "Can we start small and expand later?",
    answer:
      "Yes. A project can begin with a focused scope and expand into additional features, integrations or future phases."
  },
  {
    question:
      "Are hosting, domains and third-party services included?",
    answer:
      "Third-party costs such as domains, hosting, paid APIs and external platforms are normally handled separately unless specifically included in the agreed scope."
  },
  {
    question:
      "What happens after the project launches?",
    answer:
      "Post-launch requirements can include maintenance, improvements, additional features or a new development phase depending on the project."
  }
];

export default function Packages() {
  return (
    <div className="packages-page">
      <Cursor />

      <Navbar />

      <main>
        <Scene3
          title="Technology Packages Engineered for Growth"
          variant="corporate"
        />

        <PackagesIntro />

        <PackagesOverview />

        <PackagesWhy />

        <div
          id="packages"
          className="packages-plans-wrapper"
        >
          <ServicePackages
            title="Choose the Right Starting Point"
            plans={PACKAGE_PLANS}
          />
        </div>

        <ServiceFAQ
          title="Packages FAQs"
          items={PACKAGE_FAQS}
          illustration={
            <PackagesInfrastructureVisual />
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
          contextLabel="PACKAGE / PROJECT TYPE"
          contextPlaceholder="Enter Your Package or Project Type"
          submitLabel="Contact Us Now"
          submitIcon="phone"
        />

        <ServiceFinalCTA />
      </main>

      <Footer />
    </div>
  );
}