import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navbar from "../Components/Navbar";
import Cursor from "../Components/Cursor";
import LoadingScreen from "../Components/LoadingScreen";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const uiRef = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Hero visibility observer
  useEffect(() => {
    const heroElement = heroRef.current;

    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      if (!uiRef.current) return;

      gsap.from(uiRef.current.children, {
        y: 35,
        opacity: 0,
        duration: 1.3,
        stagger: 0.12,
        delay: 0.1,
        ease: "power4.out",
      });

      gsap.to(canvasRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(uiRef.current, {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, [loading]);

  return (
    <>
      <Cursor />

      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <Navbar />

          <Hero
            heroRef={heroRef}
            canvasRef={canvasRef}
            uiRef={uiRef}
            isHeroVisible={isHeroVisible}
          />

          <About />

          <Services />
        </>
      )}
    </>
  );
}