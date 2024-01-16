require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/appRoutes"); // Import the user routes file

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the '/api/users' route defined in the users.js file
app.use("/api/users", routes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI_CONTAINER)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port.... ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
