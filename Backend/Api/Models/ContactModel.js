const mongoose = require("mongoose");

mongoose.pluralize(null);

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    companyName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    number: {
      type: String,
      required: true,
      trim: true,
    },

    jobTitle: {
      type: String,
      trim: true,
    },

    source: {
      type: String,
      enum: ["LinkedIn", "Google Search", "Referral", "Other"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("contacts", contactSchema);
