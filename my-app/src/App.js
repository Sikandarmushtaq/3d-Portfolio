import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./styles/global.css";

// ==========================================
// MAIN PAGES
// ==========================================

import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import OurTeam from "./pages/OurTeam";

import Contact from "./Components/Contact";

// ==========================================
// EXISTING SERVICES
// ==========================================

import AgenticAI from "./pages/Agentic";
import AIChatbot from "./pages/AiChatB";
import MachineLearning from "./pages/MachineLearning";
import AIIntegrations from "./pages/AIIntegrations";
import ComputerVision from "./pages/ComputerVision";

import MernStack from "./pages/MernStack";

import CustomSoftware from "./pages/CustomSoftware";

import MobileApp from "./pages/Mobile";
import EcommerceWeb from "./pages/Ecommerce";
import AiDev from "./pages/AIDev";

import EducationPlatform from "./pages/EducationPlatfor";
import SaaS from "./pages/SaaSProduct";
import  HealthCare from "./pages/HealthcareTechnology"
import Fintech from "./pages/FintechSolutions"
import RealEstate from "./pages/RealEstateTechnology"
import BusinessAutomation from "./pages/BusinessAutomation"
import Enterprise from "./pages/EnterpriseManagementSystems"


import SEO from "./pages/SEO"
import LocalSeo from "./pages/LocalSEO"
import LandingPage from "./pages/LandingPageOptimization"
import ConversionRateOptimization from "./pages/ConversionRateOptimization"
import PPCADS from "./pages/PPCAds"
import SocialMediaAdvertising from "./pages/SocialMediaAdvertising"
import LeadGeneration from "./pages/LeadGeneration"
import RemarketingCompaigns from "./pages/RemarketingCampaigns"
import SocialMediaManagment from "./pages/SocialMediaManagement"
import EmailMarketing from "./pages/EmailMarketing"
import BrandOptimization from "./pages/BrandOptimization"
import MarketingAutomation from "./pages/MarketingAutomation"


// ==========================================
// ADMIN
// ==========================================

import AdminLogin from "./pages/AdminDashboard/AdminLogin";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

import ProtectedRoute from "./pages/AdminDashboard/ProtectedRoute";

import ContactList from "./pages/AdminDashboard/ContactList";

import ChangePassword from "./pages/AdminDashboard/ChangePassword";
import WebApplication from "./pages/WebApplication";


// ==========================================
// TEMPORARY PAGE
// ==========================================

const ComingSoon = ({ title }) => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div>
        <p
          style={{
            marginBottom: "12px",
            color: "rgba(255,255,255,0.48)",
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          SyncSolvo
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 6vw, 5rem)",
            fontWeight: 500,
            lineHeight: 1.05,
          }}
        >
          {title}
        </h1>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ======================================
            MAIN WEBSITE
        ====================================== */}

        <Route path="/" element={<Home />} />

        <Route path="/who-we-are" element={<WhoWeAre />} />

        <Route path="/our-team" element={<OurTeam />} />

        <Route path="/contact" element={<Contact />} />

        {/* ======================================
            AI & INTELLIGENT SYSTEMS
        ====================================== */}

        <Route path="/ai-development" element={<AiDev />} />

        <Route path="/agentic-ai" element={<AgenticAI />} />

        <Route path="/ai-chatbot" element={<AIChatbot />} />

        <Route path="/machine-learning" element={<MachineLearning />} />

        <Route path="/ai-integrations" element={<AIIntegrations />} />

        <Route
          path="/computer-vision"
          element={<ComputerVision title="Computer Vision Solutions" />}
        />

        {/* ======================================
            DEVELOPMENT SERVICES
        ====================================== */}

        <Route path="/mern" element={<MernStack />} />

        <Route path="/custom-software" element={<CustomSoftware />} />

        <Route path="/saas" element={<SaaS />} />

        <Route
          path="/web-application-development"
          element={<WebApplication />}
        />

        <Route path="/mobile-app" element={<MobileApp />} />

        <Route path="/ecommerce-web" element={<EcommerceWeb />} />

        {/* ======================================
            INDUSTRY & BUSINESS SOLUTIONS
        ====================================== */}

        <Route path="/education-platform" element={<EducationPlatform />} />

        <Route
          path="/healthcare-technology"
          element={<HealthCare/>}
        />

        <Route
          path="/fintech-solutions"
          element={<Fintech/>}
        />

        <Route
          path="/real-estate-technology"
          element={<RealEstate/>}
        />

        <Route
          path="/business-automation"
          element={<BusinessAutomation />}
        />

        <Route
          path="/enterprise-management-systems"
          element={<Enterprise />}
        />

        {/* ======================================
            MARKETING
        ====================================== */}

        <Route
          path="/seo"
          element={<SEO />}
        />

        <Route path="/local-seo" element={<LocalSeo />} />

        <Route
          path="/landing-page-optimization"
          element={<LandingPage />}
        />

        <Route
          path="/conversion-rate-optimization"
          element={<ConversionRateOptimization/>}
        />

        <Route
          path="/ppc-ads"
          element={<PPCADS/>}
        />

        <Route
          path="/social-media-advertising"
          element={<SocialMediaAdvertising/>}
        />

        <Route
          path="/lead-generation"
          element={<LeadGeneration/>}
        />

        <Route
          path="/remarketing-campaigns"
          element={<RemarketingCompaigns />}
        />

        <Route
          path="/social-media-management"
          element={<SocialMediaManagment/>}
        />

        <Route
          path="/email-marketing"
          element={<EmailMarketing />}
        />

        <Route
          path="/brand-optimization"
          element={<BrandOptimization/>}
        />

        <Route
          path="/marketing-automation"
          element={<MarketingAutomation/>}
        />

        {/* ======================================
            ABOUT / COMPANY
        ====================================== */}

        <Route
          path="/how-we-work"
          element={<ComingSoon title="How We Work" />}
        />

        <Route path="/portfolio" element={<ComingSoon title="Portfolio" />} />

        <Route
          path="/packages"
          element={<ComingSoon title="Engagement Models" />}
        />

        <Route
          path="/faqs"
          element={<ComingSoon title="Frequently Asked Questions" />}
        />

        <Route path="/blogs" element={<ComingSoon title="Insights" />} />

        {/* Careers intentionally opens Contact */}

        <Route path="/careers" element={<Navigate to="/contact" replace />} />

        {/* ======================================
            ADMIN LOGIN
        ====================================== */}

        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ======================================
            PROTECTED ADMIN
        ====================================== */}

        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<Navigate to="contacts" replace />} />

            <Route path="contacts" element={<ContactList />} />

            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>

        {/* ======================================
            404
        ====================================== */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
