// src/components/CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') {
      return; // Prevent adding empty comments
    }
    onAddComment(newComment);
    setNewComment('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write a comment..."
        value={newComment}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
