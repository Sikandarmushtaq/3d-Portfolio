import {
  useEffect,
  useRef,
  useState
} from "react";

import Navbar from "./Navbar";
import Cursor from "./Cursor";

import axios from "axios";

import "./Contact.css";


const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";


const INITIAL_FORM = {
  fullName: "",
  companyName: "",
  email: "",
  number: "",
  jobTitle: "",
  source: ""
};


export default function Contact({

  maxWidth = "1300px",

  paddingTop = 140,

  paddingY = 80,

  gap = 70,

  inputPadding = 18,

  fontSize = 0.95,

  showNavbar = true,

  showCursor = true,

  showLeftPanel = true,

  minHeight = "100vh",

  twoColumnInputs = false

}) {

  const [form, setForm] =
    useState(INITIAL_FORM);


  const [loading, setLoading] =
    useState(false);


  const [status, setStatus] =
    useState({
      type: "",
      message: ""
    });


  const statusTimer =
    useRef(null);




  useEffect(() => {

    return () => {

      if (statusTimer.current) {

        clearTimeout(
          statusTimer.current
        );

      }

    };

  }, []);




  const showStatus = (
    type,
    message
  ) => {

    if (statusTimer.current) {

      clearTimeout(
        statusTimer.current
      );

    }


    setStatus({
      type,
      message
    });


    statusTimer.current =
      setTimeout(() => {

        setStatus({
          type: "",
          message: ""
        });

      }, 3500);

  };


 

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;


    setForm((previous) => ({

      ...previous,

      [name]: value

    }));




    if (
      status.type === "error"
    ) {

      setStatus({
        type: "",
        message: ""
      });

    }

  };




  const handleSubmit = async (e) => {

    e.preventDefault();


    if (loading) {
      return;
    }


    setLoading(true);


    setStatus({
      type: "",
      message: ""
    });


    try {

      const response =
        await axios.post(

          `${API_URL}/contact/create`,

          {
            fullName:
              form.fullName.trim(),

            companyName:
              form.companyName.trim(),

            email:
              form.email.trim(),

            number:
              form.number.trim(),

            jobTitle:
              form.jobTitle.trim(),

            source:
              form.source
          }

        );


      if (
        response.status === 201
      ) {

        // Reset form

        setForm(
          INITIAL_FORM
        );


   

        showStatus(
          "success",
          "Connected successfully"
        );

      }


    } catch (err) {

      console.error(
        "Contact submission error:",
        err
      );


      showStatus(

        "error",

        err.response?.data?.message ||
        "Unable to connect. Please try again."

      );


    } finally {

      setLoading(false);

    }

  };


  return (

    <div
      className="contact-page"
      style={{
        minHeight
      }}
    >


      {showCursor && (
        <Cursor />
      )}


      {showNavbar && (
        <Navbar />
      )}


      <div
        className="contact-container"
        style={{

          maxWidth,

          paddingTop,

          paddingBottom:
            paddingY,

          gap,

          gridTemplateColumns:
            showLeftPanel
              ? undefined
              : "1fr",

          "--input-pad":
            `${inputPadding}px`,

          "--label-size":
            `${fontSize}rem`

        }}
      >


    

        {showLeftPanel && (

          <div className="contact-left">

            <p className="contact-help-text">

              We're here to help!
              Complete the form and
              our team will reach out
              to you soon.

            </p>


            <a
              className="contact-email"
              href="mailto:raisikandar502@gmail.com"
            >

              Email:
              {" "}
              raisikandar502@gmail.com

            </a>

          </div>

        )}


       

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >


          <div
            className={
              twoColumnInputs
                ? "contact-form-grid"
                : undefined
            }
          >


           

            <div className="form-group">

              <label htmlFor="fullName">

                FULL NAME

              </label>


              <input

                type="text"

                id="fullName"

                name="fullName"

                placeholder="Enter Your Full Name"

                value={
                  form.fullName
                }

                onChange={
                  handleChange
                }

                autoComplete="name"

                required

              />

            </div>


            {/* COMPANY */}

            <div className="form-group">

              <label htmlFor="companyName">

                COMPANY NAME

              </label>


              <input

                type="text"

                id="companyName"

                name="companyName"

                placeholder="Your Company Name"

                value={
                  form.companyName
                }

                onChange={
                  handleChange
                }

                autoComplete="organization"

              />

            </div>


      

            <div className="form-group">

              <label htmlFor="email">

                BUSINESS EMAIL

              </label>


              <input

                type="email"

                id="email"

                name="email"

                placeholder="Your Business Email"

                value={
                  form.email
                }

                onChange={
                  handleChange
                }

                autoComplete="email"

                required

              />

            </div>


       

            <div className="form-group">

              <label htmlFor="number">

                PHONE NUMBER

              </label>


              <input

                type="tel"

                id="number"

                name="number"

                placeholder="Enter Your Phone Number"

                value={
                  form.number
                }

                onChange={
                  handleChange
                }

                autoComplete="tel"

                required

              />

            </div>


       

            <div className="form-group">

              <label htmlFor="jobTitle">

                JOB TITLE

              </label>


              <input

                type="text"

                id="jobTitle"

                name="jobTitle"

                placeholder="Enter Your Job Title"

                value={
                  form.jobTitle
                }

                onChange={
                  handleChange
                }

                autoComplete="organization-title"

              />

            </div>


        

            <div className="form-group">

              <label htmlFor="source">

                HOW DID YOU HEAR ABOUT US?

              </label>


              <select

                id="source"

                name="source"

                value={
                  form.source
                }

                onChange={
                  handleChange
                }

                required

              >

                <option
                  value=""
                  disabled
                >

                  Select

                </option>


                <option value="LinkedIn">

                  LinkedIn

                </option>


                <option value="Google Search">

                  Google Search

                </option>


                <option value="Referral">

                  Referral

                </option>


                <option value="Other">

                  Other

                </option>

              </select>

            </div>

          </div>


      

          <div className="contact-privacy">

            <span
              className="privacy-icon"
              aria-hidden="true"
            >

              !

            </span>


            <p>

              Your privacy is important
              to us. All information
              submitted through this form
              will be kept confidential
              and secure.

            </p>

          </div>


      

          {status.message && (

            <div
              className={
                status.type === "success"
                  ? "contact-status contact-status-success"
                  : "contact-status contact-status-error"
              }
              role="status"
            >


              <span
                className="contact-status-icon"
                aria-hidden="true"
              >

                {status.type === "success"
                  ? "✓"
                  : "!"
                }

              </span>


              <span>

                {status.message}

              </span>

            </div>

          )}



          <button
            type="submit"
            className="contact-submit"
            disabled={loading}
          >

            {loading ? (

              <>

                <span className="contact-button-loader">
                </span>

                Connecting...

              </>

            ) : (

              <>

                Connect

                <span
                  className="contact-submit-arrow"
                  aria-hidden="true"
                >

                  →

                </span>

              </>

            )}

          </button>

        </form>

      </div>

    </div>

  );

}