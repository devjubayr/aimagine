"use server";

import { connectDB } from "@/lib/connectDB";
import { UserModel } from "@/models/user.model";
import { handleError } from "@/utils/handleError";
import { User } from "lucide-react";
import { revalidatePath } from "next/cache";

export const createUser = async (user) => {
  try {
    await connectDB();
    const newUser = await UserModel.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (userId) => {
  try {
    await connectDB();

    const user = await UserModel.findOne({ clerkId: userid });

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (clerkId, updatedUserData) => {
  try {
    await connectDB();

    const updateUser = await UserModel.findOneAndUpdate(
      { clerkId },
      updatedUserData,
      { new: true }
    );

    if (!updateUser) throw new Error("User update failed!!");

    return JSON.parse(JSON.stringify(updateUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (clerkId) => {
  try {
    await connectDB();

    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) throw new Error("User not found");

    const deletedUser = await UserModel.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
};

export const updateCredits = async (userId, creditAmount) => {
  try {
    await connectDB();

    const updatedUserCredits = await UserModel.findByIdAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditAmount } },
      { new: true }
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
};
