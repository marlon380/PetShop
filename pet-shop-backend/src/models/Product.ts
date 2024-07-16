import mongoose, { Schema } from "mongoose";
import { TProduct } from "../types/product";

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model<TProduct>("Produtos", ProductSchema);

export default Product;
