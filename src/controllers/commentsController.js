
const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const newComment = new Comment({ comment, postId: req.params.postId });
    const savedComment = await newComment.save();

    res.json(savedComment);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
