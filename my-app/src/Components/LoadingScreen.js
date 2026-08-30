import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PlexusCanvas from './PlexusCanvas';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const progressRef = useRef(null);


  useEffect(() => {
    if (!containerRef.current || !barRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => { onComplete?.(); },
      });

      gsap.set(progressRef.current, { opacity: 0, y: 8 });
      gsap.set(barRef.current, { width: '0%' });

      tl.to(progressRef.current, {
        opacity: 1, y: 0, duration: 0.4, ease: 'power3.out',
      });

      tl.to(barRef.current, {
        width: '100%',
        duration: 1.35,
        ease: 'power3.inOut',
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          if (progressRef.current) {
            progressRef.current.textContent =
              String(progress).padStart(3, '0');
          }
        },
      }, '<');

      tl.to({}, { duration: 0.15 });

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="loading-screen">

  
      <PlexusCanvas
        className="loading-canvas"
        speed={1}
        mouseRepel={false}
      />

      <div className="loading-content">
        <div className="loading-top">
          <span></span>
          <span></span>
        </div>

        <div className="loading-main">
          <div className="loading-name">SIKANDAR</div>
          <div className="loading-status">
            <span className="loading-dot" />
            INITIALIZING
          </div>
        </div>

        <div className="loading-bottom">
          <span>FULL-STACK ENGINEER</span>
          <span ref={progressRef} className="loading-progress">000</span>
        </div>
      </div>

      <div className="loading-bar-container">
        <div ref={barRef} className="loading-bar" />
      </div>
    </div>
  );
}