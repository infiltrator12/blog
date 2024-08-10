// src/components/PostCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { id, title, snippet, author, date, featuredImage } = post;

  return (
    <div className="post-card">
      <Link to={`/post/${id}`}>
        <div className="post-card-image">
          <img src={featuredImage} alt={title} />
        </div>
      </Link>
      <div className="post-card-content">
        <h2 className="post-card-title">
          <Link to={`/post/${id}`}>{title}</Link>
        </h2>
        <p className="post-card-snippet">{snippet}</p>
        <div className="post-card-meta">
          <span className="post-card-author">By {author}</span>
          <span className="post-card-date">{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
