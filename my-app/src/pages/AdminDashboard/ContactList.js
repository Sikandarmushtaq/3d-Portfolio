import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import axios from "axios";

import "./AdminDashboard.css";


const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";


export default function ContactList() {

  const [contacts, setContacts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const navigate =
    useNavigate();


  useEffect(() => {

    let mounted = true;


    const fetchContacts = async () => {

      try {

        const res =
          await axios.get(
            `${API_URL}/admin/contacts`,
            {
              withCredentials: true
            }
          );


        if (mounted) {

          setContacts(
            res.data.contacts || []
          );

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


        if (mounted) {

          setError(
            err.response?.data?.message ||
            "Failed to load contacts."
          );

        }

      } finally {

        if (mounted) {

          setLoading(false);

        }

      }

    };


    fetchContacts();


    return () => {

      mounted = false;

    };

  }, [navigate]);


  if (loading) {

    return (

      <div className="dashboard-loading">

        <div className="sketch-spinner">
        </div>

        <span>
          Loading contacts...
        </span>

      </div>

    );

  }


  if (error) {

    return (

      <div className="dashboard-error">

        {error}

      </div>

    );

  }


  return (

    <section className="contact-page">


      <header className="contact-header">

        <span className="page-label">

          02 / CONTACT WORKSPACE

        </span>


        <h1>
          Contact Submissions
        </h1>


        <p>

          Review every portfolio contact
          submission and its complete details.

        </p>

      </header>


      <div className="contact-result-bar">

        <span>
          ALL SUBMISSIONS
        </span>


        <strong>

          {contacts.length}
          {" "}
          CONTACTS

        </strong>

      </div>


      {contacts.length === 0 ? (

        <div className="contact-empty">

          <div className="empty-symbol">
            ◇
          </div>


          <h3>
            No contacts yet.
          </h3>


          <p>

            New portfolio submissions
            will appear here.

          </p>

        </div>

      ) : (

        <div className="sketch-table-container">

          <table className="sketch-contact-table">


            <thead>

              <tr>

                <th>#</th>

                <th>
                  Full Name
                </th>

                <th>
                  Company
                </th>

                <th>
                  Email
                </th>

                <th>
                  Number
                </th>

                <th>
                  Job Title
                </th>

                <th>
                  Source
                </th>

              </tr>

            </thead>


            <tbody>

              {contacts.map(
                (contact, index) => (

                  <tr
                    key={
                      contact._id ||
                      index
                    }
                  >


                    <td
                      className="contact-index-cell"
                      data-label="Record"
                    >

                      <span className="row-number">

                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}

                      </span>

                    </td>


                    <td data-label="Full Name">

                      <div className="contact-person">

                        <div className="contact-initial">

                          {contact.fullName
                            ?.charAt(0)
                            ?.toUpperCase() ||
                            "?"
                          }

                        </div>


                        <span className="person-name">

                          {contact.fullName || "-"}

                        </span>

                      </div>

                    </td>


                    <td data-label="Company">

                      <span className="contact-value">

                        {contact.companyName || "-"}

                      </span>

                    </td>


                    <td data-label="Email">

                      {contact.email ? (

                        <a
                          href={`mailto:${contact.email}`}
                          className="table-email"
                        >

                          {contact.email}

                        </a>

                      ) : (

                        <span className="contact-value">
                          -
                        </span>

                      )}

                    </td>


                    <td data-label="Number">

                      {contact.number ? (

                        <a
                          href={`tel:${contact.number}`}
                          className="table-phone"
                        >

                          {contact.number}

                        </a>

                      ) : (

                        <span className="contact-value">
                          -
                        </span>

                      )}

                    </td>


                    <td data-label="Job Title">

                      <span className="contact-value">

                        {contact.jobTitle || "-"}

                      </span>

                    </td>


                    <td data-label="Source">

                      <span className="table-source">

                        {contact.source ||
                          "Direct"
                        }

                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}


      {contacts.length > 0 && (

        <div className="contact-footer">

          <span>
            END OF SUBMISSIONS
          </span>


          <span>

            {contacts.length}
            {" "}
            RECORDS LOADED

          </span>

        </div>

      )}

    </section>

  );

}
