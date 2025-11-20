import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    transformationType: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    securedUrl: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    config: {
      type: Object,
    },
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const ImageModel =
  mongoose.models?.Image || mongoose.model("Image", ImageSchema);
