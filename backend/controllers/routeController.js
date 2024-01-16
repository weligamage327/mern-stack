const User = require("../models/User");

// Controller function to retrieve all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to add a new user
exports.addUser = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    // `req.file.buffer` contains the image file data
    const profileImage = req.file.buffer.toString("base64");
    // Save `base64Image` to the database or perform other operations

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Address:", address);
    // console.log("Profile Image:", profileImage);

    const newUser = await User.create({
      name,
      email,
      address,
      profileImage,
    });

    res.status(200).json(newUser);
  } catch (error) {
    console.error("Error adding user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
