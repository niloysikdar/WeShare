const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  author: String,
  authorId: String,
  tags: [String],
  image: String,
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
