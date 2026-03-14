import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import pkg from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const { CloudinaryStorage } = pkg;

const foodRoute = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "foodhub",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

foodRoute.post("/add-food", upload.single("image"), addFood);
foodRoute.get("/list-food", listFood);
foodRoute.delete("/remove-food", removeFood);

export default foodRoute;