import {
  useEffect,
  useRef
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./Methodologies.css";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_PROGRESS = 0.16;

const MATRIX_CHARACTERS = [
  "0",
  "1",
  "7",
  "9",
  "A",
  "I",
  "S",
  "Y",
  "N",
  "C",
  "<",
  ">",
  "{",
  "}",
  "/",
  "*",
  "+"
];

const MATRIX_COLUMNS = Array.from(
  { length: 112 },
  (_, columnIndex) =>
    Array.from(
      { length: 22 },
      (_, rowIndex) => {
        const index =
          (
            columnIndex * 7 +
            rowIndex * 11
          ) %
          MATRIX_CHARACTERS.length;

        return MATRIX_CHARACTERS[index];
      }
    ).join("\n")
);

const METHODOLOGIES = [
  {
    title: "Discovery & Strategy",
    description:
      "We translate business goals, user needs and technical priorities into a clear product roadmap before execution begins."
  },
  {
    title: "Design & Engineering",
    description:
      "We design intuitive experiences and engineer scalable systems around your product, operations and long-term growth."
  },
  {
    title: "Quality & Validation",
    description:
      "We validate functionality, performance, security and usability so every release is reliable and ready for real-world use."
  },
  {
    title: "Launch, Scale & Growth",
    description:
      "We deploy with confidence, monitor what matters and continuously improve the product as your business and users grow."
  }
];

export default function Methodologies() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const curveWrapRef = useRef(null);

  const desktopProgressRef = useRef(null);
  const mobileProgressRef = useRef(null);

  const stagesRef = useRef([]);

  const desktopLengthRef = useRef(0);
  const mobileLengthRef = useRef(0);

  const desktopInitialOffsetRef = useRef(0);
  const mobileInitialOffsetRef = useRef(0);

  const touchActiveRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const curve = curveWrapRef.current;

    const desktopProgress =
      desktopProgressRef.current;

    const mobileProgress =
      mobileProgressRef.current;

    if (
      !section ||
      !header ||
      !curve ||
      !desktopProgress ||
      !mobileProgress
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const desktopLength =
      desktopProgress.getTotalLength();

    const mobileLength =
      mobileProgress.getTotalLength();

    desktopLengthRef.current =
      desktopLength;

    mobileLengthRef.current =
      mobileLength;

    desktopInitialOffsetRef.current =
      desktopLength *
      (1 - INITIAL_PROGRESS);

    mobileInitialOffsetRef.current =
      mobileLength *
      (1 - INITIAL_PROGRESS);

    gsap.set(
      desktopProgress,
      {
        strokeDasharray:
          desktopLength,

        strokeDashoffset:
          desktopInitialOffsetRef.current
      }
    );

    gsap.set(
      mobileProgress,
      {
        strokeDasharray:
          mobileLength,

        strokeDashoffset:
          mobileInitialOffsetRef.current
      }
    );

    const validStages =
      stagesRef.current.filter(
        Boolean
      );

    const ctx =
      gsap.context(() => {
        if (reducedMotion) {
          gsap.set(
            [
              header,
              ...validStages
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
            y: 34,
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
              scrub: 0.6
            }
          }
        );

        gsap.fromTo(
          validStages,
          {
            y: 26,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.07,
            ease: "none",

            scrollTrigger: {
              trigger: curve,
              start: "top 69%",
              end: "top 35%",
              scrub: 0.65
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

  const updateProgress = (
    event
  ) => {
    const curve =
      curveWrapRef.current;

    if (!curve) {
      return;
    }

    const isMobile =
      window.matchMedia(
        "(max-width: 700px)"
      ).matches;

    const progressPath =
      isMobile
        ? mobileProgressRef.current
        : desktopProgressRef.current;

    const pathLength =
      isMobile
        ? mobileLengthRef.current
        : desktopLengthRef.current;

    if (
      !progressPath ||
      !pathLength
    ) {
      return;
    }

    const rect =
      curve.getBoundingClientRect();

    const rawProgress =
      (
        event.clientX -
        rect.left
      ) /
      rect.width;

    const progress =
      Math.min(
        1,
        Math.max(
          INITIAL_PROGRESS,
          rawProgress
        )
      );

    const offset =
      pathLength *
      (1 - progress);

    gsap.to(
      progressPath,
      {
        strokeDashoffset:
          offset,

        duration:
          event.pointerType ===
          "mouse"
            ? 0.2
            : 0.1,

        ease: "power2.out",
        overwrite: true
      }
    );
  };

  const resetProgress = (
    isMobile
  ) => {
    const progressPath =
      isMobile
        ? mobileProgressRef.current
        : desktopProgressRef.current;

    const initialOffset =
      isMobile
        ? mobileInitialOffsetRef.current
        : desktopInitialOffsetRef.current;

    if (!progressPath) {
      return;
    }

    gsap.to(
      progressPath,
      {
        strokeDashoffset:
          initialOffset,

        duration: 0.65,
        ease: "power3.out",
        overwrite: true
      }
    );
  };

  const handlePointerDown = (
    event
  ) => {
    if (
      event.pointerType ===
      "mouse"
    ) {
      return;
    }

    touchActiveRef.current =
      true;

    event.currentTarget
      .setPointerCapture?.(
        event.pointerId
      );

    updateProgress(event);
  };

  const handlePointerMove = (
    event
  ) => {
    if (
      event.pointerType ===
      "mouse"
    ) {
      updateProgress(event);

      return;
    }

    if (
      touchActiveRef.current
    ) {
      updateProgress(event);
    }
  };

  const handlePointerUp = (
    event
  ) => {
    if (
      event.pointerType ===
      "mouse"
    ) {
      return;
    }

    touchActiveRef.current =
      false;

    event.currentTarget
      .releasePointerCapture?.(
        event.pointerId
      );

    resetProgress(true);
  };

  const handlePointerCancel = () => {
    touchActiveRef.current =
      false;

    resetProgress(true);
  };

  const handlePointerLeave = (
    event
  ) => {
    if (
      event.pointerType ===
      "mouse"
    ) {
      resetProgress(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="methodologies-section"
    >
      <div
        className="methodologies-spectrum"
        aria-hidden="true"
      >
        <div className="methodologies-spectrum-glow" />

        <div className="methodologies-spectrum-code">
          {MATRIX_COLUMNS.map(
            (
              column,
              index
            ) => (
              <span
                key={index}
              >
                {column}
              </span>
            )
          )}
        </div>
      </div>

      <div className="methodologies-container">

        <header
          ref={headerRef}
          className="methodologies-header"
        >
          <h2>
            Our Methodologies
          </h2>

          <p>
            Every engagement follows a disciplined
            path from business clarity to reliable
            delivery, keeping decisions aligned,
            execution controlled and every product
            ready to scale.
          </p>
        </header>

        <div
          ref={curveWrapRef}
          className="methodologies-curve-wrap"
          style={{
            touchAction: "pan-y"
          }}
          onPointerDown={
            handlePointerDown
          }
          onPointerMove={
            handlePointerMove
          }
          onPointerUp={
            handlePointerUp
          }
          onPointerCancel={
            handlePointerCancel
          }
          onPointerLeave={
            handlePointerLeave
          }
        >
          <svg
            className="methodologies-curve methodologies-curve-desktop"
            viewBox="0 0 1200 430"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="methodologyDesktopSpectrum"
                x1="40"
                y1="0"
                x2="1160"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="#6d28d9"
                />

                <stop
                  offset="22%"
                  stopColor="#9333ea"
                />

                <stop
                  offset="45%"
                  stopColor="#d946ef"
                />

                <stop
                  offset="68%"
                  stopColor="#f43f5e"
                />

                <stop
                  offset="86%"
                  stopColor="#f97316"
                />

                <stop
                  offset="100%"
                  stopColor="#f59e0b"
                />
              </linearGradient>

              <filter
                id="methodologyDesktopGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur
                  stdDeviation="7"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode
                    in="blur"
                  />

                  <feMergeNode
                    in="SourceGraphic"
                  />
                </feMerge>
              </filter>
            </defs>

            <path
              className="methodologies-path-base"
              d="
                M 40 320
                C 185 320,
                  240 312,
                  330 178
                C 398 79,
                  470 62,
                  548 108
                C 650 168,
                  692 296,
                  815 324
                C 930 349,
                  1030 320,
                  1160 320
              "
            />

            <path
              ref={desktopProgressRef}
              className="methodologies-path-progress"
              stroke="url(#methodologyDesktopSpectrum)"
              filter="url(#methodologyDesktopGlow)"
              d="
                M 40 320
                C 185 320,
                  240 312,
                  330 178
                C 398 79,
                  470 62,
                  548 108
                C 650 168,
                  692 296,
                  815 324
                C 930 349,
                  1030 320,
                  1160 320
              "
            />

            <g className="methodology-node">
              <circle
                cx="165"
                cy="315"
                r="14"
              />

              <circle
                cx="165"
                cy="315"
                r="3.5"
                className="methodology-node-dot"
              />

              <line
                x1="165"
                y1="330"
                x2="165"
                y2="398"
              />
            </g>

            <g className="methodology-node">
              <circle
                cx="475"
                cy="77"
                r="14"
              />

              <circle
                cx="475"
                cy="77"
                r="3.5"
                className="methodology-node-dot"
              />

              <line
                x1="475"
                y1="92"
                x2="475"
                y2="398"
              />
            </g>

            <g className="methodology-node">
              <circle
                cx="790"
                cy="319"
                r="14"
              />

              <circle
                cx="790"
                cy="319"
                r="3.5"
                className="methodology-node-dot"
              />

              <line
                x1="790"
                y1="334"
                x2="790"
                y2="398"
              />
            </g>

            <g className="methodology-node">
              <circle
                cx="1050"
                cy="319"
                r="14"
              />

              <circle
                cx="1050"
                cy="319"
                r="3.5"
                className="methodology-node-dot"
              />

              <line
                x1="1050"
                y1="334"
                x2="1050"
                y2="398"
              />
            </g>
          </svg>

          <svg
            className="methodologies-curve methodologies-curve-mobile"
            viewBox="0 0 360 210"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="methodologyMobileSpectrum"
                x1="12"
                y1="0"
                x2="348"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="#6d28d9"
                />

                <stop
                  offset="23%"
                  stopColor="#a855f7"
                />

                <stop
                  offset="48%"
                  stopColor="#d946ef"
                />

                <stop
                  offset="71%"
                  stopColor="#f43f5e"
                />

                <stop
                  offset="88%"
                  stopColor="#f97316"
                />

                <stop
                  offset="100%"
                  stopColor="#f59e0b"
                />
              </linearGradient>

              <filter
                id="methodologyMobileGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur
                  stdDeviation="3.5"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode
                    in="blur"
                  />

                  <feMergeNode
                    in="SourceGraphic"
                  />
                </feMerge>
              </filter>
            </defs>

            <path
              className="methodologies-path-base"
              d="
                M 16 158
                C 66 158,
                  81 154,
                  108 102
                C 130 58,
                  153 42,
                  177 57
                C 208 77,
                  220 146,
                  261 158
                C 293 166,
                  318 158,
                  344 158
              "
            />

            <path
              ref={mobileProgressRef}
              className="methodologies-path-progress"
              stroke="url(#methodologyMobileSpectrum)"
              filter="url(#methodologyMobileGlow)"
              d="
                M 16 158
                C 66 158,
                  81 154,
                  108 102
                C 130 58,
                  153 42,
                  177 57
                C 208 77,
                  220 146,
                  261 158
                C 293 166,
                  318 158,
                  344 158
              "
            />

            <g className="methodology-node">
              <circle
                cx="71"
                cy="155"
                r="7"
              />

              <circle
                cx="71"
                cy="155"
                r="2"
                className="methodology-node-dot"
              />

              <line
                x1="71"
                y1="163"
                x2="71"
                y2="194"
              />
            </g>

            <g className="methodology-node">
              <circle
                cx="157"
                cy="48"
                r="7"
              />

              <circle
                cx="157"
                cy="48"
                r="2"
                className="methodology-node-dot"
              />

              <line
                x1="157"
                y1="56"
                x2="157"
                y2="194"
              />
            </g>

            <g className="methodology-node">
              <circle
                cx="253"
                cy="156"
                r="7"
              />

              <circle
                cx="253"
                cy="156"
                r="2"
                className="methodology-node-dot"
              />

              <line
                x1="253"
                y1="164"
                x2="253"
                y2="194"
              />
            </g>

            <g className="methodology-node">
              <circle
                cx="326"
                cy="158"
                r="7"
              />

              <circle
                cx="326"
                cy="158"
                r="2"
                className="methodology-node-dot"
              />

              <line
                x1="326"
                y1="166"
                x2="326"
                y2="194"
              />
            </g>
          </svg>
        </div>

        <div className="methodologies-stages">
          {METHODOLOGIES.map(
            (
              methodology,
              index
            ) => (
              <article
                key={
                  methodology.title
                }
                ref={(element) => {
                  stagesRef.current[
                    index
                  ] = element;
                }}
                className="methodology-stage"
              >
                <h3>
                  {
                    methodology.title
                  }
                </h3>

                <p>
                  {
                    methodology.description
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