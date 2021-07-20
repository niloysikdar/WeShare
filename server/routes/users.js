const express = require("express");
const router = express.Router();

const userController = require("../controllers/users/user");
const User = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
router.post("/login", userController.login);
router.post("/signup", userController.signup);

module.exports = router;
