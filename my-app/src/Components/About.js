import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    
      gsap.fromTo('.about-title span',
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.5, 
          }
        }
      );

    
      gsap.fromTo('.about-text p',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 0.5, 
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-container">
        
      
        <div className="about-title-wrapper">
          <h1 className="about-title">
            <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span>
          </h1>
          <div className="about-reflection">
            <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span>
          </div>
        </div>

      
        <div className="about-text">
          <p>WE transform ideas into digital products.</p>
          <p>Specialized in MERN stack, 3D Web (Three.js),</p>
          <p>and engineering award-winning interactive experiences.</p>
        </div>

      </div>
    </section>
  );
}