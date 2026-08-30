import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Cursor from '../Components/Cursor';
import './WhoWeAre.css';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress, SiCplusplus, SiFlutter, SiThreedotjs, SiBlender, SiGreensock } from 'react-icons/si';
import { MdDesignServices, MdOutlineWaves } from 'react-icons/md';
import Footer from "../Components/Footer";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlexusCanvas from '../Components/PlexusCanvas';   
import TeamDeck from '../Components/TeamDeck';           
import { Link } from "react-router-dom";
import { teamMembers } from '../data/TeamData';      

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {


  const techData = {
    Development: [
      { name: 'MERN Stack', icon: <FaNodeJs /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'C / C++', icon: <SiCplusplus /> },
    ],
    'Mobile Dev': [
      { name: 'React Native', icon: <FaReact /> },
      { name: 'Flutter', icon: <SiFlutter /> },
    ],
    Designing: [
      { name: 'React Three Fiber', icon: <FaReact /> },
      { name: 'Three.js', icon: <SiThreedotjs /> },
      { name: 'UI/UX', icon: <MdDesignServices /> },
      { name: 'Blender', icon: <SiBlender /> },
      { name: 'GSAP', icon: <SiGreensock /> },
      { name: 'Lenis', icon: <MdOutlineWaves /> },
    ],
  };




  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll('.wwa-section, .why-choose-wrapper');
      sections.forEach((section) => {
        const elements = section.querySelectorAll(
          '.section-title, .integrity-item, .service-card, .tech-col, .why-choose-section h1, .why-choose-section p, .cta-arrow-btn'
        );
        gsap.set(elements, { opacity: 0, y: 40 });
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="who-we-are-page">
      <Cursor />
      <Navbar />

  
      <section className="wwa-hero-section">
        <PlexusCanvas
          className="wwa-network-canvas"
          speed={3.5}        
          mouseRepel
          repelRadius={150}
          repelStrength={0.8}
        />
        <div className="wwa-hero-content">
          <h1 className="wwa-heading">Who We Are</h1>
        </div>
      </section>

      <div className="page-content-wrapper">

        <section className="wwa-section">
          <div className="wwa-container">
            <h1 className="section-title integrity-heading">Our Approach</h1>
            <div className="integrity-list">
              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>
                  <h3>Initiative</h3>
                </div>
                <p>We take the first step ourselves, solving problems before they become roadblocks.</p>
              </div>
              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>
                  <h3>Honesty</h3>
                </div>
                <p>Every conversation and update is clear, upfront, and free of hidden agendas.</p>
              </div>
              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>
                  <h3>Innovation</h3>
                </div>
                <p>We bring fresh ideas and original thinking to everything we build.</p>
              </div>
              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>
                  <h3>Memorable Impact</h3>
                </div>
                <p>We aim to leave a lasting impression in every project and every interaction.</p>
              </div>
              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>
                  <h3>Drive for Excellence</h3>
                </div>
                <p>We chase the highest standard with relentless focus and commitment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="wwa-section team-section-white">
          <div className="wwa-container">
            <h1 className="section-title dark-title">Meet Our Team</h1>
            <TeamDeck members={teamMembers} />
          </div>
        </section>

  
        <section className="wwa-section services-section-gradient">
          <div className="wwa-container">
            <h1 className="section-title">Services We Offer</h1>
            <div className="services-grid-3">
              <div className="service-card">
                <h3>AI Solutions</h3>
                <p>We provide cutting-edge AI solutions including machine learning, natural language processing, and computer vision to transform your business operations. Our team develops intelligent systems that automate processes and unlock new opportunities for growth.</p>
              </div>
              <div className="service-card">
                <h3>Web Development</h3>
                <p>Crafting high-performance MERN stack applications and immersive 3D websites using React Three Fiber. We specialize in modern frameworks to deliver scalable solutions tailored to your business needs, ensuring seamless user experiences across all devices.</p>
              </div>
              <div className="service-card">
                <h3>SaaS Products</h3>
                <p>Engineering robust, scalable software-as-a-service platforms tailored for enterprise growth. From architecture to deployment, we build secure and reliable products designed to grow with your business.</p>
              </div>
            </div>
            <div className="services-grid-2">
              <div className="service-card">
                <h3>E-Commerce Solutions</h3>
                <p>We build powerful e-commerce platforms that deliver exceptional shopping experiences. From custom store development to platform migrations, we create secure, scalable, and feature-rich solutions that drive sales and grow your online business.</p>
              </div>
              <div className="service-card">
                <h3>Web Design</h3>
                <p>Our web design services focus on creating visually stunning, responsive, and user-friendly websites. We combine modern design principles with 3D animated interfaces and interactive experiences to deliver engaging websites that convert visitors into customers.</p>
              </div>
            </div>
          </div>
        </section>

   
        <section className="wwa-section tech-section-dark">
          <div className="wwa-container">
            <h1 className="section-title">Technologies We Use</h1>
            <div className="tech-categories">
              {Object.entries(techData).map(([category, items]) => (
                <div className="tech-col" key={category}>
                  <h4>{category}</h4>
                  <div className="tech-bars">
                    {items.map((item) => (
                      <div className="tech-bar" key={item.name}>
                        <span className="tech-icon">{item.icon}</span>
                        <span className="tech-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="why-choose-wrapper">
        <div className="why-choose-section">
          <h1>Why Choose Us?</h1>
          <p>We don't just build websites — we engineer digital experiences. Powered by the MERN stack, our applications are fast, scalable, and built to last. We go beyond flat design with immersive 3D interactions using React Three Fiber and Three.js, while our AI-driven solutions automate your workflows and unlock smarter decisions. From SaaS platforms to full-scale e-commerce, every line of code is written with performance, security, and your growth in mind.</p>
          <Link to="/contact">
            <button className="cta-arrow-btn">Let's Make It Happen &#8594;</button>
          </Link>
        </div>
      </section>

      <Footer />

    </div>
  );
}