import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./Footer.css";


gsap.registerPlugin(
  ScrollTrigger,
  useGSAP
);


const REDUCED =
  typeof window !== "undefined" &&
  window
    .matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    .matches;


const MARQUEE_ITEMS = [
  {
    text: "BUILD WHAT'S NEXT",
    type: "fill"
  },
  {
    text: "ENGINEERED FOR SCALE",
    type: "outline"
  },
  {
    text: "DESIGNED TO BE REMEMBERED",
    type: "fill"
  },
  {
    text: "FROM IDEA TO IMPACT",
    type: "outline"
  },
  {
    text: "DIGITAL EXPERIENCES THAT CONVERT",
    type: "fill"
  },
  {
    text: "OPEN TO AMBITIOUS OPPORTUNITIES",
    type: "outline"
  }
];


// ==========================================
// MAGNETIC
// ==========================================

function Magnetic({
  children,
  strength = 0.35
}) {

  const ref =
    useRef(null);


  useGSAP(
    (context, contextSafe) => {

      const el =
        ref.current;


      if (
        !el ||
        REDUCED
      ) {
        return;
      }


      if (
        window.matchMedia(
          "(hover: none)"
        ).matches
      ) {
        return;
      }


      const xTo =
        gsap.quickTo(
          el,
          "x",
          {
            duration: 0.35,
            ease: "power3.out"
          }
        );


      const yTo =
        gsap.quickTo(
          el,
          "y",
          {
            duration: 0.35,
            ease: "power3.out"
          }
        );


      let rect = null;


      const enter =
        contextSafe(() => {

          rect =
            el.getBoundingClientRect();

        });


      const move =
        contextSafe((e) => {

          if (!rect) {
            return;
          }


          const centerX =
            rect.left +
            rect.width / 2;


          const centerY =
            rect.top +
            rect.height / 2;


          xTo(
            (
              e.clientX -
              centerX
            ) *
            strength
          );


          yTo(
            (
              e.clientY -
              centerY
            ) *
            strength
          );

        });


      const leave =
        contextSafe(() => {

          rect = null;

          xTo(0);

          yTo(0);

        });


      el.addEventListener(
        "pointerenter",
        enter
      );


      el.addEventListener(
        "pointermove",
        move
      );


      el.addEventListener(
        "pointerleave",
        leave
      );


      return () => {

        el.removeEventListener(
          "pointerenter",
          enter
        );


        el.removeEventListener(
          "pointermove",
          move
        );


        el.removeEventListener(
          "pointerleave",
          leave
        );

      };

    },
    {
      scope: ref,
      dependencies: [strength]
    }
  );


  return (

    <div
      className="magnetic"
      ref={ref}
    >

      {children}

    </div>

  );

}




function MarqueeSet() {

  return (

    <div
      className="mq-set"
      aria-hidden="true"
    >

      {MARQUEE_ITEMS.map(
        (item, index) => (

          <div
            className="mq-item"
            key={`${item.text}-${index}`}
          >

            <span
              className={
                item.type === "outline"
                  ? "mq-text mq-outline"
                  : "mq-text mq-fill"
              }
            >

              {item.text}

            </span>


            <span
              className="mq-symbol"
              aria-hidden="true"
            >

              ✦

            </span>

          </div>

        )
      )}

    </div>

  );

}




const scrollTop = () => {

  window.scrollTo({

    top: 0,

    behavior:
      REDUCED
        ? "auto"
        : "smooth"

  });

};




export default function Footer() {

  const footerRef =
    useRef(null);


  const viewportRef =
    useRef(null);


  const trackRef =
    useRef(null);


  const navigate =
    useNavigate();


  useGSAP(
    () => {

      const footer =
        footerRef.current;


      const viewport =
        viewportRef.current;


      const track =
        trackRef.current;


      if (
        !footer ||
        !viewport ||
        !track
      ) {
        return;
      }


      let marqueeTween = null;

      let resizeObserver = null;

      let mouseEnter = null;

      let mouseLeave = null;


   

      const createMarquee = () => {

        if (REDUCED) {

          gsap.set(
            track,
            {
              xPercent: 0
            }
          );

          return;

        }


        if (marqueeTween) {

          marqueeTween.kill();

          marqueeTween = null;

        }


        gsap.set(
          track,
          {
            xPercent: 0
          }
        );


        const firstSet =
          track.querySelector(
            ".mq-set"
          );


        if (!firstSet) {
          return;
        }


        const setWidth =
          firstSet
            .getBoundingClientRect()
            .width;


        const duration =
          Math.max(
            24,
            setWidth / 65
          );


        marqueeTween =
          gsap.to(
            track,
            {

              xPercent: -50,

              duration,

              ease: "none",

              repeat: -1

            }
          );

      };


      createMarquee();


      if (
        document.fonts?.ready
      ) {

        document.fonts.ready.then(
          () => {

            createMarquee();

          }
        );

      }


      resizeObserver =
        new ResizeObserver(() => {

          createMarquee();

        });


      resizeObserver.observe(
        viewport
      );




      if (
        !REDUCED &&
        window.matchMedia(
          "(hover: hover)"
        ).matches
      ) {

        mouseEnter = () => {

          if (!marqueeTween) {
            return;
          }


          gsap.to(
            marqueeTween,
            {

              timeScale: 0.22,

              duration: 0.5,

              overwrite: true

            }
          );

        };


        mouseLeave = () => {

          if (!marqueeTween) {
            return;
          }


          gsap.to(
            marqueeTween,
            {

              timeScale: 1,

              duration: 0.6,

              overwrite: true

            }
          );

        };


        viewport.addEventListener(
          "mouseenter",
          mouseEnter
        );


        viewport.addEventListener(
          "mouseleave",
          mouseLeave
        );

      }



      const observer =
        new IntersectionObserver(
          ([entry]) => {

            footer.classList.toggle(
              "is-idle",
              !entry.isIntersecting
            );


            if (!marqueeTween) {
              return;
            }


            if (
              entry.isIntersecting
            ) {

              marqueeTween.play();

            } else {

              marqueeTween.pause();

            }

          },
          {
            rootMargin: "150px"
          }
        );


      observer.observe(
        footer
      );




      const revealTargets = [

        ".mq-viewport",

        ".footer-main-heading",

        ".footer-description",

        ".connect-wrapper",

        ".footer-bottom-area"

      ];


      if (REDUCED) {

        gsap.set(
          revealTargets,
          {
            autoAlpha: 1,
            y: 0
          }
        );

      } else {

        gsap.set(
          revealTargets,
          {
            autoAlpha: 0,
            y: 32
          }
        );


        gsap.set(
          ".connect-line",
          {
            scaleX: 0
          }
        );


        gsap.set(
          ".footer-divider",
          {
            scaleX: 0
          }
        );


        const reveal =
          gsap.timeline({

            scrollTrigger: {

              trigger: footer,

              start: "top 88%",

              toggleActions:
                "play none none reverse",

              invalidateOnRefresh: true

            }

          });


        reveal

          .to(
            ".mq-viewport",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out"
            },
            0
          )


          .to(
            ".footer-main-heading",
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power4.out"
            },
            0.12
          )


          .to(
            ".footer-description",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            },
            0.25
          )


          .to(
            ".connect-wrapper",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            },
            0.34
          )


          .to(
            ".connect-line",
            {
              scaleX: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out"
            },
            0.38
          )


          .to(
            ".footer-bottom-area",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            },
            0.48
          )


          .to(
            ".footer-divider",
            {
              scaleX: 1,
              duration: 1,
              ease: "power3.out"
            },
            0.52
          );

      }


  

      return () => {

        observer.disconnect();


        if (
          resizeObserver
        ) {

          resizeObserver.disconnect();

        }


        if (
          mouseEnter
        ) {

          viewport.removeEventListener(
            "mouseenter",
            mouseEnter
          );

        }


        if (
          mouseLeave
        ) {

          viewport.removeEventListener(
            "mouseleave",
            mouseLeave
          );

        }


        if (
          marqueeTween
        ) {

          marqueeTween.kill();

        }

      };

    },
    {
      scope: footerRef
    }
  );


  const handleConnect = () => {

    navigate(
      "/contact"
    );

  };


  return (

    <footer
      ref={footerRef}
      className="premium-footer"
    >


   

      <div
        className="footer-atmosphere"
        aria-hidden="true"
      >

        <div className="footer-orb footer-orb-one">
        </div>

        <div className="footer-orb footer-orb-two">
        </div>

        <div className="footer-grid">
        </div>

      </div>


   

      <div
        className="mq-viewport"
        ref={viewportRef}
      >

        <div
          className="mq-track"
          ref={trackRef}
        >

          <MarqueeSet />

          <MarqueeSet />

        </div>

      </div>


  

      <div className="footer-content">


        <h2 className="footer-main-heading">

          HAVE A ROLE,

          <br />

          A PRODUCT,

          <br />

          OR A

          <span>
            BOLD IDEA?
          </span>

        </h2>


        <p className="footer-description">

          Whether you're building a company,
          hiring for your next team, launching
          a product, or turning an idea into
          reality — let's create something
          useful, scalable and impossible
          to ignore.

        </p>


        <div className="connect-wrapper">

          <span
            className="connect-line"
            aria-hidden="true"
          >
          </span>


          <Magnetic strength={0.22}>

            <button
              type="button"
              className="footer-connect-btn"
              onClick={handleConnect}
            >

              <span>
                START A CONVERSATION
              </span>


              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  d="M5 12h13M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </svg>

            </button>

          </Magnetic>


          <span
            className="connect-line"
            aria-hidden="true"
          >
          </span>

        </div>

      </div>


  
      <div className="footer-bottom-area">

        <div
          className="footer-divider"
          aria-hidden="true"
        >
        </div>


        <div className="footer-bottom">


          <p className="f-copy">

            © 2026 — ALL RIGHTS RESERVED

          </p>


          <a
            className="f-mail"
            href="mailto:email.raisikandar502@gmail.com"
          >

            Email.raisikandar502@gmail.com

          </a>


          <div className="f-right">


            <Magnetic strength={0.32}>

              <a
                className="f-icon-btn f-li"
                href="https://www.linkedin.com/in/sikandar-mushtaq-0794a4410"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                data-tip="LinkedIn"
              >

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >

                  <path
                    d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
                  />

                </svg>

              </a>

            </Magnetic>


            <Magnetic strength={0.32}>

              <button
                type="button"
                className="f-icon-btn f-top"
                onClick={scrollTop}
                aria-label="Back to top"
                data-tip="Top"
              >

                <span
                  className="f-arrow-wrap"
                  aria-hidden="true"
                >

                  <svg
                    className="f-arrow"
                    viewBox="0 0 24 24"
                  >

                    <path
                      d="M12 20V5M5.5 11.5 12 5l6.5 6.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                  </svg>

                </span>

              </button>

            </Magnetic>

          </div>

        </div>

      </div>

    </footer>

  );

}