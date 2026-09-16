import {
  useEffect,
  useRef,
  useState
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ToolsTechnologies.css";

gsap.registerPlugin(ScrollTrigger);

const TECHNOLOGY_CATEGORIES = [
  {
    id: "languages",
    label: "Programming Languages",
    technologies: [
      {
        name: "JavaScript",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        fallback: "JS",
        accent: "#f7df1e"
      },
      {
        name: "TypeScript",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        fallback: "TS",
        accent: "#3178c6"
      },
      {
        name: "Python",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        fallback: "PY",
        accent: "#3776ab"
      },
      {
        name: "Java",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        fallback: "JAVA",
        accent: "#f89820"
      },
      {
        name: "C#",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        fallback: "C#",
        accent: "#68217a"
      },
      {
        name: "C++",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        fallback: "C++",
        accent: "#00599c"
      },
      {
        name: "Swift",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
        fallback: "SWIFT",
        accent: "#f05138"
      },
      {
        name: "Kotlin",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
        fallback: "KT",
        accent: "#7f52ff"
      }
    ]
  },

  {
    id: "frameworks",
    label: "Frameworks & Platforms",
    technologies: [
      {
        name: "React",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        fallback: "REACT",
        accent: "#61dafb"
      },
      {
        name: "Next.js",
        icon:
          "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
        fallback: "NEXT",
        accent: "#ffffff"
      },
      {
        name: "Angular",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        fallback: "NG",
        accent: "#dd0031"
      },
      {
        name: "Node.js",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        fallback: "NODE",
        accent: "#5fa04e"
      },
      {
        name: "Express.js",
        icon:
          "https://cdn.simpleicons.org/express/FFFFFF",
        fallback: "EX",
        accent: "#ffffff"
      },
      {
        name: "ASP.NET Core",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        fallback: ".NET",
        accent: "#512bd4"
      },
      {
        name: "Django",
        icon:
          "https://cdn.simpleicons.org/django/44B78B",
        fallback: "DJ",
        accent: "#44b78b"
      },
      {
        name: "Spring Boot",
        icon:
          "https://cdn.simpleicons.org/springboot/6DB33F",
        fallback: "SPRING",
        accent: "#6db33f"
      },
      {
        name: "Flutter",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
        fallback: "FL",
        accent: "#54c5f8"
      },
      {
        name: "MongoDB",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        fallback: "MDB",
        accent: "#47a248"
      },
      {
        name: "PostgreSQL",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        fallback: "PG",
        accent: "#4169e1"
      }
    ]
  },

  {
    id: "cloud",
    label: "Cloud & DevOps",
    technologies: [
      {
        name: "Amazon Web Services",
        icon:
          "https://cdn.simpleicons.org/amazonwebservices/FF9900",
        fallback: "AWS",
        accent: "#ff9900"
      },
      {
        name: "Microsoft Azure",
        icon:
          "https://cdn.simpleicons.org/microsoftazure/0078D4",
        fallback: "AZURE",
        accent: "#0078d4"
      },
      {
        name: "Google Cloud",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        fallback: "GCP",
        accent: "#4285f4"
      },
      {
        name: "Docker",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        fallback: "DK",
        accent: "#2496ed"
      }
    ]
  },

  {
    id: "ai",
    label: "AI & Machine Learning",
    technologies: [
      {
        name: "OpenAI",
        icon:
          "https://cdn.simpleicons.org/openai/10A37F",
        fallback: "AI",
        accent: "#10a37f"
      },
      {
        name: "TensorFlow",
        icon:
          "https://cdn.simpleicons.org/tensorflow/FF6F00",
        fallback: "TF",
        accent: "#ff6f00"
      },
      {
        name: "PyTorch",
        icon:
          "https://cdn.simpleicons.org/pytorch/EE4C2C",
        fallback: "PT",
        accent: "#ee4c2c"
      },
      {
        name: "Scikit-learn",
        icon:
          "https://cdn.simpleicons.org/scikitlearn/F7931E",
        fallback: "SK",
        accent: "#f7931e"
      }
    ]
  }
];

function TechnologyIcon({
  technology
}) {
  const [failed, setFailed] =
    useState(false);

  if (failed) {
    return (
      <span className="technology-icon-fallback">
        {technology.fallback}
      </span>
    );
  }

  return (
    <img
      className="technology-logo"
      src={technology.icon}
      alt={`${technology.name} logo`}
      loading="lazy"
      draggable="false"
      onError={() =>
        setFailed(true)
      }
    />
  );
}

export default function ToolsTechnologies() {
  const sectionRef =
    useRef(null);

  const headerRef =
    useRef(null);

  const tabsRef =
    useRef(null);

  const gridRef =
    useRef(null);

  const [activeCategory, setActiveCategory] =
    useState("languages");

  const currentCategory =
    TECHNOLOGY_CATEGORIES.find(
      (category) =>
        category.id ===
        activeCategory
    );

  useEffect(() => {
    const section =
      sectionRef.current;

    const header =
      headerRef.current;

    const tabs =
      tabsRef.current;

    const grid =
      gridRef.current;

    if (
      !section ||
      !header ||
      !tabs ||
      !grid
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const ctx =
      gsap.context(() => {
        if (reducedMotion) {
          gsap.set(
            [
              header,
              tabs,
              grid
            ],
            {
              y: 0,
              autoAlpha: 1
            }
          );

          return;
        }

        gsap.fromTo(
          header,
          {
            y: 55,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            ease: "none",

            scrollTrigger: {
              trigger: header,
              start: "top 92%",
              end: "top 68%",
              scrub: 0.65
            }
          }
        );

        gsap.fromTo(
          tabs.children,
          {
            y: 36,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.07,
            ease: "none",

            scrollTrigger: {
              trigger: tabs,
              start: "top 91%",
              end: "top 66%",
              scrub: 0.65
            }
          }
        );

        gsap.fromTo(
          grid,
          {
            y: 50,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            ease: "none",

            scrollTrigger: {
              trigger: grid,
              start: "top 92%",
              end: "top 67%",
              scrub: 0.7
            }
          }
        );
      }, section);

    const refreshFrame =
      requestAnimationFrame(
        () => {
          ScrollTrigger.refresh();
        }
      );

    return () => {
      cancelAnimationFrame(
        refreshFrame
      );

      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const grid =
      gridRef.current;

    if (!grid) return;

    const cards =
      grid.querySelectorAll(
        ".technology-card"
      );

    if (!cards.length) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      gsap.set(cards, {
        y: 0,
        scale: 1,
        autoAlpha: 1
      });

      return;
    }

    gsap.killTweensOf(cards);

    gsap.fromTo(
      cards,
      {
        y: 24,
        scale: 0.985,
        autoAlpha: 0
      },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.55,
        stagger: 0.055,
        ease: "power3.out"
      }
    );
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      className="technologies-section"
    >
      <div className="technologies-container">

        <header
          ref={headerRef}
          className="technologies-header"
        >
          <h2>
            Technologies We Use
          </h2>

          <p>
            At SoftSync, every technology
            has a purpose. We combine proven
            engineering frameworks, cloud
            infrastructure and intelligent
            tooling to build software that
            stays fast, secure, maintainable
            and ready to scale.
          </p>
        </header>

        <div
          ref={tabsRef}
          className="technology-tabs"
          role="tablist"
          aria-label="Technology categories"
        >
          {TECHNOLOGY_CATEGORIES.map(
            (category) => {
              const isActive =
                activeCategory ===
                category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={`technology-tab ${
                    isActive
                      ? "technology-tab-active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      category.id
                    )
                  }
                  role="tab"
                  aria-selected={
                    isActive
                  }
                >
                  <span className="technology-tab-inner">
                    {category.label}
                  </span>
                </button>
              );
            }
          )}
        </div>

        <div
          ref={gridRef}
          key={activeCategory}
          className="technology-grid"
        >
          {currentCategory.technologies.map(
            (technology) => (
              <article
                key={
                  technology.name
                }
                className="technology-card"
                style={{
                  "--tech-accent":
                    technology.accent
                }}
              >
                <div className="technology-card-visual">

                  <span className="technology-card-accent" />

                  <TechnologyIcon
                    technology={
                      technology
                    }
                  />
                </div>

                <h3>
                  {technology.name}
                </h3>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}