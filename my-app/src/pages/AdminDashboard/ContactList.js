import React, {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./AdminDashboard.css";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";

const ContactList = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response =
          await axios.get(
            `${API_URL}/admin/contacts`,
            {
              withCredentials: true,
            }
          );

        if (
          response.data.status ===
          "success"
        ) {
          const sortedContacts = [
            ...(response.data.contacts ||
              []),
          ].sort(
            (a, b) =>
              new Date(b.createdAt) -
              new Date(a.createdAt)
          );

          setContacts(
            sortedContacts
          );
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
            "Failed to load contacts"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  const getDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(
      date
    ).toLocaleDateString(
      "en-PK",
      {
        timeZone: "Asia/Karachi",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const getTime = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(
      date
    ).toLocaleTimeString(
      "en-PK",
      {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  };

  if (loading) {
    return (
      <div className="admin-state">
        Loading contacts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-state">
        {error}
      </div>
    );
  }

  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span>
            CONTACTS
          </span>

          <h1>
            Contact Submissions
          </h1>

          <p>
            View all contact form
            submissions.
          </p>
        </div>

        <div className="admin-count">
          {contacts.length}
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="admin-empty">
          No contacts found.
        </div>
      ) : (
        <div className="contact-list">
          {contacts.map(
            (contact, index) => (
              <div
                className="contact-card"
                key={contact._id}
              >
                <div className="contact-card-top">
                  <div>
                    <span className="contact-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <h3>
                      {contact.fullName ||
                        "-"}
                    </h3>
                  </div>

                  <div className="contact-date">
                    <span>
                      {getDate(
                        contact.createdAt
                      )}
                    </span>

                    <small>
                      {getTime(
                        contact.createdAt
                      )}
                    </small>
                  </div>
                </div>

                <div className="contact-details">
                  <div>
                    <span>
                      Company
                    </span>

                    <p>
                      {contact.companyName ||
                        "-"}
                    </p>
                  </div>

                  <div>
                    <span>
                      Email
                    </span>

                    {contact.email ? (
                      <a
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    ) : (
                      <p>-</p>
                    )}
                  </div>

                  <div>
                    <span>
                      Phone
                    </span>

                    {contact.number ? (
                      <a
                        href={`tel:${contact.number}`}
                      >
                        {contact.number}
                      </a>
                    ) : (
                      <p>-</p>
                    )}
                  </div>

                  <div>
                    <span>
                      Job Title
                    </span>

                    <p>
                      {contact.jobTitle ||
                        "-"}
                    </p>
                  </div>

                  <div>
                    <span>
                      Source
                    </span>

                    <p>
                      {contact.source ||
                        "Direct"}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
};

export default ContactList;