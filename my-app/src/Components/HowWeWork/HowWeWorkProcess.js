import {
  useLayoutEffect,
  useRef,
  useState
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HowWeWorkProcess.css";

gsap.registerPlugin(ScrollTrigger);


const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding what your business is trying to achieve, who the product is being built for, and where the real operational challenges exist. Through focused requirement discovery, workflow analysis and technical evaluation, we turn an early idea into a clear product direction before engineering begins."
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Once the requirements are clear, we translate them into a practical product and technology roadmap. Features are prioritized, architecture is planned, user journeys are defined and the right technologies are selected so every development decision supports both immediate goals and long-term scalability."
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Our designers and engineers turn the approved direction into a working product through structured development cycles. Features are built, integrated and tested continuously, while regular reviews allow us to refine the experience early instead of discovering expensive problems near the end of development."
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "Before launch, the product goes through final quality checks, performance review and deployment preparation to ensure a reliable release. After production, the same foundation allows us to monitor real-world usage, improve performance and evolve the product as your business and customer needs grow."
  }
];


function ProcessDeliveryIllustration({
  stepIndex
}) {
  const activeStep =
    PROCESS_STEPS[stepIndex];

  const discoveryActive =
    stepIndex === 0;

  const strategyActive =
    stepIndex === 1;

  const buildActive =
    stepIndex === 2;

  const launchActive =
    stepIndex === 3;


  return (
    <svg
      className="hww-process-illustration"
      viewBox="0 0 920 470"
      role="img"
      aria-label={`${activeStep.title} process illustration`}
    >
      <g
        className={
          strategyActive
            ? "hww-case-board hww-process-focus is-focus"
            : "hww-case-board hww-process-focus"
        }
      >
        <rect
          x="238"
          y="50"
          width="448"
          height="310"
          rx="10"
          fill="#efe8d5"
          stroke="#22172b"
          strokeWidth="3"
        />

        <text
          x="462"
          y="96"
          textAnchor="middle"
          fill="#5514e8"
          fontSize="25"
          fontWeight="600"
        >
          PRODUCT ROADMAP
        </text>

        <rect
          x="282"
          y="124"
          width="358"
          height="6"
          rx="3"
          fill="#c9c0aa"
        />

        <rect
          x="282"
          y="147"
          width="279"
          height="6"
          rx="3"
          fill="#d5ccb5"
        />

        <rect
          x="282"
          y="170"
          width="320"
          height="6"
          rx="3"
          fill="#d5ccb5"
        />

        <rect
          x="282"
          y="193"
          width="236"
          height="6"
          rx="3"
          fill="#d5ccb5"
        />

        <g className="hww-roadmap-flow">
          <circle
            cx="308"
            cy="239"
            r="14"
            fill="#5514e8"
          />

          <circle
            cx="411"
            cy="239"
            r="14"
            fill="#dc315f"
          />

          <circle
            cx="514"
            cy="239"
            r="14"
            fill="#5514e8"
          />

          <circle
            cx="617"
            cy="239"
            r="14"
            fill="#dc315f"
          />

          <path
            d="M322 239H397M425 239H500M528 239H603"
            stroke="#22172b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />

          <text
            x="308"
            y="244"
            textAnchor="middle"
            fill="#fff"
            fontSize="11"
            fontWeight="700"
          >
            1
          </text>

          <text
            x="411"
            y="244"
            textAnchor="middle"
            fill="#fff"
            fontSize="11"
            fontWeight="700"
          >
            2
          </text>

          <text
            x="514"
            y="244"
            textAnchor="middle"
            fill="#fff"
            fontSize="11"
            fontWeight="700"
          >
            3
          </text>

          <text
            x="617"
            y="244"
            textAnchor="middle"
            fill="#fff"
            fontSize="11"
            fontWeight="700"
          >
            4
          </text>
        </g>
      </g>


      <g
        className={
          discoveryActive
            ? "hww-case-overview hww-process-focus is-focus"
            : "hww-case-overview hww-process-focus"
        }
      >
        <rect
          x="106"
          y="202"
          width="265"
          height="191"
          rx="9"
          fill="#dc315f"
          stroke="#22172b"
          strokeWidth="2"
        />

        <text
          x="238"
          y="242"
          textAnchor="middle"
          fill="#efe8d5"
          fontSize="17"
          fontWeight="500"
        >
          DISCOVERY NOTES
        </text>

        <rect
          x="138"
          y="270"
          width="148"
          height="6"
          rx="3"
          fill="#efe8d5"
        />

        <rect
          x="138"
          y="295"
          width="182"
          height="6"
          rx="3"
          fill="#efe8d5"
        />

        <rect
          x="138"
          y="320"
          width="159"
          height="6"
          rx="3"
          fill="#efe8d5"
        />

        <rect
          x="138"
          y="345"
          width="126"
          height="6"
          rx="3"
          fill="#efe8d5"
        />

        <circle
          cx="323"
          cy="270"
          r="7"
          fill="#171717"
        />

        <circle
          cx="323"
          cy="295"
          r="7"
          fill="#171717"
        />

        <circle
          cx="323"
          cy="320"
          r="7"
          fill="#171717"
        />
      </g>


      <g
        className={
          buildActive
            ? "hww-case-metrics hww-process-focus is-focus"
            : "hww-case-metrics hww-process-focus"
        }
      >
        <rect
          x="512"
          y="158"
          width="238"
          height="135"
          rx="9"
          fill="#171717"
          stroke="#22172b"
          strokeWidth="2"
        />

        <circle
          cx="552"
          cy="201"
          r="15"
          fill="#efe8d5"
        />

        <circle
          cx="631"
          cy="201"
          r="15"
          fill="#efe8d5"
        />

        <circle
          cx="710"
          cy="201"
          r="15"
          fill="#efe8d5"
        />

        <text
          x="552"
          y="206"
          textAnchor="middle"
          fill="#171717"
          fontSize="12"
          fontWeight="700"
        >
          UI
        </text>

        <text
          x="631"
          y="206"
          textAnchor="middle"
          fill="#171717"
          fontSize="12"
          fontWeight="700"
        >
          API
        </text>

        <text
          x="710"
          y="206"
          textAnchor="middle"
          fill="#171717"
          fontSize="11"
          fontWeight="700"
        >
          QA
        </text>

        <rect
          x="533"
          y="235"
          width="43"
          height="5"
          rx="2.5"
          fill="#dc315f"
        />

        <rect
          x="610"
          y="235"
          width="43"
          height="5"
          rx="2.5"
          fill="#5514e8"
        />

        <rect
          x="687"
          y="235"
          width="43"
          height="5"
          rx="2.5"
          fill="#dc315f"
        />

        <rect
          x="533"
          y="257"
          width="58"
          height="4"
          rx="2"
          fill="#efe8d5"
          opacity="0.58"
        />

        <rect
          x="610"
          y="257"
          width="58"
          height="4"
          rx="2"
          fill="#efe8d5"
          opacity="0.58"
        />

        <rect
          x="687"
          y="257"
          width="40"
          height="4"
          rx="2"
          fill="#efe8d5"
          opacity="0.58"
        />
      </g>


      <g className="hww-case-note">
        <rect
          x="306"
          y="302"
          width="174"
          height="128"
          rx="8"
          fill="#5514e8"
          stroke="#22172b"
          strokeWidth="2"
        />

        <text
          x="393"
          y="332"
          textAnchor="middle"
          fill="#efe8d5"
          fontSize="14"
          fontWeight="600"
        >
          ITERATION
        </text>

        <rect
          x="333"
          y="352"
          width="95"
          height="5"
          rx="2.5"
          fill="#efe8d5"
        />

        <rect
          x="333"
          y="375"
          width="118"
          height="5"
          rx="2.5"
          fill="#efe8d5"
        />

        <rect
          x="333"
          y="398"
          width="84"
          height="5"
          rx="2.5"
          fill="#efe8d5"
        />
      </g>


      <g
        className={
          buildActive
            ? "hww-case-checklist hww-process-focus is-focus"
            : "hww-case-checklist hww-process-focus"
        }
      >
        <rect
          x="468"
          y="271"
          width="122"
          height="146"
          rx="8"
          fill="#dc315f"
          stroke="#22172b"
          strokeWidth="2"
        />

        <circle
          cx="493"
          cy="307"
          r="8"
          fill="#efe8d5"
        />

        <circle
          cx="493"
          cy="340"
          r="8"
          fill="#efe8d5"
        />

        <circle
          cx="493"
          cy="373"
          r="8"
          fill="#efe8d5"
        />

        <path
          d="M489 307L492 310L498 303"
          fill="none"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M489 340L492 343L498 336"
          fill="none"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M489 373L492 376L498 369"
          fill="none"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect
          x="511"
          y="304"
          width="53"
          height="5"
          rx="2.5"
          fill="#efe8d5"
        />

        <rect
          x="511"
          y="337"
          width="42"
          height="5"
          rx="2.5"
          fill="#efe8d5"
        />

        <rect
          x="511"
          y="370"
          width="49"
          height="5"
          rx="2.5"
          fill="#efe8d5"
        />
      </g>


      <g
        className={
          launchActive
            ? "hww-case-gauge hww-process-focus is-focus"
            : "hww-case-gauge hww-process-focus"
        }
      >
        <rect
          x="587"
          y="248"
          width="230"
          height="184"
          rx="9"
          fill="#dc315f"
          stroke="#22172b"
          strokeWidth="2"
        />

        <text
          x="702"
          y="282"
          textAnchor="middle"
          fill="#efe8d5"
          fontSize="15"
          fontWeight="600"
        >
          PERFORMANCE
        </text>

        <path
          d="M626 362A76 76 0 0 1 778 362"
          fill="none"
          stroke="#171717"
          strokeWidth="48"
        />

        <path
          d="M626 362A76 76 0 0 1 659 300"
          fill="none"
          stroke="#ef491f"
          strokeWidth="38"
        />

        <path
          d="M659 300A76 76 0 0 1 703 286"
          fill="none"
          stroke="#ef9a26"
          strokeWidth="38"
        />

        <path
          d="M703 286A76 76 0 0 1 748 303"
          fill="none"
          stroke="#d5db36"
          strokeWidth="38"
        />

        <path
          d="M748 303A76 76 0 0 1 778 362"
          fill="none"
          stroke="#68d73b"
          strokeWidth="38"
        />

        <g className="hww-case-needle">
          <line
            x1="702"
            y1="362"
            x2="689"
            y2="300"
            stroke="#171717"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <circle
            cx="702"
            cy="362"
            r="8"
            fill="#171717"
          />
        </g>
      </g>


      <g className="hww-case-badge">
        <circle
          cx="397"
          cy="304"
          r="22"
          fill="#171717"
        />

        <text
          x="397"
          y="311"
          textAnchor="middle"
          fill="#efe8d5"
          fontSize="18"
          fontWeight="600"
        >
          ✓
        </text>
      </g>
    </svg>
  );
}


export default function HowWeWorkProcess() {
  const sectionRef =
    useRef(null);

  const stageRef =
    useRef(null);

  const cardRef =
    useRef(null);

  const pinTriggerRef =
    useRef(null);

  const activeIndexRef =
    useRef(0);

  const [
    activeIndex,
    setActiveIndex
  ] =
    useState(0);


  const setStep = (
    index
  ) => {
    const safeIndex =
      Math.max(
        0,
        Math.min(
          PROCESS_STEPS.length - 1,
          index
        )
      );

    activeIndexRef.current =
      safeIndex;

    setActiveIndex(
      safeIndex
    );
  };


  const changeStep = (
    index
  ) => {
    const trigger =
      pinTriggerRef.current;

    setStep(index);

    if (!trigger) {
      return;
    }

    const start =
      trigger.start;

    const end =
      trigger.end;

    if (
      typeof start !== "number" ||
      typeof end !== "number"
    ) {
      return;
    }

    const stepProgress =
      (
        index +
        0.5
      ) /
      PROCESS_STEPS.length;

    const targetScroll =
      start +
      (
        end -
        start
      ) *
        stepProgress;

    window.scrollTo({
      top:
        Math.round(
          targetScroll
        ),

      behavior: "auto"
    });
  };


  useLayoutEffect(() => {
    const card =
      cardRef.current;

    if (!card) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    const ctx =
      gsap.context(() => {
        const heading =
          card.querySelector(
            ".hww-process-panel-head"
          );

        const divider =
          card.querySelector(
            ".hww-process-divider"
          );

        const description =
          card.querySelector(
            ".hww-process-panel-description"
          );

        const visual =
          card.querySelector(
            ".hww-process-visual"
          );

        const focusItems =
          card.querySelectorAll(
            ".hww-process-focus"
          );

        const activeFocus =
          card.querySelector(
            ".hww-process-focus.is-focus"
          );

        gsap.killTweensOf([
          heading,
          divider,
          description,
          visual,
          ...focusItems
        ]);

        const timeline =
          gsap.timeline();

        timeline
          .fromTo(
            heading,
            {
              y: 16,
              autoAlpha: 0
            },
            {
              y: 0,
              autoAlpha: 1,

              duration: 0.4,

              ease:
                "power3.out"
            }
          )

          .fromTo(
            divider,
            {
              scaleX: 0,

              transformOrigin:
                "left center"
            },
            {
              scaleX: 1,

              duration: 0.46,

              ease:
                "power3.out"
            },
            "-=0.25"
          )

          .fromTo(
            description,
            {
              y: 13,
              autoAlpha: 0
            },
            {
              y: 0,
              autoAlpha: 1,

              duration: 0.44,

              ease:
                "power3.out"
            },
            "-=0.28"
          )

          .fromTo(
            visual,
            {
              y: 18,

              scale: 0.988,

              autoAlpha: 0
            },
            {
              y: 0,

              scale: 1,

              autoAlpha: 1,

              duration: 0.54,

              ease:
                "power4.out"
            },
            "-=0.26"
          );

        gsap.to(
          focusItems,
          {
            opacity: 0.76,

            scale: 0.985,

            transformOrigin:
              "50% 50%",

            duration: 0.32,

            ease:
              "power2.out"
          }
        );

        if (activeFocus) {
          gsap.fromTo(
            activeFocus,
            {
              opacity: 0.82,

              scale: 0.97
            },
            {
              opacity: 1,

              scale: 1.025,

              duration: 0.55,

              ease:
                "power3.out"
            }
          );
        }

        return () => {
          timeline.kill();
        };
      }, card);

    return () => {
      ctx.revert();
    };
  }, [activeIndex]);


  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    const stage =
      stageRef.current;

    if (
      !section ||
      !stage
    ) {
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

            reduceMotion:
              "(prefers-reduced-motion: reduce)"
          },
          (context) => {
            const {
              desktop,
              tablet,
              mobile,
              reduceMotion
            } =
              context.conditions;

            const buttons =
              stage.querySelectorAll(
                ".hww-process-nav-button"
              );

            const card =
              stage.querySelector(
                ".hww-process-panel"
              );

            if (!reduceMotion) {
              const entryTimeline =
                gsap.timeline({
                  paused: true
                });

              entryTimeline
                .fromTo(
                  buttons,
                  {
                    x:
                      desktop
                        ? -26
                        : 0,

                    y:
                      desktop
                        ? 0
                        : 12,

                    autoAlpha: 0
                  },
                  {
                    x: 0,

                    y: 0,

                    autoAlpha: 1,

                    duration:
                      mobile
                        ? 0.38
                        : 0.48,

                    stagger: 0.055,

                    ease:
                      "power3.out"
                  }
                )

                .fromTo(
                  card,
                  {
                    y:
                      mobile
                        ? 16
                        : 24,

                    scale: 0.988,

                    autoAlpha: 0
                  },
                  {
                    y: 0,

                    scale: 1,

                    autoAlpha: 1,

                    duration:
                      mobile
                        ? 0.48
                        : 0.6,

                    ease:
                      "power4.out"
                  },
                  "-=0.24"
                );

              ScrollTrigger.create({
                trigger: stage,

                start:
                  mobile
                    ? "top 92%"
                    : "top 88%",

                animation:
                  entryTimeline,

                toggleActions:
                  "play none none reverse"
              });
            }


            const pinTop =
              desktop
                ? 88
                : tablet
                  ? 72
                  : 64;


            const getPinDistance =
              () => {
                if (desktop) {
                  return (
                    window.innerHeight *
                    3.5
                  );
                }

                if (tablet) {
                  return (
                    window.innerHeight *
                    3.25
                  );
                }

                return (
                  window.innerHeight *
                  3.05
                );
              };


            const pinTrigger =
              ScrollTrigger.create({
                trigger: stage,

                start: () =>
                  `top ${pinTop}px`,

                end: () =>
                  `+=${getPinDistance()}`,

                pin: stage,

                pinSpacing: true,

                anticipatePin: 1,

                invalidateOnRefresh:
                  true,

                onUpdate: (
                  self
                ) => {
                  const index =
                    Math.min(
                      PROCESS_STEPS.length -
                        1,

                      Math.floor(
                        self.progress *
                          PROCESS_STEPS.length
                      )
                    );

                  if (
                    activeIndexRef.current !==
                    index
                  ) {
                    setStep(index);
                  }
                },

                onEnter: (
                  self
                ) => {
                  const index =
                    Math.min(
                      PROCESS_STEPS.length -
                        1,

                      Math.floor(
                        self.progress *
                          PROCESS_STEPS.length
                      )
                    );

                  setStep(index);
                },

                onEnterBack: (
                  self
                ) => {
                  const index =
                    Math.min(
                      PROCESS_STEPS.length -
                        1,

                      Math.floor(
                        self.progress *
                          PROCESS_STEPS.length
                      )
                    );

                  setStep(index);
                },

                onLeaveBack: () => {
                  setStep(0);
                }
              });


            pinTriggerRef.current =
              pinTrigger;


            let motionTimeline =
              null;

            let motionTrigger =
              null;


            if (!reduceMotion) {
              const illustration =
                stage.querySelector(
                  ".hww-process-illustration"
                );

              if (illustration) {
                const q =
                  gsap.utils.selector(
                    illustration
                  );

                motionTimeline =
                  gsap.timeline({
                    paused: true
                  });

                motionTimeline
                  .to(
                    q(
                      ".hww-case-board"
                    ),
                    {
                      y: -4,

                      duration: 4.2,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  )

                  .to(
                    q(
                      ".hww-case-overview"
                    ),
                    {
                      x: 3,

                      y: -4,

                      duration: 3.5,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  )

                  .to(
                    q(
                      ".hww-case-metrics"
                    ),
                    {
                      x: -3,

                      y: -4,

                      duration: 3.9,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  )

                  .to(
                    q(
                      ".hww-case-note"
                    ),
                    {
                      y: -5,

                      duration: 3.1,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  )

                  .to(
                    q(
                      ".hww-case-checklist"
                    ),
                    {
                      y: 4,

                      duration: 3.6,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  )

                  .to(
                    q(
                      ".hww-case-gauge"
                    ),
                    {
                      y: -4,

                      duration: 4,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  )

                  .to(
                    q(
                      ".hww-case-needle"
                    ),
                    {
                      rotation: 28,

                      transformOrigin:
                        "702px 362px",

                      duration: 1.8,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  )

                  .to(
                    q(
                      ".hww-roadmap-flow"
                    ),
                    {
                      x: 3,

                      duration: 2.4,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    },
                    0
                  );


                motionTrigger =
                  ScrollTrigger.create({
                    trigger: section,

                    start: "top bottom",

                    end: "bottom top",

                    onEnter: () => {
                      motionTimeline.play();
                    },

                    onEnterBack: () => {
                      motionTimeline.play();
                    },

                    onLeave: () => {
                      motionTimeline.pause();
                    },

                    onLeaveBack: () => {
                      motionTimeline.pause();
                    }
                  });
              }
            }


            return () => {
              if (
                pinTriggerRef.current ===
                pinTrigger
              ) {
                pinTriggerRef.current =
                  null;
              }

              pinTrigger.kill();

              if (motionTrigger) {
                motionTrigger.kill();
              }

              if (motionTimeline) {
                motionTimeline.kill();
              }
            };
          }
        );
      }, section);


    const refreshFrame =
      window.requestAnimationFrame(
        () => {
          ScrollTrigger.refresh();
        }
      );


    return () => {
      window.cancelAnimationFrame(
        refreshFrame
      );

      pinTriggerRef.current =
        null;

      mm.revert();

      ctx.revert();
    };
  }, []);


  const activeStep =
    PROCESS_STEPS[
      activeIndex
    ];


  return (
    <section
      className="hww-process-section"
      ref={sectionRef}
    >
      <div
        className="hww-process-stage"
        ref={stageRef}
      >
        <div className="hww-shell hww-process-stage-inner">
          <aside className="hww-process-nav-wrap">
            <nav
              className="hww-process-nav"
              aria-label="How we work stages"
            >
              {PROCESS_STEPS.map(
                (
                  step,
                  index
                ) => (
                  <button
                    key={
                      step.number
                    }
                    type="button"
                    aria-current={
                      activeIndex ===
                      index
                        ? "step"
                        : undefined
                    }
                    className={
                      activeIndex ===
                      index
                        ? "hww-process-nav-button is-active"
                        : "hww-process-nav-button"
                    }
                    onClick={() =>
                      changeStep(index)
                    }
                  >
                    <span className="hww-process-nav-number">
                      {step.number}
                    </span>

                    <span className="hww-process-nav-title">
                      {step.title}
                    </span>
                  </button>
                )
              )}
            </nav>
          </aside>


          <div className="hww-process-card-wrap">
            <article
              className="hww-process-panel"
              ref={cardRef}
            >
              <div className="hww-process-panel-head">
                <h2>
                  {activeStep.title}
                </h2>

                <span>
                  {activeStep.number}
                </span>
              </div>


              <div className="hww-process-divider" />


              <p className="hww-process-panel-description">
                {activeStep.description}
              </p>


              <div className="hww-process-visual">
                <ProcessDeliveryIllustration
                  stepIndex={
                    activeIndex
                  }
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}