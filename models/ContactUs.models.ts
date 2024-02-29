import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true, // Make required as per your need
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const ContactUs =
  mongoose.models?.contactus || mongoose.model("contactus", contactUsSchema);

export default ContactUs;
