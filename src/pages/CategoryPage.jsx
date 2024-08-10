// src/pages/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';

const CategoryPage = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts data for a specific category from an API
    fetchPostsByCategory();
  }, [category]);

  const fetchPostsByCategory = async () => {
    // Replace with your API endpoint
    const response = await fetch(`/api/posts?category=${category}`);
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className='category-page'>
      <h1>Posts in {category}</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default CategoryPage;
