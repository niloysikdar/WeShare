const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Configuring and getting variables from .env
const dotenv = require("dotenv");
dotenv.config();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// Express server settings
const app = express();
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb" }));
app.use(cors());

// Adding "/posts" Routes
const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

// Connecting to MongoDB
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
