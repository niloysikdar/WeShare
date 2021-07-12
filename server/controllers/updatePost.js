const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

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

module.exports = updatePost;
