const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  author: String,
  tags: [String],
  image: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
