import {
  useLayoutEffect,
  useRef
} from "react";

import {
  Link
} from "react-router-dom";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./PackagesOverview.css";

gsap.registerPlugin(
  ScrollTrigger
);


function PackagesDashboardVisual() {
  return (
    <svg
      className="packages-dashboard-svg"
      viewBox="0 0 680 500"
      role="img"
      aria-label="Scalable product dashboard illustration"
    >
      <defs>
        <linearGradient
          id="packagesDashboardBg"
          x1="40"
          y1="20"
          x2="640"
          y2="480"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#3610C9"
          />

          <stop
            offset="0.55"
            stopColor="#5B16E7"
          />

          <stop
            offset="1"
            stopColor="#9B2EE9"
          />
        </linearGradient>

        <filter
          id="packagesDashboardGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            stdDeviation="20"
          />
        </filter>
      </defs>

      <rect
        x="10"
        y="10"
        width="660"
        height="480"
        rx="26"
        fill="url(#packagesDashboardBg)"
      />

      <circle
        className="packages-dashboard-glow"
        cx="560"
        cy="115"
        r="90"
        fill="#F02D84"
        opacity="0.18"
        filter="url(#packagesDashboardGlow)"
      />

      <circle
        className="packages-dashboard-glow"
        cx="130"
        cy="385"
        r="85"
        fill="#7F5CFF"
        opacity="0.3"
        filter="url(#packagesDashboardGlow)"
      />

      <g className="packages-dashboard-device">
        <rect
          x="125"
          y="115"
          width="430"
          height="265"
          rx="20"
          fill="#111111"
        />

        <rect
          x="140"
          y="132"
          width="400"
          height="230"
          rx="12"
          fill="#EEE8D8"
        />

        <rect
          x="140"
          y="132"
          width="400"
          height="34"
          rx="12"
          fill="#DDD5C1"
        />

        <circle
          cx="160"
          cy="149"
          r="4"
          fill="#5B16E7"
        />

        <circle
          cx="174"
          cy="149"
          r="4"
          fill="#E32C78"
        />

        <circle
          cx="188"
          cy="149"
          r="4"
          fill="#171717"
        />

        <rect
          x="164"
          y="188"
          width="88"
          height="150"
          rx="10"
          fill="#151515"
        />

        <rect
          x="180"
          y="208"
          width="50"
          height="7"
          rx="3.5"
          fill="#6A28E8"
        />

        <rect
          x="180"
          y="229"
          width="40"
          height="6"
          rx="3"
          fill="#D8D0BC"
        />

        <rect
          x="180"
          y="250"
          width="52"
          height="6"
          rx="3"
          fill="#D8D0BC"
        />

        <rect
          x="180"
          y="271"
          width="35"
          height="6"
          rx="3"
          fill="#D8D0BC"
        />

        <rect
          x="180"
          y="292"
          width="45"
          height="6"
          rx="3"
          fill="#D8D0BC"
        />

        <g className="packages-dashboard-card">
          <rect
            x="276"
            y="190"
            width="235"
            height="62"
            rx="10"
            fill="#FFFFFF"
          />

          <rect
            x="295"
            y="207"
            width="80"
            height="8"
            rx="4"
            fill="#5B16E7"
          />

          <rect
            x="295"
            y="226"
            width="150"
            height="6"
            rx="3"
            fill="#C9C0A8"
          />
        </g>

        <g className="packages-dashboard-card">
          <rect
            x="276"
            y="266"
            width="110"
            height="72"
            rx="10"
            fill="#FFFFFF"
          />

          <path
            className="packages-dashboard-graph"
            d="M293 316L309 297L325 305L343 281L368 316"
            stroke="#E72B7B"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        <g className="packages-dashboard-card">
          <rect
            x="401"
            y="266"
            width="110"
            height="72"
            rx="10"
            fill="#FFFFFF"
          />

          <rect
            x="422"
            y="283"
            width="66"
            height="8"
            rx="4"
            fill="#5B16E7"
          />

          <rect
            x="422"
            y="302"
            width="48"
            height="7"
            rx="3.5"
            fill="#C6BEA9"
          />

          <rect
            x="422"
            y="318"
            width="58"
            height="7"
            rx="3.5"
            fill="#C6BEA9"
          />
        </g>

        <path
          d="M105 390H575"
          stroke="#191919"
          strokeWidth="16"
          strokeLinecap="round"
        />

        <path
          d="M175 390L198 408H482L505 390"
          fill="#262626"
        />
      </g>

      <g className="packages-dashboard-bubble-left">
        <rect
          x="78"
          y="78"
          width="104"
          height="58"
          rx="20"
          fill="#171717"
        />

        <path
          d="M102 99H158M102 113H146"
          stroke="#E9E2D0"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M112 136L100 153L128 136"
          fill="#171717"
        />
      </g>

      <g className="packages-dashboard-bubble-right">
        <rect
          x="500"
          y="80"
          width="112"
          height="62"
          rx="21"
          fill="#E52E79"
        />

        <path
          d="M526 102H586M526 117H575"
          stroke="#F8F1DE"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M570 142L587 159L583 139"
          fill="#E52E79"
        />
      </g>
    </svg>
  );
}


export default function PackagesOverview() {
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

    if (reducedMotion) {
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

            mobile:
              "(max-width: 900px)"
          },
          (context) => {
            const {
              desktop
            } =
              context.conditions;

            const copy =
              section.querySelector(
                ".packages-overview-copy"
              );

            const visual =
              section.querySelector(
                ".packages-overview-visual"
              );

            const copyItems =
              copy
                ? copy.querySelectorAll(
                    ".packages-section-kicker, h2, p, .packages-outline-button"
                  )
                : [];

            const reveal =
              gsap.timeline({
                paused: true
              });

            reveal.fromTo(
              copyItems,
              {
                x:
                  desktop
                    ? -38
                    : 0,

                y:
                  desktop
                    ? 0
                    : 24,

                autoAlpha: 0
              },
              {
                x: 0,

                y: 0,

                autoAlpha: 1,

                duration:
                  desktop
                    ? 0.72
                    : 0.56,

                stagger:
                  desktop
                    ? 0.09
                    : 0.065,

                ease:
                  "power3.out"
              }
            );

            reveal.fromTo(
              visual,
              {
                x:
                  desktop
                    ? 55
                    : 0,

                y:
                  desktop
                    ? 10
                    : 30,

                scale:
                  desktop
                    ? 0.965
                    : 0.985,

                autoAlpha: 0,

                filter:
                  "blur(5px)"
              },
              {
                x: 0,

                y: 0,

                scale: 1,

                autoAlpha: 1,

                filter:
                  "blur(0px)",

                duration:
                  desktop
                    ? 0.85
                    : 0.65,

                ease:
                  "power3.out"
              },
              desktop
                ? "-=0.52"
                : "-=0.35"
            );

            ScrollTrigger.create({
              trigger: section,

              start:
                desktop
                  ? "top 80%"
                  : "top 88%",

              animation:
                reveal,

              toggleActions:
                "play none none reverse"
            });


            const motion =
              gsap.timeline({
                paused: true
              });

            motion.to(
              ".packages-dashboard-device",
              {
                y:
                  desktop
                    ? -7
                    : -4,

                duration: 4.5,

                repeat: -1,

                yoyo: true,

                ease:
                  "sine.inOut"
              },
              0
            );

            motion.to(
              ".packages-dashboard-card",
              {
                y:
                  desktop
                    ? -5
                    : -2,

                duration: 2.7,

                repeat: -1,

                yoyo: true,

                stagger: 0.2,

                ease:
                  "sine.inOut"
              },
              0
            );

            motion.to(
              ".packages-dashboard-bubble-left",
              {
                x:
                  desktop
                    ? 5
                    : 2,

                y:
                  desktop
                    ? -6
                    : -3,

                duration: 4,

                repeat: -1,

                yoyo: true,

                ease:
                  "sine.inOut"
              },
              0
            );

            motion.to(
              ".packages-dashboard-bubble-right",
              {
                x:
                  desktop
                    ? -5
                    : -2,

                y:
                  desktop
                    ? -6
                    : -3,

                duration: 4.6,

                repeat: -1,

                yoyo: true,

                ease:
                  "sine.inOut"
              },
              0
            );

            motion.fromTo(
              ".packages-dashboard-graph",
              {
                strokeDashoffset:
                  180
              },
              {
                strokeDashoffset:
                  0,

                duration: 2,

                repeat: -1,

                repeatDelay: 0.8,

                ease:
                  "power2.inOut"
              },
              0
            );

            motion.to(
              ".packages-dashboard-glow",
              {
                opacity: 0.48,

                duration: 2.5,

                repeat: -1,

                yoyo: true,

                stagger: 0.5,

                ease:
                  "sine.inOut"
              },
              0
            );

            const motionTrigger =
              ScrollTrigger.create({
                trigger: section,

                start:
                  "top bottom",

                end:
                  "bottom top",

                onEnter:
                  () =>
                    motion.play(),

                onEnterBack:
                  () =>
                    motion.play(),

                onLeave:
                  () =>
                    motion.pause(),

                onLeaveBack:
                  () =>
                    motion.pause()
              });

            return () => {
              motionTrigger.kill();

              motion.kill();

              reveal.kill();
            };
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
      className="packages-overview-section"
      ref={sectionRef}
    >
      <div className="packages-section-shell packages-overview-grid">
        <div className="packages-section-copy packages-overview-copy">
          <span className="packages-section-kicker">
            Structured For Growth
          </span>

          <h2>
            Clear Scope. Flexible Engagement.
          </h2>

          <p>
            Packages make it easier to understand
            where a project can begin while leaving
            room for the requirements that make your
            business different.
          </p>

          <p>
            Whether you need a company website,
            advanced digital platform, SaaS product
            or custom software, the engagement can
            be shaped around the right technical
            depth.
          </p>

          <Link
            to="/contact"
            className="packages-outline-button"
          >
            Talk About Your Project
          </Link>
        </div>

        <div className="packages-visual-frame packages-overview-visual">
          <PackagesDashboardVisual />
        </div>
      </div>
    </section>
  );
}