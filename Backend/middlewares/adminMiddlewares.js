const jwt = require("jsonwebtoken");

const clearAdminCookie = (res) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.clearCookie("adminToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
  });
};

const adminMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.adminToken;

    if (!token) {
      return res.status(401).json({
        status: "error",
        authenticated: false,
        message: "Authentication required",
      });
    }

    const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY);

    if (decoded.role !== "admin") {
      clearAdminCookie(res);

      return res.status(403).json({
        status: "error",
        authenticated: false,
        message: "Admin access required",
      });
    }

    req.admin = decoded;

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      clearAdminCookie(res);

      return res.status(401).json({
        status: "error",
        authenticated: false,
        expired: true,
        message: "Session expired. Please login again.",
      });
    }

    clearAdminCookie(res);

    return res.status(401).json({
      status: "error",
      authenticated: false,
      message: "Invalid authentication token",
    });
  }
};

module.exports = adminMiddleware;
