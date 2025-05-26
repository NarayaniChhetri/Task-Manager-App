const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const User = require("../models/User");
const Task = require("../models/Task");

const uploadsDir = path.join(__dirname, "../uploads");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {})
  .then(async () => {
    console.log("Connected to MongoDB");

    // Delete all users and tasks
    await User.deleteMany({});
    await Task.deleteMany({});
    console.log("All users and tasks deleted.");

    // Delete all uploaded profile pics except default-profile.png
    fs.readdirSync(uploadsDir).forEach(file => {
      if (file !== "default-profile.png") {
        fs.unlinkSync(path.join(uploadsDir, file));
      }
    });
    console.log("Uploaded profile pics deleted (except default-profile.png).");

    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error:", err);
    process.exit(1);
  });