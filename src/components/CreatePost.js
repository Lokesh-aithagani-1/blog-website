
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/posts', {
        title,
        body,
      });

      console.log('Post created:', response.data);
      
    } catch (error) {
      console.error('Create post error:', error.message);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Body:</label>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
