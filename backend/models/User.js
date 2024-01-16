const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    address: String,
    profileImage: String,
  }
  // ,
  // { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
