import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
/**
 * function connect to database
 */
export async function dbConnection(): Promise<void> {
  try {
    const dbUrl = process.env.DB_URL as string;
    await mongoose.connect(dbUrl);
    console.log("DB Connect .... ");
  } catch (error) {
    console.log(error ?? "Connect to DB faild ...");
  }
}
