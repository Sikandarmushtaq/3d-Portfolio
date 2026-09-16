import {
  useEffect,
  useRef
} from "react";

import gsap from "gsap";

import "./Footer.css";

const FOOTER_LINKS = [
  "Industries",
  "Locations",
  "Facebook",
  "Instagram",
  "LinkedIn"
];

function SyncWordmark() {
  return (
    <svg
      className="footer-sync-svg"
      viewBox="0 0 1200 300"
      role="img"
      aria-label="SYNC"
    >
      <text
        x="600"
        y="230"
        textAnchor="middle"
        className="footer-sync-text"
      >
        SYNC
      </text>

      <path
        className="footer-sync-wave-cut"
        d="
          M 440 172
          C 500 95,
            565 92,
            625 171
          C 690 258,
            760 256,
            828 167
        "
      />

      <path
        className="footer-sync-wave"
        d="
          M 440 172
          C 500 95,
            565 92,
            625 171
          C 690 258,
            760 256,
            828 167
        "
      />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef(null);
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const badgeRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const leftHand = leftHandRef.current;
    const rightHand = rightHandRef.current;

    if (
      !footer ||
      !leftHand ||
      !rightHand
    ) {
      return;
    }

    const mobile =
      window.matchMedia(
        "(max-width: 700px)"
      ).matches;

    const meetPosition =
      mobile
        ? 15.6
        : 0;

    const impactPosition =
      mobile
        ? 16.2
        : 2.5;

    const enterDuration =
      mobile
        ? 0.68
        : 0.42;

    const exitDuration =
      mobile
        ? 0.68
        : 0.42;

    const impactDuration =
      mobile
        ? 0.13
        : 0.09;

    const settleDuration =
      mobile
        ? 0.16
        : 0.12;

    const holdDuration =
      mobile
        ? 0.75
        : 0.65;

    const resetHands = () => {
      timelineRef.current?.kill();

      timelineRef.current = null;

      gsap.killTweensOf([
        leftHand,
        rightHand
      ]);

      gsap.set(
        leftHand,
        {
          xPercent: -125,
          x: 0,
          rotation: -2,
          scale: 1,
          autoAlpha: 0
        }
      );

      gsap.set(
        rightHand,
        {
          xPercent: 125,
          x: 0,
          rotation: 2,
          scale: 1,
          autoAlpha: 0
        }
      );
    };

    const playHands = () => {
      resetHands();

      gsap.set(
        [
          leftHand,
          rightHand
        ],
        {
          autoAlpha: 1
        }
      );

      const timeline =
        gsap.timeline();

      timeline

        .to(
          leftHand,
          {
            xPercent:
              meetPosition,

            x: 0,

            rotation: 0,

            duration:
              enterDuration,

            ease:
              mobile
                ? "power3.out"
                : "power4.out"
          }
        )

        .to(
          rightHand,
          {
            xPercent:
              -meetPosition,

            x: 0,

            rotation: 0,

            duration:
              enterDuration,

            ease:
              mobile
                ? "power3.out"
                : "power4.out"
          },
          "<"
        )

        .to(
          leftHand,
          {
            xPercent:
              impactPosition,

            x: 0,

            scale:
              mobile
                ? 1.006
                : 1.012,

            duration:
              impactDuration,

            ease:
              "power2.in"
          }
        )

        .to(
          rightHand,
          {
            xPercent:
              -impactPosition,

            x: 0,

            scale:
              mobile
                ? 1.006
                : 1.012,

            duration:
              impactDuration,

            ease:
              "power2.in"
          },
          "<"
        )

        .to(
          leftHand,
          {
            xPercent:
              meetPosition,

            x: 0,

            scale: 1,

            duration:
              settleDuration,

            ease:
              "power2.out"
          }
        )

        .to(
          rightHand,
          {
            xPercent:
              -meetPosition,

            x: 0,

            scale: 1,

            duration:
              settleDuration,

            ease:
              "power2.out"
          },
          "<"
        )

        .to(
          {},
          {
            duration:
              holdDuration
          }
        )

        .to(
          leftHand,
          {
            xPercent: -125,

            x: 0,

            rotation: -3,

            duration:
              exitDuration,

            ease:
              mobile
                ? "power2.in"
                : "power3.in"
          }
        )

        .to(
          rightHand,
          {
            xPercent: 125,

            x: 0,

            rotation: 3,

            duration:
              exitDuration,

            ease:
              mobile
                ? "power2.in"
                : "power3.in"
          },
          "<"
        )

        .set(
          [
            leftHand,
            rightHand
          ],
          {
            autoAlpha: 0,
            scale: 1,
            x: 0
          }
        );

      timelineRef.current =
        timeline;
    };

    resetHands();

    let active = false;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            !active
          ) {
            active = true;

            playHands();
          }

          if (
            !entry.isIntersecting
          ) {
            active = false;

            resetHands();
          }
        },
        {
          threshold: 0.01,

          rootMargin:
            "0px 0px 8% 0px"
        }
      );

    observer.observe(
      footer
    );

    return () => {
      observer.disconnect();

      resetHands();
    };
  }, []);

  useEffect(() => {
    const footer =
      footerRef.current;

    const badge =
      badgeRef.current;

    if (
      !footer ||
      !badge
    ) {
      return;
    }

    gsap.set(
      badge,
      {
        xPercent: -50,
        yPercent: -50,
        scale: 0.76,
        autoAlpha: 0
      }
    );

    const moveX =
      gsap.quickTo(
        badge,
        "x",
        {
          duration: 0.16,
          ease: "power3.out"
        }
      );

    const moveY =
      gsap.quickTo(
        badge,
        "y",
        {
          duration: 0.16,
          ease: "power3.out"
        }
      );

    const moveBadge = (
      clientX,
      clientY
    ) => {
      const rect =
        footer.getBoundingClientRect();

      moveX(
        clientX -
          rect.left
      );

      moveY(
        clientY -
          rect.top
      );
    };

    const showBadge = () => {
      gsap.to(
        badge,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.18,
          ease: "power2.out"
        }
      );
    };

    const hideBadge = () => {
      gsap.to(
        badge,
        {
          autoAlpha: 0,
          scale: 0.76,
          duration: 0.18,
          ease: "power2.out"
        }
      );
    };

    const handlePointerEnter = (
      event
    ) => {
      if (
        event.pointerType ===
        "touch"
      ) {
        return;
      }

      moveBadge(
        event.clientX,
        event.clientY
      );

      showBadge();
    };

    const handlePointerMove = (
      event
    ) => {
      if (
        event.pointerType ===
        "touch"
      ) {
        return;
      }

      moveBadge(
        event.clientX,
        event.clientY
      );
    };

    const handlePointerLeave = (
      event
    ) => {
      if (
        event.pointerType ===
        "touch"
      ) {
        return;
      }

      hideBadge();
    };

    const handleTouchStart = (
      event
    ) => {
      const touch =
        event.touches[0];

      if (!touch) {
        return;
      }

      moveBadge(
        touch.clientX,
        touch.clientY
      );

      showBadge();
    };

    const handleTouchMove = (
      event
    ) => {
      const touch =
        event.touches[0];

      if (!touch) {
        return;
      }

      moveBadge(
        touch.clientX,
        touch.clientY
      );
    };

    const handleTouchEnd = () => {
      hideBadge();
    };

    footer.addEventListener(
      "pointerenter",
      handlePointerEnter
    );

    footer.addEventListener(
      "pointermove",
      handlePointerMove
    );

    footer.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    footer.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true
      }
    );

    footer.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: true
      }
    );

    footer.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive: true
      }
    );

    footer.addEventListener(
      "touchcancel",
      handleTouchEnd,
      {
        passive: true
      }
    );

    return () => {
      footer.removeEventListener(
        "pointerenter",
        handlePointerEnter
      );

      footer.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      footer.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      footer.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      footer.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      footer.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      footer.removeEventListener(
        "touchcancel",
        handleTouchEnd
      );

      gsap.killTweensOf(
        badge
      );
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="site-footer"
    >
      <div
        ref={badgeRef}
        className="footer-follow-badge"
        aria-hidden="true"
      >
        <span>
          CONNECT
        </span>

        <span>
          NOW
        </span>
      </div>

      <div className="footer-main">

        <div className="footer-brand-stage">

          <span className="footer-lets">
            Let&apos;s
          </span>

          <div className="footer-wordmark">
            <SyncWordmark />
          </div>

          <div
            className="footer-hands"
            aria-hidden="true"
          >
            <div
              ref={leftHandRef}
              className="footer-hand-motion footer-hand-motion-left"
            >
              <img
                src="/images/footer/footer-left-hand.png"
                alt=""
                className="footer-hand-image"
                loading="eager"
                decoding="async"
                draggable="false"
              />
            </div>

            <div
              ref={rightHandRef}
              className="footer-hand-motion footer-hand-motion-right"
            >
              <img
                src="/images/footer/footer-right-hand.png"
                alt=""
                className="footer-hand-image"
                loading="eager"
                decoding="async"
                draggable="false"
              />
            </div>
          </div>

          <p className="footer-growth-line">
            Technology With Growth
          </p>

          <span className="footer-together">
            Together
          </span>

        </div>

        <nav
          className="footer-links"
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map(
            (item) => (
              <button
                key={item}
                type="button"
                className="footer-link"
              >
                {item}
              </button>
            )
          )}
        </nav>

        <div className="footer-bottom">

          <p className="footer-copyright">
            © 2026 SoftSync
          </p>

          <p className="footer-powered">
            <span>
              Powered by:
            </span>

            <strong>
              SoftSync Developers
            </strong>
          </p>

          <p className="footer-domain">
            www.softsync.com
          </p>

        </div>

      </div>
    </footer>
  );
}