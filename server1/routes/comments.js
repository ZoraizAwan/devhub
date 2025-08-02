const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { verifyToken } = require('../middleware/auth');

// POST a new comment on a post (authenticated users only)
router.post('/:postId', verifyToken, commentController.createComment);

// GET all comments for a specific post (public)
router.get('/:postId', commentController.getCommentsByPost);

// DELETE a comment (only comment author or admin)
router.delete('/:commentId', verifyToken, commentController.deleteComment);

module.exports = router;
