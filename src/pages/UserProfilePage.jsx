// src/pages/UserProfilePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard.jsx';

const UserProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  const fetchUserData = async () => {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    setUser(data);
  };

  const fetchUserPosts = async () => {
    const response = await fetch(`/api/users/${userId}/posts`);
    const data = await response.json();
    setPosts(data);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-page">
      <div className="user-info">
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
      </div>
      <div className="user-posts">
        <h2>{user.name}'s Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
