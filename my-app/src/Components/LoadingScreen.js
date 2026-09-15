import {
  useEffect,
  useRef
} from "react";

import gsap from "gsap";
import PlexusCanvas from "./PlexusCanvas";
import "./LoadingScreen.css";

export default function LoadingScreen({
  onComplete
}) {
  const containerRef =
    useRef(null);

  const logoRef =
    useRef(null);

  const barRef =
    useRef(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !logoRef.current ||
      !barRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(logoRef.current, {
        opacity: 0,
        y: 16
      });

      gsap.set(barRef.current, {
        width: "0%"
      });

      const timeline =
        gsap.timeline({
          onComplete: () => {
            onComplete?.();
          }
        });

      timeline.to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out"
        }
      );

      timeline.to(
        barRef.current,
        {
          width: "100%",
          duration: 1.35,
          ease: "power3.inOut"
        },
        "<"
      );

      timeline.to(
        {},
        {
          duration: 0.15
        }
      );

      timeline.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut"
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="loading-screen"
    >
      <PlexusCanvas
        className="loading-canvas"
        speed={1}
        mouseRepel={false}
      />

      <div className="loading-logo-wrapper">
        <img
          ref={logoRef}
          src="/softsync-wordmark.svg"
          alt="SoftSync"
          className="loading-logo"
          draggable="false"
        />
      </div>

      <div className="loading-bar-container">
        <div
          ref={barRef}
          className="loading-bar"
        />
      </div>
    </div>
  );
}