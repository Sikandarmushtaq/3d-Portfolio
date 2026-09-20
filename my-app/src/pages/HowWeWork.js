import Navbar from "../Components/Navbar.js";
import Cursor from "../Components/Cursor.js";
import Scene3 from "../Components/Scene3.js";
import Contact from "../Components/Contact.js";
import Footer from "../Components/Footer.js";

import ServiceFinalCTA from "../Components/ServicePage/ServiceFinalCTA.js";
import ToolsTechnologies from "../Components/ToolsTechnologies.js";

import HowWeWorkIntro from "../Components/HowWeWork/HowWeWorkIntro.js";
import HowWeWorkProcess from "../Components/HowWeWork/HowWeWorkProcess.js";

import "../Components/ServicePage/ServicePage.css";
import "./HowWeWork.css";


export default function HowWeWork() {
  return (
    <div className="how-we-work-page">
      <Cursor />

      <Navbar />

      <main className="how-we-work-main">
        <Scene3
          title="How We Work"
        />

        <HowWeWorkIntro />

        <HowWeWorkProcess />

        <ToolsTechnologies />

        <Contact
          showNavbar={false}
          showCursor={false}
          showMarquee={false}
          showLeftPanel
          twoColumnInputs={false}
          variant="service"
          minHeight="auto"
          maxWidth="1240px"
          paddingTop={88}
          paddingY={92}
          gap={80}
          inputPadding={17}
          fontSize={0.92}
          contextLabel="PROJECT TYPE"
          contextPlaceholder="Tell Us What You Want to Build"
          submitLabel="Start a Conversation"
          submitIcon="phone"
        />

        <ServiceFinalCTA />
      </main>

      <Footer />
    </div>
  );
}