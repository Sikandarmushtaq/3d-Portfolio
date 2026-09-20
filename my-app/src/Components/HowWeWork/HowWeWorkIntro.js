import {
  useLayoutEffect,
  useRef
} from "react";

import {
  Link
} from "react-router-dom";

import {
  gsap
} from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./HowWeWorkIntro.css";


gsap.registerPlugin(
  ScrollTrigger
);


function DeliveryInfrastructureIllustration() {
  return (
    <svg
      className="hww-delivery-svg"
      viewBox="0 0 680 500"
      role="img"
      aria-label="Software infrastructure and delivery illustration"
    >
      <rect
        x="0"
        y="0"
        width="680"
        height="500"
        rx="6"
        fill="#dc315f"
      />

      <g className="hww-delivery-cloud">
        <path
          d="M76 210C76 182 99 159 127 159H144C153 130 180 109 212 109C251 109 283 140 284 179H303C329 179 350 200 350 226C350 252 329 273 303 273H129C100 273 76 249 76 220V210Z"
          fill="#5218e5"
        />

        <path
          d="M454 234C454 210 474 190 498 190H512C520 164 544 146 573 146C608 146 636 174 637 208C659 211 676 229 676 252C676 277 656 297 631 297H501C475 297 454 276 454 250V234Z"
          fill="#5218e5"
        />
      </g>

      <g className="hww-delivery-browser">
        <rect
          x="215"
          y="78"
          width="250"
          height="214"
          rx="11"
          fill="#efe8d5"
          stroke="#191919"
          strokeWidth="4"
        />

        <path
          d="M215 90C215 83.373 220.373 78 227 78H453C459.627 78 465 83.373 465 90V111H215V90Z"
          fill="#5316e8"
        />

        <circle
          cx="232"
          cy="95"
          r="5"
          fill="#efe8d5"
        />

        <circle
          cx="250"
          cy="95"
          r="5"
          fill="#efe8d5"
        />

        <circle
          cx="268"
          cy="95"
          r="5"
          fill="#efe8d5"
        />

        <rect
          x="236"
          y="129"
          width="78"
          height="9"
          rx="4.5"
          fill="#d8d0bb"
        />

        <rect
          x="236"
          y="150"
          width="60"
          height="8"
          rx="4"
          fill="#d8d0bb"
        />

        <rect
          x="236"
          y="170"
          width="90"
          height="8"
          rx="4"
          fill="#d8d0bb"
        />

        <g className="hww-delivery-gear">
          <circle
            cx="382"
            cy="195"
            r="50"
            fill="#171717"
          />

          <circle
            cx="382"
            cy="195"
            r="23"
            fill="#efe8d5"
          />

          <path
            d="M382 131V150M382 240V259M318 195H337M427 195H446M337 150L351 164M413 226L427 240M427 150L413 164M351 226L337 240"
            stroke="#171717"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </g>
      </g>

      <path
        className="hww-delivery-flow"
        d="M340 294V342"
        fill="none"
        stroke="#efe8d5"
        strokeWidth="5"
        strokeDasharray="6 7"
      />

      <path
        className="hww-delivery-flow"
        d="M178 274V330"
        fill="none"
        stroke="#efe8d5"
        strokeWidth="5"
        strokeDasharray="6 7"
      />

      <path
        className="hww-delivery-flow"
        d="M504 278V330"
        fill="none"
        stroke="#efe8d5"
        strokeWidth="5"
        strokeDasharray="6 7"
      />

      <g className="hww-delivery-server hww-delivery-server-one">
        <rect
          x="72"
          y="330"
          width="172"
          height="40"
          rx="6"
          fill="#efe8d5"
        />

        <rect
          x="82"
          y="339"
          width="152"
          height="22"
          rx="3"
          fill="#171717"
        />

        <circle
          className="hww-delivery-led"
          cx="107"
          cy="350"
          r="4"
          fill="#5316e8"
        />

        <circle
          className="hww-delivery-led"
          cx="124"
          cy="350"
          r="4"
          fill="#dc315f"
        />

        <circle
          className="hww-delivery-led"
          cx="141"
          cy="350"
          r="4"
          fill="#efe8d5"
        />

        <rect
          x="72"
          y="380"
          width="172"
          height="40"
          rx="6"
          fill="#efe8d5"
        />

        <rect
          x="82"
          y="389"
          width="152"
          height="22"
          rx="3"
          fill="#171717"
        />

        <circle
          className="hww-delivery-led"
          cx="107"
          cy="400"
          r="4"
          fill="#5316e8"
        />

        <circle
          className="hww-delivery-led"
          cx="124"
          cy="400"
          r="4"
          fill="#efe8d5"
        />
      </g>

      <g className="hww-delivery-server hww-delivery-server-two">
        <rect
          x="254"
          y="356"
          width="172"
          height="40"
          rx="6"
          fill="#efe8d5"
        />

        <rect
          x="264"
          y="365"
          width="152"
          height="22"
          rx="3"
          fill="#171717"
        />

        <circle
          className="hww-delivery-led"
          cx="289"
          cy="376"
          r="4"
          fill="#5316e8"
        />

        <circle
          className="hww-delivery-led"
          cx="306"
          cy="376"
          r="4"
          fill="#dc315f"
        />

        <circle
          className="hww-delivery-led"
          cx="323"
          cy="376"
          r="4"
          fill="#efe8d5"
        />

        <rect
          x="254"
          y="406"
          width="172"
          height="40"
          rx="6"
          fill="#efe8d5"
        />

        <rect
          x="264"
          y="415"
          width="152"
          height="22"
          rx="3"
          fill="#171717"
        />
      </g>

      <g className="hww-delivery-server hww-delivery-server-three">
        <rect
          x="436"
          y="330"
          width="172"
          height="40"
          rx="6"
          fill="#efe8d5"
        />

        <rect
          x="446"
          y="339"
          width="152"
          height="22"
          rx="3"
          fill="#171717"
        />

        <circle
          className="hww-delivery-led"
          cx="471"
          cy="350"
          r="4"
          fill="#5316e8"
        />

        <circle
          className="hww-delivery-led"
          cx="488"
          cy="350"
          r="4"
          fill="#dc315f"
        />

        <rect
          x="436"
          y="380"
          width="172"
          height="40"
          rx="6"
          fill="#efe8d5"
        />

        <rect
          x="446"
          y="389"
          width="152"
          height="22"
          rx="3"
          fill="#171717"
        />
      </g>
    </svg>
  );
}


function TechnicalExpertiseIllustration() {
  return (
    <svg
      className="hww-expertise-svg"
      viewBox="0 0 680 500"
      role="img"
      aria-label="Software engineering workspace illustration"
    >
      <rect
        width="680"
        height="500"
        rx="6"
        fill="#5316e8"
      />

      <g className="hww-expertise-gear hww-expertise-gear-one">
        <circle
          cx="130"
          cy="337"
          r="45"
          fill="#efe8d5"
        />

        <circle
          cx="130"
          cy="337"
          r="20"
          fill="#5316e8"
        />

        <path
          d="M130 278V292M130 382V396M71 337H85M175 337H189M89 296L99 306M161 368L171 378M171 296L161 306M99 368L89 378"
          stroke="#efe8d5"
          strokeWidth="13"
          strokeLinecap="round"
        />
      </g>

      <g className="hww-expertise-gear hww-expertise-gear-two">
        <circle
          cx="496"
          cy="128"
          r="41"
          fill="#efe8d5"
        />

        <circle
          cx="496"
          cy="128"
          r="18"
          fill="#5316e8"
        />

        <path
          d="M496 74V87M496 169V182M442 128H455M537 128H550M458 90L468 100M524 156L534 166M534 90L524 100M468 156L458 166"
          stroke="#efe8d5"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </g>

      <g className="hww-expertise-chat hww-expertise-chat-dark">
        <path
          d="M89 82C89 65 103 51 120 51H205C222 51 236 65 236 82V118C236 135 222 149 205 149H145L119 171L122 149H120C103 149 89 135 89 118V82Z"
          fill="#171717"
        />

        <path
          d="M119 84H194M119 102H194M119 120H174"
          stroke="#efe8d5"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      <g className="hww-expertise-chat hww-expertise-chat-pink">
        <path
          d="M521 165C521 149 534 136 550 136H618C634 136 647 149 647 165V197C647 213 634 226 618 226H594L610 247L574 226H550C534 226 521 213 521 197V165Z"
          fill="#dc315f"
        />

        <path
          d="M548 164H620M548 181H620M548 198H604"
          stroke="#efe8d5"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      <g className="hww-expertise-laptop">
        <rect
          x="184"
          y="152"
          width="330"
          height="230"
          rx="11"
          fill="#171717"
        />

        <rect
          x="198"
          y="168"
          width="302"
          height="198"
          rx="5"
          fill="#efe8d5"
        />

        <rect
          x="198"
          y="168"
          width="302"
          height="30"
          fill="#d9d1bc"
        />

        <circle
          cx="214"
          cy="183"
          r="4"
          fill="#5316e8"
        />

        <circle
          cx="229"
          cy="183"
          r="4"
          fill="#dc315f"
        />

        <rect
          x="219"
          y="216"
          width="46"
          height="130"
          rx="4"
          fill="#dfd7c1"
        />

        <circle
          cx="242"
          cy="234"
          r="5"
          fill="#5316e8"
        />

        <circle
          cx="242"
          cy="254"
          r="5"
          fill="#5316e8"
        />

        <circle
          cx="242"
          cy="274"
          r="5"
          fill="#dc315f"
        />

        <circle
          cx="242"
          cy="294"
          r="5"
          fill="#5316e8"
        />

        <g className="hww-expertise-code">
          <rect
            x="287"
            y="217"
            width="57"
            height="7"
            rx="3.5"
            fill="#dc315f"
          />

          <rect
            x="355"
            y="217"
            width="38"
            height="7"
            rx="3.5"
            fill="#5316e8"
          />

          <rect
            x="287"
            y="238"
            width="101"
            height="6"
            rx="3"
            fill="#c9c0aa"
          />

          <rect
            x="287"
            y="259"
            width="52"
            height="7"
            rx="3.5"
            fill="#5316e8"
          />

          <rect
            x="350"
            y="259"
            width="77"
            height="7"
            rx="3.5"
            fill="#dc315f"
          />

          <rect
            x="287"
            y="281"
            width="91"
            height="6"
            rx="3"
            fill="#c9c0aa"
          />

          <rect
            x="287"
            y="302"
            width="42"
            height="7"
            rx="3.5"
            fill="#171717"
          />

          <rect
            x="341"
            y="302"
            width="55"
            height="7"
            rx="3.5"
            fill="#5316e8"
          />
        </g>

        <path
          d="M157 383H541L511 401H187L157 383Z"
          fill="#171717"
        />
      </g>

      <g className="hww-expertise-panel">
        <rect
          x="443"
          y="286"
          width="164"
          height="104"
          rx="7"
          fill="#efe8d5"
          stroke="#171717"
          strokeWidth="2"
        />

        <circle
          cx="466"
          cy="314"
          r="5"
          fill="#5316e8"
        />

        <rect
          x="480"
          y="310"
          width="58"
          height="6"
          rx="3"
          fill="#5316e8"
        />

        <rect
          x="480"
          y="330"
          width="84"
          height="6"
          rx="3"
          fill="#171717"
        />

        <rect
          x="480"
          y="350"
          width="54"
          height="6"
          rx="3"
          fill="#dc315f"
        />
      </g>
    </svg>
  );
}


export default function HowWeWorkIntro() {
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

            reduce:
              "(prefers-reduced-motion: reduce)"
          },
          (context) => {
            const {
              desktop,
              tablet,
              mobile,
              reduce
            } =
              context.conditions;


            if (reduce) {
              return;
            }


            const distanceX =
              desktop
                ? 48
                : tablet
                  ? 30
                  : 0;

            const distanceY =
              mobile
                ? 22
                : 32;

            const start =
              mobile
                ? "top 91%"
                : "top 85%";


            const revealTimelines = [];

            const triggers = [];

            const bindReveal = (
              triggerElement,
              timeline
            ) => {
              const trigger =
                ScrollTrigger.create({
                  trigger:
                    triggerElement,

                  start,

                  end:
                    "bottom top",

                  invalidateOnRefresh:
                    true,

                  onEnter:
                    () => {
                      timeline
                        .timeScale(1)
                        .play();
                    },

                  onLeaveBack:
                    () => {
                      timeline
                        .timeScale(
                          mobile
                            ? 2.5
                            : 2.1
                        )
                        .reverse();
                    }
                });

              triggers.push(
                trigger
              );

              revealTimelines.push(
                timeline
              );
            };


            const delivery =
              section.querySelector(
                ".hww-delivery-row"
              );

            const deliveryVisual =
              delivery.querySelector(
                ".hww-intro-visual"
              );

            const deliveryCopy =
              delivery.querySelector(
                ".hww-intro-copy"
              );

            const deliveryItems =
              deliveryCopy.querySelectorAll(
                ".hww-eyebrow, h2, p, a"
              );


            const deliveryTimeline =
              gsap.timeline({
                paused: true
              });


            deliveryTimeline
              .fromTo(
                deliveryVisual,
                {
                  x:
                    desktop
                      ? -distanceX
                      : 0,

                  y:
                    desktop
                      ? 0
                      : distanceY,

                  scale:
                    mobile
                      ? 0.99
                      : 0.975,

                  autoAlpha: 0,

                  filter:
                    mobile
                      ? "blur(2px)"
                      : "blur(5px)"
                },
                {
                  x: 0,
                  y: 0,
                  scale: 1,
                  autoAlpha: 1,
                  filter:
                    "blur(0px)",

                  duration:
                    mobile
                      ? 0.48
                      : 0.68,

                  ease:
                    "power4.out"
                }
              )
              .fromTo(
                deliveryItems,
                {
                  x:
                    desktop
                      ? distanceX
                      : 0,

                  y:
                    desktop
                      ? 0
                      : 18,

                  autoAlpha: 0,

                  filter:
                    mobile
                      ? "blur(2px)"
                      : "blur(4px)"
                },
                {
                  x: 0,
                  y: 0,
                  autoAlpha: 1,
                  filter:
                    "blur(0px)",

                  duration:
                    mobile
                      ? 0.38
                      : 0.5,

                  stagger:
                    mobile
                      ? 0.055
                      : 0.075,

                  ease:
                    "power3.out"
                },
                "-=0.38"
              );


            bindReveal(
              delivery,
              deliveryTimeline
            );


            const expertiseHeading =
              section.querySelector(
                ".hww-expertise-heading"
              );

            const expertiseHeadingTimeline =
              gsap.timeline({
                paused: true
              });


            expertiseHeadingTimeline
              .fromTo(
                expertiseHeading,
                {
                  y: distanceY,

                  autoAlpha: 0,

                  filter:
                    mobile
                      ? "blur(2px)"
                      : "blur(5px)"
                },
                {
                  y: 0,

                  autoAlpha: 1,

                  filter:
                    "blur(0px)",

                  duration:
                    mobile
                      ? 0.45
                      : 0.62,

                  ease:
                    "power4.out"
                }
              );


            bindReveal(
              expertiseHeading,
              expertiseHeadingTimeline
            );


            const expertise =
              section.querySelector(
                ".hww-expertise-row"
              );

            const expertiseCopy =
              expertise.querySelector(
                ".hww-intro-copy"
              );

            const expertiseVisual =
              expertise.querySelector(
                ".hww-intro-visual"
              );

            const expertiseItems =
              expertiseCopy.querySelectorAll(
                ".hww-eyebrow, h3, p, li, a"
              );


            const expertiseTimeline =
              gsap.timeline({
                paused: true
              });


            expertiseTimeline
              .fromTo(
                expertiseItems,
                {
                  x:
                    desktop
                      ? -distanceX
                      : 0,

                  y:
                    desktop
                      ? 0
                      : 18,

                  autoAlpha: 0,

                  filter:
                    mobile
                      ? "blur(2px)"
                      : "blur(4px)"
                },
                {
                  x: 0,
                  y: 0,
                  autoAlpha: 1,
                  filter:
                    "blur(0px)",

                  duration:
                    mobile
                      ? 0.38
                      : 0.5,

                  stagger:
                    mobile
                      ? 0.05
                      : 0.07,

                  ease:
                    "power3.out"
                }
              )
              .fromTo(
                expertiseVisual,
                {
                  x:
                    desktop
                      ? distanceX
                      : 0,

                  y:
                    desktop
                      ? 0
                      : distanceY,

                  scale:
                    mobile
                      ? 0.99
                      : 0.975,

                  autoAlpha: 0,

                  filter:
                    mobile
                      ? "blur(2px)"
                      : "blur(5px)"
                },
                {
                  x: 0,
                  y: 0,
                  scale: 1,
                  autoAlpha: 1,
                  filter:
                    "blur(0px)",

                  duration:
                    mobile
                      ? 0.48
                      : 0.68,

                  ease:
                    "power4.out"
                },
                "-=0.38"
              );


            bindReveal(
              expertise,
              expertiseTimeline
            );


            const deliveryMotion =
              gsap.timeline({
                paused: true
              });


            deliveryMotion
              .to(
                ".hww-delivery-cloud",
                {
                  y:
                    mobile
                      ? -3
                      : -6,

                  duration: 4.3,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              )
              .to(
                ".hww-delivery-browser",
                {
                  y:
                    mobile
                      ? -3
                      : -5,

                  duration: 3.8,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              )
              .to(
                ".hww-delivery-gear",
                {
                  rotation: 360,

                  transformOrigin:
                    "50% 50%",

                  duration:
                    mobile
                      ? 19
                      : 14,

                  repeat: -1,

                  ease:
                    "none"
                },
                0
              )
              .to(
                ".hww-delivery-flow",
                {
                  strokeDashoffset:
                    -50,

                  duration: 1.5,

                  repeat: -1,

                  ease:
                    "none"
                },
                0
              )
              .to(
                ".hww-delivery-server",
                {
                  y:
                    mobile
                      ? -2
                      : -4,

                  duration: 2.8,

                  stagger: 0.25,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              )
              .to(
                ".hww-delivery-led",
                {
                  opacity: 0.28,

                  duration: 0.7,

                  stagger: 0.08,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              );


            const deliveryMotionTrigger =
              ScrollTrigger.create({
                trigger:
                  deliveryVisual,

                start:
                  "top bottom",

                end:
                  "bottom top",

                onEnter:
                  () =>
                    deliveryMotion.play(),

                onEnterBack:
                  () =>
                    deliveryMotion.play(),

                onLeave:
                  () =>
                    deliveryMotion.pause(),

                onLeaveBack:
                  () =>
                    deliveryMotion.pause()
              });


            triggers.push(
              deliveryMotionTrigger
            );


            const expertiseMotion =
              gsap.timeline({
                paused: true
              });


            expertiseMotion
              .to(
                ".hww-expertise-laptop",
                {
                  y:
                    mobile
                      ? -3
                      : -6,

                  duration: 4.2,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              )
              .to(
                ".hww-expertise-gear",
                {
                  rotation: 360,

                  transformOrigin:
                    "50% 50%",

                  duration:
                    mobile
                      ? 22
                      : 17,

                  repeat: -1,

                  ease:
                    "none"
                },
                0
              )
              .to(
                ".hww-expertise-chat-dark",
                {
                  x: 4,

                  y: -4,

                  duration: 3.8,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              )
              .to(
                ".hww-expertise-chat-pink",
                {
                  x: -4,

                  y: -5,

                  duration: 4.3,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              )
              .to(
                ".hww-expertise-panel",
                {
                  y: -4,

                  duration: 3.3,

                  repeat: -1,

                  yoyo: true,

                  ease:
                    "sine.inOut"
                },
                0
              );


            const expertiseMotionTrigger =
              ScrollTrigger.create({
                trigger:
                  expertiseVisual,

                start:
                  "top bottom",

                end:
                  "bottom top",

                onEnter:
                  () =>
                    expertiseMotion.play(),

                onEnterBack:
                  () =>
                    expertiseMotion.play(),

                onLeave:
                  () =>
                    expertiseMotion.pause(),

                onLeaveBack:
                  () =>
                    expertiseMotion.pause()
              });


            triggers.push(
              expertiseMotionTrigger
            );


            return () => {
              triggers.forEach(
                (
                  trigger
                ) =>
                  trigger.kill()
              );

              revealTimelines.forEach(
                (
                  timeline
                ) =>
                  timeline.kill()
              );

              deliveryMotion.kill();

              expertiseMotion.kill();
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

      mm.revert();

      ctx.revert();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="hww-intro-section"
    >
      <div className="hww-shell">
        <div className="hww-intro-row hww-delivery-row">
          <div className="hww-intro-visual">
            <DeliveryInfrastructureIllustration />
          </div>

          <div className="hww-intro-copy">
            <span className="hww-eyebrow">
              How We Deliver
            </span>

            <h2>
              From Business Requirements to Reliable Software
            </h2>

            <p>
              We bring product thinking,
              engineering and delivery into one
              clear process. Every decision starts
              with the problem your business needs
              to solve and the people who will use
              the final product.
            </p>

            <p>
              That keeps the project focused,
              reduces unnecessary complexity and
              creates a stronger technical
              foundation before development starts.
            </p>

            <Link
              to="/contact"
              className="hww-outline-button"
            >
              Connect Now
            </Link>
          </div>
        </div>


        <h2 className="hww-expertise-heading">
          Technical Expertise Across Every Stage
        </h2>


        <div className="hww-intro-row hww-expertise-row">
          <div className="hww-intro-copy">
            <span className="hww-eyebrow">
              Engineering Capability
            </span>

            <h3>
              The Right Technical Decisions at the Right Time
            </h3>

            <p>
              Our process connects business
              requirements with practical
              engineering so design, development
              and deployment stay aligned.
            </p>

            <ul className="hww-expertise-list">
              <li>
                Architecture planned around
                product requirements and future
                growth.
              </li>

              <li>
                Frontend and backend systems
                developed as one connected
                experience.
              </li>

              <li>
                APIs, databases and integrations
                structured for maintainability.
              </li>

              <li>
                Testing, deployment and iteration
                built into the delivery process.
              </li>
            </ul>

            <Link
              to="/contact"
              className="hww-outline-button"
            >
              Start a Conversation
            </Link>
          </div>

          <div className="hww-intro-visual">
            <TechnicalExpertiseIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}