import express from "express";

import {
  healthCheck,
  getUsers,
  getUserById,
  createUser
} from "../controllers/userController.js";

const router = express.Router();

// Health
router.get("/health", healthCheck);

// Users
router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.post("/users", createUser);

export default router;