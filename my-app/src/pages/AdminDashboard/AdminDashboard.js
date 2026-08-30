import {
  NavLink,
  Outlet,
  useNavigate
} from "react-router-dom";

import axios from "axios";

import {
  ContactRound,
  KeyRound,
  LogOut,
  ShieldCheck
} from "lucide-react";

import "./AdminDashboard.css";


const API_URL =
   process.env.REACT_APP_API_URL ||
  "http://localhost:3000";


export default function AdminDashboard() {

  const navigate =
    useNavigate();


  const handleLogout = async () => {

    try {

      await axios.post(
        `${API_URL}/admin/logout`,
        {},
        {
          withCredentials: true
        }
      );

    } catch (err) {

      console.log(
        err.message
      );

    } finally {

      navigate(
        "/admin/login",
        {
          replace: true
        }
      );

    }

  };


  return (

    <div className="sketch-dashboard">

      <aside className="sketch-sidebar">

        <div className="dashboard-brand">

          <div className="dashboard-logo">

            ◇

          </div>


          <div>

            <strong>
              ADMIN CONSOLE
            </strong>

            <span>
              Control Center
            </span>

          </div>

        </div>


        <nav className="dashboard-nav">

          <NavLink
            to="contacts"
            className={({ isActive }) =>
              isActive
                ? "dashboard-nav-item active"
                : "dashboard-nav-item"
            }
          >

            <ContactRound size={17} />

            <span>
              Contact List
            </span>

          </NavLink>


          <NavLink
            to="change-password"
            className={({ isActive }) =>
              isActive
                ? "dashboard-nav-item active"
                : "dashboard-nav-item"
            }
          >

            <KeyRound size={17} />

            <span>
              Change Password
            </span>

          </NavLink>


          <button
            className="dashboard-nav-item logout-item"
            onClick={handleLogout}
          >

            <LogOut size={17} />

            <span>
              Logout
            </span>

          </button>

        </nav>


        <div className="sidebar-wave">
        </div>


        <div className="sidebar-status">

          <div className="sidebar-status-heading">

            <span className="green-light">
            </span>

            <span>
              SYSTEM STATUS
            </span>

          </div>


          <strong>
            All systems operational
          </strong>


          <div className="sidebar-status-line">
          </div>


          <div className="sidebar-secure">

            <ShieldCheck size={13} />

            Secure workspace

          </div>

        </div>

      </aside>


      <main className="sketch-dashboard-main">

        <Outlet />

      </main>

    </div>

  );
}