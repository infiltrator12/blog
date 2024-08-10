import React, { useEffect, useState } from 'react';
import PostEditor from '../components/PostEditor';
import { useParams } from 'react-router-dom';

const EditPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the post data based on postId (mock implementation)
    const fetchPost = async () => {
      // Replace this with actual API call
      const postData = {
        title: 'Sample Post Title',
        content: '<p>This is the sample post content.</p>',
        categories: ['Tech', 'Programming'],
        tags: ['React', 'JavaScript']
      };
      setPost(postData);
    };

    fetchPost();
  }, [postId]);

  const handleSavePost = (updatedPost) => {
    console.log('Updated Post:', updatedPost);
    // Implement save logic here (e.g., API call to save updated post)
  };

  return (
    <div>
      {post ? (
        <PostEditor
          initialData={post}
          onSave={handleSavePost}
        />
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default EditPostPage;
