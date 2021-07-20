const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, require: true },
  id: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
