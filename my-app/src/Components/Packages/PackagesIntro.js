import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./PackagesIntro.css";

gsap.registerPlugin(
  ScrollTrigger
);


export function PackagesInfrastructureVisual() {
  return (
    <svg
      className="packages-infrastructure-svg service-page-svg"
      viewBox="0 0 680 500"
      role="img"
      aria-label="Digital platform and infrastructure illustration"
    >
      <defs>
        <linearGradient
          id="packagesIntroBg"
          x1="30"
          y1="20"
          x2="650"
          y2="480"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#DE286B"
          />

          <stop
            offset="0.55"
            stopColor="#8A1FA7"
          />

          <stop
            offset="1"
            stopColor="#5015DB"
          />
        </linearGradient>

        <linearGradient
          id="packagesWindow"
          x1="230"
          y1="100"
          x2="445"
          y2="295"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#FBF6E8"
          />

          <stop
            offset="1"
            stopColor="#DCD4BD"
          />
        </linearGradient>

        <filter
          id="packagesGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            stdDeviation="18"
          />
        </filter>
      </defs>

      <rect
        x="10"
        y="10"
        width="660"
        height="480"
        rx="26"
        fill="url(#packagesIntroBg)"
      />

      <circle
        className="packages-intro-glow"
        cx="125"
        cy="135"
        r="80"
        fill="#5C15E8"
        opacity="0.45"
        filter="url(#packagesGlow)"
      />

      <circle
        className="packages-intro-glow"
        cx="560"
        cy="345"
        r="85"
        fill="#D62D77"
        opacity="0.35"
        filter="url(#packagesGlow)"
      />

      <path
        className="packages-intro-cloud"
        d="M110 195C110 164 135 139 166 139H190C198 106 228 82 264 82C307 82 342 116 343 159H367C399 159 425 185 425 217C425 249 399 275 367 275H167C135 275 110 249 110 217V195Z"
        fill="#4E1CDF"
      />

      <g className="packages-intro-window">
        <rect
          x="215"
          y="86"
          width="250"
          height="215"
          rx="18"
          fill="#121212"
        />

        <rect
          x="226"
          y="100"
          width="228"
          height="188"
          rx="12"
          fill="url(#packagesWindow)"
        />

        <path
          d="M226 112C226 105.373 231.373 100 238 100H442C448.627 100 454 105.373 454 112V133H226V112Z"
          fill="#5A18E7"
        />

        <circle
          cx="243"
          cy="116"
          r="5"
          fill="#F4EFD9"
        />

        <circle
          cx="260"
          cy="116"
          r="5"
          fill="#F4EFD9"
        />

        <circle
          cx="277"
          cy="116"
          r="5"
          fill="#F4EFD9"
        />

        <rect
          x="247"
          y="151"
          width="92"
          height="9"
          rx="4.5"
          fill="#CAC1AA"
        />

        <rect
          x="247"
          y="170"
          width="74"
          height="8"
          rx="4"
          fill="#D5CCB7"
        />

        <rect
          x="247"
          y="188"
          width="52"
          height="8"
          rx="4"
          fill="#D5CCB7"
        />

        <g className="packages-intro-gear">
          <circle
            cx="369"
            cy="206"
            r="48"
            fill="#181818"
          />

          <circle
            cx="369"
            cy="206"
            r="21"
            fill="#E9E2CF"
          />

          <path
            d="M369 143V162M369 250V269M306 206H325M413 206H432M324 161L338 175M400 237L414 251M414 161L400 175M338 237L324 251"
            stroke="#181818"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </g>
      </g>

      <path
        className="packages-intro-connector"
        d="M338 301V345"
        stroke="#F4EFD9"
        strokeWidth="5"
        strokeDasharray="8 8"
      />

      <path
        className="packages-intro-connector"
        d="M194 274V345"
        stroke="#F4EFD9"
        strokeWidth="5"
        strokeDasharray="8 8"
      />

      <path
        className="packages-intro-connector"
        d="M485 274V345"
        stroke="#F4EFD9"
        strokeWidth="5"
        strokeDasharray="8 8"
      />

      <g className="packages-server-stack">
        <rect
          x="88"
          y="345"
          width="158"
          height="41"
          rx="7"
          fill="#EEE8D7"
        />

        <rect
          x="99"
          y="355"
          width="136"
          height="21"
          rx="4"
          fill="#151515"
        />

        <circle
          className="packages-server-led"
          cx="118"
          cy="365"
          r="4"
          fill="#641BF2"
        />

        <circle
          className="packages-server-led"
          cx="134"
          cy="365"
          r="4"
          fill="#8D3CF3"
        />

        <circle
          className="packages-server-led"
          cx="150"
          cy="365"
          r="4"
          fill="#EEE8D7"
        />

        <rect
          x="88"
          y="394"
          width="158"
          height="41"
          rx="7"
          fill="#EEE8D7"
        />

        <rect
          x="99"
          y="404"
          width="136"
          height="21"
          rx="4"
          fill="#151515"
        />
      </g>

      <g className="packages-server-stack">
        <rect
          x="261"
          y="345"
          width="158"
          height="41"
          rx="7"
          fill="#EEE8D7"
        />

        <rect
          x="272"
          y="355"
          width="136"
          height="21"
          rx="4"
          fill="#151515"
        />

        <circle
          className="packages-server-led"
          cx="291"
          cy="365"
          r="4"
          fill="#641BF2"
        />

        <circle
          className="packages-server-led"
          cx="307"
          cy="365"
          r="4"
          fill="#EEE8D7"
        />

        <circle
          className="packages-server-led"
          cx="323"
          cy="365"
          r="4"
          fill="#D62D77"
        />

        <rect
          x="261"
          y="394"
          width="158"
          height="41"
          rx="7"
          fill="#EEE8D7"
        />

        <rect
          x="272"
          y="404"
          width="136"
          height="21"
          rx="4"
          fill="#151515"
        />
      </g>

      <g className="packages-server-stack">
        <rect
          x="434"
          y="345"
          width="158"
          height="41"
          rx="7"
          fill="#EEE8D7"
        />

        <rect
          x="445"
          y="355"
          width="136"
          height="21"
          rx="4"
          fill="#151515"
        />

        <circle
          className="packages-server-led"
          cx="464"
          cy="365"
          r="4"
          fill="#641BF2"
        />

        <circle
          className="packages-server-led"
          cx="480"
          cy="365"
          r="4"
          fill="#8D3CF3"
        />

        <rect
          x="434"
          y="394"
          width="158"
          height="41"
          rx="7"
          fill="#EEE8D7"
        />

        <rect
          x="445"
          y="404"
          width="136"
          height="21"
          rx="4"
          fill="#151515"
        />
      </g>
    </svg>
  );
}


export default function PackagesIntro() {
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

            const visual =
              section.querySelector(
                ".packages-intro-visual"
              );

            const copy =
              section.querySelector(
                ".packages-section-copy"
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
              visual,
              {
                x:
                  desktop
                    ? -55
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
              }
            );

            reveal.fromTo(
              copyItems,
              {
                x:
                  desktop
                    ? 38
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
              },
              desktop
                ? "-=0.5"
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
              ".packages-intro-cloud",
              {
                x:
                  desktop
                    ? 6
                    : 3,

                y:
                  desktop
                    ? -8
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
              ".packages-intro-window",
              {
                y:
                  desktop
                    ? -7
                    : -4,

                duration: 4,

                repeat: -1,

                yoyo: true,

                ease:
                  "sine.inOut"
              },
              0
            );

            motion.to(
              ".packages-intro-gear",
              {
                rotation: 360,

                transformOrigin:
                  "50% 50%",

                duration:
                  desktop
                    ? 14
                    : 19,

                repeat: -1,

                ease:
                  "none"
              },
              0
            );

            motion.to(
              ".packages-intro-connector",
              {
                strokeDashoffset:
                  -32,

                duration: 1.4,

                repeat: -1,

                ease:
                  "none",

                stagger: 0.1
              },
              0
            );

            motion.to(
              ".packages-server-stack",
              {
                y:
                  desktop
                    ? -5
                    : -3,

                duration: 2.8,

                repeat: -1,

                yoyo: true,

                stagger: 0.25,

                ease:
                  "sine.inOut"
              },
              0
            );

            motion.to(
              ".packages-server-led",
              {
                opacity: 0.25,

                duration: 0.65,

                repeat: -1,

                yoyo: true,

                stagger: 0.09,

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
      className="packages-intro-section"
      ref={sectionRef}
    >
      <div className="packages-section-shell packages-intro-grid">
        <div className="packages-visual-frame packages-intro-visual">
          <PackagesInfrastructureVisual />
        </div>

        <div className="packages-section-copy">
          <span className="packages-section-kicker">
            Flexible Engagement
          </span>

          <h2>
            Packages Built Around Real Business Needs
          </h2>

          <p>
            Every business is at a different stage.
            SyncSolvo packages provide clear starting
            points for websites, digital products,
            scalable applications and custom software
            without forcing every project into the
            same scope.
          </p>

          <p>
            The final features, delivery phases and
            technical requirements are confirmed
            around the actual needs of your project.
          </p>

          <a
            href="#packages"
            className="packages-outline-button"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
}