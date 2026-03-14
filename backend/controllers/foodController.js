import foodModel from "../models/foodModel.js";
import fs from "fs";

// ADD FOOD
const addFood = async (req, res) => {
  const image_url = req.file.path;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_url,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Item Added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error in adding food item" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error in fetching food items" });
  }
};

const removeFood = async (req, res) => {
  try {
    const foodId = req.body.id;

    if (!foodId) {
      return res.status(400).json({
        success: false,
        message: "Food ID is required",
      });
    }

    const food = await foodModel.findById(foodId);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    await foodModel.findByIdAndDelete(foodId);

    res.json({
      success: true,
      message: "Food item removed successfully",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error removing food item",
    });
  }
};

export { addFood, listFood, removeFood };