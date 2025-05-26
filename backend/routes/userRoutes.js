const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUsers, getUserById, updateUserByAdmin, deleteUser } = require("../controllers/userController");

const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers); // Get all users (Admin only)
router.get("/:id", protect, getUserById); // Get a specific user
router.put("/:id", protect, adminOnly, updateUserByAdmin); // Update user (Admin only)
router.delete("/:id", protect, adminOnly, deleteUser); // Delete user (Admin only)

module.exports = router;
