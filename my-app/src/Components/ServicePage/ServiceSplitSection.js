import { Link } from 'react-router-dom';

export default function ServiceSplitSection({
  sectionId,
  title,
  description,
  bullets = [],
  button,
  illustration,
  reverse = false,
  imageFirstMobile = false
}) {
  return (
    <section
      id={sectionId}
      className={`service-split-section ${
        reverse ? 'service-split-section--reverse' : ''
      } ${imageFirstMobile ? 'service-split-section--image-mobile' : ''}`}
      data-reveal-section
    >
      <div className="service-shell service-split-grid">
        <div
          className="service-visual-panel"
          data-reveal-item
          data-reveal-visual
        >
          {illustration}
        </div>

        <div className="service-copy" data-reveal-item>
          <h2>{title}</h2>

          {description && <p>{description}</p>}

          {bullets.length > 0 && (
            <ul className="service-bullet-list">
              {bullets.map((bullet) => (
                <li key={bullet.title}>
                  <strong>{bullet.title}</strong>
                  <span>{bullet.text}</span>
                </li>
              ))}
            </ul>
          )}

          {button && (
            <Link
              to={button.to}
              className="service-outline-button"
              data-reveal-item
            >
              {button.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
