import {
  useLayoutEffect
} from "react";

import {
  gsap
} from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);

export default function useServicePageAnimations(
  rootSelector
) {
  useLayoutEffect(() => {
    const root =
      document.querySelector(
        rootSelector
      );

    if (!root) {
      return undefined;
    }

    const mm =
      gsap.matchMedia();

    const hoverListeners = [];

    const ctx =
      gsap.context(() => {

        mm.add(
          {
            desktop:
              "(min-width: 901px)",

            mobile:
              "(max-width: 900px)",

            reduceMotion:
              "(prefers-reduced-motion: reduce)"
          },

          ({
            conditions
          }) => {

            const {
              desktop,
              mobile,
              reduceMotion
            } = conditions;


            const revealElements =
              root.querySelectorAll(
                [
                  "[data-reveal-item]",
                  "[data-reveal-card]",
                  "[data-reveal-visual]"
                ].join(",")
              );


            if (reduceMotion) {
              gsap.set(
                revealElements,
                {
                  clearProps:
                    "opacity,visibility,transform,filter"
                }
              );

              return;
            }


            const createTrigger = (
              timeline,
              trigger,
              start
            ) => {

              ScrollTrigger.create({
                trigger,

                start,

                end:
                  "bottom top",

                invalidateOnRefresh:
                  true,

                onEnter: () => {
                  timeline
                    .timeScale(1)
                    .play();
                },

                onEnterBack: () => {
                  timeline
                    .timeScale(1)
                    .play();
                },

                onLeaveBack: () => {
                  timeline
                    .timeScale(
                      mobile
                        ? 1.8
                        : 1.45
                    )
                    .reverse();
                }
              });

            };


            const sections =
              gsap.utils.toArray(
                root.querySelectorAll(
                  "[data-reveal-section]"
                )
              );


            sections.forEach(
              (section) => {

                const visual =
                  section.querySelector(
                    "[data-reveal-visual]"
                  );


                const items =
                  Array.from(
                    section.querySelectorAll(
                      "[data-reveal-item]"
                    )
                  ).filter(
                    (item) =>
                      item !== visual
                  );


                const cards =
                  Array.from(
                    section.querySelectorAll(
                      "[data-reveal-card]"
                    )
                  );


                const isReverse =
                  section.classList.contains(
                    "service-split-section--reverse"
                  );


                if (
                  visual ||
                  items.length
                ) {

                  const timeline =
                    gsap.timeline({
                      paused: true
                    });


                  if (visual) {

                    gsap.set(
                      visual,
                      {
                        x:
                          desktop
                            ? isReverse
                              ? 55
                              : -55
                            : 0,

                        y:
                          mobile
                            ? 28
                            : 15,

                        scale:
                          mobile
                            ? 0.97
                            : 0.95,

                        autoAlpha: 0,

                        filter:
                          mobile
                            ? "blur(2px)"
                            : "blur(6px)"
                      }
                    );


                    timeline.to(
                      visual,
                      {
                        x: 0,
                        y: 0,

                        scale: 1,

                        autoAlpha: 1,

                        filter:
                          "blur(0px)",

                        duration:
                          mobile
                            ? 0.62
                            : 0.82,

                        ease:
                          "expo.out"
                      }
                    );

                  }


                  if (items.length) {

                    gsap.set(
                      items,
                      {
                        y:
                          mobile
                            ? 25
                            : 36,

                        autoAlpha: 0,

                        filter:
                          mobile
                            ? "blur(2px)"
                            : "blur(4px)"
                      }
                    );


                    timeline.to(
                      items,
                      {
                        y: 0,

                        autoAlpha: 1,

                        filter:
                          "blur(0px)",

                        duration:
                          mobile
                            ? 0.5
                            : 0.64,

                        stagger:
                          mobile
                            ? 0.06
                            : 0.075,

                        ease:
                          "power4.out"
                      },

                      visual
                        ? mobile
                          ? "-=0.28"
                          : "-=0.48"
                        : 0
                    );

                  }


                  createTrigger(
                    timeline,
                    section,

                    mobile
                      ? "top 93%"
                      : "top 84%"
                  );

                }


                if (cards.length) {

                  gsap.set(
                    cards,
                    {
                      y:
                        mobile
                          ? 35
                          : 50,

                      scale:
                        mobile
                          ? 0.97
                          : 0.95,

                      rotateZ:
                        desktop
                          ? -1.2
                          : 0,

                      autoAlpha: 0,

                      filter:
                        mobile
                          ? "blur(2px)"
                          : "blur(5px)",

                      transformOrigin:
                        "50% 50%"
                    }
                  );


                  const cardTimeline =
                    gsap.timeline({
                      paused: true
                    });


                  cardTimeline.to(
                    cards,
                    {
                      y: 0,

                      scale: 1,

                      rotateZ: 0,

                      autoAlpha: 1,

                      filter:
                        "blur(0px)",

                      duration:
                        mobile
                          ? 0.52
                          : 0.68,

                      stagger:
                        mobile
                          ? 0.07
                          : 0.085,

                      ease:
                        "power4.out"
                    }
                  );


                  createTrigger(
                    cardTimeline,
                    section,

                    mobile
                      ? "top 94%"
                      : "top 86%"
                  );

                }

              }
            );


            root
              .querySelectorAll(
                "[data-svg-float]"
              )
              .forEach(
                (
                  element,
                  index
                ) => {

                  gsap.to(
                    element,
                    {
                      y:
                        index % 2 === 0
                          ? mobile
                            ? -5
                            : -9
                          : mobile
                            ? 5
                            : 9,

                      duration:
                        2.4 +
                        index * 0.16,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    }
                  );

                }
              );


            root
              .querySelectorAll(
                "[data-svg-spin]"
              )
              .forEach(
                (
                  element,
                  index
                ) => {

                  gsap.to(
                    element,
                    {
                      rotation:
                        index % 2 === 0
                          ? 360
                          : -360,

                      transformOrigin:
                        "50% 50%",

                      duration:
                        8 +
                        index * 2,

                      repeat: -1,

                      ease:
                        "none"
                    }
                  );

                }
              );


            root
              .querySelectorAll(
                "[data-svg-pulse]"
              )
              .forEach(
                (
                  element,
                  index
                ) => {

                  gsap.to(
                    element,
                    {
                      opacity:
                        0.35,

                      scale:
                        0.82,

                      transformOrigin:
                        "50% 50%",

                      duration:
                        0.85 +
                        index * 0.08,

                      repeat: -1,

                      yoyo: true,

                      ease:
                        "sine.inOut"
                    }
                  );

                }
              );


            root
              .querySelectorAll(
                "[data-svg-flow]"
              )
              .forEach(
                (element) => {

                  gsap.to(
                    element,
                    {
                      strokeDashoffset:
                        -48,

                      duration:
                        1.55,

                      repeat: -1,

                      ease:
                        "none"
                    }
                  );

                }
              );

          }
        );


        const canHover =
          window.matchMedia(
            "(hover: hover) and (pointer: fine)"
          ).matches;


        if (canHover) {

          const cards =
            root.querySelectorAll(
              [
                ".service-capability-card",
                ".service-package-card"
              ].join(",")
            );


          cards.forEach(
            (card) => {

              const enter =
                () => {

                  gsap.killTweensOf(
                    card
                  );


                  gsap.to(
                    card,
                    {
                      rotateZ:
                        -2.4,

                      rotateY:
                        -5,

                      rotateX:
                        2,

                      x:
                        -5,

                      y:
                        -8,

                      scale:
                        1.018,

                      transformPerspective:
                        950,

                      transformOrigin:
                        "50% 50%",

                      duration:
                        0.32,

                      ease:
                        "power3.out",

                      overwrite:
                        "auto"
                    }
                  );

                };


              const leave =
                () => {

                  gsap.killTweensOf(
                    card
                  );


                  gsap.to(
                    card,
                    {
                      rotateZ:
                        0,

                      rotateY:
                        0,

                      rotateX:
                        0,

                      x:
                        0,

                      y:
                        0,

                      scale:
                        1,

                      duration:
                        0.48,

                      ease:
                        "power3.out",

                      overwrite:
                        "auto"
                    }
                  );

                };


              card.addEventListener(
                "mouseenter",
                enter
              );


              card.addEventListener(
                "mouseleave",
                leave
              );


              hoverListeners.push({
                card,
                enter,
                leave
              });

            }
          );

        }


        requestAnimationFrame(
          () => {
            ScrollTrigger.refresh();
          }
        );

      }, root);


    return () => {

      hoverListeners.forEach(
        ({
          card,
          enter,
          leave
        }) => {

          card.removeEventListener(
            "mouseenter",
            enter
          );


          card.removeEventListener(
            "mouseleave",
            leave
          );

        }
      );


      mm.revert();

      ctx.revert();

    };

  }, [rootSelector]);
}