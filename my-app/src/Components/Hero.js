import Scene from './Scene';
import './Hero.css';

export default function Hero({ heroRef, canvasRef, uiRef, isHeroVisible }) {
  return (
    <main ref={heroRef} className="hero-wrapper">
      <div
        ref={canvasRef}
        className={`canvas-layer ${isHeroVisible ? 'canvas-visible' : 'canvas-hidden'}`}
      >
        <Scene />
      </div>

      <div ref={uiRef} className="ui-content">
        <section className="hero-info">
          <p className="hero-title">IT SOLUTIONS</p>
          <span className="hero-divider" />
          <p className="hero-description">
            WE BUILD SCALABLE DIGITAL SOLUTIONS
            <br />
            THAT EMPOWER BUSINESSES
            <br />
            AND DRIVE REAL IMPACT.
          </p>
          <p className="hero-services">STRATEGY. DESIGN. DEVELOPMENT.</p>
        </section>
      </div>
    </main>
  );
}