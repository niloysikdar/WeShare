const express = require("express");
const router = express.Router();

const PostController = require("../controllers/posts");

// Setting Routes for /posts
router.get("/", PostController.getPosts);
router.post("/create", PostController.createPost);

module.exports = router;
