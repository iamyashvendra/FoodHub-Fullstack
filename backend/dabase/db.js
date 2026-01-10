import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yashvendra_db_user:29092006@cluster0.3m2lstp.mongodb.net/foodhub"
    );
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
  }
};