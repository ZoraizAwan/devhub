const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body, user: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};