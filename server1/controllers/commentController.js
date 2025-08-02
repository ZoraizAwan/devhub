const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const comment = new Comment({ ...req.body, user: req.user.id });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate('user', 'username');
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};