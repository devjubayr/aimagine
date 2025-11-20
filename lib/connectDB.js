import { DB_NAME } from "@/constants";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const cache = {};

export const connectDB = async () => {
  if (cache.connection) {
    return cache.connection;
  }

  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB URI");
  }

  try {
    cache.promise =
      cache.promise || mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);

    cache.connection = await cache.promise;

    console.log(`DB connection successful!!}`);

    return cache.connection;
  } catch (error) {
    console.log(`DB connection failed!! ERROR: ${error}`);
    process.exit(1);
  }
};
