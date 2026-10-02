import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
  Eye,
  EyeOff,
} from "lucide-react";

import "./AdminDashboard.css";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [form, setForm] =
    useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const [showOld, setShowOld] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [
    showConfirm,
    setShowConfirm,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [fieldError, setFieldError] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setFieldError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setFieldError("");
    setMessage("");

    try {
      const response =
        await axios.post(
          `${API_URL}/admin/change-password`,
          {
            oldPassword:
              form.oldPassword,

            newPassword:
              form.newPassword,

            confirmPassword:
              form.confirmPassword,
          },
          {
            withCredentials: true,
          }
        );

      if (
        response.data.status ===
        "success"
      ) {
        setMessage(
          "Password changed successfully"
        );

        setForm({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          navigate(
            "/admin/login",
            {
              replace: true,
            }
          );
        }, 1000);
      }
    } catch (err) {
      if (
        err.response?.status ===
          401 ||
        err.response?.status === 403
      ) {
        navigate(
          "/admin/login",
          {
            replace: true,
          }
        );

        return;
      }

      setError(
        err.response?.data?.message ||
          "Failed to change password"
      );

      setFieldError(
        err.response?.data?.field ||
          ""
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span>
            SECURITY
          </span>

          <h1>
            Change Password
          </h1>

          <p>
            Update your admin account
            password.
          </p>
        </div>
      </div>

      <div className="change-password-box">
        <form
          className="change-password-form"
          onSubmit={handleSubmit}
        >
          <div className="password-field">
            <label>
              Current Password
            </label>

            <div
              className={
                fieldError ===
                "oldPassword"
                  ? "password-input error"
                  : "password-input"
              }
            >
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
                placeholder="Current password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowOld(
                    !showOld
                  )
                }
              >
                {showOld ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>

            {fieldError ===
              "oldPassword" && (
              <span className="field-message">
                {error}
              </span>
            )}
          </div>

          <div className="password-field">
            <label>
              New Password
            </label>

            <div
              className={
                fieldError ===
                "newPassword"
                  ? "password-input error"
                  : "password-input"
              }
            >
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
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowNew(
                    !showNew
                  )
                }
              >
                {showNew ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>

            {fieldError ===
              "newPassword" && (
              <span className="field-message">
                {error}
              </span>
            )}
          </div>

          <div className="password-field">
            <label>
              Confirm Password
            </label>

            <div
              className={
                fieldError ===
                "confirmPassword"
                  ? "password-input error"
                  : "password-input"
              }
            >
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
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }
              >
                {showConfirm ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>

            {fieldError ===
              "confirmPassword" && (
              <span className="field-message">
                {error}
              </span>
            )}
          </div>

          {error &&
            !fieldError && (
              <div className="form-error">
                {error}
              </div>
            )}

          {message && (
            <div className="form-success">
              {message}
            </div>
          )}

          <button
            className="change-password-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;