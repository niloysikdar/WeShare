const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({
        message: "Invalid Id",
      });
    } else {
      try {
        await PostMessage.findByIdAndRemove(_id);
        res.status(201).json({
          message: "Post Deleted Successfully",
        });
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

module.exports = deletePost;
