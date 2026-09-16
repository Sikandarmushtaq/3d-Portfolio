import {
  useEffect,
  useRef,
  useState
} from "react";

import { Canvas } from "@react-three/fiber";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  AnimatedBackgroundParticles
} from "./Scene";

import "./EngineeringStatement.css";

gsap.registerPlugin(ScrollTrigger);

export default function EngineeringStatement() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(() =>
      window.matchMedia(
        "(max-width: 600px)"
      ).matches
    );

  useEffect(() => {
    const media = window.matchMedia(
      "(max-width: 600px)"
    );

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    media.addEventListener(
      "change",
      handleChange
    );

    return () => {
      media.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setIsVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0,
          rootMargin: "100px 0px"
        }
      );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section =
      sectionRef.current;

    const content =
      contentRef.current;

    if (!section || !content) {
      return;
    }

    const top =
      content.querySelector(
        ".engineering-top"
      );

    const main =
      content.querySelector(
        ".engineering-main"
      );

    const bottom =
      content.querySelector(
        ".engineering-bottom"
      );

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(
          [top, main, bottom],
          {
            y: 0,
            autoAlpha: 1
          }
        );

        return;
      }

      gsap.fromTo(
        top,
        {
          y: 28,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "top 64%",
            scrub: 0.65
          }
        }
      );

      gsap.fromTo(
        main,
        {
          y: 48,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            end: "top 55%",
            scrub: 0.7
          }
        }
      );

      gsap.fromTo(
        bottom,
        {
          y: 28,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "top 49%",
            scrub: 0.65
          }
        }
      );

      gsap.to(content, {
        y: -42,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 57%",
          end: "bottom 22%",
          scrub: 0.65
        }
      });
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

  return (
    <section
      ref={sectionRef}
      className="engineering-section"
    >
      <div
        className="engineering-particles"
        aria-hidden="true"
      >
        <Canvas
          dpr={[1, 1.25]}
          camera={{
            position: [0, 0, 5],
            fov: isMobile
              ? 56
              : 45,
            near: 0.1,
            far: 100
          }}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference:
              "high-performance"
          }}
          frameloop={
            isVisible
              ? "always"
              : "never"
          }
          performance={{
            min: 0.5
          }}
        >
          <AnimatedBackgroundParticles
            mouseEffect={false}
          />
        </Canvas>
      </div>

      <div
        ref={contentRef}
        className="engineering-content"
      >
        <h2 className="engineering-heading">
          <span className="engineering-top">
            Understand The Problem
          </span>

          <span className="engineering-main">
            Engineer The System
          </span>

          <span className="engineering-bottom">
            Drive The Growth
          </span>
        </h2>
      </div>
    </section>
  );
}