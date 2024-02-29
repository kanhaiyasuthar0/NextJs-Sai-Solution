import mongoose, { mongo } from "mongoose";
const testimonialSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    clientImage: {
      type: String, // URL to the client's image, optional
      required: false,
      trim: true,
    },
    projectType: {
      type: String, // e.g., Residential, Commercial
      required: true,
      trim: true,
    },
    designStyle: {
      type: String, // e.g., Modern, Traditional, Minimalist
      required: true,
      trim: true,
    },
    testimonialText: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: false,
      min: 1,
      max: 5,
    },
    projectBeforeImage: {
      type: String, // URL to the before image, optional
      required: false,
      trim: true,
    },
    projectAfterImage: {
      type: String, // URL to the after image, showcasing the transformation
      required: false,
      trim: true,
    },
    projectDate: {
      type: Date, // The completion date of the project
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Testimonial =
  mongoose.models?.testimonial ||
  mongoose.model("testimonial", testimonialSchema);

export default Testimonial;
