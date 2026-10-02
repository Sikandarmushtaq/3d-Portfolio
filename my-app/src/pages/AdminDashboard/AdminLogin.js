import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import "./AdminLogin.css";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [checking, setChecking] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/admin/check-auth`,
          {
            withCredentials: true,
          }
        );

        if (
          response.data.authenticated === true
        ) {
          navigate(
            "/admin/dashboard/contacts",
            {
              replace: true,
            }
          );
        }
      } catch (err) {
      } finally {
        setChecking(false);
      }
    };

    checkSession();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_URL}/admin/login`,
        {
          email: form.email.trim(),
          password: form.password,
        },
        {
          withCredentials: true,
        }
      );

      if (
        response.data.status === "success"
      ) {
        navigate(
          "/admin/dashboard/contacts",
          {
            replace: true,
          }
        );
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="admin-login-loading">
        Checking session...
      </div>
    );
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <div className="admin-login-heading">
          <span>SYNSOLVO</span>

          <h1>Admin Login</h1>

          <p>
            Enter your credentials to access
            the dashboard.
          </p>
        </div>

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >
          <div className="admin-login-field">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="admin-login-field">
            <label>Password</label>

            <div className="admin-password-input">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;