import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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
// SERVICES
// ==========================================

import AgenticAI from "./pages/AgenticAI";
import AIChatbot from "./pages/AIChatbot";
import AICallAgents from "./pages/AICallAgents";

import MernStack from "./pages/MernStack";
import MobileApp from "./pages/MobileApp";
import EcommerceWeb from "./pages/EcommerceWeb";
import Animated3D from "./pages/Animated3d";
import EducationPlatform from "./pages/EducationPlatform";
import SaaS from "./pages/SaaS";


// ==========================================
// ADMIN
// ==========================================

import AdminLogin
  from "./pages/AdminDashboard/AdminLogin";

import AdminDashboard
  from "./pages/AdminDashboard/AdminDashboard";

import ProtectedRoute
  from "./pages/AdminDashboard/ProtectedRoute";

import ContactList
  from "./pages/AdminDashboard/ContactList";

import ChangePassword
  from "./pages/AdminDashboard/ChangePassword";


const App = () => {

  return (

    <Router>

      <Routes>

        {/* ===============================
            WEBSITE
        =============================== */}

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/who-we-are"
          element={<WhoWeAre />}
        />


        <Route
          path="/our-team"
          element={<OurTeam />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ===============================
            SERVICES
        =============================== */}

        <Route
          path="/agentic-ai"
          element={<AgenticAI />}
        />


        <Route
          path="/ai-chatbot"
          element={<AIChatbot />}
        />


        <Route
          path="/ai-call-agents"
          element={<AICallAgents />}
        />


        <Route
          path="/mern"
          element={<MernStack />}
        />


        <Route
          path="/mobile-app"
          element={<MobileApp />}
        />


        <Route
          path="/ecommerce-web"
          element={<EcommerceWeb />}
        />


        <Route
          path="/3d-animated"
          element={<Animated3D />}
        />


        <Route
          path="/education-platform"
          element={<EducationPlatform />}
        />


        <Route
          path="/saas"
          element={<SaaS />}
        />


        {/* ===============================
            ADMIN LOGIN
            PUBLIC ROUTE
        =============================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* ===============================
            PROTECTED ADMIN
        =============================== */}

        <Route
          element={<ProtectedRoute />}
        >

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          >

            {/* /admin/dashboard */}
            <Route
              index
              element={
                <Navigate
                  to="contacts"
                  replace
                />
              }
            />


            {/* /admin/dashboard/contacts */}
            <Route
              path="contacts"
              element={<ContactList />}
            />


            {/* /admin/dashboard/change-password */}
            <Route
              path="change-password"
              element={<ChangePassword />}
            />

          </Route>

        </Route>


        {/* ===============================
            OPTIONAL 404
        =============================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </Router>

  );

};


export default App;