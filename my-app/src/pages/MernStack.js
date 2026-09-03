import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../Components/Navbar';
import Cursor from '../Components/Cursor';
import Scene3 from '../Components/Scene3';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import './MernStack.css';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function TiltCard({ title, text, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;

    gsap.to(card, {
      rotateX: py * -3.5,
      rotateY: px * 4.5,
      y: -5,
      scale: 1.012,
      duration: 0.22,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  return (
    <div className="mern-card-reveal">
      <div
        ref={cardRef}
        className={`mern-card ${className || ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CloudServerIllustration() {
  return (
    <svg
      className="mern-illus-svg"
      width="100%"
      viewBox="0 0 680 480"
      role="img"
      aria-label="Cloud connected to server racks illustration"
    >
      <defs>
        <linearGradient id="mern-cloudg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#AFA9EC" />
          <stop offset="100%" stopColor="#7F77DD" />
        </linearGradient>
      </defs>

      <rect
        x="20"
        y="20"
        width="640"
        height="440"
        rx="16"
        fill="#26215C"
        opacity="0.5"
      />

      <g className="mern-cloudshape">
        <ellipse
          cx="340"
          cy="120"
          rx="110"
          ry="55"
          fill="url(#mern-cloudg)"
        />

        <ellipse
          cx="270"
          cy="140"
          rx="60"
          ry="40"
          fill="url(#mern-cloudg)"
        />

        <ellipse
          cx="410"
          cy="140"
          rx="65"
          ry="42"
          fill="url(#mern-cloudg)"
        />

        <circle
          cx="300"
          cy="105"
          r="4"
          fill="#26215C"
          opacity="0.6"
        />

        <circle
          cx="320"
          cy="100"
          r="4"
          fill="#26215C"
          opacity="0.6"
        />

        <circle
          cx="340"
          cy="97"
          r="4"
          fill="#26215C"
          opacity="0.6"
        />
      </g>

      <g>
        <rect
          x="70"
          y="260"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <rect
          x="70"
          y="304"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <rect
          x="70"
          y="348"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <circle
          className="mern-led"
          cx="88"
          cy="277"
          r="3"
          fill="#EEEDFE"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.3s' }}
          cx="88"
          cy="321"
          r="3"
          fill="#EEEDFE"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.6s' }}
          cx="88"
          cy="365"
          r="3"
          fill="#EEEDFE"
        />
      </g>

      <g>
        <rect
          x="265"
          y="270"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <rect
          x="265"
          y="314"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <rect
          x="265"
          y="358"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.1s' }}
          cx="283"
          cy="287"
          r="3"
          fill="#EEEDFE"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.4s' }}
          cx="283"
          cy="331"
          r="3"
          fill="#EEEDFE"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.7s' }}
          cx="283"
          cy="375"
          r="3"
          fill="#EEEDFE"
        />
      </g>

      <g>
        <rect
          x="460"
          y="260"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <rect
          x="460"
          y="304"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <rect
          x="460"
          y="348"
          width="150"
          height="34"
          rx="6"
          fill="#3C3489"
          stroke="#7F77DD"
          strokeWidth="0.5"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.2s' }}
          cx="478"
          cy="277"
          r="3"
          fill="#EEEDFE"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.5s' }}
          cx="478"
          cy="321"
          r="3"
          fill="#EEEDFE"
        />

        <circle
          className="mern-led"
          style={{ animationDelay: '.8s' }}
          cx="478"
          cy="365"
          r="3"
          fill="#EEEDFE"
        />
      </g>

      <path
        className="mern-wire"
        d="M220 210 L145 260"
        fill="none"
        stroke="#AFA9EC"
        strokeWidth="2"
      />

      <path
        className="mern-wire"
        d="M340 210 L340 270"
        fill="none"
        stroke="#AFA9EC"
        strokeWidth="2"
      />

      <path
        className="mern-wire"
        d="M460 210 L535 260"
        fill="none"
        stroke="#AFA9EC"
        strokeWidth="2"
      />
    </svg>
  );
}

function LaptopDashboardIllustration() {
  return (
    <svg
      className="mern-illus-svg"
      width="100%"
      viewBox="0 0 680 480"
      role="img"
      aria-label="Laptop dashboard with chat bubbles illustration"
    >
      <rect
        x="20"
        y="20"
        width="640"
        height="440"
        rx="16"
        fill="#3C3489"
      />

      <g className="mern-gear1" fill="#AFA9EC" opacity="0.5">
        <circle cx="560" cy="100" r="28" />
        <rect x="554" y="60" width="12" height="14" />
        <rect x="554" y="126" width="12" height="14" />
        <rect x="520" y="94" width="14" height="12" />
        <rect x="586" y="94" width="14" height="12" />
        <circle cx="560" cy="100" r="14" fill="#3C3489" />
      </g>

      <g className="mern-gear2" fill="#AFA9EC" opacity="0.4">
        <circle cx="90" cy="340" r="22" />
        <rect x="85" y="306" width="10" height="12" />
        <rect x="85" y="362" width="10" height="12" />
        <rect x="56" y="334" width="12" height="10" />
        <rect x="112" y="334" width="12" height="10" />
        <circle cx="90" cy="340" r="11" fill="#3C3489" />
      </g>

      <rect
        x="150"
        y="120"
        width="380"
        height="240"
        rx="10"
        fill="#EEEDFE"
      />

      <rect
        x="150"
        y="120"
        width="380"
        height="26"
        rx="10"
        fill="#CECBF6"
      />

      <circle cx="166" cy="133" r="4" fill="#7F77DD" />
      <circle cx="180" cy="133" r="4" fill="#AFA9EC" />
      <circle cx="194" cy="133" r="4" fill="#AFA9EC" />

      <rect x="170" y="166" width="60" height="8" rx="4" fill="#7F77DD" />
      <rect x="170" y="186" width="150" height="8" rx="4" fill="#D4537E" />
      <rect x="170" y="206" width="100" height="8" rx="4" fill="#B4B2A9" />
      <rect x="170" y="226" width="200" height="8" rx="4" fill="#7F77DD" />
      <rect x="170" y="246" width="130" height="8" rx="4" fill="#B4B2A9" />
      <rect x="170" y="266" width="170" height="8" rx="4" fill="#D4537E" />
      <rect x="170" y="286" width="90" height="8" rx="4" fill="#7F77DD" />

      <rect
        x="120"
        y="360"
        width="440"
        height="14"
        rx="7"
        fill="#26215C"
      />

      <polygon
        points="120,360 150,346 530,346 560,360"
        fill="#3C3489"
      />

      <g className="mern-bubble1">
        <rect
          x="90"
          y="70"
          width="70"
          height="46"
          rx="14"
          fill="#3C3489"
        />

        <polygon
          points="105,116 115,132 125,116"
          fill="#3C3489"
        />

        <line
          x1="105"
          y1="86"
          x2="145"
          y2="86"
          stroke="#EEEDFE"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <line
          x1="105"
          y1="98"
          x2="135"
          y2="98"
          stroke="#EEEDFE"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      <g className="mern-bubble2">
        <rect
          x="490"
          y="150"
          width="66"
          height="44"
          rx="14"
          fill="#D4537E"
        />

        <polygon
          points="504,194 494,210 514,194"
          fill="#D4537E"
        />

        <line
          x1="504"
          y1="166"
          x2="540"
          y2="166"
          stroke="#EEEDFE"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <line
          x1="504"
          y1="178"
          x2="530"
          y2="178"
          stroke="#EEEDFE"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default function MernStack() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: '(min-width: 901px)',
          tablet: '(min-width: 601px) and (max-width: 900px)',
          mobile: '(max-width: 600px)',
          reduceMotion: '(prefers-reduced-motion: reduce)'
        },
        (context) => {
          const {
            desktop,
            tablet,
            mobile,
            reduceMotion
          } = context.conditions;

          if (reduceMotion) {
            gsap.set(
              [
                '.mern-intro .mern-illustration',
                '.mern-intro .mern-text-block h2',
                '.mern-intro .mern-text-block p',
                '.mern-intro .mern-btn',
                '.mern-why .mern-text-block h2',
                '.mern-why .mern-text-block > p',
                '.mern-why .mern-list li',
                '.mern-why .mern-illustration',
                '.mern-cards-section .mern-cards-title',
                '.mern-card-reveal',
                '.mern-contact-cta .mern-cards-title',
                '.mern-contact-sub',
                '.mern-page .contact-page'
              ],
              {
                clearProps: 'all'
              }
            );

            return;
          }

          const distanceX = desktop ? 48 : tablet ? 34 : 18;
          const distanceY = desktop ? 38 : tablet ? 30 : 20;

          const titleDuration = desktop ? 0.58 : tablet ? 0.52 : 0.42;
          const textDuration = desktop ? 0.48 : tablet ? 0.44 : 0.36;
          const visualDuration = desktop ? 0.68 : tablet ? 0.6 : 0.48;

          const blurLarge = mobile ? 3 : 7;
          const blurSmall = mobile ? 2 : 4;

          const startPoint = mobile ? 'top 91%' : 'top 84%';

          const bindTimeline = (timeline, trigger, start = startPoint) => {
            ScrollTrigger.create({
              trigger,
              start,
              end: 'bottom top',
              invalidateOnRefresh: true,

              onEnter: () => {
                timeline.timeScale(1).play();
              },

              onLeaveBack: () => {
                timeline.timeScale(mobile ? 2.1 : 1.85).reverse();
              }
            });
          };

          const introTimeline = gsap.timeline({
            paused: true,
            defaults: {
              ease: 'power4.out'
            }
          });

          introTimeline
            .fromTo(
              '.mern-intro .mern-illustration',
              {
                x: -distanceX,
                y: mobile ? 10 : 16,
                scale: mobile ? 0.975 : 0.955,
                rotation: mobile ? 0 : -1.2,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`,
                clipPath: mobile
                  ? 'inset(3% 3% 3% 3% round 22px)'
                  : 'inset(5% 7% 5% 7% round 26px)'
              },
              {
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                clipPath: 'inset(0% 0% 0% 0% round 20px)',
                duration: visualDuration,
                ease: 'expo.out'
              }
            )
            .fromTo(
              '.mern-intro .mern-text-block h2',
              {
                y: distanceY,
                autoAlpha: 0,
                rotationX: mobile ? 0 : 8,
                transformOrigin: '50% 100%',
                filter: `blur(${blurLarge}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                rotationX: 0,
                filter: 'blur(0px)',
                duration: titleDuration
              },
              desktop ? '-=0.52' : '-=0.34'
            )
            .fromTo(
              '.mern-intro .mern-text-block p',
              {
                y: mobile ? 16 : 24,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: textDuration
              },
              '-=0.34'
            )
            .fromTo(
              '.mern-intro .mern-btn',
              {
                y: 14,
                autoAlpha: 0,
                scale: 0.94
              },
              {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: mobile ? 0.34 : 0.4,
                ease: 'back.out(1.25)'
              },
              '-=0.28'
            );

          bindTimeline(
            introTimeline,
            '.mern-intro'
          );

          const whyTimeline = gsap.timeline({
            paused: true,
            defaults: {
              ease: 'power4.out'
            }
          });

          whyTimeline
            .fromTo(
              '.mern-why .mern-text-block h2',
              {
                y: distanceY,
                autoAlpha: 0,
                rotationX: mobile ? 0 : 8,
                filter: `blur(${blurLarge}px)`,
                transformOrigin: '50% 100%'
              },
              {
                y: 0,
                autoAlpha: 1,
                rotationX: 0,
                filter: 'blur(0px)',
                duration: titleDuration
              }
            )
            .fromTo(
              '.mern-why .mern-text-block > p',
              {
                y: mobile ? 15 : 22,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: textDuration
              },
              '-=0.33'
            )
            .fromTo(
              '.mern-why .mern-list li',
              {
                y: mobile ? 12 : 16,
                x: mobile ? 0 : -14,
                autoAlpha: 0
              },
              {
                y: 0,
                x: 0,
                autoAlpha: 1,
                duration: mobile ? 0.32 : 0.38,
                stagger: mobile ? 0.045 : 0.055,
                ease: 'power3.out'
              },
              '-=0.26'
            )
            .fromTo(
              '.mern-why .mern-illustration',
              {
                x: mobile ? 0 : distanceX,
                y: mobile ? 18 : 12,
                scale: mobile ? 0.975 : 0.955,
                rotation: mobile ? 0 : 1.2,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`,
                clipPath: mobile
                  ? 'inset(3% 3% 3% 3% round 22px)'
                  : 'inset(5% 7% 5% 7% round 26px)'
              },
              {
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                clipPath: 'inset(0% 0% 0% 0% round 20px)',
                duration: visualDuration,
                ease: 'expo.out'
              },
              desktop ? '-=0.55' : '-=0.22'
            );

          bindTimeline(
            whyTimeline,
            '.mern-why'
          );

          const cardsTimeline = gsap.timeline({
            paused: true
          });

          cardsTimeline
            .fromTo(
              '.mern-cards-section .mern-cards-title',
              {
                y: mobile ? 22 : 34,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`,
                rotationX: mobile ? 0 : 8,
                transformOrigin: '50% 100%'
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                rotationX: 0,
                duration: titleDuration,
                ease: 'power4.out'
              }
            )
            .fromTo(
              '.mern-card-reveal',
              {
                y: mobile ? 30 : 46,
                x: (index) => {
                  if (mobile) return 0;

                  return index % 3 === 0
                    ? -16
                    : index % 3 === 2
                    ? 16
                    : 0;
                },
                scale: mobile ? 0.97 : 0.945,
                rotationX: mobile ? 0 : 7,
                rotationZ: (index) => {
                  if (mobile) return 0;

                  return index % 2 === 0
                    ? -0.7
                    : 0.7;
                },
                transformOrigin: '50% 100%',
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                x: 0,
                scale: 1,
                rotationX: 0,
                rotationZ: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.42 : 0.5,
                stagger: mobile ? 0.055 : 0.07,
                ease: 'power4.out'
              },
              '-=0.3'
            );

          bindTimeline(
            cardsTimeline,
            '.mern-cards-section'
          );

          const ctaTimeline = gsap.timeline({
            paused: true
          });

          ctaTimeline
            .fromTo(
              '.mern-contact-cta .mern-cards-title',
              {
                y: mobile ? 22 : 34,
                scale: 0.965,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`
              },
              {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: titleDuration,
                ease: 'power4.out'
              }
            )
            .fromTo(
              '.mern-contact-sub',
              {
                y: mobile ? 14 : 20,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: textDuration,
                ease: 'power3.out'
              },
              '-=0.32'
            );

          bindTimeline(
            ctaTimeline,
            '.mern-contact-cta',
            mobile ? 'top 94%' : 'top 88%'
          );

          const contactTimeline = gsap.timeline({
            paused: true
          });

          contactTimeline.fromTo(
            '.mern-page .contact-page',
            {
              y: mobile ? 24 : 40,
              scale: mobile ? 0.99 : 0.98,
              autoAlpha: 0,
              filter: `blur(${mobile ? 2 : 5}px)`
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              filter: 'blur(0px)',
              duration: mobile ? 0.46 : 0.58,
              ease: 'power4.out'
            }
          );

          bindTimeline(
            contactTimeline,
            '.mern-page .contact-page',
            mobile ? 'top 95%' : 'top 90%'
          );

          if (desktop) {
            gsap.to(
              '.mern-intro .mern-illus-svg',
              {
                yPercent: 2.5,
                ease: 'none',
                scrollTrigger: {
                  trigger: '.mern-intro',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.6,
                  invalidateOnRefresh: true
                }
              }
            );

            gsap.to(
              '.mern-why .mern-illus-svg',
              {
                yPercent: -2.5,
                ease: 'none',
                scrollTrigger: {
                  trigger: '.mern-why',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.6,
                  invalidateOnRefresh: true
                }
              }
            );
          }
        }
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, page);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="mern-page"
      ref={pageRef}
    >
      <Cursor />

      <Navbar />

      <Scene3 title="MERN Stack Development" />

      <section className="mern-section mern-intro">
        <div className="mern-container mern-intro-grid">
          <div className="mern-illustration">
            <CloudServerIllustration />
          </div>

          <div className="mern-text-block">
            <h2>
              Expert MERN Stack Development Services
            </h2>

            <p>
              We specialize in{' '}
              <strong>full stack development</strong>{' '}
              using the powerful MERN stack — MongoDB,
              Express.js, React.js, and Node.js. Our experienced
              developers craft{' '}
              <strong>
                scalable, high-performance web applications
              </strong>{' '}
              tailored to your business needs. Whether you want
              to{' '}
              <strong>
                hire MERN stack developers
              </strong>{' '}
              for a brand-new build or enhance an existing
              application, we deliver complete solutions that
              drive real results.
            </p>

            <Link to="/contact">
              <button className="mern-btn">
                Hire MERN Developers
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mern-section mern-why">
        <div className="mern-container mern-why-grid">
          <div className="mern-text-block">
            <h2>
              Why Choose Our MERN Stack Development Services?
            </h2>

            <p>
              As a leading{' '}
              <strong>
                MERN stack development company
              </strong>
              , we provide end-to-end solutions that make the
              most of JavaScript across your entire application
              stack:
            </p>

            <ul className="mern-list">
              <li>
                <strong>
                  Full stack development expertise
                </strong>{' '}
                — We handle both frontend and backend with
                unified JavaScript skills using React.
              </li>

              <li>
                <strong>
                  MERN stack flexibility
                </strong>{' '}
                — Flexible architecture built around React.js,
                tailored to your project needs.
              </li>

              <li>
                <strong>
                  Scalable architecture
                </strong>{' '}
                — Solutions that grow with your business and
                traffic.
              </li>

              <li>
                <strong>
                  Real-time features
                </strong>{' '}
                — Implement chat, notifications, and live
                updates for modern web apps.
              </li>

              <li>
                <strong>
                  Dedicated teams
                </strong>{' '}
                — Option to hire a dedicated MERN stack team
                for your project.
              </li>
            </ul>
          </div>

          <div className="mern-illustration">
            <LaptopDashboardIllustration />
          </div>
        </div>
      </section>

      <section className="mern-section mern-cards-section">
        <div className="mern-container">
          <h2 className="mern-cards-title">
            What We Build With MERN
          </h2>

          <div className="mern-cards-grid">
            <TiltCard
              className="card-1"
              title="Custom MERN Web Applications"
              text="We develop robust, scalable, and high-performance web applications using MongoDB, Express.js, React.js, and Node.js, tailored to your business requirements."
            />

            <TiltCard
              className="card-2"
              title="API Development & Integrations"
              text="Design and implement secure RESTful APIs and integrate third-party services seamlessly into your MERN stack applications."
            />

            <TiltCard
              className="card-3"
              title="Single Page Applications (SPA)"
              text="Deliver lightning-fast, interactive SPAs with React.js for a seamless user experience and modern web standards."
            />

            <TiltCard
              className="card-4"
              title="Real-Time Application Development"
              text="Build real-time features such as chat, notifications, and live updates using WebSockets and the latest MERN technologies."
            />

            <TiltCard
              className="card-5"
              title="E-commerce Solutions"
              text="Launch scalable e-commerce platforms with secure payment gateways, product management, and user authentication using the MERN stack."
            />

            <TiltCard
              className="card-6"
              title="Migration to MERN Stack"
              text="Migrate your legacy applications to the MERN stack for improved performance, maintainability, and scalability."
            />
          </div>
        </div>
      </section>

      <section className="mern-section mern-contact-cta">
        <div className="mern-container">
          <h2 className="mern-cards-title">
            Have a Project in Mind?{' '}
            <span className="cta-gradient">
              Let's Talk.
            </span>
          </h2>

          <p className="mern-contact-sub">
            Tell us about your idea — our MERN experts will get
            back to you within 24 hours.
          </p>
        </div>
      </section>

      <Contact
        showNavbar={false}
        showCursor={false}
        showLeftPanel={false}
        twoColumnInputs={true}
        minHeight="auto"
        maxWidth="1150px"
        paddingTop={20}
        paddingY={24}
        gap={40}
        inputPadding={14}
        fontSize={0.9}
      />

      <Footer />
    </div>
  );
}