import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

import foodRoute from "./routes/foodRoute.js";
import userRoute from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2500;

// middleware
app.use(cors());
app.use(express.json());

// db
connectDB();

// routes
app.use("/api/food", foodRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRouter);

// test route
app.get("/", (req, res) => {
  res.send("FoodHub Backend Running");
});

// ⚡ server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});