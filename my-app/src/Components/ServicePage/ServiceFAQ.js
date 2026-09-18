import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ServiceFAQ({
  title,
  items,
  illustration
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="service-faq-section"
      data-reveal-section
    >
      <div className="service-shell">
        <h2
          className="service-centered-title service-faq-title"
          data-reveal-item
        >
          {title}
        </h2>

        <div className="service-faq-grid">
          <div
            className="service-visual-panel"
            data-reveal-item
            data-reveal-visual
          >
            {illustration}
          </div>

          <div className="service-faq-list">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`service-faq-item ${
                    isOpen ? 'is-open' : ''
                  }`}
                  key={item.question}
                  data-reveal-item
                >
                  <button
                    type="button"
                    className="service-faq-question"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{item.question}</span>
                    <ChevronDown size={17} />
                  </button>

                  <div className="service-faq-answer-wrap">
                    <div className="service-faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
