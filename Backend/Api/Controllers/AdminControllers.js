const adminModel = require(
  "../Models/AdminModel"
);

const contactModel = require(
  "../Models/ContactModel"
);

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");


module.exports = {

  createAdmin: async function (req, res) {

    try {

      const email = req.body.email;

      const password =
        req.body.password;


      if (!email || !password) {

        return res.status(400).json({
          status: "error",
          message:
            "Email and password are required",
        });

      }


      if (password.length < 8) {

        return res.status(400).json({
          status: "error",
          message:
            "Password must be at least 8 characters",
        });

      }


      const existingAdmin =
        await adminModel.findOne();


      if (existingAdmin) {

        return res.status(403).json({
          status: "error",
          message:
            "Admin account already exists",
        });

      }


      await adminModel.create({

        email:
          email
            .trim()
            .toLowerCase(),

        password:
          password,

      });


      return res.status(201).json({
        status: "success",
        message:
          "Admin created successfully",
      });


    } catch (err) {

      console.log(
        "Create admin error:",
        err.message
      );


      return res.status(500).json({
        status: "error",
        message:
          "Internal server error",
      });

    }

  },


  authenticate: async function (req, res) {

    try {

      const email =
        req.body.email;

      const password =
        req.body.password;


      if (!email || !password) {

        return res.status(400).json({
          status: "error",
          message:
            "Email and password are required",
        });

      }


      const admin =
        await adminModel.findOne({

          email:
            email
              .trim()
              .toLowerCase(),

        });


      if (!admin) {

        return res.status(401).json({
          status: "error",
          message:
            "Invalid email or password",
        });

      }


      const passwordCorrect =
        await bcrypt.compare(
          password,
          admin.password
        );


      if (!passwordCorrect) {

        return res.status(401).json({
          status: "error",
          message:
            "Invalid email or password",
        });

      }


      const token = jwt.sign(

        {
          id: admin._id,
          role: "admin",
        },

        process.env.ADMIN_SECRET_KEY,

        {
          expiresIn: "15m",
        }

      );


      const isProduction =
        process.env.NODE_ENV ===
        "production";


      res.cookie(
        "adminToken",
        token,
        {
          httpOnly: true,

          secure:
            isProduction,

          sameSite:
            isProduction
              ? "none"
              : "lax",

          path: "/",

          maxAge:
            15 * 60 * 1000,
        }
      );


      return res.status(200).json({

        status: "success",

        authenticated: true,

        message:
          "Login successful",

        admin: {
          id: admin._id,
          email: admin.email,
        },

      });


    } catch (err) {

      console.log(
        "Admin login error:",
        err.message
      );


      return res.status(500).json({
        status: "error",
        message:
          "Internal server error",
      });

    }

  },


  checkAuth: async function (req, res) {

    try {

      const admin =
        await adminModel
          .findById(
            req.admin.id
          )
          .select(
            "_id email"
          );


      if (!admin) {

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


        return res.status(401).json({

          status: "error",

          authenticated: false,

          message:
            "Admin account not found",

        });

      }


      const expiresAt =
        req.admin.exp * 1000;


      return res.status(200).json({

        status: "success",

        authenticated: true,

        expiresAt:
          expiresAt,

        admin: {

          id:
            admin._id,

          email:
            admin.email,

        },

      });


    } catch (err) {

      console.log(
        "Check auth error:",
        err.message
      );


      return res.status(500).json({

        status: "error",

        authenticated: false,

        message:
          "Internal server error",

      });

    }

  },


  getContacts: async function (req, res) {

    try {

      const contacts =
        await contactModel
          .find()
          .sort({
            createdAt: -1,
          });


      return res.status(200).json({

        status: "success",

        contacts:
          contacts,

      });


    } catch (err) {

      console.log(
        "Get contacts error:",
        err.message
      );


      return res.status(500).json({

        status: "error",

        message:
          "Failed to load contacts",

      });

    }

  },


  changePassword: async function (req, res) {

    try {

      const oldPassword =
        req.body.oldPassword;

      const newPassword =
        req.body.newPassword;

      const confirmPassword =
        req.body.confirmPassword;


      if (
        !oldPassword ||
        !newPassword ||
        !confirmPassword
      ) {

        return res.status(400).json({

          status: "error",

          message:
            "All password fields are required",

        });

      }


      const admin =
        await adminModel.findById(
          req.admin.id
        );


      if (!admin) {

        return res.status(404).json({

          status: "error",

          message:
            "Admin account not found",

        });

      }


      const oldPasswordCorrect =
        await bcrypt.compare(

          oldPassword,

          admin.password

        );


      if (!oldPasswordCorrect) {

        return res.status(400).json({

          status: "error",

          field:
            "oldPassword",

          message:
            "Current password is incorrect",

        });

      }


      if (
        newPassword !==
        confirmPassword
      ) {

        return res.status(400).json({

          status: "error",

          field:
            "confirmPassword",

          message:
            "New password and confirm password do not match",

        });

      }


      if (
        newPassword.length < 8
      ) {

        return res.status(400).json({

          status: "error",

          field:
            "newPassword",

          message:
            "New password must be at least 8 characters",

        });

      }


      const samePassword =
        await bcrypt.compare(

          newPassword,

          admin.password

        );


      if (samePassword) {

        return res.status(400).json({

          status: "error",

          field:
            "newPassword",

          message:
            "New password must be different from current password",

        });

      }


      admin.password =
        newPassword;


      await admin.save();


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


      return res.status(200).json({

        status: "success",

        message:
          "Password changed successfully. Please login again.",

        requireLogin:
          true,

      });


    } catch (err) {

      console.log(
        "Change password error:",
        err.message
      );


      return res.status(500).json({

        status: "error",

        message:
          "Internal server error",

      });

    }

  },


  logout: async function (req, res) {

    try {

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


      return res.status(200).json({

        status: "success",

        authenticated: false,

        message:
          "Logged out successfully",

      });


    } catch (err) {

      console.log(
        "Logout error:",
        err.message
      );


      return res.status(500).json({

        status: "error",

        message:
          "Internal server error",

      });

    }

  },

};