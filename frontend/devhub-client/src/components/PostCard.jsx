import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={`/post/${post._id}`}>Read more</Link>
    </div>
  );
}

export default PostCard;