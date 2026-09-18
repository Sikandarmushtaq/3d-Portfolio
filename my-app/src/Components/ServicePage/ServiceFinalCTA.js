import { Link } from "react-router-dom";

import "./ServiceFinalCTA.css";

export default function ServiceFinalCTA() {
  return (
    <section className="service-final-cta-section softsync-final-cta-section">
      <div className="softsync-final-cta-shell">
        <div className="service-final-cta softsync-final-cta-card">
          <h2 className="service-final-cta-title">
            Why Choose SoftSync?
          </h2>

          <p className="service-final-cta-description">
            Think of SoftSync as your technology and growth partner,
            turning complex ideas into digital products that are built
            to perform and ready to scale. We combine software
            engineering, intelligent automation, modern user
            experiences, and growth-focused thinking to create
            solutions that support real business goals. Instead of
            delivering technology in isolation, we focus on how every
            system, workflow, and digital experience can make your
            business more efficient, competitive, and prepared for
            what comes next.
          </p>

          <Link
            to="/contact"
            className="service-final-cta-button"
          >
            Let's Make It Happen

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}