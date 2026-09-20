import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./PortfolioWhatWeBuild.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title:
      "SaaS Platforms",
    description:
      "Multi-tenant products designed around teams, roles and repeatable operations."
  },
  {
    title:
      "AI-Powered Systems",
    description:
      "Agents and automation placed where they remove real workload."
  },
  {
    title:
      "Web Applications",
    description:
      "Focused applications shaped around the way your business actually works."
  },
  {
    title:
      "Digital Commerce",
    description:
      "Commerce journeys built to improve discovery, comparison and conversion."
  },
  {
    title:
      "Mobile Applications",
    description:
      "Mobile products for customers, internal teams and field operations."
  },
  {
    title:
      "Product Design & UI/UX",
    description:
      "Interfaces that make complex workflows easier to understand and use."
  },
  {
    title:
      "Backend Systems & APIs",
    description:
      "Secure application logic, integrations and data flows built for growth."
  }
];

export default function PortfolioWhatWeBuild() {
  const sectionRef =
    useRef(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const ctx =
      gsap.context(() => {
        gsap.set(
          [
            ".pwb-title-line",
            ".pwb-row"
          ],
          {
            clearProps:
              "opacity,visibility"
          }
        );

        if (
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
        ) {
          return;
        }

        gsap.fromTo(
          ".pwb-title-line",
          {
            y: 32
          },
          {
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power4.out",

            scrollTrigger: {
              trigger:
                ".pwb-heading",
              start:
                "top 88%",
              toggleActions:
                "play none none reverse",
              invalidateOnRefresh:
                true
            }
          }
        );

        gsap.fromTo(
          ".pwb-row",
          {
            y: 18
          },
          {
            y: 0,
            duration: 0.58,
            stagger: 0.06,
            ease: "power3.out",

            scrollTrigger: {
              trigger:
                ".pwb-list",
              start:
                "top 90%",
              toggleActions:
                "play none none reverse",
              invalidateOnRefresh:
                true
            }
          }
        );
      }, section);

    const refreshFrame =
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    return () => {
      cancelAnimationFrame(
        refreshFrame
      );

      ctx.revert();
    };
  }, []);

  return (
    <section
      className="pwb-section"
      ref={sectionRef}
    >
      <div className="pwb-shell">
        <header className="pwb-heading">
          <div>
            <span className="pwb-title-line">
              WHAT
            </span>
          </div>

          <div>
            <span className="pwb-title-line">
              WE BUILD
            </span>
          </div>
        </header>

        <div className="pwb-list">
          {services.map(
            (service) => (
              <article
                className="pwb-row"
                key={
                  service.title
                }
              >
                <h3>
                  {service.title}
                </h3>

                <p>
                  {
                    service.description
                  }
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}