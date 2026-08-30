import {
  Navigate,
  Outlet
} from "react-router-dom";

import {
  useEffect,
  useRef,
  useState
} from "react";

import axios from "axios";

import "./AdminDashboard.css";


const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:3000";


export default function ProtectedRoute() {

  const [authStatus, setAuthStatus] =
    useState("checking");

  const expiryTimer =
    useRef(null);


  useEffect(() => {

    let mounted = true;




    const clearExpiryTimer = () => {

      if (expiryTimer.current) {

        clearTimeout(
          expiryTimer.current
        );

        expiryTimer.current = null;

      }

    };




    const endSession = async () => {

      clearExpiryTimer();


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
          "Session cleanup:",
          err.message
        );

      } finally {

        if (mounted) {

          setAuthStatus(
            "unauthorized"
          );

        }

      }

    };


    const checkAuthentication =
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
            res.data.authenticated !== true
          ) {

            await endSession();

            return;

          }


          const expiresAt =
            Number(
              res.data.expiresAt
            );


          const remainingTime =
            expiresAt - Date.now();



          if (
            !expiresAt ||
            remainingTime <= 0
          ) {

            await endSession();

            return;

          }


          if (mounted) {

            setAuthStatus(
              "authorized"
            );

          }


          clearExpiryTimer();


     

          expiryTimer.current =
            setTimeout(
              () => {

                endSession();

              },
              remainingTime
            );


        } catch (err) {

       

          clearExpiryTimer();


          if (mounted) {

            setAuthStatus(
              "unauthorized"
            );

          }

        }

      };




    checkAuthentication();




    const handleWindowFocus = () => {

      checkAuthentication();

    };


    const handleVisibilityChange = () => {

      if (
        document.visibilityState ===
        "visible"
      ) {

        checkAuthentication();

      }

    };


    window.addEventListener(
      "focus",
      handleWindowFocus
    );


    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );



    return () => {

      mounted = false;

      clearExpiryTimer();


      window.removeEventListener(
        "focus",
        handleWindowFocus
      );


      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

    };

  }, []);



  if (
    authStatus === "checking"
  ) {

    return (

      <div className="dashboard-loading">

        <div className="sketch-spinner">
        </div>

        <span>
          Verifying session...
        </span>

      </div>

    );

  }




  if (
    authStatus === "unauthorized"
  ) {

    return (

      <Navigate
        to="/admin/login"
        replace
      />

    );

  }




  return <Outlet />;

}