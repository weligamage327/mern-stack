const mongoose = require("mongoose");

const UserAuthSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields as needed for registration
});

const UserAuthModel = mongoose.model("User", UserAuthSchema);

module.exports = UserAuthModel;
