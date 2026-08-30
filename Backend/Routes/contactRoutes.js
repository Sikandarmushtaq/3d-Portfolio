const express = require("express");
const router = express.Router();

const { createContact } = require("../Api/Controllers/ContactControllers");

router.post(
  "/create",
  createContact
);

module.exports = router;