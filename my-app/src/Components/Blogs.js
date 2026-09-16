import {
  useEffect,
  useRef
} from "react";

import {
  Link
} from "react-router-dom";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./Blogs.css";

gsap.registerPlugin(ScrollTrigger);

const BLOGS = [
  {
    title:
      "AI AUTOMATION FOR BUSINESS GROWTH",

    description:
      "How intelligent automation can reduce repetitive work, improve operational visibility and help teams focus on higher-value decisions.",

    image:
      "/images/blogs/ai-automation.jpg",

    slug:
      "ai-automation-business-growth"
  },

  {
    title:
      "BUILDING SAAS PRODUCTS READY TO SCALE",

    description:
      "The engineering decisions that help SaaS products support more users, features and integrations without constant rebuilding.",

    image:
      "/images/blogs/saas-products.avif",

    slug:
      "building-scalable-saas-products"
  },

  {
    title:
      "CUSTOM SOFTWARE FOR MODERN OPERATIONS",

    description:
      "When purpose-built software becomes a better business decision than forcing teams to work around disconnected tools.",

    image:
      "/images/blogs/custom-software.avif",

    slug:
      "custom-software-modern-operations"
  },

  {
    title:
      "SEO & ORGANIC GROWTH",

    description:
      "Building stronger search visibility through technical performance, useful content and a digital experience designed around real users.",

    image:
      "/images/blogs/seo-growth.avif",

    slug:
      "seo-organic-growth"
  },

  {
    title:
      "PAID ADS & CONVERSION GROWTH",

    description:
      "Connecting targeted campaigns with stronger landing experiences to create clearer paths from attention to qualified business opportunities.",

    image:
      "/images/blogs/paid-growth.avif",

    slug:
      "paid-ads-conversion-growth"
  },

  {
    title:
      "SOCIAL MEDIA & CUSTOMER ENGAGEMENT",

    description:
      "How consistent brand communication, relevant content and customer engagement can strengthen relationships across digital channels.",

    image:
      "/images/blogs/social-growth.avif",

    slug:
      "social-media-customer-engagement"
  }
];

const BLOG_ROWS = [
  BLOGS.slice(0, 3),
  BLOGS.slice(3, 6)
];

export default function Blogs() {
  const sectionRef =
    useRef(null);

  const headingRef =
    useRef(null);

  const rowRefs =
    useRef([]);

  useEffect(() => {
    const section =
      sectionRef.current;

    const heading =
      headingRef.current;

    const rows =
      rowRefs.current.filter(
        Boolean
      );

    if (
      !section ||
      !heading ||
      !rows.length
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const isMobile =
      window.matchMedia(
        "(max-width: 760px)"
      ).matches;

    const ctx =
      gsap.context(() => {
        if (reducedMotion) {
          gsap.set(
            [
              heading,
              ...rows.flatMap(
                (row) =>
                  Array.from(
                    row.querySelectorAll(
                      ".blog-card"
                    )
                  )
              )
            ],
            {
              y: 0,
              autoAlpha: 1
            }
          );

          return;
        }

        gsap.fromTo(
          heading,
          {
            y: 28,
            autoAlpha: 0
          },
          {
            y: 0,
            autoAlpha: 1,
            ease: "none",

            scrollTrigger: {
              trigger: section,
              start: "top 94%",
              end: "top 76%",
              scrub: 0.55
            }
          }
        );

        if (isMobile) {
          rows.forEach(
            (row) => {
              const cards =
                row.querySelectorAll(
                  ".blog-card"
                );

              cards.forEach(
                (card) => {
                  gsap.fromTo(
                    card,
                    {
                      y: 32,
                      autoAlpha: 0
                    },
                    {
                      y: 0,
                      autoAlpha: 1,
                      ease: "none",

                      scrollTrigger: {
                        trigger: card,
                        start:
                          "top 92%",
                        end:
                          "top 68%",
                        scrub: 0.55
                      }
                    }
                  );
                }
              );
            }
          );

          return;
        }

        rows.forEach(
          (row) => {
            const cards =
              row.querySelectorAll(
                ".blog-card"
              );

            gsap.fromTo(
              cards,
              {
                y: 40,
                autoAlpha: 0
              },
              {
                y: 0,
                autoAlpha: 1,
                stagger: 0.08,
                ease: "none",

                scrollTrigger: {
                  trigger: row,
                  start:
                    "top 91%",
                  end:
                    "top 62%",
                  scrub: 0.65
                }
              }
            );
          }
        );
      }, section);

    const refreshFrame =
      requestAnimationFrame(
        () => {
          ScrollTrigger.refresh();
        }
      );

    return () => {
      cancelAnimationFrame(
        refreshFrame
      );

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="blogs-section"
    >
      <div className="blogs-container">

        <h2
          ref={headingRef}
          className="blogs-heading"
        >
          Blogs
        </h2>

        <div className="blogs-rows">

          {BLOG_ROWS.map(
            (
              row,
              rowIndex
            ) => (
              <div
                key={rowIndex}
                ref={(element) => {
                  rowRefs.current[
                    rowIndex
                  ] = element;
                }}
                className="blogs-row"
              >
                {row.map(
                  (blog) => (
                    <article
                      key={
                        blog.slug
                      }
                      className="blog-card"
                    >
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="blog-image-link"
                      >
                        <div className="blog-image-wrap">
                          <img
                            src={
                              blog.image
                            }
                            alt={
                              blog.title
                            }
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                          />
                        </div>
                      </Link>

                      <h3>
                        <Link
                          to={`/blogs/${blog.slug}`}
                        >
                          {
                            blog.title
                          }
                        </Link>
                      </h3>

                      <p>
                        {
                          blog.description
                        }
                      </p>

                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="blog-button"
                      >
                        LEARN MORE
                      </Link>

                    </article>
                  )
                )}

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}