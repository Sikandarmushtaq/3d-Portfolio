import { Link } from 'react-router-dom';

export default function ServiceProcess({
  title,
  description,
  steps,
  button,
  illustration
}) {
  return (
    <section
      className="service-process-section"
      data-reveal-section
    >
      <div className="service-shell service-process-grid">
        <div
          className="service-visual-panel"
          data-reveal-item
          data-reveal-visual
        >
          {illustration}
        </div>

        <div className="service-process-copy">
          <h2 data-reveal-item>{title}</h2>

          <p data-reveal-item>{description}</p>

          <ol className="service-process-list">
            {steps.map((step, index) => (
              <li
                key={step.title}
                data-reveal-item
              >
                <span>{index + 1}.</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

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
