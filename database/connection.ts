import mongoose from "mongoose";

export async function connect(): Promise<typeof mongoose> {
  const uri = process.env.URI as string | undefined;
  if (!uri) {
    throw new Error("MongoDB connection failed. URI required.");
  }
  try {
    const db = await mongoose.connect(uri);
    console.log("Succesfully connected to DB");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB - ", (error as Error).message);
    throw error;
  }
}
