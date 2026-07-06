import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});