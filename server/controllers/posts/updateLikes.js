const mongoose = require("mongoose");
const PostMessage = require("../../models/postMessage");

const updateLikes = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!req.userId)
      return res.status(404).json({ message: "Unauthenticated" });
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({
        message: "Invalid Id",
      });
    } else {
      try {
        const post = await PostMessage.findById(_id);

        const index = post.likes.findIndex((id) => id === String(req.userId));
        if (index === -1) {
          post.likes.push(req.userId);
        } else {
          post.likes = post.likes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
          new: true,
        });

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
