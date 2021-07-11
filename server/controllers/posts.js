const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({
        message: "Invalid Id",
      });
    } else {
      try {
        const updatedPost = await PostMessage.findByIdAndUpdate(
          _id,
          { ...post, _id },
          { new: true }
        );
        res.status(201).json(post);
      } catch (error) {
        res.status(409).json({
          message: error.message,
        });
      }
    }
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = {
  getPosts: getPosts,
  createPost: createPost,
  updatePost: updatePost,
};
