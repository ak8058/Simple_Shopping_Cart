import products from "../models/productModel.js";

// 1. Get All Products
export const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    products,
  });
};

// 2. Checkout Product
export const checkOut = (req, res) => {
  const { cartItems } = req.body;
  res.status(200).json({
    success: true,
    message: "Order received successfully!",
  });
};
