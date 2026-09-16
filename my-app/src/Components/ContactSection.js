import {
  useEffect,
  useRef
} from "react";

import {
  Link
} from "react-router-dom";

import {
  Phone
} from "lucide-react";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import Contact from "./Contact";

import "./ContactSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef =
    useRef(null);

  const introRef =
    useRef(null);

  useEffect(() => {
    const section =
      sectionRef.current;

    const intro =
      introRef.current;

    if (
      !section ||
      !intro
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      gsap.set(
        intro,
        {
          y: 0,
          autoAlpha: 1
        }
      );

      return;
    }

    const ctx =
      gsap.context(() => {
        gsap.fromTo(
          intro,
          {
            y: 24,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            ease: "none",

            scrollTrigger: {
              trigger: section,
              start: "top 96%",
              end: "top 82%",
              scrub: 0.45
            }
          }
        );
      }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact-section"
    >
      <div className="contact-section-content">

        <div
          ref={introRef}
          className="contact-section-intro"
        >
          <h2>
            <span>
              Ready to Innovate
            </span>

            <span>
              with SoftSync?
            </span>
          </h2>

          <p>
            Complete the form, and our team
            will reach out to discuss how we
            can create custom software
            solutions to meet your business
            needs.
          </p>
        </div>

        <div className="contact-home-desktop-form">
          <Contact
            showNavbar={false}
            showCursor={false}
            showLeftPanel={false}
            twoColumnInputs={true}
            minHeight="auto"
            maxWidth="100%"
            paddingTop={0}
            paddingY={0}
            submitLabel="Contact Us Now"
            submitIcon="phone"
          />
        </div>

        <div className="contact-home-mobile-cta">

          <Link
            to="/contact"
            className="contact-mobile-cta"
          >
            <Phone
              size={15}
              strokeWidth={1.8}
            />

            <span>
              Contact Us Now
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}