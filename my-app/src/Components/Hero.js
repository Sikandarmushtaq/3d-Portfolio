import Scene from './Scene';
import './Hero.css';

export default function Hero({
  heroRef,
  canvasRef,
  uiRef,
  isHeroVisible,
}) {
  return (
    <main
      ref={heroRef}
      className="hero-wrapper"
    >
      <div
        ref={canvasRef}
        className={`canvas-layer ${
          isHeroVisible
            ? 'canvas-visible'
            : 'canvas-hidden'
        }`}
      >
        <Scene />
      </div>

      <div
        ref={uiRef}
        className="ui-content"
      >
        <section
          className="hero-info"
          aria-labelledby="hero-heading"
        >
          <h1
            id="hero-heading"
            className="hero-title"
          >
            <span>
              Engineering Digital Solutions
            </span>

            <span>
              That Move Business Forward
            </span>
          </h1>

          <span
            className="hero-divider"
            aria-hidden="true"
          />

          <p className="hero-description">
            SoftSync builds scalable web platforms,
            SaaS products, AI-powered systems,
            mobile applications, and growth-focused
            digital solutions for modern businesses.
          </p>
        </section>
      </div>
    </main>
  );
}