import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import axios from "axios";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole
} from "lucide-react";

import "./AdminDashboard.css";


const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";


export default function ChangePassword() {

  const navigate =
    useNavigate();


  const [form, setForm] =
    useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    });


  const [message, setMessage] =
    useState("");


  const [error, setError] =
    useState("");


  const [fieldError, setFieldError] =
    useState("");


  const [loading, setLoading] =
    useState(false);


  const [showOld, setShowOld] =
    useState(false);


  const [showNew, setShowNew] =
    useState(false);


  const [
    showConfirm,
    setShowConfirm
  ] = useState(false);




  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });


    setError("");
    setFieldError("");

  };




  const handleSubmit = async (e) => {

    e.preventDefault();


    setMessage("");
    setError("");
    setFieldError("");

    setLoading(true);


    try {

      const res =
        await axios.post(

          `${API_URL}/admin/change-password`,

          {

            oldPassword:
              form.oldPassword,

            newPassword:
              form.newPassword,

            confirmPassword:
              form.confirmPassword

          },

          {
            withCredentials: true
          }

        );


     

      if (
        res.data.status ===
        "success"
      ) {

        setMessage(
          "Password changed successfully."
        );


        setForm({

          oldPassword: "",

          newPassword: "",

          confirmPassword: ""

        });


        setTimeout(() => {

          navigate(
            "/admin/login",
            {
              replace: true
            }
          );

        }, 1000);

      }


    } catch (err) {


   

      if (
        err.response?.status === 401 ||
        err.response?.status === 403
      ) {

        navigate(
          "/admin/login",
          {
            replace: true
          }
        );

        return;

      }


  

      const backendMessage =
        err.response?.data?.message ||
        "Failed to change password.";


      const backendField =
        err.response?.data?.field ||
        "";


      setError(
        backendMessage
      );


      setFieldError(
        backendField
      );


    } finally {

      setLoading(false);

    }

  };


  return (

    <section className="password-sketch-page">


      <div className="password-form-panel">


   

        <div className="secure-label">

          <LockKeyhole size={14} />

          SECURE SETTINGS

        </div>


      

        <h2>
          Change Password
        </h2>


        <p>

          Verify your current password
          and choose a new secure password.

        </p>


        <form
          className="password-sketch-form"
          onSubmit={handleSubmit}
        >


         

          <div className="sketch-field">

            <label>
              CURRENT PASSWORD
            </label>


            <div
              className={
                fieldError ===
                "oldPassword"

                  ? "sketch-input password-input-error"

                  : "sketch-input"
              }
            >

              <LockKeyhole size={16} />


              <input

                type={
                  showOld
                    ? "text"
                    : "password"
                }

                name="oldPassword"

                value={
                  form.oldPassword
                }

                onChange={
                  handleChange
                }

                placeholder="Enter current password"

                autoComplete="current-password"

                required

              />


              <button

                type="button"

                onClick={() =>
                  setShowOld(
                    !showOld
                  )
                }

                aria-label={
                  showOld
                    ? "Hide current password"
                    : "Show current password"
                }

              >

                {showOld

                  ? <EyeOff size={16} />

                  : <Eye size={16} />

                }

              </button>

            </div>


            {fieldError ===
              "oldPassword" && (

              <span className="password-field-error">

                {error}

              </span>

            )}

          </div>



          <div className="sketch-field">

            <label>
              NEW PASSWORD
            </label>


            <div
              className={
                fieldError ===
                "newPassword"

                  ? "sketch-input password-input-error"

                  : "sketch-input"
              }
            >

              <LockKeyhole size={16} />


              <input

                type={
                  showNew
                    ? "text"
                    : "password"
                }

                name="newPassword"

                value={
                  form.newPassword
                }

                onChange={
                  handleChange
                }

                placeholder="Minimum 8 characters"

                autoComplete="new-password"

                required

              />


              <button

                type="button"

                onClick={() =>
                  setShowNew(
                    !showNew
                  )
                }

                aria-label={
                  showNew
                    ? "Hide new password"
                    : "Show new password"
                }

              >

                {showNew

                  ? <EyeOff size={16} />

                  : <Eye size={16} />

                }

              </button>

            </div>


            {fieldError ===
              "newPassword" && (

              <span className="password-field-error">

                {error}

              </span>

            )}

          </div>


       

          <div className="sketch-field">

            <label>
              CONFIRM NEW PASSWORD
            </label>


            <div
              className={
                fieldError ===
                "confirmPassword"

                  ? "sketch-input password-input-error"

                  : "sketch-input"
              }
            >

              <LockKeyhole size={16} />


              <input

                type={
                  showConfirm
                    ? "text"
                    : "password"
                }

                name="confirmPassword"

                value={
                  form.confirmPassword
                }

                onChange={
                  handleChange
                }

                placeholder="Confirm new password"

                autoComplete="new-password"

                required

              />


              <button

                type="button"

                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }

                aria-label={
                  showConfirm
                    ? "Hide confirm password"
                    : "Show confirm password"
                }

              >

                {showConfirm

                  ? <EyeOff size={16} />

                  : <Eye size={16} />

                }

              </button>

            </div>


            {fieldError ===
              "confirmPassword" && (

              <span className="password-field-error">

                {error}

              </span>

            )}

          </div>


          

          {error &&
            !fieldError && (

            <div className="dashboard-error">

              {error}

            </div>

          )}


        

          {message && (

            <div className="dashboard-success">

              {message}

              <br />

              Redirecting to login...

            </div>

          )}


        

          <button

            type="submit"

            className="update-password-btn"

            disabled={loading}

          >

            {loading
              ? "Checking & Updating..."
              : "Update Password"
            }


            {!loading && (

              <ArrowRight size={17} />

            )}

          </button>

        </form>

      </div>

    </section>

  );

}