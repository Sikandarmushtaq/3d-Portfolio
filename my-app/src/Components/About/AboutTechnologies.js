import {
  useEffect,
  useRef,
  useState
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./AboutTechnologies.css";

gsap.registerPlugin(
  ScrollTrigger
);

const TECHNOLOGY_CATEGORIES = [
  {
    id: "development",
    label: "Development",
    technologies: [
      {
        name: "React",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        fallback: "REACT",
        accent: "#61dafb"
      },
      {
        name: "Vue",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        fallback: "VUE",
        accent: "#42b883"
      },
      {
        name: "Angular",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        fallback: "NG",
        accent: "#dd0031"
      },
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
        name: "Next.js",
        icon:
          "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
        fallback: "NEXT",
        accent: "#ffffff"
      },
      {
        name: "Node.js",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        fallback: "NODE",
        accent: "#5fa04e"
      },
      {
        name: "MongoDB",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        fallback: "MDB",
        accent: "#47a248"
      },
      {
        name: "Firebase",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        fallback: "FB",
        accent: "#ffca28"
      }
    ]
  },

  {
    id: "mobile",
    label: "Mobile Apps",
    technologies: [
      {
        name: "React Native",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        fallback: "RN",
        accent: "#61dafb"
      },
      {
        name: "Flutter",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
        fallback: "FL",
        accent: "#54c5f8"
      },
      {
        name: "Kotlin",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
        fallback: "KT",
        accent: "#7f52ff"
      },
      {
        name: "Swift",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
        fallback: "SWIFT",
        accent: "#f05138"
      },
      {
        name: "Java",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        fallback: "JAVA",
        accent: "#f89820"
      },
      {
        name: "Firebase",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        fallback: "FB",
        accent: "#ffca28"
      },
      {
        name: "Expo",
        icon:
          "https://cdn.simpleicons.org/expo/FFFFFF",
        fallback: "EXPO",
        accent: "#ffffff"
      },
      {
        name: "Android Studio",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
        fallback: "AS",
        accent: "#3ddc84"
      }
    ]
  },

  {
    id: "product-design",
    label:
      "UI/UX & Product Design",
    technologies: [
      {
        name: "Figma",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        fallback: "FIGMA",
        accent: "#f24e1e"
      },
      {
        name: "FigJam",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        fallback: "FJ",
        accent: "#a259ff"
      },
      {
        name: "Framer",
        icon:
          "https://cdn.simpleicons.org/framer/FFFFFF",
        fallback: "FR",
        accent: "#ffffff"
      },
      {
        name: "ProtoPie",
        icon:
          "https://cdn.simpleicons.org/protopie/FF4D6D",
        fallback: "PP",
        accent: "#ff4d6d"
      },
      {
        name: "Storybook",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
        fallback: "SB",
        accent: "#ff4785"
      },
      {
        name: "Rive",
        icon:
          "https://cdn.simpleicons.org/rive/FFFFFF",
        fallback: "RIVE",
        accent: "#7c3aed"
      },
      {
        name: "Design Systems",
        icon: null,
        fallback: "DS",
        accent: "#8b5cf6"
      },
      {
        name: "Prototyping",
        icon: null,
        fallback: "UX",
        accent: "#ec4899"
      }
    ]
  },

  {
    id: "interactive",
    label:
      "3D & Interactive",
    technologies: [
      {
        name: "Three.js",
        icon:
          "https://cdn.simpleicons.org/threedotjs/FFFFFF",
        fallback: "3JS",
        accent: "#ffffff"
      },
      {
        name:
          "React Three Fiber",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        fallback: "R3F",
        accent: "#61dafb"
      },
      {
        name: "WebGL",
        icon:
          "https://cdn.simpleicons.org/webgl/990000",
        fallback: "GL",
        accent: "#990000"
      },
      {
        name: "Blender",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
        fallback: "BL",
        accent: "#f5792a"
      },
      {
        name: "Spline",
        icon:
          "https://cdn.simpleicons.org/spline/FFFFFF",
        fallback: "SP",
        accent: "#8b5cf6"
      },
      {
        name: "GSAP",
        icon:
          "https://cdn.simpleicons.org/gsap/88CE02",
        fallback: "GSAP",
        accent: "#88ce02"
      },
      {
        name: "GLSL / Shaders",
        icon: null,
        fallback: "GLSL",
        accent: "#5586a4"
      },
      {
        name:
          "Interactive 3D",
        icon: null,
        fallback: "3D",
        accent: "#c084fc"
      }
    ]
  }
];

function TechnologyIcon({
  technology
}) {
  const [
    failed,
    setFailed
  ] =
    useState(false);

  if (
    failed ||
    !technology.icon
  ) {
    return (
      <span className="about-technology-icon-fallback">
        {technology.fallback}
      </span>
    );
  }

  return (
    <img
      className="about-technology-logo"
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

export default function AboutTechnologies() {
  const sectionRef =
    useRef(null);

  const headerRef =
    useRef(null);

  const tabsRef =
    useRef(null);

  const gridRef =
    useRef(null);

  const [
    activeCategory,
    setActiveCategory
  ] =
    useState(
      "development"
    );

  const currentCategory =
    TECHNOLOGY_CATEGORIES.find(
      (category) =>
        category.id ===
        activeCategory
    ) ||
    TECHNOLOGY_CATEGORIES[0];

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
              trigger:
                header,
              start:
                "top 92%",
              end:
                "top 68%",
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
              trigger:
                tabs,
              start:
                "top 91%",
              end:
                "top 66%",
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
              trigger:
                grid,
              start:
                "top 92%",
              end:
                "top 67%",
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

    if (!grid) {
      return;
    }

    const cards =
      grid.querySelectorAll(
        ".about-technology-card"
      );

    if (!cards.length) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      gsap.set(
        cards,
        {
          y: 0,
          scale: 1,
          autoAlpha: 1
        }
      );

      return;
    }

    gsap.killTweensOf(
      cards
    );

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
      className="about-technologies-section"
    >
      <div className="about-technologies-container">
        <header
          ref={headerRef}
          className="about-technologies-header"
        >
          <h2>
            Technologies We Use
          </h2>

          <p>
            At SyncSolvo, every technology has a purpose.
            We combine modern engineering frameworks,
            mobile platforms, product design tools and
            interactive 3D technologies to build digital
            products that are fast, scalable and built
            for real-world use.
          </p>
        </header>

        <div
          ref={tabsRef}
          className="about-technology-tabs"
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
                  className={`about-technology-tab ${
                    isActive
                      ? "about-technology-tab-active"
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
                  <span className="about-technology-tab-inner">
                    {
                      category.label
                    }
                  </span>
                </button>
              );
            }
          )}
        </div>

        <div
          ref={gridRef}
          key={activeCategory}
          className="about-technology-grid"
        >
          {currentCategory.technologies.map(
            (technology) => (
              <article
                key={
                  technology.name
                }
                className="about-technology-card"
                style={{
                  "--tech-accent":
                    technology.accent
                }}
              >
                <div className="about-technology-card-visual">
                  <span
                    className="about-technology-card-accent"
                    aria-hidden="true"
                  />

                  <TechnologyIcon
                    technology={
                      technology
                    }
                  />
                </div>

                <h3>
                  {
                    technology.name
                  }
                </h3>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}