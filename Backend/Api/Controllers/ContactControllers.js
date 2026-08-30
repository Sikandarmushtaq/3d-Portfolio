const ContactModel = require("../Models/ContactModel")

const createContact = async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      number,
      jobTitle,
      source,
    } = req.body;

    const contacts = await ContactModel.create({
      fullName,
      companyName,
      email,
      number,
      jobTitle,
      source,
    });

    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      contacts,
    });
  } catch (error) {
    console.error("Create contact error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create contact",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
};