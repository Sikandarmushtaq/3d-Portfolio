import {
  Suspense,
  useLayoutEffect,
  useRef
} from "react";

import {
  Canvas
} from "@react-three/fiber";

import {
  Environment
} from "@react-three/drei";

import gsap from "gsap";

import PortfolioRobot from "./PortfolioRobot.js";

import "./PortfolioHero.css";

export default function PortfolioHero() {
  const sectionRef =
    useRef(null);

  const stageRef =
    useRef(null);

  const leftTextRef =
    useRef(null);

  const rightTextRef =
    useRef(null);

  const invalidateRef =
    useRef(null);

  const visibleRef =
    useRef(true);

  const pointerRef =
    useRef({
      x: 0,
      y: 0,
      inside: false
    });

  const handlePointerMove = (
    event
  ) => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const rect =
      section.getBoundingClientRect();

    const x =
      (
        (
          event.clientX -
          rect.left
        ) /
        rect.width
      ) *
        2 -
      1;

    const y =
      -(
        (
          (
            event.clientY -
            rect.top
          ) /
          rect.height
        ) *
          2 -
        1
      );

    pointerRef.current.x =
      Math.max(
        -1,
        Math.min(
          1,
          x
        )
      );

    pointerRef.current.y =
      Math.max(
        -1,
        Math.min(
          1,
          y
        )
      );

    pointerRef.current.inside =
      true;

    invalidateRef.current?.();
  };

  const handlePointerLeave =
    () => {
      pointerRef.current.x =
        0;

      pointerRef.current.y =
        0;

      pointerRef.current.inside =
        false;

      invalidateRef.current?.();
    };

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          visibleRef.current =
            entry.isIntersecting;

          if (
            entry.isIntersecting
          ) {
            invalidateRef.current?.();
          }
        },
        {
          threshold: 0.04
        }
      );

    observer.observe(
      section
    );

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    let ctx;

    if (!reducedMotion) {
      ctx =
        gsap.context(() => {
          const timeline =
            gsap.timeline({
              defaults: {
                ease:
                  "power3.out"
              }
            });

          timeline
            .fromTo(
              stageRef.current,
              {
                y: 10,
                scale: 0.992
              },
              {
                y: 0,
                scale: 1,
                duration: 0.52,
                clearProps:
                  "transform"
              }
            )

            .fromTo(
              leftTextRef.current,
              {
                opacity: 0,
                y: 22
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.7
              },
              "-=0.36"
            )

            .fromTo(
              rightTextRef.current,
              {
                opacity: 0,
                y: 16
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.64
              },
              "-=0.54"
            );
        }, section);
    }

    return () => {
      observer.disconnect();

      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section
      className="portfolio-hero"
      ref={sectionRef}
      onPointerMove={
        handlePointerMove
      }
      onPointerLeave={
        handlePointerLeave
      }
    >
      <div className="portfolio-studio-glow" />

      <div className="portfolio-hero-inner">
        <div
          className="portfolio-hero-left"
          ref={leftTextRef}
        >
          <h1>
            <span>
              Building
            </span>

            <span>
              Meaningful
            </span>

            <span>
              Digital
            </span>

            <span>
              Experiences
            </span>
          </h1>
        </div>

        <div
          className="portfolio-robot-stage"
          ref={stageRef}
        >
          <Canvas
            frameloop="demand"
            dpr={[
              1,
              1.2
            ]}
            camera={{
              position: [
                0,
                0.05,
                8.5
              ],
              fov: 32,
              near: 0.1,
              far: 35
            }}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference:
                "high-performance"
            }}
          >
            <ambientLight
              intensity={1.08}
            />

            <directionalLight
              position={[
                -4.5,
                5,
                6
              ]}
              intensity={2.35}
              color="#ffffff"
            />

            <directionalLight
              position={[
                4,
                2.5,
                4
              ]}
              intensity={1.3}
              color="#c7b7ff"
            />

            <pointLight
              position={[
                -3,
                0,
                3
              ]}
              intensity={0.48}
              color="#ffffff"
            />

            <pointLight
              position={[
                3,
                0.8,
                2.6
              ]}
              intensity={0.78}
              color="#8a58ff"
            />

            <pointLight
              position={[
                1,
                -1.5,
                2
              ]}
              intensity={0.28}
              color="#ff72bf"
            />

            <PortfolioRobot
              pointerRef={
                pointerRef
              }
              visibleRef={
                visibleRef
              }
              invalidateRef={
                invalidateRef
              }
            />

            <Suspense fallback={null}>
              <Environment
                preset="studio"
                environmentIntensity={
                  0.48
                }
              />
            </Suspense>
          </Canvas>
        </div>

        <div
          className="portfolio-hero-right"
          ref={rightTextRef}
        >
          <p>
            SOFTWARE ENGINEERING
            <br />
            BUILT AROUND REAL
            <br />
            BUSINESS PROBLEMS.
          </p>
        </div>
      </div>
    </section>
  );
}