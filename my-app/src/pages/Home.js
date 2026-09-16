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
import EngineeringStatement from "../Components/EngineeringStatement";
import ToolsTechnologies from "../Components/ToolsTechnologies";
import Methodologies  from "../Components/Methodologies";
import BusinessImpact  from "../Components/BusinessImpact";
import Blogs from "../Components/Blogs";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const uiRef = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: false,
    });

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", handleScroll);

    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", handleScroll);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

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

      if (canvasRef.current) {
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
      }

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

    const refreshFrame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, [loading]);

  return (
    <>
      <Cursor />

      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
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

          <EngineeringStatement />

          <ToolsTechnologies />

            <Methodologies />

            <BusinessImpact />

            <Blogs />

          <ContactSection />

          <Footer />
        </>
      )}
    </>
  );
}