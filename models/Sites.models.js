import mongoose from "mongoose";

const SiteSchema = new mongoose.Schema({
  site_name: String,
  site_type: String,
  site_location: String,
  date: String,
  yt_link: String,
  images: [String],
  site_description: String,
});

// Check for existing model to avoid OverwriteModelError
const SiteModel = mongoose.models?.sites || mongoose.model("sites", SiteSchema);

export default SiteModel;
