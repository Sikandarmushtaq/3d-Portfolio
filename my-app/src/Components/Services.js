import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { BackgroundParticles } from './Scene';
import Footer from './Footer';
import Contact from './Contact'; 
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.anim-item');
      items.forEach((item) => {
        gsap.fromTo(item,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top 95%',
              end: 'top 70%',
              scrub: 0.5,
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="services-section">
      <div className="services-container">

        <div className="services-header anim-item">
          <div className="services-label">
            <span className="line"></span>
            Our Services
          </div>
          <h1 className="services-title">
            Solutions We Deliver <br/> To Scale Your Business
          </h1>
        </div>

        <p className="services-desc anim-item">
          We engineer high-impact IT and digital solutions to drive growth, enhance visibility, and maximize ROI.
          Our integrated approach combines AI-powered development, data-driven marketing, and scalable infrastructure
          to future-proof your vision.
        </p>

        <div className="services-grid anim-item">
          <div className="service-card">
            <div className="card-icon">🤖</div>
            <h2>AI-Powered Solutions</h2>
            <p>Our expert AI engineers leverage machine learning (Python, C++) to build customized, data-driven solutions that optimize efficiency.</p>
          </div>
          <div className="service-card">
            <div className="card-icon">💻</div>
            <h2>Web & Mobile App Development</h2>
            <p>We build conversion-optimized websites by integrating AI tools (MERN, R3F, Three.js) to boost engagement and scalability.</p>
          </div>
          <div className="service-card">
            <div className="card-icon">☁️</div>
            <h2>SaaS Products Development</h2>
            <p>Robust, scalable, and secure Software-as-a-Service products tailored to automate workflows and drive enterprise growth.</p>
          </div>
        </div>

        <div className="tech-typography-section anim-item">
          <div className="tech-typo-canvas">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <BackgroundParticles />
            </Canvas>
          </div>

          <div className="typo-text-wrapper">
            <h1 className="typo-heading">
              <span className="t-we">WE</span> <span className="t-think">THINK</span> <br />
              <span className="t-craft">CRAFT</span> <br />
              <span className="t-and">&</span> <span className="t-design">DESIGN</span>
            </h1>
          </div>
        </div>

        <div className="tech-stack-section anim-item">
          <h3>Tools and Technologies We Use</h3>
          <div className="tech-marquee">
            <div className="marquee-track">
              <span>MERN Stack</span><span>•</span><span>MongoDB</span><span>•</span>
              <span>Express</span><span>•</span><span>React</span><span>•</span>
              <span>Node.js</span><span>•</span><span>PostgreSQL</span><span>•</span>
              <span>SQL</span><span>•</span><span>React Three Fiber</span><span>•</span>
              <span>Three.js</span><span>•</span><span>GSAP</span><span>•</span>
              <span>Python</span><span>•</span><span>JavaScript</span><span>•</span>
              <span>C / C++</span><span>•</span>
              <span>MERN Stack</span><span>•</span><span>MongoDB</span><span>•</span>
              <span>Express</span><span>•</span><span>React</span><span>•</span>
              <span>Node.js</span><span>•</span><span>PostgreSQL</span><span>•</span>
              <span>SQL</span><span>•</span><span>React Three Fiber</span><span>•</span>
              <span>Three.js</span><span>•</span><span>GSAP</span><span>•</span>
              <span>Python</span><span>•</span><span>JavaScript</span><span>•</span>
              <span>C / C++</span><span>•</span><span>React Native</span><span>•</span>
              <span>Django</span><span>•</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container anim-item">
          <h2>Ready to Elevate Your Business?</h2>
          <p>Complete the form, and our team will reach out to discuss how we can create custom software solutions to meet your business needs.</p>

        
     <Contact
  showNavbar={false}
  showCursor={false}
  showLeftPanel={false}
  twoColumnInputs={true}  
  minHeight="auto"
  maxWidth="100%"
  paddingTop={0}
  paddingY={0}
/>
        </div>

      </div>

      <Footer />

    </section>
  );
}