import Navbar from "../Components/Navbar.js";
import Cursor from "../Components/Cursor.js";
import Scene3 from "../Components/Scene3.js";
import TeamDeck from "../Components/TeamDeck.js";
import Footer from "../Components/Footer.js";

import ServiceFinalCTA from "../Components/ServicePage/ServiceFinalCTA.js";

import AboutApproach from "../Components/About/AboutApproach.js";
import AboutServices from "../Components/About/AboutServices.js";
import AboutTechnologies from "../Components/About/AboutTechnologies.js";

import { teamMembers } from "../data/TeamData.js";

import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <div className="who-we-are-page">
      <Cursor />

      <Navbar />

      <main className="who-we-are-content">
        <Scene3
          title="Who We Are"
          variant="corporate"
        />

        <AboutApproach />

        <section className="about-team-section">
          <div className="about-team-container">
            <h2 className="about-team-title">
              Meet Our Team
            </h2>

            <div className="about-team-deck">
              <TeamDeck
                members={teamMembers}
              />
            </div>
          </div>
        </section>

        <AboutServices />

        <AboutTechnologies />

        <ServiceFinalCTA />
      </main>

      <Footer />
    </div>
  );
}