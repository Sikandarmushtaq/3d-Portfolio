const express = require("express");

const router = express.Router();

const contactController = require(
  "../Api/Controllers/ContactControllers"
);


router.post(
  "/create",
  contactController.createContact
);


module.exports = router;