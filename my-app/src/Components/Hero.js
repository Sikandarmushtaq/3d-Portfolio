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
          SyncSolvo engineers intelligent software, scalable digital platforms, and performance-driven growth solutions designed to help modern businesses operate smarter, launch faster, and scale further.
          </p>
        </section>
      </div>
    </main>
  );
}