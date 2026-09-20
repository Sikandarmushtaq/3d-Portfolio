import {
  useLayoutEffect,
  useRef
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./PortfolioMarquee.css";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "LESS FRICTION. CLEARER SYSTEMS.",
  "SOFTWARE THAT FITS THE WORK.",
  "FROM WORKFLOW TO WORKING PRODUCT.",
  "PRODUCT, DATA AND AI IN ONE SYSTEM.",
  "ENGINEERING WITHOUT EXTRA HANDOFFS.",
  "BUILT AROUND REAL OPERATIONS.",
  "SYNCSOLVO / PRODUCT ENGINEERING"
];

export default function PortfolioMarquee() {
  const sectionRef =
    useRef(null);

  const trackRef =
    useRef(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    const track =
      trackRef.current;

    if (
      !section ||
      !track
    ) {
      return;
    }

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const tween =
      gsap.to(track, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1
      });

    const trigger =
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",

        onUpdate(self) {
          gsap.to(
            tween,
            {
              timeScale:
                self.direction === 1
                  ? 1
                  : -1,

              duration: 0.4,
              overwrite: true
            }
          );
        }
      });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, []);

  const renderGroup = (
    groupKey
  ) => (
    <div
      className="pm-group"
      key={groupKey}
    >
      {items.map(
        (item) => (
          <span
            key={`${groupKey}-${item}`}
          >
            {item}

            <i>—</i>
          </span>
        )
      )}
    </div>
  );

  return (
    <section
      className="pm-section"
      ref={sectionRef}
    >
      <div
        className="pm-track"
        ref={trackRef}
      >
        {renderGroup("first")}

        {renderGroup("second")}
      </div>
    </section>
  );
}