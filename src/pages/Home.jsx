// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts data from an API
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Replace with your API endpoint
    const response = await fetch('/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className='home'>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
