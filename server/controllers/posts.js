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

module.exports = {
  getPosts: getPosts,
  createPost: createPost,
};
