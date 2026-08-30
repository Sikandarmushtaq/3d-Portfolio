const adminModel = require("../Models/AdminModel");

const contactModel = require("../Models/ContactModel");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,

    secure: isProduction,

    sameSite: isProduction ? "none" : "lax",

    path: "/",

    maxAge: 15 * 60 * 1000,
  };
};

const getClearCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,

    secure: isProduction,

    sameSite: isProduction ? "none" : "lax",

    path: "/",
  };
};

const generateAdminToken = (adminId) => {
  return jwt.sign(
    {
      id: adminId,
      role: "admin",
    },

    process.env.ADMIN_SECRET_KEY,

    {
      expiresIn: "15m",
    },
  );
};

const adminControllers = {
  createAdmin: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          status: "error",

          message: "Email and password are required",
        });
      }

      if (password.length < 8) {
        return res.status(400).json({
          status: "error",

          message: "Password must be at least 8 characters",
        });
      }

      const existingAdmin = await adminModel.findOne();

      if (existingAdmin) {
        return res.status(403).json({
          status: "error",

          message: "Admin account already exists",
        });
      }

      const admin = new adminModel({
        email: email.trim().toLowerCase(),

        password,
      });

      await admin.save();

      return res.status(201).json({
        status: "success",

        message: "Admin created successfully",
      });
    } catch (err) {
      console.error("Create admin error:", err);

      return res.status(500).json({
        status: "error",

        message: "Internal server error",
      });
    }
  },

  authenticate: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          status: "error",

          message: "Email and password are required",
        });
      }

      const admin = await adminModel.findOne({
        email: email.trim().toLowerCase(),
      });

      if (!admin) {
        return res.status(401).json({
          status: "error",

          message: "Invalid email or password",
        });
      }

      const passwordCorrect = await bcrypt.compare(
        password,

        admin.password,
      );

      if (!passwordCorrect) {
        return res.status(401).json({
          status: "error",

          message: "Invalid email or password",
        });
      }

      const token = generateAdminToken(admin._id);

      res.cookie(
        "adminToken",

        token,

        getCookieOptions(),
      );

      return res.status(200).json({
        status: "success",

        authenticated: true,

        message: "Login successful",

        admin: {
          id: admin._id,

          email: admin.email,
        },
      });
    } catch (err) {
      console.error("Admin login error:", err);

      return res.status(500).json({
        status: "error",

        message: "Internal server error",
      });
    }
  },

  checkAuth: async (req, res) => {
    try {
      const admin = await adminModel.findById(req.admin.id).select("_id email");

      if (!admin) {
        res.clearCookie(
          "adminToken",

          getClearCookieOptions(),
        );

        return res.status(401).json({
          status: "error",

          authenticated: false,

          message: "Admin account not found",
        });
      }

      const expiresAt = req.admin.exp * 1000;

      return res.status(200).json({
        status: "success",

        authenticated: true,

        expiresAt,

        admin: {
          id: admin._id,

          email: admin.email,
        },
      });
    } catch (err) {
      console.error("Check auth error:", err);

      return res.status(500).json({
        status: "error",

        authenticated: false,

        message: "Internal server error",
      });
    }
  },

  getContacts: async (req, res) => {
    try {
      const contacts = await contactModel.find().sort({
        createdAt: -1,
      });

      return res.status(200).json({
        status: "success",

        contacts,
      });
    } catch (err) {
      console.error("Get contacts error:", err);

      return res.status(500).json({
        status: "error",

        message: "Failed to load contacts",
      });
    }
  },

  changePassword: async (req, res) => {
    try {
      const {
        oldPassword,

        newPassword,

        confirmPassword,
      } = req.body;

      if (!oldPassword || !newPassword || !confirmPassword) {
        return res.status(400).json({
          status: "error",

          message: "All password fields are required",
        });
      }

      const admin = await adminModel.findById(req.admin.id);

      if (!admin) {
        return res.status(404).json({
          status: "error",

          message: "Admin account not found",
        });
      }

      const oldPasswordCorrect = await bcrypt.compare(
        oldPassword,

        admin.password,
      );

      if (!oldPasswordCorrect) {
        return res.status(400).json({
          status: "error",

          field: "oldPassword",

          message: "Current password is incorrect",
        });
      }

      if (newPassword !== confirmPassword) {
        return res.status(400).json({
          status: "error",

          field: "confirmPassword",

          message: "New password and confirm password do not match",
        });
      }

      if (newPassword.length < 8) {
        return res.status(400).json({
          status: "error",

          field: "newPassword",

          message: "New password must be at least 8 characters",
        });
      }

      const sameAsCurrentPassword = await bcrypt.compare(
        newPassword,

        admin.password,
      );

      if (sameAsCurrentPassword) {
        return res.status(400).json({
          status: "error",

          field: "newPassword",

          message: "New password must be different from current password",
        });
      }

      admin.password = newPassword;

      await admin.save();

      res.clearCookie(
        "adminToken",

        getClearCookieOptions(),
      );

      return res.status(200).json({
        status: "success",

        message: "Password changed successfully. Please login again.",

        requireLogin: true,
      });
    } catch (err) {
      console.error("Change password error:", err);

      return res.status(500).json({
        status: "error",

        message: "Internal server error",
      });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie(
        "adminToken",

        getClearCookieOptions(),
      );

      return res.status(200).json({
        status: "success",

        authenticated: false,

        message: "Logged out successfully",
      });
    } catch (err) {
      console.error("Logout error:", err);

      return res.status(500).json({
        status: "error",

        message: "Internal server error",
      });
    }
  },
};

module.exports = adminControllers;
