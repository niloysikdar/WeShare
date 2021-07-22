const PostMessage = require("../../models/postMessage");

const createPost = async (req, res) => {
  const body = req.body;
  const post = {
    ...body,
    authorId: req.userId,
    createdAt: new Date().toISOString(),
  };
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

module.exports = createPost;
