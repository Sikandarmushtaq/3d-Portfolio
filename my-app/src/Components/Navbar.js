import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  gsap
} from "gsap";

import {
  Bot,
  BrainCircuit,
  MessageSquareText,
  Plug,
  BarChart3,
  Eye,
  Code2,
  Cloud,
  Smartphone,
  GraduationCap,
  ShoppingBag,
  Workflow,
  Search,
  MapPin,
  PanelsTopLeft,
  BadgeDollarSign,
  Megaphone,
  UserRoundSearch,
  Share2,
  Mail,
  BadgeCheck,
  Users,
  UserRound,
  Route,
  BriefcaseBusiness,
  CircleHelp,
  BookOpenText,
  ContactRound,
  Globe,
  HeartPulse,
  Landmark,
  Building2,
  LayoutDashboard,
  RefreshCw,
  Handshake
} from "lucide-react";

import "./Navbar.css";


const serviceGroups = [
  {
    title: "AI & Intelligent Systems",
    items: [
      {
        to: "/ai-development",
        label: "AI Development Services",
        description:
          "Custom AI systems for business applications",
        icon: BrainCircuit
      },
      {
        to: "/agentic-ai",
        label: "AI Agents & Automation",
        description:
          "Autonomous agents, workflows & task automation",
        icon: Bot
      },
      {
        to: "/ai-chatbot",
        label: "Conversational AI Solutions",
        description:
          "Chatbots, voice agents & intelligent support systems",
        icon: MessageSquareText
      },
      {
        to: "/machine-learning",
        label: "Machine Learning & Data Intelligence",
        description:
          "Predictive models, analytics & intelligent decisions",
        icon: BarChart3
      },
      {
        to: "/ai-integrations",
        label: "AI Integration Services",
        description:
          "LLM, API & enterprise system integrations",
        icon: Plug
      },
      {
        to: "/computer-vision",
        label: "Computer Vision Solutions",
        description:
          "Image recognition & visual intelligence systems",
        icon: Eye
      }
    ]
  },
  {
    title: "Development Services",
    items: [
      {
        to: "/mern",
        label: "MERN / MEAN Stack Development",
        description:
          "React or Angular full-stack JavaScript solutions",
        icon: Code2
      },
      {
        to: "/custom-software",
        label: "Custom Software Development",
        description:
          "Tailored systems for complex business requirements",
        icon: LayoutDashboard
      },
      {
        to: "/saas",
        label: "SaaS Product Development",
        description:
          "Scalable multi-tenant cloud products",
        icon: Cloud
      },
      {
        to: "/web-application-development",
        label: "Web Application Development",
        description:
          "Modern, secure & scalable web platforms",
        icon: Globe
      },
      {
        to: "/mobile-app",
        label: "Mobile Application Development",
        description:
          "Cross-platform mobile solutions",
        icon: Smartphone
      },
      {
        to: "/ecommerce-web",
        label: "E-Commerce & Marketplace Development",
        description:
          "Stores, marketplaces & digital commerce platforms",
        icon: ShoppingBag
      }
    ]
  },
  {
    title: "Industry & Business Solutions",
    items: [
      {
        to: "/education-platform",
        label: "Education Technology Solutions",
        description:
          "School systems, portals & digital learning platforms",
        icon: GraduationCap
      },
      {
        to: "/healthcare-technology",
        label: "Healthcare Technology Solutions",
        description:
          "Digital platforms for healthcare operations",
        icon: HeartPulse
      },
      {
        to: "/fintech-solutions",
        label: "FinTech Solutions",
        description:
          "Financial platforms & workflow systems",
        icon: Landmark
      },
      {
        to: "/real-estate-technology",
        label: "Real Estate Technology",
        description:
          "Property platforms & management systems",
        icon: Building2
      },
      {
        to: "/business-automation",
        label: "Business Automation Solutions",
        description:
          "Operational workflows & process automation",
        icon: Workflow
      },
      {
        to: "/enterprise-management-systems",
        label: "Enterprise Software Systems",
        description:
          "Dashboards, portals & operational management systems",
        icon: LayoutDashboard
      }
    ]
  }
];


const marketingGroups = [
  {
    title: "Search & Growth",
    items: [
      {
        to: "/seo",
        label: "Search Engine Optimization",
        description:
          "Improve organic search visibility",
        icon: Search
      },
      {
        to: "/local-seo",
        label: "Local SEO",
        description:
          "Reach customers in local searches",
        icon: MapPin
      },
      {
        to: "/landing-page-optimization",
        label: "Landing Page Optimization",
        description:
          "Improve conversions & user journeys",
        icon: PanelsTopLeft
      },
      {
        to: "/conversion-rate-optimization",
        label: "Conversion Rate Optimization",
        description:
          "Turn more traffic into qualified actions",
        icon: BarChart3
      }
    ]
  },
  {
    title: "Digital Advertising",
    items: [
      {
        to: "/ppc-ads",
        label: "PPC & Paid Advertising",
        description:
          "Targeted performance campaigns",
        icon: BadgeDollarSign
      },
      {
        to: "/social-media-advertising",
        label: "Social Media Advertising",
        description:
          "Reach audiences across social platforms",
        icon: Megaphone
      },
      {
        to: "/lead-generation",
        label: "Lead Generation Campaigns",
        description:
          "Generate qualified business leads",
        icon: UserRoundSearch
      },
      {
        to: "/remarketing-campaigns",
        label: "Remarketing Campaigns",
        description:
          "Re-engage high-intent visitors",
        icon: RefreshCw
      }
    ]
  },
  {
    title: "Content & Engagement",
    items: [
      {
        to: "/social-media-management",
        label: "Social Media Management",
        description:
          "Build consistent brand presence",
        icon: Share2
      },
      {
        to: "/email-marketing",
        label: "Email Marketing",
        description:
          "Engage and retain customers",
        icon: Mail
      },
      {
        to: "/brand-optimization",
        label: "Brand Optimization",
        description:
          "Strengthen digital brand identity",
        icon: BadgeCheck
      },
      {
        to: "/marketing-automation",
        label: "Marketing Automation",
        description:
          "Automate follow-ups & customer journeys",
        icon: Workflow
      }
    ]
  }
];


const aboutGroups = [
  {
    title: "About SoftSync",
    items: [
      {
        to: "/who-we-are",
        label: "Who We Are",
        description:
          "Our story, vision & direction",
        icon: Users
      },
      {
        to: "/our-team",
        label: "Our Team",
        description:
          "Meet the people behind SoftSync",
        icon: UserRound
      },
      {
        to: "/how-we-work",
        label: "How We Work",
        description:
          "Our approach from idea to delivery",
        icon: Route
      }
    ]
  },
  {
    title: "Company",
    items: [
      {
        to: "/portfolio",
        label: "Portfolio",
        description:
          "Explore selected work",
        icon: BriefcaseBusiness
      },
      {
        to: "/packages",
        label: "Engagement Models",
        description:
          "Flexible ways to work with us",
        icon: Handshake
      },
      {
        to: "/faqs",
        label: "FAQs",
        description:
          "Common questions, clear answers",
        icon: CircleHelp
      }
    ]
  },
  {
    title: "Resources & Opportunities",
    items: [
      {
        to: "/blogs",
        label: "Insights",
        description:
          "Ideas, technology & growth",
        icon: BookOpenText
      },
      {
        to: "/contact",
        label: "Careers",
        description:
          "Build your career with SoftSync",
        icon: BriefcaseBusiness
      },
      {
        to: "/contact",
        label: "Contact",
        description:
          "Start a conversation with our team",
        icon: ContactRound
      }
    ]
  }
];


function ChevronIcon() {
  return (
    <svg
      className="nav-chevron"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        d="M3.5 6 8 10.5 12.5 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function BrandLogo({
  className = ""
}) {
  return (
    <img
      src="/softsync-wordmark.svg"
      alt="SoftSync"
      className={className}
      draggable="false"
    />
  );
}


function MegaMenuItem({
  item
}) {
  const Icon =
    item.icon;

  return (
    <Link
      to={item.to}
      className="mega-menu-item"
    >
      <span className="mega-item-icon">
        <Icon
          size={21}
          strokeWidth={1.55}
        />
      </span>

      <span className="mega-item-content">
        <span className="mega-item-title">
          {item.label}
        </span>

        <span className="mega-item-description">
          {item.description}
        </span>
      </span>
    </Link>
  );
}


function DesktopMegaMenu({
  groups,
  variant
}) {
  return (
    <div
      className={`dropdown-menu mega-menu mega-menu--${variant}`}
    >
      {groups.map(
        (group) => (
          <div
            className="mega-col"
            key={group.title}
          >
            <h4>
              {group.title}
            </h4>

            <div className="mega-col-items">
              {group.items.map(
                (item) => (
                  <MegaMenuItem
                    key={`${group.title}-${item.label}`}
                    item={item}
                  />
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}


function DesktopDropdown({
  label,
  groups,
  variant
}) {
  return (
    <div className="nav-dropdown">
      <button
        type="button"
        className="nav-link nav-link-button"
      >
        <span>
          {label}
        </span>

        <ChevronIcon />
      </button>

      <DesktopMegaMenu
        groups={groups}
        variant={variant}
      />
    </div>
  );
}


function MobileAccordion({
  label,
  accordionKey,
  groups,
  openAccordion,
  onToggle,
  onLinkClick
}) {
  const isOpen =
    openAccordion ===
    accordionKey;

  return (
    <div
      className={`mobile-accordion ${
        isOpen
          ? "is-open"
          : ""
      }`}
    >
      <button
        type="button"
        className="mobile-accordion-trigger"
        onClick={() =>
          onToggle(
            accordionKey
          )
        }
      >
        <span>
          {label}
        </span>

        <span
          className={`mobile-chevron ${
            isOpen
              ? "is-open"
              : ""
          }`}
        >
          <ChevronIcon />
        </span>
      </button>

      <div
        className={`mobile-accordion-panel ${
          isOpen
            ? "is-open"
            : ""
        }`}
      >
        {groups.map(
          (group) => (
            <div
              className="mobile-accordion-group"
              key={group.title}
            >
              <span className="mobile-group-title">
                {group.title}
              </span>

              <div className="mobile-group-items">
                {group.items.map(
                  (item) => (
                    <Link
                      key={`${group.title}-${item.label}`}
                      to={item.to}
                      className="mobile-accordion-item"
                      onClick={onLinkClick}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}


export default function Navbar() {
  const [
    menuOpen,
    setMenuOpen
  ] =
    useState(false);

  const [
    openAccordion,
    setOpenAccordion
  ] =
    useState(null);

  const mobileMenuRef =
    useRef(null);


  useLayoutEffect(() => {
    if (
      !mobileMenuRef.current
    ) {
      return;
    }

    gsap.set(
      mobileMenuRef.current,
      {
        xPercent: -100,
        visibility:
          "hidden"
      }
    );
  }, []);


  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);


  const openMenu = () => {
    if (
      !mobileMenuRef.current
    ) {
      return;
    }

    const menu =
      mobileMenuRef.current;

    const items =
      menu.querySelectorAll(
        ".mobile-menu-close, .mobile-accordion, .mobile-book-demo"
      );

    setMenuOpen(true);

    gsap.killTweensOf(
      menu
    );

    gsap.killTweensOf(
      items
    );

    gsap.set(
      menu,
      {
        visibility:
          "visible",
        xPercent:
          -100
      }
    );

    gsap.set(
      items,
      {
        opacity: 0,
        y: 8
      }
    );

    const timeline =
      gsap.timeline();

    timeline
      .to(
        menu,
        {
          xPercent: 0,
          duration: 0.38,
          ease:
            "back.out(1.18)"
        }
      )
      .to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.22,
          stagger: 0.035,
          ease:
            "power2.out"
        },
        "-=0.2"
      );
  };


  const closeMenu = () => {
    if (
      !mobileMenuRef.current
    ) {
      return;
    }

    const menu =
      mobileMenuRef.current;

    gsap.killTweensOf(
      menu
    );

    gsap.to(
      menu,
      {
        xPercent: -100,
        duration: 0.27,
        ease:
          "power3.in",

        onComplete: () => {
          setMenuOpen(false);

          setOpenAccordion(
            null
          );

          gsap.set(
            menu,
            {
              visibility:
                "hidden"
            }
          );
        }
      }
    );
  };


  const toggleAccordion = (
    key
  ) => {
    setOpenAccordion(
      (previous) =>
        previous === key
          ? null
          : key
    );
  };


  return (
    <>
      <header
        className={`navbar-sikandar ${
          menuOpen
            ? "mobile-menu-active"
            : ""
        }`}
      >
        <Link
          to="/"
          className="brand-logo-link"
          aria-label="SoftSync home"
        >
          <BrandLogo
            className="navbar-brand-logo"
          />
        </Link>

        <nav className="nav">
          <DesktopDropdown
            label="Services"
            groups={
              serviceGroups
            }
            variant="services"
          />

          <DesktopDropdown
            label="Marketing"
            groups={
              marketingGroups
            }
            variant="marketing"
          />

          <DesktopDropdown
            label="About"
            groups={
              aboutGroups
            }
            variant="about"
          />
        </nav>

        <Link
          to="/contact"
          className="book-demo-btn"
        >
          Let&apos;s Connect
        </Link>

        <button
          type="button"
          className="hamburger-btn"
          aria-label="Open navigation menu"
          aria-expanded={
            menuOpen
          }
          onClick={
            openMenu
          }
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <aside
        ref={
          mobileMenuRef
        }
        className={`mobile-menu-overlay ${
          menuOpen
            ? "is-open"
            : ""
        }`}
        aria-hidden={
          !menuOpen
        }
      >
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close navigation menu"
          onClick={
            closeMenu
          }
        >
          <span />
          <span />
        </button>

        <div className="mobile-menu-body">
          <MobileAccordion
            label="Services"
            accordionKey="services"
            groups={
              serviceGroups
            }
            openAccordion={
              openAccordion
            }
            onToggle={
              toggleAccordion
            }
            onLinkClick={
              closeMenu
            }
          />

          <MobileAccordion
            label="Marketing"
            accordionKey="marketing"
            groups={
              marketingGroups
            }
            openAccordion={
              openAccordion
            }
            onToggle={
              toggleAccordion
            }
            onLinkClick={
              closeMenu
            }
          />

          <MobileAccordion
            label="About"
            accordionKey="about"
            groups={
              aboutGroups
            }
            openAccordion={
              openAccordion
            }
            onToggle={
              toggleAccordion
            }
            onLinkClick={
              closeMenu
            }
          />

          <Link
            to="/contact"
            className="mobile-book-demo"
            onClick={
              closeMenu
            }
          >
            Let&apos;s Connect
          </Link>
        </div>
      </aside>
    </>
  );
}