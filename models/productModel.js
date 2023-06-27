import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name."],
    trim: 2,
  },
  description: {
    type: String,
    required: [true, "Please enter product description."],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price."],
    maxLength: [6, "Price cannot exceed 8 characters."],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter a product category."],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock."],
    maxLength: [4, "Stock cannot exceed 4 characters."],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = new mongoose.model("product", ProductSchema);

export default Product;
