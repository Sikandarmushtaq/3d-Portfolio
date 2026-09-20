import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import shopSphereImage from "../../Assets/Portfolio/shopsphere.png";
import eduNexaImage from "../../Assets/Portfolio/edunexa.png";
import taakraImage from "../../Assets/Portfolio/taakra.png";
import ecommerceImage from "../../Assets/Portfolio/ecommerce-solution.png";

import "./PortfolioSelectedWork.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "ShopSphere PK",
    category: "COMMERCE / PERSONALIZATION",
    image: shopSphereImage,
    className: "shopsphere"
  },
  {
    name: "EduNexa",
    category: "SAAS / EDUCATION",
    image: eduNexaImage,
    className: "edunexa"
  },
  {
    name: "Taakra",
    category: "PLATFORM / EVENTS",
    image: taakraImage,
    className: "taakra"
  },
  {
    name: "Ecommerce Solution",
    category: "COMMERCE / RETAIL",
    image: ecommerceImage,
    className: "ecommerce"
  }
];

export default function PortfolioSelectedWork() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: "(min-width: 768px)",
          reduce:
            "(prefers-reduced-motion: reduce)"
        },
        (context) => {
          const {
            desktop,
            reduce
          } = context.conditions;

          if (reduce) {
            return;
          }

          gsap.fromTo(
            ".psw-title-line",
            {
              y: 34
            },
            {
              y: 0,
              duration: 0.9,
              stagger: 0.08,
              ease:
                "power4.out",

              scrollTrigger: {
                trigger:
                  ".psw-title",
                start:
                  "top 88%",
                toggleActions:
                  "play none none reverse"
              }
            }
          );

          const cards =
            gsap.utils.toArray(
              ".psw-project-card"
            );

          cards.forEach(
            (
              card,
              index
            ) => {
              const media =
                card.querySelector(
                  ".psw-project-media"
                );

              const image =
                card.querySelector(
                  ".psw-project-media img"
                );

              const meta =
                card.querySelector(
                  ".psw-project-meta"
                );

              gsap.fromTo(
                media,
                {
                  clipPath:
                    index % 2 === 0
                      ? "inset(0 0 100% 0)"
                      : "inset(100% 0 0 0)"
                },
                {
                  clipPath:
                    "inset(0 0 0% 0)",
                  duration: 1.05,
                  ease:
                    "power4.inOut",

                  scrollTrigger: {
                    trigger: card,
                    start:
                      "top 90%",
                    toggleActions:
                      "play none none reverse"
                  }
                }
              );

              gsap.fromTo(
                meta,
                {
                  y: 18,
                  autoAlpha: 0
                },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.65,
                  delay: 0.12,
                  ease:
                    "power3.out",

                  scrollTrigger: {
                    trigger: card,
                    start:
                      "top 90%",
                    toggleActions:
                      "play none none reverse"
                  }
                }
              );

              if (desktop) {
                gsap.fromTo(
                  image,
                  {
                    yPercent: -3,
                    scale: 1.055
                  },
                  {
                    yPercent: 3,
                    scale: 1.055,
                    ease: "none",

                    scrollTrigger: {
                      trigger: card,
                      start:
                        "top bottom",
                      end:
                        "bottom top",
                      scrub: 1.1
                    }
                  }
                );
              }
            }
          );
        }
      );
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="psw-section"
      ref={sectionRef}
    >
      <div className="psw-shell">
        <header className="psw-intro">
          <div className="psw-title">
            <div>
              <span className="psw-title-line">
                SELECTED
              </span>
            </div>

            <div>
              <span className="psw-title-line">
                WORK
              </span>
            </div>
          </div>
        </header>

        <div className="psw-project-stage">
          {projects.map(
            (project) => (
              <article
                className={`psw-project-card ${project.className}`}
                key={project.name}
              >
                <div className="psw-project-media">
                  <img
                    src={project.image}
                    alt={project.name}
                  />
                </div>

                <div className="psw-project-meta">
                  <h3>
                    {project.name}
                  </h3>

                  <span>
                    {project.category}
                  </span>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}