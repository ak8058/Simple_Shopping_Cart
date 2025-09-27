import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", productRoutes);

// Start Server
const PORT = 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
