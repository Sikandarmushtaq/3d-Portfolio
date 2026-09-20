import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./PortfolioInsideBuild.css";

gsap.registerPlugin(ScrollTrigger);

const systems = [
  {
    label: "PRODUCT",
    className: "product"
  },
  {
    label: "FRONTEND",
    className: "frontend"
  },
  {
    label: "BACKEND",
    className: "backend"
  },
  {
    label: "DATA",
    className: "data"
  },
  {
    label: "AI",
    className: "ai"
  },
  {
    label: "CLOUD",
    className: "cloud"
  }
];

export default function PortfolioInsideBuild() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".pib-title-line",
          ".pib-heading-copy",
          ".pib-system-tag",
          ".pib-origin"
        ],
        {
          clearProps:
            "opacity,visibility"
        }
      );

      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      if (reducedMotion) {
        return;
      }

      gsap.fromTo(
        ".pib-title-line",
        {
          y: 34
        },
        {
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",

          scrollTrigger: {
            trigger:
              ".pib-heading",
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
        ".pib-heading-copy",
        {
          y: 22
        },
        {
          y: 0,
          duration: 0.72,
          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".pib-heading-copy",
            start:
              "top 91%",
            toggleActions:
              "play none none reverse",
            invalidateOnRefresh:
              true
          }
        }
      );

      gsap.fromTo(
        ".pib-wire",
        {
          strokeDasharray: 1000,
          strokeDashoffset: 1000
        },
        {
          strokeDashoffset: 0,
          duration: 1.45,
          stagger: 0.065,
          ease: "power2.inOut",

          scrollTrigger: {
            trigger:
              ".pib-map",
            start:
              "top 84%",
            toggleActions:
              "play none none reverse",
            invalidateOnRefresh:
              true
          }
        }
      );

      gsap.fromTo(
        ".pib-system-tag",
        {
          y: 22,
          scale: 0.97
        },
        {
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.075,
          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".pib-map",
            start:
              "top 84%",
            toggleActions:
              "play none none reverse",
            invalidateOnRefresh:
              true
          }
        }
      );

      gsap.fromTo(
        ".pib-origin",
        {
          scale: 0.35
        },
        {
          scale: 1,
          duration: 0.55,
          ease:
            "back.out(1.7)",

          scrollTrigger: {
            trigger:
              ".pib-map",
            start:
              "top 84%",
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
      className="pib-section"
      ref={sectionRef}
    >
      <div className="pib-shell">
        <header className="pib-heading">
          <div className="pib-heading-title">
            <div>
              <span className="pib-title-line">
                INSIDE
              </span>
            </div>

            <div>
              <span className="pib-title-line">
                THE BUILD
              </span>
            </div>
          </div>

          <div className="pib-heading-copy">
            <span>
              SYSTEM ARCHITECTURE
            </span>

            <p>
              Interface, application logic,
              data and infrastructure are
              planned as one connected
              product.
            </p>
          </div>
        </header>

        <div className="pib-map">
          <svg
            className="pib-wires"
            viewBox="0 0 1200 620"
            preserveAspectRatio="none"
          >
            <path
              className="pib-wire"
              d="M600 0 C600 90 320 70 205 230"
            />

            <path
              className="pib-wire"
              d="M600 0 C600 110 450 120 420 320"
            />

            <path
              className="pib-wire"
              d="M600 0 C600 110 570 145 595 250"
            />

            <path
              className="pib-wire"
              d="M600 0 C600 120 750 120 775 330"
            />

            <path
              className="pib-wire"
              d="M600 0 C600 90 920 75 980 220"
            />

            <path
              className="pib-wire"
              d="M600 0 C600 170 930 210 1035 430"
            />
          </svg>

          <div className="pib-origin" />

          {systems.map(
            (system) => (
              <div
                className={`pib-system-tag ${system.className}`}
                key={system.label}
              >
                <span>
                  {system.label}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}