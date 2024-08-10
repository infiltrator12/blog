import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField, Chip, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import FileUpload from './FileUpload.jsx';

const PostEditor = ({ initialData = {}, onSave }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [categories, setCategories] = useState(initialData.categories || []);
  const [tags, setTags] = useState(initialData.tags || []);
  const [tagInput, setTagInput] = useState('');
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleCategoryChange = (event) => {
    setCategories(event.target.value.split(',').map(cat => cat.trim()));
  };

  const handleSavePost = () => {
    const postData = {
      title,
      content,
      categories,
      tags,
      image,
      pdf
    };
    onSave(postData);
  };

  return (
    <div className="post-editor">
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        theme="snow"
        placeholder="Write your post content here..."
        className="quill-editor"
      />
      <TextField
        label="Categories (comma separated)"
        value={categories.join(', ')}
        onChange={handleCategoryChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <div className="tags-section">
        <TextField
          label="Add Tag"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTag}
          startIcon={<Add />}
        >
          Add Tag
        </Button>
        <div className="tags-list">
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() => handleRemoveTag(tag)}
              color="primary"
              variant="outlined"
              className="tag-chip"
            />
          ))}
        </div>
      </div>
      <div className="file-upload-section">
        <FileUpload fileType="image" onFileSelect={(file) => setImage(file)} />
        {image && <p>Selected image: {image.name}</p>}
        <FileUpload fileType="pdf" onFileSelect={(file) => setPdf(file)} />
        {pdf && <p>Selected PDF: {pdf.name}</p>}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSavePost}
        className="save-button"
      >
        Save Post
      </Button>
    </div>
  );
};

export default PostEditor;
