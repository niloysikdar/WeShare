const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const updateLikes = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({
        message: "Invalid Id",
      });
    } else {
      try {
        const post = await PostMessage.findById(_id);
        const updatedPost = await PostMessage.findByIdAndUpdate(
          _id,
          { likeCount: post.likeCount + 1 },
          { new: true }
        );
        res.status(201).json(updatedPost);
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

module.exports = updateLikes;
