import { useLayoutEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Cursor from '../Components/Cursor';
import './WhoWeAre.css';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import {
  SiExpress,
  SiCplusplus,
  SiFlutter,
  SiThreedotjs,
  SiBlender,
  SiGreensock
} from 'react-icons/si';
import {
  MdDesignServices,
  MdOutlineWaves
} from 'react-icons/md';
import Footer from '../Components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlexusCanvas from '../Components/PlexusCanvas';
import TeamDeck from '../Components/TeamDeck';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/TeamData';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const pageRef = useRef(null);

  const techData = {
    Development: [
      {
        name: 'MERN Stack',
        icon: <FaNodeJs />
      },
      {
        name: 'Node.js',
        icon: <FaNodeJs />
      },
      {
        name: 'Express',
        icon: <SiExpress />
      },
      {
        name: 'React',
        icon: <FaReact />
      },
      {
        name: 'Python',
        icon: <FaPython />
      },
      {
        name: 'C / C++',
        icon: <SiCplusplus />
      }
    ],

    'Mobile Dev': [
      {
        name: 'React Native',
        icon: <FaReact />
      },
      {
        name: 'Flutter',
        icon: <SiFlutter />
      }
    ],

    Designing: [
      {
        name: 'React Three Fiber',
        icon: <FaReact />
      },
      {
        name: 'Three.js',
        icon: <SiThreedotjs />
      },
      {
        name: 'UI/UX',
        icon: <MdDesignServices />
      },
      {
        name: 'Blender',
        icon: <SiBlender />
      },
      {
        name: 'GSAP',
        icon: <SiGreensock />
      },
      {
        name: 'Lenis',
        icon: <MdOutlineWaves />
      }
    ]
  };

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: '(min-width: 901px)',
          tablet:
            '(min-width: 601px) and (max-width: 900px)',
          mobile: '(max-width: 600px)',
          reduceMotion:
            '(prefers-reduced-motion: reduce)'
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
                '.wwa-heading',
                '.wwa-hero-content',
                '.section-title',
                '.integrity-item',
                '.team-deck-reveal',
                '.service-card',
                '.tech-col',
                '.why-choose-section',
                '.why-choose-section h1',
                '.why-choose-section p',
                '.why-choose-section a'
              ],
              {
                clearProps: 'all'
              }
            );

            return;
          }

          const blurLarge = desktop
            ? 7
            : tablet
            ? 4
            : 2;

          const blurSmall = desktop
            ? 4
            : tablet
            ? 3
            : 1;

          const distance = desktop
            ? 40
            : tablet
            ? 28
            : 18;

          const smallDistance = desktop
            ? 25
            : tablet
            ? 18
            : 13;

          const startPoint = mobile
            ? 'top 91%'
            : 'top 84%';

          const bindTimeline = (
            timeline,
            trigger,
            start = startPoint,
            reverseSpeed = mobile ? 2.4 : 2.1
          ) => {
            ScrollTrigger.create({
              trigger,
              start,
              invalidateOnRefresh: true,

              onEnter: () => {
                timeline
                  .timeScale(1)
                  .play();
              },

              onLeaveBack: () => {
                timeline
                  .timeScale(reverseSpeed)
                  .reverse();
              }
            });
          };

          gsap.set('.wwa-heading', {
            autoAlpha: 0,
            y: mobile ? 28 : 44,
            scale: mobile ? 0.97 : 0.94,
            filter: `blur(${blurLarge}px)`
          });

          const heroTimeline = gsap.timeline({
            defaults: {
              ease: 'power4.out'
            }
          });

          heroTimeline.to('.wwa-heading', {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            filter: 'blur(0px)',
            duration: mobile ? 0.48 : 0.62,
            ease: 'expo.out',
            clearProps: 'transform,filter'
          });

          const approachTimeline = gsap.timeline({
            paused: true,
            defaults: {
              ease: 'power4.out'
            }
          });

          approachTimeline
            .fromTo(
              '.approach-section .section-title',
              {
                y: distance,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`,
                rotationX: mobile ? 0 : 7,
                transformOrigin: '50% 100%'
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                rotationX: 0,
                duration: mobile ? 0.4 : 0.52
              }
            )

            .fromTo(
              '.approach-section .integrity-item',
              {
                y: mobile ? 16 : 25,
                x: desktop ? -16 : 0,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                x: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.31 : 0.38,
                stagger: mobile ? 0.04 : 0.055,
                ease: 'power3.out'
              },
              '-=0.28'
            );

          bindTimeline(
            approachTimeline,
            '.approach-section'
          );

          const teamTimeline = gsap.timeline({
            paused: true
          });

          teamTimeline
            .fromTo(
              '.team-section-white .section-title',
              {
                y: distance,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.4 : 0.52,
                ease: 'power4.out'
              }
            )

            .fromTo(
              '.team-deck-reveal',
              {
                y: mobile ? 22 : 36,
                scale: mobile ? 0.99 : 0.975,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.46 : 0.58,
                ease: 'expo.out'
              },
              '-=0.3'
            );

          bindTimeline(
            teamTimeline,
            '.team-section-white'
          );

          const servicesTimeline = gsap.timeline({
            paused: true
          });

          servicesTimeline
            .fromTo(
              '.services-section-gradient .section-title',
              {
                y: distance,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`,
                scale: 0.97
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                scale: 1,
                duration: mobile ? 0.4 : 0.52,
                ease: 'power4.out'
              }
            )

            .fromTo(
              '.services-section-gradient .service-card',
              {
                y: mobile ? 25 : 40,

                x: (index) => {
                  if (!desktop) {
                    return 0;
                  }

                  if (index % 3 === 0) {
                    return -14;
                  }

                  if (index % 3 === 2) {
                    return 14;
                  }

                  return 0;
                },

                scale: mobile ? 0.98 : 0.955,

                rotationX: mobile
                  ? 0
                  : 6,

                rotationZ: (index) => {
                  if (!desktop) {
                    return 0;
                  }

                  return index % 2 === 0
                    ? -0.45
                    : 0.45;
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
                duration: mobile ? 0.36 : 0.46,

                stagger: mobile
                  ? 0.045
                  : 0.065,

                ease: 'power4.out'
              },

              '-=0.28'
            );

          bindTimeline(
            servicesTimeline,
            '.services-section-gradient'
          );

          const techTimeline = gsap.timeline({
            paused: true
          });

          techTimeline
            .fromTo(
              '.tech-section-dark .section-title',
              {
                y: distance,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.4 : 0.52,
                ease: 'power4.out'
              }
            )

            .fromTo(
              '.tech-section-dark .tech-col',
              {
                y: mobile ? 22 : 34,
                scale: mobile ? 0.99 : 0.97,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.38 : 0.48,
                stagger: mobile ? 0.06 : 0.085,
                ease: 'power4.out'
              },
              '-=0.28'
            );

          bindTimeline(
            techTimeline,
            '.tech-section-dark'
          );

          const whyTimeline = gsap.timeline({
            paused: true
          });

          whyTimeline
            .fromTo(
              '.why-choose-section',
              {
                y: mobile ? 24 : 42,
                scale: mobile ? 0.99 : 0.965,
                autoAlpha: 0,
                filter: `blur(${blurLarge}px)`
              },
              {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.46 : 0.58,
                ease: 'expo.out'
              }
            )

            .fromTo(
              '.why-choose-section h1',
              {
                y: smallDistance,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.32 : 0.4,
                ease: 'power4.out'
              },
              '-=0.36'
            )

            .fromTo(
              '.why-choose-section p',
              {
                y: smallDistance,
                autoAlpha: 0,
                filter: `blur(${blurSmall}px)`
              },
              {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: mobile ? 0.34 : 0.43,
                ease: 'power3.out'
              },
              '-=0.27'
            )

            .fromTo(
              '.why-choose-section a',
              {
                y: 12,
                scale: 0.95,
                autoAlpha: 0
              },
              {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                duration: mobile ? 0.3 : 0.36,
                ease: 'back.out(1.4)'
              },
              '-=0.24'
            );

          bindTimeline(
            whyTimeline,
            '.why-choose-wrapper',
            mobile
              ? 'top 93%'
              : 'top 87%',
            mobile
              ? 2.5
              : 2.2
          );

          if (desktop) {
            gsap.fromTo(
              '.wwa-hero-content',
              {
                yPercent: 0
              },
              {
                yPercent: 12,
                ease: 'none',

                scrollTrigger: {
                  trigger: '.wwa-hero-section',
                  start: 'top top',
                  end: 'bottom top',
                  scrub: 0.8,
                  invalidateOnRefresh: true
                }
              }
            );

            gsap.fromTo(
              '.wwa-network-canvas',
              {
                scale: 1
              },
              {
                scale: 1.055,
                ease: 'none',

                scrollTrigger: {
                  trigger: '.wwa-hero-section',
                  start: 'top top',
                  end: 'bottom top',
                  scrub: 1.1,
                  invalidateOnRefresh: true
                }
              }
            );

            gsap.fromTo(
              '.services-section-gradient',
              {
                backgroundPosition: '30% 50%'
              },
              {
                backgroundPosition: '70% 50%',
                ease: 'none',

                scrollTrigger: {
                  trigger:
                    '.services-section-gradient',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.4,
                  invalidateOnRefresh: true
                }
              }
            );

            gsap.fromTo(
              '.why-choose-section',
              {
                backgroundPosition: '30% 50%'
              },
              {
                backgroundPosition: '70% 50%',
                ease: 'none',

                scrollTrigger: {
                  trigger: '.why-choose-wrapper',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.4,
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
      className="who-we-are-page"
      ref={pageRef}
    >
      <Cursor />

      <Navbar />

      <section className="wwa-hero-section">
        <PlexusCanvas
          className="wwa-network-canvas"
          speed={3.5}
          mouseRepel
          repelRadius={150}
          repelStrength={0.8}
        />

        <div className="wwa-hero-content">
          <h1 className="wwa-heading">
            Who We Are
          </h1>
        </div>
      </section>

      <div className="page-content-wrapper">
        <section className="wwa-section approach-section">
          <div className="wwa-container">
            <h1 className="section-title integrity-heading">
              Our Approach
            </h1>

            <div className="integrity-list">
              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>

                  <h3>
                    Initiative
                  </h3>
                </div>

                <p>
                  We take the first step ourselves,
                  solving problems before they become
                  roadblocks.
                </p>
              </div>

              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>

                  <h3>
                    Honesty
                  </h3>
                </div>

                <p>
                  Every conversation and update is
                  clear, upfront, and free of hidden
                  agendas.
                </p>
              </div>

              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>

                  <h3>
                    Innovation
                  </h3>
                </div>

                <p>
                  We bring fresh ideas and original
                  thinking to everything we build.
                </p>
              </div>

              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>

                  <h3>
                    Memorable Impact
                  </h3>
                </div>

                <p>
                  We aim to leave a lasting impression
                  in every project and every
                  interaction.
                </p>
              </div>

              <div className="integrity-item">
                <div className="integrity-left">
                  <span className="dot"></span>

                  <h3>
                    Drive for Excellence
                  </h3>
                </div>

                <p>
                  We chase the highest standard with
                  relentless focus and commitment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wwa-section team-section-white">
          <div className="wwa-container">
            <h1 className="section-title dark-title">
              Meet Our Team
            </h1>

            <div className="team-deck-reveal">
              <TeamDeck
                members={teamMembers}
              />
            </div>
          </div>
        </section>

 <section className="wwa-section services-section-gradient">
  <div className="wwa-container">
    <h1 className="section-title">
      Services We Offer
    </h1>

    <div className="services-grid-3">
      <div className="service-card">
        <h3>
          AI Solutions
        </h3>

        <p>
          We provide cutting-edge AI solutions
          including machine learning, natural
          language processing, and computer
          vision to transform your business
          operations. Our team develops
          intelligent systems that automate
          processes and unlock new opportunities
          for growth.
        </p>
      </div>

      <div className="service-card">
        <h3>
          Web Development
        </h3>

        <p>
          Crafting high-performance MERN stack
          applications and immersive 3D websites
          using React Three Fiber. We specialize
          in modern frameworks to deliver
          scalable solutions tailored to your
          business needs, ensuring seamless user
          experiences across all devices.
        </p>
      </div>

      <div className="service-card">
        <h3>
          SaaS Products
        </h3>

        <p>
          Engineering robust, scalable
          software-as-a-service platforms
          tailored for enterprise growth. From
          architecture to deployment, we build
          secure and reliable products designed
          to grow with your business.
        </p>
      </div>
    </div>

    <div className="services-grid-2">
      <div className="service-card">
        <h3>
          E-Commerce Solutions
        </h3>

        <p>
          We build powerful e-commerce platforms
          that deliver exceptional shopping
          experiences. From custom store
          development to platform migrations,
          we create secure, scalable, and
          feature-rich solutions that drive
          sales and grow your online business.
        </p>
      </div>

      <div className="service-card">
        <h3>
          Web Design
        </h3>

        <p>
          Our web design services focus on
          creating visually stunning,
          responsive, and user-friendly
          websites. We combine modern design
          principles with 3D animated
          interfaces and interactive experiences
          to deliver engaging websites that
          convert visitors into customers.
        </p>
      </div>

      <div className="service-card">
        <h3>
          App Development
        </h3>

        <p>
          We build modern, fast, and scalable
          mobile applications designed for
          seamless experiences across devices.
          From intuitive interfaces to secure
          APIs and real-time functionality, we
          develop reliable apps using technologies
          such as React Native and Flutter.
        </p>
      </div>
    </div>
  </div>
</section>

        <section className="wwa-section tech-section-dark">
          <div className="wwa-container">
            <h1 className="section-title">
              Technologies We Use
            </h1>

            <div className="tech-categories">
              {Object.entries(techData).map(
                ([category, items]) => (
                  <div
                    className="tech-col"
                    key={category}
                  >
                    <h4>
                      {category}
                    </h4>

                    <div className="tech-bars">
                      {items.map((item) => (
                        <div
                          className="tech-bar"
                          key={item.name}
                        >
                          <span className="tech-icon">
                            {item.icon}
                          </span>

                          <span className="tech-name">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>

      <section className="why-choose-wrapper">
        <div className="why-choose-section">
          <h1>
            Why Choose Us?
          </h1>

          <p>
            We don't just build websites — we engineer
            digital experiences. Powered by the MERN
            stack, our applications are fast, scalable,
            and built to last. We go beyond flat design
            with immersive 3D interactions using React
            Three Fiber and Three.js, while our
            AI-driven solutions automate your workflows
            and unlock smarter decisions. From SaaS
            platforms to full-scale e-commerce, every
            line of code is written with performance,
            security, and your growth in mind.
          </p>

          <Link to="/contact">
            <button className="cta-arrow-btn">
              Let's Make It Happen &#8594;
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}