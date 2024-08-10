import React, { useState } from 'react';
import { Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const FileUpload = ({ onFileSelect, fileType }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const acceptedFileTypes = fileType === 'image' ? 'image/*' : 'application/pdf';

  return (
    <div className="file-upload">
      <input
        accept={acceptedFileTypes}
        style={{ display: 'none' }}
        id={`contained-button-file-${fileType}`}
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor={`contained-button-file-${fileType}`}>
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={fileType === 'image' ? <ImageIcon /> : <PictureAsPdfIcon />}
        >
          Upload {fileType === 'image' ? 'Image' : 'PDF'}
        </Button>
      </label>
      {selectedFile && <p>Selected {fileType}: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;
