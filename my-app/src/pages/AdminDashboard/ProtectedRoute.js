import React, {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
  Outlet,
} from "react-router-dom";

import axios from "axios";

import "./AdminDashboard.css";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";

const ProtectedRoute = () => {
  const [status, setStatus] =
    useState("checking");

  useEffect(() => {
    let mounted = true;

    let expiryTimer;

    const checkAuth = async () => {
      try {
        const response =
          await axios.get(
            `${API_URL}/admin/check-auth`,
            {
              withCredentials: true,
            }
          );

        if (
          response.data
            .authenticated !== true
        ) {
          if (mounted) {
            setStatus(
              "unauthorized"
            );
          }

          return;
        }

        const expiresAt =
          Number(
            response.data.expiresAt
          );

        const remainingTime =
          expiresAt - Date.now();

        if (
          !expiresAt ||
          remainingTime <= 0
        ) {
          if (mounted) {
            setStatus(
              "unauthorized"
            );
          }

          return;
        }

        if (mounted) {
          setStatus(
            "authorized"
          );
        }

        clearTimeout(
          expiryTimer
        );

        expiryTimer =
          setTimeout(() => {
            if (mounted) {
              setStatus(
                "unauthorized"
              );
            }
          }, remainingTime);
      } catch (err) {
        if (mounted) {
          setStatus(
            "unauthorized"
          );
        }
      }
    };

    const handleFocus = () => {
      checkAuth();
    };

    const handleVisibility =
      () => {
        if (
          document.visibilityState ===
          "visible"
        ) {
          checkAuth();
        }
      };

    checkAuth();

    window.addEventListener(
      "focus",
      handleFocus
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      mounted = false;

      clearTimeout(
        expiryTimer
      );

      window.removeEventListener(
        "focus",
        handleFocus
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="admin-state full-page">
        Checking session...
      </div>
    );
  }

  if (
    status === "unauthorized"
  ) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;