// src/components/PostDetail.js
import React from 'react';
import CommentSection from './CommentSection.jsx';

const PostDetail = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="post-meta">
        <span>By {post.author}</span>
        <span> | </span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <CommentSection postId={post.id} />
    </div>
  );
};

export default PostDetail;
