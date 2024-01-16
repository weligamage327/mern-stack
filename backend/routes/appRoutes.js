const express = require("express");
const router = express.Router();
const { getAllUsers, addUser } = require("../controllers/routeController");
const multer = require("multer");

// Multer middleware setup
const upload = multer({
  storage: multer.memoryStorage(), // Store file data in memory
});

// GET /api/users - Retrieve all users
router.get("/", getAllUsers);

// POST /api/users/add - Add a new user
router.post("/add", upload.single("profileImage"), addUser);

module.exports = router;
