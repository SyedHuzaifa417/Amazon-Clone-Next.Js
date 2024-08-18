import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Number,
  id: Number,
});
export const Products =
  mongoose.models.products || mongoose.model("products", productModel);
