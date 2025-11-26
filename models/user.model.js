import mongoose from "mongoose";

// clerkId, email, username, photo, firstName, lastName, planId, creditBalance

const UserScheme = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    minlenght: 3,
    maxlength: 15,
  },
  photo: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 5,
  },
  hasTour: {
    type: Boolean,
    default: false,
  },
});

export const UserModel =
  mongoose.models?.User || mongoose.model("User", UserScheme);
