import mongoose from "mongoose";

// await mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    required: true,
    unique: true, // Assuming you meant unique here instead of `indexedDB`
  },
  password: {
    type: String,
    required: true,
  },
  mobile: String,
});

// Check for existing model to avoid OverwriteModelError
const UserModel = mongoose.models?.user || mongoose.model("user", UserSchema);

export default UserModel;
