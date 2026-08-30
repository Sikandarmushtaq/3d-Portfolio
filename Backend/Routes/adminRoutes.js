const express = require("express");

const router = express.Router();

const adminControllers = require("../Api/Controllers/AdminControllers");

const adminMiddleware = require("../middlewares/adminMiddlewares");

router.post("/create", adminControllers.createAdmin);

router.post("/login", adminControllers.authenticate);

router.get("/check-auth", adminMiddleware, adminControllers.checkAuth);

router.get("/contacts", adminMiddleware, adminControllers.getContacts);

router.post(
  "/change-password",
  adminMiddleware,
  adminControllers.changePassword,
);

router.post("/logout", adminMiddleware, adminControllers.logout);

module.exports = router;
