import Navbar from "../Components/Navbar.js";
import Cursor from "../Components/Cursor.js";
import Scene3 from "../Components/Scene3.js";
import TeamDeck from "../Components/TeamDeck.js";
import Footer from "../Components/Footer.js";

import {
  teamMembers
} from "../data/TeamData.js";

import "./OurTeam.css";

export default function OurTeam() {
  return (
    <div className="our-team-page">
      <Cursor />

      <Navbar />

      <main className="our-team-content">
        <Scene3
          title="Our Team"
          variant="corporate"
        />

        <section className="our-team-section">
          <div className="our-team-container">
            <h2 className="our-team-title">
              Meet Our Team
            </h2>

            <div className="our-team-deck">
              <TeamDeck
                members={teamMembers}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}