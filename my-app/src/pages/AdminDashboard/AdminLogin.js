import {
  useEffect,
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
  LockKeyhole,
  Mail,
  ShieldCheck
} from "lucide-react";

import "./AdminLogin.css";


const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";


export default function AdminLogin() {

  const [form, setForm] =
    useState({
      email: "",
      password: ""
    });


  const [error, setError] =
    useState("");


  const [loading, setLoading] =
    useState(false);


  const [
    checkingSession,
    setCheckingSession
  ] = useState(true);


  const [
    showPassword,
    setShowPassword
  ] = useState(false);


  const navigate =
    useNavigate();




  useEffect(() => {

    let mounted = true;


    const checkExistingSession =
      async () => {

        try {

          const res =
            await axios.get(
              `${API_URL}/admin/check-auth`,
              {
                withCredentials: true
              }
            );


          if (
            res.data.authenticated === true
          ) {

            navigate(
              "/admin/dashboard/contacts",
              {
                replace: true
              }
            );

            return;

          }


        } catch (err) {

     

        } finally {

          if (mounted) {

            setCheckingSession(false);

          }

        }

      };


    checkExistingSession();


    return () => {

      mounted = false;

    };

  }, [navigate]);



  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });


    if (error) {
      setError("");
    }

  };


 

  const handleSubmit = async (e) => {

    e.preventDefault();


    setError("");
    setLoading(true);


    try {

      const res =
        await axios.post(

          `${API_URL}/admin/login`,

          {

            email:
              form.email.trim(),

            password:
              form.password

          },

          {
            withCredentials: true
          }

        );


      if (
        res.data.status ===
        "success"
      ) {

        navigate(
          "/admin/dashboard/contacts",
          {
            replace: true
          }
        );

      }


    } catch (err) {

      setError(

        err.response?.data?.message ||

        "Invalid email or password"

      );


    } finally {

      setLoading(false);

    }

  };




  if (checkingSession) {

    return (

      <div className="admin-login-page">

        <div className="admin-login-loader">

          <div className="admin-login-spinner">
          </div>

          <span>
            VERIFYING SESSION
          </span>

        </div>

      </div>

    );

  }


  return (

    <main className="admin-login-page">


  

      <div
        className="admin-login-background"
        aria-hidden="true"
      >

        <div className="admin-login-grid">
        </div>

        <div className="admin-login-glow glow-one">
        </div>

        <div className="admin-login-glow glow-two">
        </div>

      </div>


  

      <section className="admin-login-card">


      

        <div className="admin-login-brand">

          <div className="admin-login-logo">

            <span>
              ◇
            </span>

          </div>


          <div className="admin-brand-text">

            <strong>
              ADMIN CONSOLE
            </strong>

            <span>
              Control Center
            </span>

          </div>

        </div>


      

        <div className="admin-secure-badge">

          <ShieldCheck size={14} />

          SECURE ADMIN ACCESS

        </div>


   

        <div className="admin-login-heading">

          <h1>

            Welcome

            <span>
              {" "}back.
            </span>

          </h1>


          <p>

            Sign in with your administrator
            credentials to access the private
            portfolio workspace.

          </p>

        </div>


      

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >


      

          <div className="admin-form-field">

            <label htmlFor="admin-email">

              EMAIL ADDRESS

            </label>


            <div className="admin-input-shell">

              <Mail size={18} />


              <input
                id="admin-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                autoComplete="email"
                required
              />

            </div>

          </div>


      

          <div className="admin-form-field">

            <label htmlFor="admin-password">

              PASSWORD

            </label>


            <div className="admin-input-shell">

              <LockKeyhole size={18} />


              <input
                id="admin-password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />


              <button
                type="button"
                className="admin-eye-btn"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >

                {showPassword
                  ? <EyeOff size={18} />
                  : <Eye size={18} />
                }

              </button>

            </div>

          </div>


        

          {error && (

            <div
              className="admin-login-error"
              role="alert"
            >

              <span>
                !
              </span>

              {error}

            </div>

          )}


        

          <button
            type="submit"
            className="admin-login-submit"
            disabled={loading}
          >

            <span>

              {loading
                ? "AUTHENTICATING..."
                : "ENTER DASHBOARD"
              }

            </span>


            {!loading && (

              <ArrowRight size={18} />

            )}

          </button>

        </form>



        <div className="admin-login-footer">

          <div className="admin-status">

            <span className="admin-status-dot">
            </span>

            <div>

              <small>
                SYSTEM STATUS
              </small>

              <strong>
                All systems operational
              </strong>

            </div>

          </div>


          <div className="admin-protected">

            <LockKeyhole size={13} />

            Protected environment

          </div>

        </div>


      </section>

    </main>

  );

}