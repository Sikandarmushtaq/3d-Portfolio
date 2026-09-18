import { Link } from 'react-router-dom';

export default function ServicePackages({ title, plans }) {
  return (
    <section
      className="service-packages-section"
      data-reveal-section
    >
      <div className="service-shell">
        <h2
          className="service-centered-title"
          data-reveal-item
        >
          {title}
        </h2>

        <div className="service-package-grid">
          {plans.map((plan) => (
            <article
              className={`service-package-card service-package-card--${plan.tone}`}
              key={plan.name}
              data-reveal-card
            >
              <div className="service-package-head">
                <h3>{plan.name}</h3>
              </div>

              <div className="service-package-body">
                <div className="service-package-features">
                  {plan.features.map((feature) => (
                    <div
                      className="service-package-feature"
                      key={feature.title}
                    >
                      <strong>{feature.title}</strong>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="service-package-button"
                >
                  Get Started
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
