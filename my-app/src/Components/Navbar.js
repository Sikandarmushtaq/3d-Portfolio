import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";

import { Link } from "react-router-dom";
import { gsap } from "gsap";

import {
  Bot,
  MessageSquareText,
  Headphones,
  Code2,
  Cloud,
  Smartphone,
  Sparkles,
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
  Package,
  CircleHelp,
  BookOpenText,
  ContactRound
} from "lucide-react";

import "./Navbar.css";

const serviceGroups = [
  {
    title: "AI & Technology",
    items: [
      {
        to: "/agentic-ai",
        label: "Agentic AI Solutions",
        description: "Autonomous AI agents & workflow automation",
        icon: Bot
      },
      {
        to: "/ai-chatbot",
        label: "AI Chatbot Development",
        description: "Intelligent conversational AI solutions",
        icon: MessageSquareText
      },
      {
        to: "/ai-call-agents",
        label: "AI Call Agents",
        description: "AI-powered voice & customer assistance",
        icon: Headphones
      }
    ]
  },
  {
    title: "Development Services",
    items: [
      {
        to: "/mern",
        label: "MERN Stack Development",
        description: "Full-stack JavaScript web solutions",
        icon: Code2
      },
      {
        to: "/saas",
        label: "SaaS Development",
        description: "Scalable multi-tenant cloud platforms",
        icon: Cloud
      },
      {
        to: "/mobile-app",
        label: "Mobile App Development",
        description: "Cross-platform mobile applications",
        icon: Smartphone
      },
      {
        to: "/3d-animated",
        label: "Interactive Web Experiences",
        description: "Immersive 3D & motion-driven websites",
        icon: Sparkles
      }
    ]
  },
  {
    title: "Industry Solutions",
    items: [
      {
        to: "/education-platform",
        label: "Education Technology",
        description: "School management & learning platforms",
        icon: GraduationCap
      },
      {
        to: "/ecommerce-web",
        label: "E-Commerce Solutions",
        description: "Online stores & marketplace platforms",
        icon: ShoppingBag
      },
      {
        to: "/business-automation",
        label: "Business Automation",
        description: "Smart workflow & process automation",
        icon: Workflow
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
        description: "Improve organic search visibility",
        icon: Search
      },
      {
        to: "/local-seo",
        label: "Local SEO",
        description: "Reach customers in local searches",
        icon: MapPin
      },
      {
        to: "/landing-page-optimization",
        label: "Landing Page Optimization",
        description: "Improve conversions & user journeys",
        icon: PanelsTopLeft
      }
    ]
  },
  {
    title: "Digital Advertising",
    items: [
      {
        to: "/ppc-ads",
        label: "PPC & Paid Ads",
        description: "Targeted performance campaigns",
        icon: BadgeDollarSign
      },
      {
        to: "/social-media-advertising",
        label: "Social Media Advertising",
        description: "Reach audiences across social platforms",
        icon: Megaphone
      },
      {
        to: "/lead-generation",
        label: "Lead Generation",
        description: "Generate qualified business leads",
        icon: UserRoundSearch
      }
    ]
  },
  {
    title: "Content & Engagement",
    items: [
      {
        to: "/social-media-management",
        label: "Social Media Management",
        description: "Build consistent brand presence",
        icon: Share2
      },
      {
        to: "/email-marketing",
        label: "Email Marketing",
        description: "Engage and retain customers",
        icon: Mail
      },
      {
        to: "/brand-optimization",
        label: "Brand Optimization",
        description: "Strengthen digital brand identity",
        icon: BadgeCheck
      }
    ]
  }
];

const aboutGroups = [
  {
    title: "About Us",
    items: [
      {
        to: "/who-we-are",
        label: "Who We Are",
        description: "Our story",
        icon: Users
      },
      {
        to: "/our-team",
        label: "Our Team",
        description: "Meet the team",
        icon: UserRound
      },
      {
        to: "/how-we-work",
        label: "How We Work",
        description: "Our process",
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
        description: "Our work",
        icon: BriefcaseBusiness
      },
      {
        to: "/packages",
        label: "Packages",
        description: "Our offerings",
        icon: Package
      },
      {
        to: "/faqs",
        label: "FAQs",
        description: "Get answers",
        icon: CircleHelp
      }
    ]
  },
  {
    title: "Resources",
    items: [
      {
        to: "/blogs",
        label: "Blogs",
        description: "Insights & updates",
        icon: BookOpenText
      },
      {
        to: "/careers",
        label: "Careers",
        description: "Join our team",
        icon: BriefcaseBusiness
      },
      {
        to: "/contact",
        label: "Contact",
        description: "Let's work together",
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

function BrandLogo({ className = "" }) {
  return (
    <img
      src="/softsync-wordmark.svg"
      alt="SoftSync"
      className={className}
      draggable="false"
    />
  );
}

function MegaMenuItem({ item }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.to}
      className="mega-menu-item"
    >
      <span className="mega-item-icon">
        <Icon
          size={20}
          strokeWidth={1.5}
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

function DesktopMegaMenu({ groups }) {
  return (
    <div className="dropdown-menu mega-menu">
      {groups.map((group) => (
        <div
          className="mega-col"
          key={group.title}
        >
          <h4>{group.title}</h4>

          <div className="mega-col-items">
            {group.items.map((item) => (
              <MegaMenuItem
                key={item.to}
                item={item}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopDropdown({
  label,
  groups
}) {
  return (
    <div className="nav-dropdown">
      <button
        type="button"
        className="nav-link nav-link-button"
      >
        <span>{label}</span>
        <ChevronIcon />
      </button>

      <DesktopMegaMenu
        groups={groups}
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
    openAccordion === accordionKey;

  const items =
    groups.flatMap(
      (group) => group.items
    );

  return (
    <div
      className={`mobile-accordion ${
        isOpen ? "is-open" : ""
      }`}
    >
      <button
        type="button"
        className="mobile-accordion-trigger"
        onClick={() =>
          onToggle(accordionKey)
        }
      >
        <span>{label}</span>

        <span
          className={`mobile-chevron ${
            isOpen ? "is-open" : ""
          }`}
        >
          <ChevronIcon />
        </span>
      </button>

      <div
        className={`mobile-accordion-panel ${
          isOpen ? "is-open" : ""
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="mobile-accordion-item"
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [
    openAccordion,
    setOpenAccordion
  ] = useState(null);

  const mobileMenuRef =
    useRef(null);

  useLayoutEffect(() => {
    if (!mobileMenuRef.current) {
      return;
    }

    gsap.set(
      mobileMenuRef.current,
      {
        xPercent: -100,
        visibility: "hidden"
      }
    );
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  const openMenu = () => {
    if (!mobileMenuRef.current) {
      return;
    }

    const menu =
      mobileMenuRef.current;

    const items =
      menu.querySelectorAll(
        ".mobile-menu-header, .mobile-accordion, .mobile-book-demo"
      );

    setMenuOpen(true);

    gsap.killTweensOf(menu);
    gsap.killTweensOf(items);

    gsap.set(menu, {
      visibility: "visible"
    });

    gsap.set(items, {
      opacity: 0,
      y: 12
    });

    const timeline =
      gsap.timeline();

    timeline
      .to(menu, {
        xPercent: 0,
        duration: 0.36,
        ease: "power3.out"
      })
      .to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.055,
          ease: "power2.out"
        },
        "-=0.16"
      );
  };

  const closeMenu = () => {
    if (!mobileMenuRef.current) {
      return;
    }

    const menu =
      mobileMenuRef.current;

    gsap.killTweensOf(menu);

    gsap.to(menu, {
      xPercent: -100,
      duration: 0.3,
      ease: "power2.in",

      onComplete: () => {
        setMenuOpen(false);
        setOpenAccordion(null);

        gsap.set(menu, {
          visibility: "hidden"
        });
      }
    });
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(
      (previous) =>
        previous === key
          ? null
          : key
    );
  };

  return (
    <>
      <header className="navbar-sikandar">
        <Link
          to="/"
          className="brand-logo-link"
          aria-label="SoftSync home"
        >
          <BrandLogo className="navbar-brand-logo" />
        </Link>

        <nav className="nav">
          <DesktopDropdown
            label="Services"
            groups={serviceGroups}
          />

          <DesktopDropdown
            label="Marketing"
            groups={marketingGroups}
          />

          <DesktopDropdown
            label="About"
            groups={aboutGroups}
          />
        </nav>

        <Link
          to="/contact"
          className="book-demo-btn"
        >
          Let's Talk
        </Link>

        <button
          type="button"
          className="hamburger-btn"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={openMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <aside
        ref={mobileMenuRef}
        className={`mobile-menu-overlay ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-header">
          <Link
            to="/"
            className="brand-logo-link"
            aria-label="SoftSync home"
            onClick={closeMenu}
          >
            <BrandLogo className="mobile-brand-logo" />
          </Link>

          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <span />
            <span />
          </button>
        </div>

        <div className="mobile-menu-body">
          <MobileAccordion
            label="Services"
            accordionKey="services"
            groups={serviceGroups}
            openAccordion={openAccordion}
            onToggle={toggleAccordion}
            onLinkClick={closeMenu}
          />

          <MobileAccordion
            label="Marketing"
            accordionKey="marketing"
            groups={marketingGroups}
            openAccordion={openAccordion}
            onToggle={toggleAccordion}
            onLinkClick={closeMenu}
          />

          <MobileAccordion
            label="About"
            accordionKey="about"
            groups={aboutGroups}
            openAccordion={openAccordion}
            onToggle={toggleAccordion}
            onLinkClick={closeMenu}
          />

          <Link
            to="/contact"
            className="mobile-book-demo"
            onClick={closeMenu}
          >
             Let's Talk
          </Link>
        </div>
      </aside>
    </>
  );
}