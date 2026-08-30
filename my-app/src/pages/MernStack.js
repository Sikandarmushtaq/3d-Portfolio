import { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Cursor from '../Components/Cursor';
import Scene3 from '../Components/Scene3';
import Contact from '../Components/Contact';   // ⬅️ ADD: Contact import
import Footer from '../Components/Footer';
import './MernStack.css';
import {Link } from "react-router-dom"

function TiltCard({ title, text, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      className={`mern-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}


function CloudServerIllustration() {
  return (
    <svg
      className="mern-illus-svg"
      width="100%"
      viewBox="0 0 680 480"
      role="img"
      aria-label="Cloud connected to server racks illustration"
    >
      <defs>
        <linearGradient id="mern-cloudg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#AFA9EC" />
          <stop offset="100%" stopColor="#7F77DD" />
        </linearGradient>
      </defs>

      <rect x="20" y="20" width="640" height="440" rx="16" fill="#26215C" opacity="0.5" />

      <g className="mern-cloudshape">
        <ellipse cx="340" cy="120" rx="110" ry="55" fill="url(#mern-cloudg)" />
        <ellipse cx="270" cy="140" rx="60" ry="40" fill="url(#mern-cloudg)" />
        <ellipse cx="410" cy="140" rx="65" ry="42" fill="url(#mern-cloudg)" />
        <circle cx="300" cy="105" r="4" fill="#26215C" opacity="0.6" />
        <circle cx="320" cy="100" r="4" fill="#26215C" opacity="0.6" />
        <circle cx="340" cy="97" r="4" fill="#26215C" opacity="0.6" />
      </g>

      <g>
        <rect x="70" y="260" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <rect x="70" y="304" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <rect x="70" y="348" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <circle className="mern-led" cx="88" cy="277" r="3" fill="#EEEDFE" />
        <circle className="mern-led" style={{ animationDelay: '.3s' }} cx="88" cy="321" r="3" fill="#EEEDFE" />
        <circle className="mern-led" style={{ animationDelay: '.6s' }} cx="88" cy="365" r="3" fill="#EEEDFE" />
      </g>

      <g>
        <rect x="265" y="270" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <rect x="265" y="314" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <rect x="265" y="358" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <circle className="mern-led" style={{ animationDelay: '.1s' }} cx="283" cy="287" r="3" fill="#EEEDFE" />
        <circle className="mern-led" style={{ animationDelay: '.4s' }} cx="283" cy="331" r="3" fill="#EEEDFE" />
        <circle className="mern-led" style={{ animationDelay: '.7s' }} cx="283" cy="375" r="3" fill="#EEEDFE" />
      </g>

      <g>
        <rect x="460" y="260" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <rect x="460" y="304" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <rect x="460" y="348" width="150" height="34" rx="6" fill="#3C3489" stroke="#7F77DD" strokeWidth="0.5" />
        <circle className="mern-led" style={{ animationDelay: '.2s' }} cx="478" cy="277" r="3" fill="#EEEDFE" />
        <circle className="mern-led" style={{ animationDelay: '.5s' }} cx="478" cy="321" r="3" fill="#EEEDFE" />
        <circle className="mern-led" style={{ animationDelay: '.8s' }} cx="478" cy="365" r="3" fill="#EEEDFE" />
      </g>

      <path className="mern-wire" d="M220 210 L145 260" fill="none" stroke="#AFA9EC" strokeWidth="2" />
      <path className="mern-wire" d="M340 210 L340 270" fill="none" stroke="#AFA9EC" strokeWidth="2" />
      <path className="mern-wire" d="M460 210 L535 260" fill="none" stroke="#AFA9EC" strokeWidth="2" />
    </svg>
  );
}

function LaptopDashboardIllustration() {
  return (
    <svg
      className="mern-illus-svg"
      width="100%"
      viewBox="0 0 680 480"
      role="img"
      aria-label="Laptop dashboard with chat bubbles illustration"
    >
      <rect x="20" y="20" width="640" height="440" rx="16" fill="#3C3489" />

      <g className="mern-gear1" fill="#AFA9EC" opacity="0.5">
        <circle cx="560" cy="100" r="28" />
        <rect x="554" y="60" width="12" height="14" />
        <rect x="554" y="126" width="12" height="14" />
        <rect x="520" y="94" width="14" height="12" />
        <rect x="586" y="94" width="14" height="12" />
        <circle cx="560" cy="100" r="14" fill="#3C3489" />
      </g>

      <g className="mern-gear2" fill="#AFA9EC" opacity="0.4">
        <circle cx="90" cy="340" r="22" />
        <rect x="85" y="306" width="10" height="12" />
        <rect x="85" y="362" width="10" height="12" />
        <rect x="56" y="334" width="12" height="10" />
        <rect x="112" y="334" width="12" height="10" />
        <circle cx="90" cy="340" r="11" fill="#3C3489" />
      </g>

      <rect x="150" y="120" width="380" height="240" rx="10" fill="#EEEDFE" />
      <rect x="150" y="120" width="380" height="26" rx="10" fill="#CECBF6" />
      <circle cx="166" cy="133" r="4" fill="#7F77DD" />
      <circle cx="180" cy="133" r="4" fill="#AFA9EC" />
      <circle cx="194" cy="133" r="4" fill="#AFA9EC" />

      <rect x="170" y="166" width="60" height="8" rx="4" fill="#7F77DD" />
      <rect x="170" y="186" width="150" height="8" rx="4" fill="#D4537E" />
      <rect x="170" y="206" width="100" height="8" rx="4" fill="#B4B2A9" />
      <rect x="170" y="226" width="200" height="8" rx="4" fill="#7F77DD" />
      <rect x="170" y="246" width="130" height="8" rx="4" fill="#B4B2A9" />
      <rect x="170" y="266" width="170" height="8" rx="4" fill="#D4537E" />
      <rect x="170" y="286" width="90" height="8" rx="4" fill="#7F77DD" />

      <rect x="120" y="360" width="440" height="14" rx="7" fill="#26215C" />
      <polygon points="120,360 150,346 530,346 560,360" fill="#3C3489" />

      <g className="mern-bubble1">
        <rect x="90" y="70" width="70" height="46" rx="14" fill="#3C3489" />
        <polygon points="105,116 115,132 125,116" fill="#3C3489" />
        <line x1="105" y1="86" x2="145" y2="86" stroke="#EEEDFE" strokeWidth="4" strokeLinecap="round" />
        <line x1="105" y1="98" x2="135" y2="98" stroke="#EEEDFE" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="mern-bubble2">
        <rect x="490" y="150" width="66" height="44" rx="14" fill="#D4537E" />
        <polygon points="504,194 494,210 514,194" fill="#D4537E" />
        <line x1="504" y1="166" x2="540" y2="166" stroke="#EEEDFE" strokeWidth="4" strokeLinecap="round" />
        <line x1="504" y1="178" x2="530" y2="178" stroke="#EEEDFE" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function MernStack() {
  return (
    <div className="mern-page">
      <Cursor />
      <Navbar />

    
      <Scene3 title="MERN Stack Development" />

  
      <section className="mern-section mern-intro">
        <div className="mern-container mern-intro-grid">
          <div className="mern-illustration">
            <CloudServerIllustration />
          </div>

          <div className="mern-text-block">
            <h2>Expert MERN Stack Development Services</h2>
            <p>
              We specialize in <strong>full stack development</strong> using the
              powerful MERN stack — MongoDB, Express.js, React.js, and Node.js. Our
              experienced developers craft <strong>scalable, high-performance web
              applications</strong> tailored to your business needs. Whether you want
              to <strong>hire MERN stack developers</strong> for a brand-new build or
              enhance an existing application, we deliver complete solutions that
              drive real results.
            </p>
          <Link to = "/contact"><button className="mern-btn">Hire MERN Developers</button></Link>  
          </div>
        </div>
      </section>

 
      <section className="mern-section mern-why">
        <div className="mern-container mern-why-grid">
          <div className="mern-text-block">
            <h2>Why Choose Our MERN Stack Development Services?</h2>
            <p>
              As a leading <strong>MERN stack development company</strong>, we provide
              end-to-end solutions that make the most of JavaScript across your entire
              application stack:
            </p>
            <ul className="mern-list">
              <li><strong>Full stack development expertise</strong> — We handle both frontend and backend with unified JavaScript skills using React.</li>
              <li><strong>MERN stack flexibility</strong> — Flexible architecture built around React.js, tailored to your project needs.</li>
              <li><strong>Scalable architecture</strong> — Solutions that grow with your business and traffic.</li>
              <li><strong>Real-time features</strong> — Implement chat, notifications, and live updates for modern web apps.</li>
              <li><strong>Dedicated teams</strong> — Option to hire a dedicated MERN stack team for your project.</li>
            </ul>
          </div>

          <div className="mern-illustration">
            <LaptopDashboardIllustration />
          </div>
        </div>
      </section>

 
      <section className="mern-section mern-cards-section">
        <div className="mern-container">
          <h2 className="mern-cards-title">What We Build With MERN</h2>
          <div className="mern-cards-grid">
            <TiltCard
              className="card-1"
              title="Custom MERN Web Applications"
              text="We develop robust, scalable, and high-performance web applications using MongoDB, Express.js, React.js, and Node.js, tailored to your business requirements."
            />
            <TiltCard
              className="card-2"
              title="API Development & Integrations"
              text="Design and implement secure RESTful APIs and integrate third-party services seamlessly into your MERN stack applications."
            />
            <TiltCard
              className="card-3"
              title="Single Page Applications (SPA)"
              text="Deliver lightning-fast, interactive SPAs with React.js for a seamless user experience and modern web standards."
            />
            <TiltCard
              className="card-4"
              title="Real-Time Application Development"
              text="Build real-time features such as chat, notifications, and live updates using WebSockets and the latest MERN technologies."
            />
            <TiltCard
              className="card-5"
              title="E-commerce Solutions"
              text="Launch scalable e-commerce platforms with secure payment gateways, product management, and user authentication using the MERN stack."
            />
            <TiltCard
              className="card-6"
              title="Migration to MERN Stack"
              text="Migrate your legacy applications to the MERN stack for improved performance, maintainability, and scalability."
            />
          </div>
        </div>
      </section>

   
      <section className="mern-section mern-contact-cta">
        <div className="mern-container">
          <h2 className="mern-cards-title">
            Have a Project in Mind? <span className="cta-gradient">Let's Talk.</span>
          </h2>
          <p className="mern-contact-sub">
            Tell us about your idea — our MERN experts will get back to you within 24 hours.
          </p>
        </div>
      </section>

   
<Contact
  showNavbar={false}
  showCursor={false}
  showLeftPanel={false}
  twoColumnInputs={true}
  minHeight="auto"      
  maxWidth="1150px"
  paddingTop={20}
  paddingY={24}        
  gap={40}
  inputPadding={14}
  fontSize={0.9}
/>

      <Footer />
    </div>
  );
}
