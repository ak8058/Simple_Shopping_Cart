import express from "express";
import { getAllProducts, checkOut } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/checkout", checkOut);

export default router;
