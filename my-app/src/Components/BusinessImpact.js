import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

import "./BusinessImpact.css";

gsap.registerPlugin(ScrollTrigger);

const AUTO_PLAY_DELAY = 3000;
const SLIDE_DURATION = 620;

const SLIDES = [
  {
    id: "operations",
    label: "Operational Efficiency",
    title:
      "Simplify Operations. Reduce Repetitive Work.",
    description:
      "We build connected software and automation that reduce manual work, improve visibility and give teams greater control over daily operations.",
    image:
      "/images/business-impact/operations.avif",
    imagePosition:
      "center center"
  },
  {
    id: "product",
    label: "Scalable Digital Products",
    title:
      "Build Products Ready To Scale.",
    description:
      "Web, mobile and SaaS products engineered to evolve with your users, features, integrations and changing business requirements.",
    image:
      "/images/business-impact/product.jpg",
    imagePosition:
      "center center"
  },
  {
    id: "experience",
    label: "Customer Experience",
    title:
      "Create Digital Experiences With Less Friction.",
    description:
      "Thoughtful design and reliable engineering make it easier for customers to understand your business, complete key actions and stay engaged.",
    image:
      "/images/business-impact/experience.jpg",
    imagePosition:
      "center center"
  },
  {
    id: "growth",
    label: "Digital Growth",
    title:
      "Connect Technology With Sustainable Growth.",
    description:
      "Search, acquisition, conversion and product technology work together to create a stronger digital foundation for attracting and retaining customers.",
    image:
      "/images/business-impact/growth.jpg",
    imagePosition:
      "center center"
  }
];

const CAROUSEL_SLIDES = [
  SLIDES[SLIDES.length - 1],
  ...SLIDES,
  SLIDES[0]
];

export default function BusinessImpact() {
  const sectionRef =
    useRef(null);

  const headerRef =
    useRef(null);

  const timerRef =
    useRef(null);

  const movingRef =
    useRef(false);

  const touchStartRef =
    useRef(null);

  const [
    trackIndex,
    setTrackIndex
  ] = useState(1);

  const [
    transitionEnabled,
    setTransitionEnabled
  ] = useState(true);

  const clearTimer =
    useCallback(() => {
      if (
        timerRef.current
      ) {
        clearTimeout(
          timerRef.current
        );

        timerRef.current =
          null;
      }
    }, []);

  const startTimer =
    useCallback(() => {
      clearTimer();

      timerRef.current =
        setTimeout(() => {
          if (
            movingRef.current
          ) {
            return;
          }

          movingRef.current =
            true;

          setTransitionEnabled(
            true
          );

          setTrackIndex(
            (current) =>
              current + 1
          );
        }, AUTO_PLAY_DELAY);
    }, [clearTimer]);

  const moveSlide =
    useCallback(
      (direction) => {
        if (
          movingRef.current
        ) {
          return;
        }

        clearTimer();

        movingRef.current =
          true;

        setTransitionEnabled(
          true
        );

        setTrackIndex(
          (current) =>
            current +
            direction
        );
      },
      [clearTimer]
    );

  useEffect(() => {
    const images =
      SLIDES.map(
        (slide) => {
          const image =
            new Image();

          image.src =
            slide.image;

          image
            .decode?.()
            .catch(
              () => {}
            );

          return image;
        }
      );

    return () => {
      images.forEach(
        (image) => {
          image.onload = null;
          image.onerror = null;
        }
      );
    };
  }, []);

  useEffect(() => {
    const section =
      sectionRef.current;

    const header =
      headerRef.current;

    if (
      !section ||
      !header
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      reducedMotion
    ) {
      gsap.set(
        header,
        {
          y: 0,
          autoAlpha: 1
        }
      );

      return;
    }

    const ctx =
      gsap.context(() => {
        gsap.fromTo(
          header,
          {
            y: 52,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            ease: "none",

            scrollTrigger: {
              trigger: section,
              start:
                "top 88%",
              end:
                "top 58%",
              scrub: 0.7
            }
          }
        );
      }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    startTimer();

    return clearTimer;
  }, [
    startTimer,
    clearTimer
  ]);

  const resetTrack = (
    index
  ) => {
    setTransitionEnabled(
      false
    );

    setTrackIndex(index);

    requestAnimationFrame(
      () => {
        requestAnimationFrame(
          () => {
            setTransitionEnabled(
              true
            );
          }
        );
      }
    );
  };

  const handleTransitionEnd =
    (event) => {
      if (
        event.propertyName !==
        "transform"
      ) {
        return;
      }

      if (
        trackIndex ===
        CAROUSEL_SLIDES.length -
          1
      ) {
        resetTrack(1);
      } else if (
        trackIndex === 0
      ) {
        resetTrack(
          SLIDES.length
        );
      }

      movingRef.current =
        false;

      startTimer();
    };

  const handleTouchStart =
    (event) => {
      touchStartRef.current =
        event.touches[0]
          .clientX;

      clearTimer();
    };

  const handleTouchEnd =
    (event) => {
      if (
        touchStartRef.current ===
        null
      ) {
        startTimer();

        return;
      }

      const endX =
        event.changedTouches[0]
          .clientX;

      const distance =
        endX -
        touchStartRef.current;

      touchStartRef.current =
        null;

      if (
        Math.abs(distance) <
        45
      ) {
        startTimer();

        return;
      }

      if (
        distance < 0
      ) {
        moveSlide(1);
      } else {
        moveSlide(-1);
      }
    };

  return (
    <section
      ref={sectionRef}
      className="business-impact-section"
      onTouchStart={
        handleTouchStart
      }
      onTouchEnd={
        handleTouchEnd
      }
    >
      <div className="business-impact-container">

        <header
          ref={headerRef}
          className="business-impact-header"
        >
          <h2>
            Technology That Moves
            <br />
            Business Forward
          </h2>
        </header>

        <div className="business-impact-viewport">

          <div
            className="business-impact-track"
            style={{
              transform:
                `translate3d(-${trackIndex * 100}%, 0, 0)`,

              transitionDuration:
                transitionEnabled
                  ? `${SLIDE_DURATION}ms`
                  : "0ms"
            }}
            onTransitionEnd={
              handleTransitionEnd
            }
          >
            {CAROUSEL_SLIDES.map(
              (
                slide,
                index
              ) => (
                <article
                  key={`${slide.id}-${index}`}
                  className="business-impact-slide"
                >
                  <div className="business-impact-content">

                    <span className="business-impact-label">
                      {
                        slide.label
                      }
                    </span>

                    <h3>
                      {
                        slide.title
                      }
                    </h3>

                    <p className="business-impact-description">
                      {
                        slide.description
                      }
                    </p>

                    <Link
                      to="/contact"
                      className="business-impact-cta"
                    >
                      <span>
                        Discuss Your Project
                      </span>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                      />
                    </Link>

                  </div>

                  <div className="business-impact-media">

                    <div className="business-impact-image-frame">

                      <img
                        src={
                          slide.image
                        }
                        alt=""
                        aria-hidden="true"
                        style={{
                          objectPosition:
                            slide.imagePosition
                        }}
                        loading="eager"
                        decoding="async"
                        draggable="false"
                      />

                    </div>

                  </div>
                </article>
              )
            )}
          </div>

        </div>

        <div className="business-impact-navigation">

          <button
            type="button"
            onClick={() =>
              moveSlide(-1)
            }
            aria-label="Previous slide"
          >
            <ArrowLeft
              size={20}
              strokeWidth={1.45}
            />
          </button>

          <button
            type="button"
            onClick={() =>
              moveSlide(1)
            }
            aria-label="Next slide"
          >
            <ArrowRight
              size={20}
              strokeWidth={1.45}
            />
          </button>

        </div>

      </div>
    </section>
  );
}