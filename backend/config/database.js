const express = require("express");
const mongoose = require("mongoose");
const registrationRoute = require("../routes/auth");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/travelAppDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.use(express.json());

// Use registration route
app.use("/auth", registrationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
