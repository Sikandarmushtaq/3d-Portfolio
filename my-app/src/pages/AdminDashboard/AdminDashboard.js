import React from "react";

import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

import {
  ContactRound,
  KeyRound,
  LogOut,
} from "lucide-react";

import "./AdminDashboard.css";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${API_URL}/admin/logout`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err.message);
    } finally {
      navigate(
        "/admin/login",
        {
          replace: true,
        }
      );
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>SYNSOLVO</span>
          <h2>Admin</h2>
        </div>

        <nav className="admin-navigation">
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              isActive
                ? "admin-nav-link active"
                : "admin-nav-link"
            }
          >
            <ContactRound size={18} />

            <span>Contacts</span>
          </NavLink>

          <NavLink
            to="change-password"
            className={({ isActive }) =>
              isActive
                ? "admin-nav-link active"
                : "admin-nav-link"
            }
          >
            <KeyRound size={18} />

            <span>
              Change Password
            </span>
          </NavLink>

          <button
            className="admin-nav-link admin-logout"
            onClick={handleLogout}
          >
            <LogOut size={18} />

            <span>Logout</span>
          </button>
        </nav>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;