"use server";

import { connectDB } from "@/lib/connectDB";
import { ImageModel } from "@/models/image.model";
import { UserModel } from "@/models/user.model";
import { handleError } from "@/utils/handleError";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const populateUser = (query) =>
  query.populate({
    path: "author",
    model: UserModel,
    select: "_id firstName lastName clerkId",
  });

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

    const imageToUpdate = await ImageModel.findById(image._id);

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
    revalidatePath("/");
    redirect("/dashboard");
  } catch (error) {
    if (error && error.message === "NEXT_REDIRECT") {
      throw error;
    }

    handleError(error);
    throw new Error("Failed to delete image due to a database error.");
  }
};

// get image by id
export async function getImageById(imageId) {
  try {
    await connectDB();

    const image = await populateUser(ImageModel.findById(imageId));

    if (!image) throw new Error("Image not found");

    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}

// Get images
export async function getAllImages({ limit = 9, page = 1 }) {
  try {
    await connectDB();
    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });

    let expression = "folder=imaginify";

    const { resources } = await cloudinary.search
      .expression(expression)
      .execute();

    // const resourceIds = resources.map((resource) => resource.public_id);

    let query = {};

    const skipAmount = (Number(page) - 1) * limit;

    const images = await populateUser(ImageModel.find(query))
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);

    const totalImages = await ImageModel.find(query).countDocuments();
    const savedImages = await ImageModel.find().countDocuments();

    return {
      data: JSON.parse(JSON.stringify(images)),
      totalPage: Math.ceil(totalImages / limit),
      savedImages,
    };
  } catch (error) {
    handleError(error);
  }
}

// Get user images
export async function getUserImages({ limit = 9, page = 1, userId }) {
  try {
    await connectDB();

    const skipAmount = (Number(page) - 1) * limit;

    const images = await populateUser(ImageModel.find({ author: userId }))
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);

    const totalImages = await ImageModel.find({
      author: userId,
    }).countDocuments();

    return {
      data: JSON.parse(JSON.stringify(images)),
      totalPages: Math.ceil(totalImages / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
