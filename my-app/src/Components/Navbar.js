import {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";


const servicesLinks = [

  {
    to: "/agentic-ai",
    label: "Agentic AI Solutions"
  },

  {
    to: "/ai-chatbot",
    label: "AI Chatbot Development"
  },

  {
    to: "/ai-call-agents",
    label: "AI Call Agents"
  },

  {
    to: "/mern",
    label: "MERN Stack Development"
  },

  {
    to: "/mobile-app",
    label: "Mobile App Development"
  },

  {
    to: "/ecommerce-web",
    label: "Ecommerce Websites"
  },

  {
    to: "/3d-animated",
    label: "3D Animated Website"
  },

  {
    to: "/education-platform",
    label: "Education Platform"
  },

  {
    to: "/saas",
    label: "SaaS Products"
  }

];


const aboutLinks = [

  {
    to: "/who-we-are",
    label: "Who We Are"
  },

  {
    to: "/our-team",
    label: "Our Team"
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


export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);


  const [
    openAccordion,
    setOpenAccordion
  ] = useState(null);




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


 

  const closeMenu = () => {

    setMenuOpen(false);

    setOpenAccordion(null);

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
          className="brand-name"
        >

          SIKANDAR MUSHTAQ

        </Link>


       

        <nav className="nav">



          <div className="nav-dropdown">


            <Link
             
              className="nav-link nav-link-with-chevron"
            >

              <span>
                Services
              </span>

              <ChevronIcon />

            </Link>


            <div className="dropdown-menu mega-menu">


              <div className="mega-col">

                <span className="mega-number">
                  01
                </span>

                <h4>
                  AI & Technology
                </h4>


                <Link
                  to="/agentic-ai"
                  className="dropdown-item"
                >

                  Agentic AI Solutions

                </Link>


                <Link
                  to="/ai-chatbot"
                  className="dropdown-item"
                >

                  AI Chatbot Development

                </Link>


                <Link
                  to="/ai-call-agents"
                  className="dropdown-item"
                >

                  AI Call Agents

                </Link>

              </div>


              <div className="mega-col">

                <span className="mega-number">
                  02
                </span>

                <h4>
                  Development Services
                </h4>


                <Link
                  to="/mern"
                  className="dropdown-item"
                >

                  MERN Stack Development

                </Link>


                <Link
                  to="/mobile-app"
                  className="dropdown-item"
                >

                  Mobile App Development

                </Link>


                <Link
                  to="/ecommerce-web"
                  className="dropdown-item"
                >

                  Ecommerce Websites

                </Link>


                <Link
                  to="/3d-animated"
                  className="dropdown-item"
                >

                  3D Animated Website

                </Link>

              </div>


              <div className="mega-col">

                <span className="mega-number">
                  03
                </span>

                <h4>
                  Industry Solutions
                </h4>


                <Link
                  to="/education-platform"
                  className="dropdown-item"
                >

                  Education Platform

                </Link>


                <Link
                  to="/saas"
                  className="dropdown-item"
                >

                  SaaS Products

                </Link>

              </div>

            </div>

          </div>



          <div className="nav-dropdown">

            <button
              type="button"
              className="nav-link nav-link-button nav-link-with-chevron"
            >

              <span>
                About
              </span>

              <ChevronIcon />

            </button>


            <div className="dropdown-menu small-menu">

              <Link
                to="/who-we-are"
                className="dropdown-item"
              >

                Who We Are

              </Link>


              <Link
                to="/our-team"
                className="dropdown-item"
              >

                Our Team

              </Link>

            </div>

          </div>


        

          <Link
            to="/contact"
            className="nav-link contact-nav-link"
          >

            Contact Us

          </Link>

        </nav>


     

        <button
          type="button"
          className="hamburger-btn"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(true)
          }
        >

          <span>
          </span>

          <span>
          </span>

          <span>
          </span>

        </button>


        <div
          className="navbar-spacer"
          aria-hidden="true"
        >
        </div>

      </header>


      

      <div
        className={
          `mobile-menu-backdrop ${
            menuOpen
              ? "is-open"
              : ""
          }`
        }
        onClick={closeMenu}
        aria-hidden="true"
      >
      </div>



      <aside
        className={
          `mobile-menu-overlay ${
            menuOpen
              ? "is-open"
              : ""
          }`
        }
      >


        <div className="mobile-menu-header">


          <Link
            to="/"
            className="brand-name"
            onClick={closeMenu}
          >

            SIKANDAR MUSHTAQ

          </Link>


          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >

            <span>
            </span>

            <span>
            </span>

          </button>

        </div>


        <div className="mobile-menu-body">


   

          <div className="mobile-accordion">

            <button
              type="button"
              className="mobile-accordion-trigger"
              onClick={() =>
                toggleAccordion(
                  "services"
                )
              }
            >

              <span>
                Services
              </span>


              <span
                className={
                  `mobile-chevron ${
                    openAccordion ===
                    "services"
                      ? "is-open"
                      : ""
                  }`
                }
              >

                <ChevronIcon />

              </span>

            </button>


            <div
              className={
                `mobile-accordion-panel ${
                  openAccordion ===
                  "services"
                    ? "is-open"
                    : ""
                }`
              }
            >

              {servicesLinks.map(
                (item) => (

                  <Link

                    key={
                      item.to
                    }

                    to={
                      item.to
                    }

                    className="mobile-accordion-item"

                    onClick={
                      closeMenu
                    }

                  >

                    {item.label}

                  </Link>

                )
              )}

            </div>

          </div>


      

          <div className="mobile-accordion">

            <button
              type="button"
              className="mobile-accordion-trigger"
              onClick={() =>
                toggleAccordion(
                  "about"
                )
              }
            >

              <span>
                About
              </span>


              <span
                className={
                  `mobile-chevron ${
                    openAccordion ===
                    "about"
                      ? "is-open"
                      : ""
                  }`
                }
              >

                <ChevronIcon />

              </span>

            </button>


            <div
              className={
                `mobile-accordion-panel ${
                  openAccordion ===
                  "about"
                    ? "is-open"
                    : ""
                }`
              }
            >

              {aboutLinks.map(
                (item) => (

                  <Link

                    key={
                      item.to
                    }

                    to={
                      item.to
                    }

                    className="mobile-accordion-item"

                    onClick={
                      closeMenu
                    }

                  >

                    {item.label}

                  </Link>

                )
              )}

            </div>

          </div>


     

          <Link
            to="/contact"
            className="mobile-menu-link"
            onClick={closeMenu}
          >

            Contact Us

          </Link>

        </div>

      </aside>

    </>

  );

}