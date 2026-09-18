export default function ServiceCapabilities({ title, items }) {
  return (
    <section
      className="service-capabilities"
      data-reveal-section
    >
      <div className="service-capabilities-heading service-shell">
        <h2 data-reveal-item>{title}</h2>
      </div>

      <div className="service-capabilities-surface">
        <div className="service-shell service-capabilities-grid">
          {items.map((item, index) => (
            <article
              className="service-capability-card"
              data-reveal-card
              key={item.title}
              style={{ '--service-card-index': index }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
