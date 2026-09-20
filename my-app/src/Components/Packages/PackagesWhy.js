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

import "./PackagesWhy.css";

gsap.registerPlugin(
  ScrollTrigger
);


function PackagesWhyVisual() {
  return (
    <svg
      className="packages-why-svg"
      viewBox="0 0 680 500"
      role="img"
      aria-label="Digital strategy and collaboration illustration"
    >
      <defs>
        <linearGradient
          id="packagesWhyBg"
          x1="30"
          y1="20"
          x2="650"
          y2="480"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#DA2F69"
          />

          <stop
            offset="0.56"
            stopColor="#BB286F"
          />

          <stop
            offset="1"
            stopColor="#6B19DA"
          />
        </linearGradient>

        <filter
          id="packagesWhyGlow"
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
        fill="url(#packagesWhyBg)"
      />

      <circle
        className="packages-why-glow"
        cx="340"
        cy="170"
        r="100"
        fill="#FFF3D8"
        opacity="0.26"
        filter="url(#packagesWhyGlow)"
      />

      <g className="packages-why-top-bubble">
        <path
          d="M210 105C210 78 232 56 259 56H421C448 56 470 78 470 105V181C470 208 448 230 421 230H353L317 267L311 230H259C232 230 210 208 210 181V105Z"
          fill="#EFE8D5"
        />

        <rect
          x="276"
          y="102"
          width="128"
          height="82"
          rx="10"
          fill="#151515"
        />

        <rect
          x="289"
          y="115"
          width="102"
          height="56"
          rx="7"
          fill="#DDD5BE"
        />

        <path
          d="M314 185H366"
          stroke="#151515"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M300 196H380"
          stroke="#151515"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>

      <g className="packages-why-left-bubble">
        <path
          d="M58 288C58 252 87 223 123 223H236C272 223 301 252 301 288V330C301 366 272 395 236 395H185L145 430L143 395H123C87 395 58 366 58 330V288Z"
          fill="#5318DF"
        />

        <g className="packages-why-gear">
          <circle
            cx="180"
            cy="310"
            r="48"
            fill="#151515"
          />

          <circle
            cx="180"
            cy="310"
            r="22"
            fill="#EEE6CF"
          />

          <path
            d="M180 250V268M180 352V370M120 310H138M222 310H240M137 267L150 280M210 340L223 353M223 267L210 280M150 340L137 353"
            stroke="#EEE6CF"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </g>
      </g>

      <g className="packages-why-right-bubble">
        <path
          d="M375 270C375 237 402 210 435 210H560C593 210 620 237 620 270V327C620 360 593 387 560 387H522L548 423L495 387H435C402 387 375 360 375 327V270Z"
          fill="#5318DF"
        />

        <path
          className="packages-why-check"
          d="M459 265L481 286L524 244"
          stroke="#EFE7D0"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <path
          d="M451 324H544"
          stroke="#EFE7D0"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M463 344H532"
          stroke="#EFE7D0"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>
    </svg>
  );
}


export default function PackagesWhy() {
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
                ".packages-why-visual"
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
              ".packages-why-top-bubble",
              {
                y:
                  desktop
                    ? -8
                    : -4,

                duration: 4.2,

                repeat: -1,

                yoyo: true,

                ease:
                  "sine.inOut"
              },
              0
            );

            motion.to(
              ".packages-why-left-bubble",
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
              ".packages-why-right-bubble",
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

            motion.to(
              ".packages-why-gear",
              {
                rotation: -360,

                transformOrigin:
                  "50% 50%",

                duration:
                  desktop
                    ? 15
                    : 20,

                repeat: -1,

                ease:
                  "none"
              },
              0
            );

            motion.fromTo(
              ".packages-why-check",
              {
                strokeDashoffset:
                  120
              },
              {
                strokeDashoffset:
                  0,

                duration: 1.8,

                repeat: -1,

                repeatDelay: 1,

                ease:
                  "power2.inOut"
              },
              0
            );

            motion.to(
              ".packages-why-glow",
              {
                opacity: 0.55,

                duration: 2.5,

                repeat: -1,

                yoyo: true,

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
      className="packages-why-section"
      ref={sectionRef}
    >
      <div className="packages-section-shell packages-why-grid">
        <div className="packages-visual-frame packages-why-visual">
          <PackagesWhyVisual />
        </div>

        <div className="packages-section-copy">
          <span className="packages-section-kicker">
            Built For Clarity
          </span>

          <h2>
            Why Choose SyncSolvo Packages?
          </h2>

          <p>
            A package should make the buying process
            clearer, not limit the solution. Our
            approach provides a practical starting
            point while keeping technical decisions
            connected to the actual product and
            business requirements.
          </p>

          <p>
            Instead of filling packages with
            unnecessary features, the focus remains
            on capabilities that support the outcome
            you are trying to achieve.
          </p>

          <Link
            to="/contact"
            className="packages-outline-button"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}