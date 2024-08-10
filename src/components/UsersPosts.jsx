// src/components/UserPosts.js
import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user's posts from an API
    fetchUserPosts(userId);
  }, [userId]);

  const fetchUserPosts = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  return (
    <div className="user-posts">
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default UserPosts;
