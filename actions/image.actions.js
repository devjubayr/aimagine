"use server";

import { connectDB } from "@/lib/connectDB";
import { ImageModel } from "@/models/image.model";
import { UserModel } from "@/models/user.model";
import { handleError } from "@/utils/handleError";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

// Add image
export const addImage = async ({ image, userId, path }) => {
  try {
    await connectDB();

    const author = await UserModel.findById(userId);

    if (!author) {
      throw new Error("User not found!");
    }

    const newImage = await ImageModel.create({ ...image, author: author._id });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newImage));
  } catch (error) {
    handleError(error);
  }
};
// Update image
export const updateImage = async ({ image, userId, path }) => {
  try {
    await connectDB();

    const imageToUpdate = await Image.findById(image._id);

    if (!imageToUpdate || imageToUpdate.author.toHexString() !== userId) {
      throw new Error("Unauthorized or image not found");
    }

    const updatedImage = await ImageModel.findByIdAndUpdate(
      imageToUpdate._id,
      image,
      { new: true }
    );

    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedImage));
  } catch (error) {
    handleError(error);
  }
};
// Delete image
export const deleteImage = async ({ imageId }) => {
  try {
    await connectDB();

    await ImageModel.findByIdAndDelete(imageId);
  } catch (error) {
    handleError(error);
  } finally {
    redirect("/");
  }
};

const populateUser = (query) =>
  query.populate({
    path: "author",
    model: UserModel,
    select: "_id firstName lastName",
  });

// get image by id
export const getImageById = async ({ imageId }) => {
  try {
    await connectDB();

    const image = await populateUser(ImageModel.findById(imageId));
    revalidatePath(path);

    if (!image) throw new Error("Image not found!");

    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
};

// Get images
export const getallImages = async ({
  limit = 9,
  page = 1,
  searchQuery = "",
}) => {
  try {
    await connectDB();

    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });

    let expression = "folder=imaginify";

    if (searchQuery) {
      expression += ` AND ${searchQuery}`;
    }

    const { resources } = await cloudinary.search
      .expression(expression)
      .execute();

    const resourceIds = resources;
  } catch (error) {
    handleError(error);
  }
};
