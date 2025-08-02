import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import Post from '../models/Post.js';

const router = express.Router();

router.post('/', verifyToken, async (req, res) => {
  const post = new Post({ ...req.body, author: req.user.id });
  await post.save();
  res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
});

export default router;
