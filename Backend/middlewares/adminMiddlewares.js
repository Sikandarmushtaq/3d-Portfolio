const jwt = require(
  "jsonwebtoken"
);


module.exports = function (
  req,
  res,
  next
) {

  try {

    const token =
      req.cookies.adminToken;


    if (!token) {

      return res.status(401).json({

        status: "error",

        authenticated: false,

        message:
          "Authentication required",

      });

    }


    const decoded =
      jwt.verify(

        token,

        process.env.ADMIN_SECRET_KEY

      );


    if (
      decoded.role !== "admin"
    ) {

      const isProduction =
        process.env.NODE_ENV ===
        "production";


      res.clearCookie(
        "adminToken",
        {
          httpOnly: true,

          secure:
            isProduction,

          sameSite:
            isProduction
              ? "none"
              : "lax",

          path: "/",
        }
      );


      return res.status(403).json({

        status: "error",

        authenticated: false,

        message:
          "Admin access required",

      });

    }


    req.admin =
      decoded;


    next();


  } catch (err) {

    const isProduction =
      process.env.NODE_ENV ===
      "production";


    res.clearCookie(
      "adminToken",
      {
        httpOnly: true,

        secure:
          isProduction,

        sameSite:
          isProduction
            ? "none"
            : "lax",

        path: "/",
      }
    );


    if (
      err.name ===
      "TokenExpiredError"
    ) {

      return res.status(401).json({

        status: "error",

        authenticated: false,

        expired: true,

        message:
          "Session expired. Please login again.",

      });

    }


    return res.status(401).json({

      status: "error",

      authenticated: false,

      message:
        "Invalid authentication token",

    });

  }

};