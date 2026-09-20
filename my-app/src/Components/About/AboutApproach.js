import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./AboutApproach.css";

gsap.registerPlugin(
  ScrollTrigger
);

const APPROACH_ITEMS = [
  {
    title: "Initiative",
    text:
      "We take the first step ourselves, solving problems before they become roadblocks."
  },
  {
    title: "Honesty",
    text:
      "Every conversation and update is clear, upfront, and free of hidden agendas."
  },
  {
    title: "Innovation",
    text:
      "We bring fresh ideas and original thinking to everything we build."
  },
  {
    title: "Memorable Impact",
    text:
      "We aim to leave a lasting impression in every project and every interaction."
  },
  {
    title: "Drive for Excellence",
    text:
      "We chase the highest standard with relentless focus and commitment."
  }
];

export default function AboutApproach() {
  const sectionRef =
    useRef(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const ctx =
      gsap.context(() => {
        const title =
          section.querySelector(
            ".about-approach-title"
          );

        const items =
          section.querySelectorAll(
            ".about-approach-item"
          );

        if (reducedMotion) {
          gsap.set(
            [
              title,
              ...items
            ],
            {
              clearProps: "all"
            }
          );

          return;
        }

        const timeline =
          gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions:
                "play none none reverse"
            }
          });

        timeline
          .fromTo(
            title,
            {
              y: 42,
              autoAlpha: 0,
              filter: "blur(7px)"
            },
            {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.55,
              ease: "power4.out"
            }
          )
          .fromTo(
            items,
            {
              y: 25,
              x: -16,
              autoAlpha: 0,
              filter: "blur(4px)"
            },
            {
              y: 0,
              x: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.4,
              stagger: 0.06,
              ease: "power3.out"
            },
            "-=0.3"
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

  return (
    <section
      ref={sectionRef}
      className="about-approach-section"
    >
      <div className="about-section-container">
        <h2 className="about-approach-title">
          Our Approach
        </h2>

        <div className="about-approach-list">
          {APPROACH_ITEMS.map(
            (item) => (
              <article
                className="about-approach-item"
                key={item.title}
              >
                <div className="about-approach-left">
                  <span
                    className="about-approach-dot"
                    aria-hidden="true"
                  />

                  <h3>
                    {item.title}
                  </h3>
                </div>

                <p>
                  {item.text}
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}