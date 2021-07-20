const express = require("express");
const router = express.Router();

const getPosts = require("../controllers/posts/getPosts");
const createPost = require("../controllers/posts/createPost");
const updatePost = require("../controllers/posts/updatePost");
const deletePost = require("../controllers/posts/deletePost");
const updateLikes = require("../controllers/posts/updateLikes");

// Setting Routes for /posts
router.get("/", getPosts);
router.post("/create", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/likepost/:id", updateLikes);

module.exports = router;
