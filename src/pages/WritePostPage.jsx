import React from 'react';
import PostEditor from '../components/PostEditor.jsx';

const WritePostPage = () => {

  const handleSavePost = (newPost) => {
    console.log('New Post:', newPost);
    // Implement save logic here (e.g., API call to save new post)
  };

  return (
    <div>
      <PostEditor onSave={handleSavePost} />
      < br/>
    </div>
  );
};

export default WritePostPage;
