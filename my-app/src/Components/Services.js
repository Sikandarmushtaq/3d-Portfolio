import {
  useEffect,
  useRef,
  useState,
} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Canvas } from '@react-three/fiber';

import {
  AnimatedBackgroundParticles,
} from './Scene';

import Footer from './Footer';
import Contact from './Contact';

import './Services.css';


gsap.registerPlugin(ScrollTrigger);




function useElementVisible(ref) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        rootMargin: '150px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return visible;
}




function AiIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="aiGradient"
          x1="42"
          y1="33"
          x2="137"
          y2="132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70E3FF" />

          <stop
            offset="0.5"
            stopColor="#6D72FF"
          />

          <stop
            offset="1"
            stopColor="#BC57EB"
          />
        </linearGradient>

        <filter
          id="aiGlow"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>


      <circle
        cx="91"
        cy="80"
        r="48"
        fill="#655CFF"
        opacity="0.2"
        filter="url(#aiGlow)"
      />


      <path
        d="M90 35C72 28 53 39 52 58C38 64 35 85 47 95C44 113 60 126 76 122C83 137 104 137 112 123C132 124 143 104 133 90C144 73 134 53 117 51C112 36 99 31 90 35Z"
        stroke="url(#aiGradient)"
        strokeWidth="3"
      />


      <path
        d="M90 36V124"
        stroke="#BDEEFF"
        strokeOpacity="0.45"
      />

      <path
        d="M64 53L90 67L116 52"
        stroke="#A4B9FF"
        strokeOpacity="0.7"
      />

      <path
        d="M51 82L76 82L90 67L106 83L133 81"
        stroke="#C5A3FF"
      />

      <path
        d="M61 108L77 95L90 106L106 94L123 110"
        stroke="#8FDFFF"
      />


      <circle
        cx="64"
        cy="53"
        r="5"
        fill="#84E9FF"
      />

      <circle
        cx="116"
        cy="52"
        r="5"
        fill="#9A8BFF"
      />

      <circle
        cx="51"
        cy="82"
        r="4"
        fill="#FFFFFF"
      />

      <circle
        cx="76"
        cy="82"
        r="5"
        fill="#6FD9FF"
      />

      <circle
        cx="90"
        cy="67"
        r="6"
        fill="#FFFFFF"
      />

      <circle
        cx="106"
        cy="83"
        r="5"
        fill="#A66EFF"
      />

      <circle
        cx="133"
        cy="81"
        r="4"
        fill="#FFFFFF"
      />

      <circle
        cx="61"
        cy="108"
        r="4"
        fill="#7FE8FF"
      />

      <circle
        cx="90"
        cy="106"
        r="6"
        fill="#FFFFFF"
      />

      <circle
        cx="123"
        cy="110"
        r="4"
        fill="#BD6CFF"
      />
    </svg>
  );
}




function MernIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id="mernGlow"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(87 78) rotate(90) scale(58)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8BE8FF" />

          <stop
            offset="0.48"
            stopColor="#718CFF"
          />

          <stop
            offset="1"
            stopColor="#9E55D7"
            stopOpacity="0"
          />
        </radialGradient>


        <linearGradient
          id="mernWire"
          x1="38"
          y1="25"
          x2="145"
          y2="138"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#FFFFFF"
            stopOpacity="0.9"
          />

          <stop
            offset="0.5"
            stopColor="#9BDFFF"
          />

          <stop
            offset="1"
            stopColor="#C783FF"
          />
        </linearGradient>


        <filter
          id="mernBlur"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>


      <circle
        cx="88"
        cy="79"
        r="44"
        fill="url(#mernGlow)"
        opacity="0.75"
        filter="url(#mernBlur)"
      />


      <path
        d="M45 39L102 25L143 58L131 121L75 138L38 99L45 39Z"
        stroke="url(#mernWire)"
        strokeWidth="1.4"
      />

      <path
        d="M45 39L88 79L143 58"
        stroke="url(#mernWire)"
        strokeOpacity="0.75"
      />

      <path
        d="M88 79L75 138"
        stroke="url(#mernWire)"
        strokeOpacity="0.75"
      />

      <path
        d="M88 79L131 121"
        stroke="url(#mernWire)"
        strokeOpacity="0.55"
      />


      <circle
        cx="88"
        cy="79"
        r="7"
        fill="#FFFFFF"
      />

      <circle
        cx="88"
        cy="79"
        r="14"
        fill="#82DAFF"
        opacity="0.22"
      />

      <circle
        cx="143"
        cy="58"
        r="3"
        fill="#D1FCFF"
      />

      <circle
        cx="131"
        cy="121"
        r="2.4"
        fill="#BD7BFF"
      />
    </svg>
  );
}




function WebMobileIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="robotBody"
          x1="60"
          y1="23"
          x2="122"
          y2="126"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D8F4FF" />

          <stop
            offset="0.45"
            stopColor="#70A5FF"
          />

          <stop
            offset="1"
            stopColor="#3264E8"
          />
        </linearGradient>


        <linearGradient
          id="bookGradient"
          x1="40"
          y1="105"
          x2="136"
          y2="143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFFAFF" />

          <stop
            offset="0.55"
            stopColor="#7CB8FF"
          />

          <stop
            offset="1"
            stopColor="#3D66FF"
          />
        </linearGradient>


        <filter
          id="robotGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>


      <ellipse
        cx="94"
        cy="127"
        rx="56"
        ry="16"
        fill="#315DFF"
        opacity="0.22"
        filter="url(#robotGlow)"
      />


      <circle
        cx="96"
        cy="61"
        r="35"
        fill="url(#robotBody)"
      />


      <ellipse
        cx="104"
        cy="53"
        rx="19"
        ry="22"
        fill="#528DFF"
      />


      <ellipse
        cx="108"
        cy="50"
        rx="12"
        ry="14"
        fill="#B9F2FF"
        opacity="0.85"
      />


      <circle
        cx="119"
        cy="58"
        r="5"
        fill="#39F2FF"
      />


      <circle
        cx="119"
        cy="58"
        r="10"
        stroke="#44DFFF"
        strokeOpacity="0.4"
      />


      <path
        d="M77 87C82 81 89 78 96 78C109 78 119 86 122 99L117 121H75L70 99C71 94 73 90 77 87Z"
        fill="url(#robotBody)"
      />


      <path
        d="M35 104C52 101 69 107 88 119V142C69 130 51 125 35 127V104Z"
        fill="url(#bookGradient)"
      />


      <path
        d="M141 104C124 101 107 107 88 119V142C107 130 125 125 141 127V104Z"
        fill="url(#bookGradient)"
      />


      <path
        d="M88 119V142"
        stroke="#FFFFFF"
        strokeOpacity="0.85"
      />


      <path
        d="M45 112C58 112 69 116 81 123"
        stroke="#FFFFFF"
        strokeOpacity="0.45"
      />


      <path
        d="M131 112C118 112 107 116 95 123"
        stroke="#FFFFFF"
        strokeOpacity="0.45"
      />
    </svg>
  );
}




function CustomSoftwareIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="softwareScreen"
          x1="31"
          y1="35"
          x2="134"
          y2="125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8D7CFF" />

          <stop
            offset="0.5"
            stopColor="#5652E7"
          />

          <stop
            offset="1"
            stopColor="#C546E3"
          />
        </linearGradient>


        <linearGradient
          id="softwareGear"
          x1="102"
          y1="91"
          x2="153"
          y2="142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E69AFF" />

          <stop
            offset="1"
            stopColor="#5B65FF"
          />
        </linearGradient>


        <filter
          id="softwareGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>


      <ellipse
        cx="88"
        cy="127"
        rx="57"
        ry="15"
        fill="#7651FF"
        opacity="0.24"
        filter="url(#softwareGlow)"
      />


      <rect
        x="29"
        y="31"
        width="104"
        height="81"
        rx="10"
        fill="url(#softwareScreen)"
      />


      <rect
        x="37"
        y="40"
        width="88"
        height="63"
        rx="6"
        fill="#11132B"
      />


      <circle
        cx="45"
        cy="47"
        r="2.5"
        fill="#FF6B9E"
      />

      <circle
        cx="53"
        cy="47"
        r="2.5"
        fill="#9A75FF"
      />

      <circle
        cx="61"
        cy="47"
        r="2.5"
        fill="#71DDFF"
      />


      <path
        d="M66 66L53 78L66 90"
        stroke="#B4D8FF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />


      <path
        d="M95 66L108 78L95 90"
        stroke="#B4D8FF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />


      <path
        d="M87 61L75 95"
        stroke="#E1C5FF"
        strokeWidth="4"
        strokeLinecap="round"
      />


      <path
        d="M63 112H100L109 125H53L63 112Z"
        fill="#745DFF"
      />


      <circle
        cx="125"
        cy="112"
        r="23"
        fill="url(#softwareGear)"
      />


      <circle
        cx="125"
        cy="112"
        r="10"
        fill="#17162F"
      />


      <path
        d="M125 82V91M125 133V142M95 112H104M146 112H155M104 91L110 97M140 127L146 133M104 133L110 127M140 97L146 91"
        stroke="#BD9CFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}




const SERVICES = [
  {
    number: '01',
    title: 'AI-Powered Solutions',
    description:
      'We build intelligent AI-powered solutions that automate processes, uncover insights from data, and create smarter digital experiences.',
    Icon: AiIcon,
  },

  {
    number: '02',
    title: 'MERN Stack Development',
    description:
      'We build fast, secure, and scalable full-stack applications with modern architecture, production-ready APIs, and reliable engineering.',
    Icon: MernIcon,
  },

  {
    number: '03',
    title: 'Web & Mobile App Development',
    description:
      'We create responsive web experiences and cross-platform mobile applications built for speed, clarity, and seamless interaction.',
    Icon: WebMobileIcon,
  },

  {
    number: '04',
    title: 'Custom Software Development',
    description:
      'We design tailored software systems that automate workflows, solve operational challenges, and scale alongside your business.',
    Icon: CustomSoftwareIcon,
  },
];




const TECHNOLOGIES = [
  'MERN Stack',
  'React',
  'Node.js',
  'JavaScript',
  'Python',
  'Three.js',
  'React Three Fiber',
  'GSAP',
  'React Native',
  'PostgreSQL',
  'SQL',
  'Django',
  'C / C++',
];




function TechnologyGroup() {
  return (
    <div
      className="marquee-group"
      aria-hidden="true"
    >
      {TECHNOLOGIES.map(
        (technology) => (
          <div
            className="tech-marquee-unit"
            key={technology}
          >
            <span className="tech-name">
              {technology}
            </span>

            <span
              className="tech-separator"
              aria-hidden="true"
            >
              •
            </span>
          </div>
        )
      )}
    </div>
  );
}




export default function Services() {
  const sectionRef = useRef(null);

  const particleSectionRef = useRef(null);

  const marqueeTrackRef = useRef(null);

  const marqueeTweenRef = useRef(null);


  const particleSectionVisible =
    useElementVisible(
      particleSectionRef
    );



  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;


    const ctx =
      gsap.context(() => {

        const generalItems =
          gsap.utils.toArray(
            '.anim-item'
          );


        const serviceItems =
          gsap.utils.toArray(
            '.service-timeline-item'
          );



        if (reducedMotion) {
          gsap.set(
            [
              ...generalItems,
              ...serviceItems,
            ],
            {
              y: 0,
              autoAlpha: 1,
            }
          );


          gsap.set(
            '.timeline-line-progress',
            {
              scaleY: 1,
            }
          );

          return;
        }


   

        generalItems.forEach(
          (item) => {

            gsap.fromTo(
              item,

              {
                y: 55,
                autoAlpha: 0,
              },

              {
                y: 0,
                autoAlpha: 1,

                ease: 'none',

                scrollTrigger: {
                  trigger: item,

                  start:
                    'top 94%',

                  end:
                    'top 69%',

                  scrub: 0.65,
                },
              }
            );
          }
        );


     

        gsap.fromTo(
          '.timeline-line-progress',

          {
            scaleY: 0,
          },

          {
            scaleY: 1,

            ease: 'none',

            transformOrigin:
              'top center',

            scrollTrigger: {
              trigger:
                '.services-timeline',

              start:
                'top 78%',

              end:
                'bottom 52%',

              scrub: 0.7,
            },
          }
        );



        serviceItems.forEach(
          (item) => {

            const node =
              item.querySelector(
                '.service-node'
              );


            const connector =
              item.querySelector(
                '.service-connector'
              );


            gsap.fromTo(
              item,

              {
                y: 90,
                autoAlpha: 0,
              },

              {
                y: 0,
                autoAlpha: 1,

                ease: 'none',

                scrollTrigger: {
                  trigger: item,

                  start:
                    'top 93%',

                  end:
                    'top 63%',

                  scrub: 0.75,
                },
              }
            );


            if (node) {
              gsap.fromTo(
                node,

                {
                  scale: 0.65,
                  autoAlpha: 0.2,
                },

                {
                  scale: 1,
                  autoAlpha: 1,

                  ease: 'none',

                  scrollTrigger: {
                    trigger: item,

                    start:
                      'top 88%',

                    end:
                      'top 67%',

                    scrub: 0.55,
                  },
                }
              );
            }


            if (connector) {
              gsap.fromTo(
                connector,

                {
                  scaleX: 0,
                },

                {
                  scaleX: 1,

                  ease: 'none',

                  transformOrigin:
                    item.classList.contains(
                      'is-left'
                    )
                      ? 'right center'
                      : 'left center',

                  scrollTrigger: {
                    trigger: item,

                    start:
                      'top 88%',

                    end:
                      'top 67%',

                    scrub: 0.55,
                  },
                }
              );
            }
          }
        );


      

        const marqueeTrack =
          marqueeTrackRef.current;


        if (marqueeTrack) {
          gsap.set(
            marqueeTrack,
            {
              xPercent: 0,
              force3D: true,
            }
          );


          marqueeTweenRef.current =
            gsap.to(
              marqueeTrack,
              {
                xPercent: -50,

                duration: 32,

                ease: 'none',

                repeat: -1,

                force3D: true,
              }
            );
        }

      }, sectionRef);


    const refreshFrame =
      window.requestAnimationFrame(
        () => {
          ScrollTrigger.refresh();
        }
      );


    return () => {
      window.cancelAnimationFrame(
        refreshFrame
      );

      marqueeTweenRef.current = null;

      ctx.revert();
    };
  }, []);




  const handleMarqueeEnter = () => {
    if (!marqueeTweenRef.current) {
      return;
    }


    gsap.to(
      marqueeTweenRef.current,
      {
        timeScale: 0.35,

        duration: 0.5,

        ease: 'power2.out',
      }
    );
  };


  const handleMarqueeLeave = () => {
    if (!marqueeTweenRef.current) {
      return;
    }


    gsap.to(
      marqueeTweenRef.current,
      {
        timeScale: 1,

        duration: 0.6,

        ease: 'power2.out',
      }
    );
  };


  return (
    <section
      ref={sectionRef}
      className="services-section"
    >

      <div className="services-container">


       

        <div className="services-intro anim-item">

          <div className="services-intro-heading">

            <div className="services-label">

              <span className="services-label-line" />

              Our Services

            </div>


            <h1 className="services-title">
              Our
              <br />
              Services
            </h1>

          </div>


          <div className="services-intro-copy">

            <p>
              We build powerful digital solutions
              that turn ideas into scalable products,
              seamless experiences, and measurable
              business impact.
            </p>

          </div>

        </div>


     

        <div className="services-timeline">

          <span
            className="timeline-line-base"
            aria-hidden="true"
          />


          <span
            className="timeline-line-progress"
            aria-hidden="true"
          />


          {SERVICES.map(
            (
              {
                number,
                title,
                description,
                Icon,
              },
              index
            ) => {

              const side =
                index % 2 === 0
                  ? 'is-left'
                  : 'is-right';


              return (
                <article
                  key={number}
                  className={`service-timeline-item ${side}`}
                >

                  <span
                    className="service-connector"
                    aria-hidden="true"
                  />


                  <span
                    className="service-node"
                    aria-hidden="true"
                  >
                    <span />
                  </span>


                  <div className="service-item-inner">

                    <div className="service-visual">
                      <Icon />
                    </div>


                    <div className="service-content">

                      <div className="service-number">
                        {number}.
                      </div>


                      <h2>
                        {title}
                      </h2>


                      <p>
                        {description}
                      </p>

                    </div>

                  </div>

                </article>
              );
            }
          )}

        </div>


  

        <div
          ref={particleSectionRef}
          className="tech-typography-section anim-item"
        >

          <div className="tech-typo-canvas">

            <Canvas
              dpr={[1, 1.25]}

              camera={{
                position: [0, 0, 5],

                fov: 45,

                near: 0.1,

                far: 100,
              }}

              gl={{
                antialias: false,

                alpha: true,

                powerPreference:
                  'high-performance',
              }}

              frameloop={
                particleSectionVisible
                  ? 'always'
                  : 'never'
              }

              performance={{
                min: 0.5,
              }}
            >

              <AnimatedBackgroundParticles
                mouseEffect={false}
              />

            </Canvas>

          </div>


          <div className="typo-text-wrapper">

            <h1 className="typo-heading">

              <span className="t-we">
                WE
              </span>{' '}

              <span className="t-think">
                THINK
              </span>

              <br />

              <span className="t-craft">
                CRAFT
              </span>

              <br />

              <span className="t-and">
                &
              </span>{' '}

              <span className="t-design">
                DESIGN
              </span>

            </h1>

          </div>

        </div>



        <section className="tech-stack-section anim-item">

          <div className="tech-stack-heading">

            <div className="tech-stack-kicker">

              <span />

              Tools & Technologies

            </div>


            <div className="tech-stack-title-row">

              <h2>
                Technologies We Use
              </h2>


              <p>
                A modern engineering stack selected
                for performance, scalability and
                exceptional digital experiences.
              </p>

            </div>

          </div>


          <div
            className="tech-marquee"

            aria-label="Technologies we use"

            onMouseEnter={
              handleMarqueeEnter
            }

            onMouseLeave={
              handleMarqueeLeave
            }
          >

            <div
              className="tech-edge-fade tech-edge-left"
              aria-hidden="true"
            />


            <div
              className="tech-edge-fade tech-edge-right"
              aria-hidden="true"
            />


            <div
              ref={marqueeTrackRef}
              className="marquee-track"
            >

              <TechnologyGroup />

              <TechnologyGroup />

            </div>

          </div>

        </section>


    

        <div className="contact-form-container anim-item">

          <h2>
            Ready to Elevate Your Business?
          </h2>


          <p>
            Tell us what you want to build.
            Our team will help turn your idea
            into a reliable, scalable digital
            product.
          </p>


          <Contact
            showNavbar={false}
            showCursor={false}
            showLeftPanel={false}
            twoColumnInputs={true}
            minHeight="auto"
            maxWidth="100%"
            paddingTop={0}
            paddingY={0}
          />

        </div>

      </div>


      <Footer />

    </section>
  );
}