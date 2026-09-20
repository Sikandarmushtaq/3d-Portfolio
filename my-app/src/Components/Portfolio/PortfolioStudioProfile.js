import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import sikandarImage from "../../Team Images/sikandar.PNG";

import "./PortfolioStudioProfile.css";

gsap.registerPlugin(ScrollTrigger);

const leftContent = [
  {
    label: "BEFORE THE BUILD",
    title:
      "Understand what the software needs to change.",
    description:
      "The work starts with the business problem, not a list of technologies."
  },
  {
    label: "IN THE WORKFLOW",
    title:
      "Build around how the team actually works.",
    description:
      "Processes, roles and decisions shape the system before features do."
  }
];

const rightContent = [
  {
    label: "DURING DELIVERY",
    title:
      "Fewer handoffs. Clearer decisions.",
    description:
      "Product thinking and engineering stay connected from scope to release."
  },
  {
    label: "BEYOND RELEASE",
    title:
      "Keep the foundation ready for what comes next.",
    description:
      "Clear architecture leaves room for new capabilities without rebuilding the product."
  }
];

function StudioStatement({
  item
}) {
  return (
    <article className="psp-statement">
      <span>
        {item.label}
      </span>

      <strong>
        {item.title}
      </strong>

      <p>
        {item.description}
      </p>
    </article>
  );
}

export default function PortfolioStudioProfile() {
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
            ".psp-title-line",
            ".psp-founder-card",
            ".psp-statement"
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
          ".psp-title-line",
          {
            y: 28
          },
          {
            y: 0,
            duration: 0.88,
            stagger: 0.075,
            ease: "power4.out",

            scrollTrigger: {
              trigger:
                ".psp-title",
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
          ".psp-content-left .psp-statement",
          {
            x: -28,
            y: 10
          },
          {
            x: 0,
            y: 0,
            duration: 0.72,
            stagger: 0.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger:
                ".psp-profile-grid",
              start:
                "top 89%",
              toggleActions:
                "play none none reverse",
              invalidateOnRefresh:
                true
            }
          }
        );

        gsap.fromTo(
          ".psp-founder-card",
          {
            y: 26,
            scale: 0.985
          },
          {
            y: 0,
            scale: 1,
            duration: 0.82,
            ease: "power3.out",

            scrollTrigger: {
              trigger:
                ".psp-profile-grid",
              start:
                "top 89%",
              toggleActions:
                "play none none reverse",
              invalidateOnRefresh:
                true
            }
          }
        );

        gsap.fromTo(
          ".psp-content-right .psp-statement",
          {
            x: 28,
            y: 10
          },
          {
            x: 0,
            y: 0,
            duration: 0.72,
            stagger: 0.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger:
                ".psp-profile-grid",
              start:
                "top 89%",
              toggleActions:
                "play none none reverse",
              invalidateOnRefresh:
                true
            }
          }
        );

        gsap.fromTo(
          ".psp-founder-image img",
          {
            yPercent: -1.5,
            scale: 1.025
          },
          {
            yPercent: 1.5,
            scale: 1.025,
            ease: "none",

            scrollTrigger: {
              trigger:
                ".psp-founder-card",
              start:
                "top bottom",
              end:
                "bottom top",
              scrub: 1.2,
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
      className="psp-section"
      ref={sectionRef}
    >
      <div className="psp-shell">
        <div className="psp-title">
          <div>
            <span className="psp-title-line">
              BUILT
            </span>
          </div>

          <div>
            <span className="psp-title-line">
              WITH INTENT
            </span>
          </div>
        </div>

        <div className="psp-profile-grid">
          <div className="psp-content-column psp-content-left">
            {leftContent.map(
              (item) => (
                <StudioStatement
                  item={item}
                  key={item.label}
                />
              )
            )}
          </div>

          <div className="psp-founder-card">
            <div className="psp-founder-image">
              <img
                src={sikandarImage}
                alt="Sikandar Mushtaq"
              />
            </div>

            <div className="psp-founder-meta">
              <div>
                <strong>
                  Sikandar Mushtaq
                </strong>

                <span>
                  CEO &amp; Founder
                </span>
              </div>

              <small>
                SYNCSOLVO
              </small>
            </div>
          </div>

          <div className="psp-content-column psp-content-right">
            {rightContent.map(
              (item) => (
                <StudioStatement
                  item={item}
                  key={item.label}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}