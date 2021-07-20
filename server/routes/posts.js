const express = require("express");
const router = express.Router();

const getPosts = require("../controllers/posts/getPosts");
const createPost = require("../controllers/posts/createPost");
const updatePost = require("../controllers/posts/updatePost");
const deletePost = require("../controllers/posts/deletePost");
const updateLikes = require("../controllers/posts/updateLikes");

const auth = require("../middleware/auth");

// Setting Routes for /posts
router.get("/", getPosts);
router.post("/create", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/likepost/:id", auth, updateLikes);

module.exports = router;
