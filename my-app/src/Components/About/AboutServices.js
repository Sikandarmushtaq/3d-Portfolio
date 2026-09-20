import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./AboutServices.css";

gsap.registerPlugin(
  ScrollTrigger
);

const SERVICES = [
  {
    title: "AI Solutions",
    text:
      "We provide cutting-edge AI solutions including machine learning, natural language processing, and computer vision to transform your business operations. Our team develops intelligent systems that automate processes and unlock new opportunities for growth."
  },
  {
    title: "Web Development",
    text:
      "Crafting high-performance MERN stack applications and immersive 3D websites using React Three Fiber. We specialize in modern frameworks to deliver scalable solutions tailored to your business needs, ensuring seamless user experiences across all devices."
  },
  {
    title: "SaaS Products",
    text:
      "Engineering robust, scalable software-as-a-service platforms tailored for enterprise growth. From architecture to deployment, we build secure and reliable products designed to grow with your business."
  },
  {
    title: "E-Commerce Solutions",
    text:
      "We build powerful e-commerce platforms that deliver exceptional shopping experiences. From custom store development to platform migrations, we create secure, scalable, and feature-rich solutions that drive sales and grow your online business."
  },
  {
    title: "Web Design",
    text:
      "Our web design services focus on creating visually stunning, responsive, and user-friendly websites. We combine modern design principles with 3D animated interfaces and interactive experiences to deliver engaging websites that convert visitors into customers."
  },
  {
    title: "App Development",
    text:
      "We build modern, fast, and scalable mobile applications designed for seamless experiences across devices. From intuitive interfaces to secure APIs and real-time functionality, we develop reliable apps using technologies such as React Native and Flutter."
  }
];

export default function AboutServices() {
  const sectionRef =
    useRef(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const mm =
      gsap.matchMedia();

    const ctx =
      gsap.context(() => {
        mm.add(
          {
            desktop:
              "(min-width: 901px)",
            tablet:
              "(min-width: 601px) and (max-width: 900px)",
            mobile:
              "(max-width: 600px)",
            reducedMotion:
              "(prefers-reduced-motion: reduce)"
          },
          (context) => {
            const {
              desktop,
              tablet,
              mobile,
              reducedMotion
            } =
              context.conditions;

            const title =
              section.querySelector(
                ".about-services-title"
              );

            const cards =
              section.querySelectorAll(
                ".about-service-card"
              );

            if (reducedMotion) {
              gsap.set(
                [
                  title,
                  ...cards
                ],
                {
                  clearProps:
                    "all"
                }
              );

              return;
            }

            const distance =
              desktop
                ? 40
                : tablet
                ? 28
                : 20;

            const timeline =
              gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start:
                    mobile
                      ? "top 91%"
                      : "top 84%",
                  toggleActions:
                    "play none none reverse"
                }
              });

            timeline
              .fromTo(
                title,
                {
                  y: distance,
                  autoAlpha: 0,
                  scale: 0.97,
                  filter:
                    "blur(7px)"
                },
                {
                  y: 0,
                  autoAlpha: 1,
                  scale: 1,
                  filter:
                    "blur(0px)",
                  duration:
                    mobile
                      ? 0.42
                      : 0.54,
                  ease:
                    "power4.out"
                }
              )
              .fromTo(
                cards,
                {
                  y:
                    mobile
                      ? 25
                      : 40,
                  x:
                    desktop
                      ? (
                          index
                        ) => {
                          if (
                            index %
                              3 ===
                            0
                          ) {
                            return -14;
                          }

                          if (
                            index %
                              3 ===
                            2
                          ) {
                            return 14;
                          }

                          return 0;
                        }
                      : 0,
                  scale:
                    mobile
                      ? 0.98
                      : 0.955,
                  rotationX:
                    desktop
                      ? 6
                      : 0,
                  autoAlpha: 0,
                  filter:
                    "blur(4px)"
                },
                {
                  y: 0,
                  x: 0,
                  scale: 1,
                  rotationX: 0,
                  autoAlpha: 1,
                  filter:
                    "blur(0px)",
                  duration:
                    mobile
                      ? 0.36
                      : 0.46,
                  stagger:
                    mobile
                      ? 0.045
                      : 0.065,
                  ease:
                    "power4.out"
                },
                "-=0.28"
              );

            if (desktop) {
              gsap.fromTo(
                section,
                {
                  backgroundPosition:
                    "30% 50%"
                },
                {
                  backgroundPosition:
                    "70% 50%",
                  ease: "none",
                  scrollTrigger: {
                    trigger:
                      section,
                    start:
                      "top bottom",
                    end:
                      "bottom top",
                    scrub: 1.4,
                    invalidateOnRefresh:
                      true
                  }
                }
              );
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

      mm.revert();
      ctx.revert();
    };
  }, []);

  const firstRow =
    SERVICES.slice(
      0,
      3
    );

  const secondRow =
    SERVICES.slice(
      3
    );

  return (
    <section
      ref={sectionRef}
      className="about-services-section"
    >
      <div className="about-services-container">
        <h2 className="about-services-title">
          Services We Offer
        </h2>

        <div className="about-services-grid">
          {firstRow.map(
            (service) => (
              <article
                className="about-service-card"
                key={service.title}
              >
                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>
              </article>
            )
          )}
        </div>

        <div className="about-services-grid">
          {secondRow.map(
            (service) => (
              <article
                className="about-service-card"
                key={service.title}
              >
                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}