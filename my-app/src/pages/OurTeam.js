import Navbar from '../Components/Navbar';
import Cursor from '../Components/Cursor';
import './OurTeam.css';
import Footer from "../Components/Footer";
import PlexusCanvas from '../Components/PlexusCanvas';
import TeamDeck from '../Components/TeamDeck';
import { teamMembers } from '../data/TeamData';  

export default function OurTeam() {


  return (
    <div className="our-team-page">
      <Cursor />
      <Navbar />

      {/* 1. HERO — unchanged */}
      <section className="ot-hero-section">
        <PlexusCanvas
          className="ot-network-canvas"
          speed={3.5}
          mouseRepel
          repelRadius={150}
          repelStrength={0.8}
        />
        <div className="ot-hero-content">
          <h1 className="ot-heading">Our Team</h1>
        </div>
      </section>

      <div className="page-content-wrapper">
        {/* 2. TEAM — shared data */}
        <section className="ot-section team-section-white">
          <div className="ot-container team-center-layout">
            <h1 className="section-title dark-title">Meet Our Team</h1>
            <TeamDeck members={teamMembers} />   {/* ⬅️ imported data */}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}