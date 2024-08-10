import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TagPage = () => {
  const { tag } = useParams(); // Get the tag from the URL
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts by tag
    const fetchPostsByTag = async () => {
      try {
        const response = await fetch(`/api/posts?tag=${tag}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPostsByTag();
  }, [tag]);

  return (
    <div className="tag-page">
      <h1>Posts tagged with "{tag}"</h1>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/posts/${post.id}`}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagPage;
