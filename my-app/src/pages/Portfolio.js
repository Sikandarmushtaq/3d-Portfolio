import Navbar from "../Components/Navbar.js";
import Cursor from "../Components/Cursor.js";
import Contact from "../Components/Contact.js";
import Footer from "../Components/Footer.js";

import PortfolioHero from "../Components/Portfolio/PortfolioHero.js";
import PortfolioSelectedWork from "../Components/Portfolio/PortfolioSelectedWork.js";
import PortfolioMarquee from "../Components/Portfolio/PortfolioMarquee.js";
import PortfolioInsideBuild from "../Components/Portfolio/PortfolioInsideBuild.js";
import PortfolioWhatWeBuild from "../Components/Portfolio/PortfolioWhatWeBuild.js";
import PortfolioStudioProfile from "../Components/Portfolio/PortfolioStudioProfile.js";

import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <Cursor />

      <Navbar />

      <main className="portfolio-main">
        <PortfolioHero />

        <PortfolioSelectedWork />

        <PortfolioMarquee />

        <PortfolioInsideBuild />

        <PortfolioWhatWeBuild />

        <PortfolioStudioProfile />

        <Contact
          showNavbar={false}
          showCursor={false}
          showMarquee={false}
          showLeftPanel={true}
          minHeight="auto"
          maxWidth="1240px"
          paddingTop={55}
          paddingY={85}
          gap={70}
          inputPadding={17}
          fontSize={0.92}
          contextLabel="PROJECT TYPE"
          contextPlaceholder="Tell Us What You Want to Build"
          submitLabel="Start a Project"
          submitIcon="phone"
        />
      </main>

      <Footer />

    </div>
  );
}