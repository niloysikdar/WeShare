const express = require("express");
const router = express.Router();

const getPosts = require("../controllers/getPosts");
const createPost = require("../controllers/createPost");
const updatePost = require("../controllers/updatePost");
const deletePost = require("../controllers/deletePost");
const updateLikes = require("../controllers/updateLikes");

// Setting Routes for /posts
router.get("/", getPosts);
router.post("/create", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/likepost/:id", updateLikes);

module.exports = router;
