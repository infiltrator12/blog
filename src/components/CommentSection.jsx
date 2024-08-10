// src/components/CommentSection.js
import React, { useState } from 'react';
import CommentForm from './CommentForm';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const addComment = (content) => {
    const comment = {
      id: Date.now(),
      content,
      createdAt: new Date().toLocaleString(),
    };
    setComments([...comments, comment]);
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <CommentForm onAddComment={addComment} />
      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.content}</p>
              <p className="comment-date">{comment.createdAt}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
