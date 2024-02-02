
import React, { useState } from 'react';
import axios from 'axios';

const Comment = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleAddComment = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/api/posts/${postId}/comments`, {
        comment,
      });

      console.log('Comment added:', response.data);
      
    } catch (error) {
      console.error('Add comment error:', error.message);
    }
  };

  return (
    <div>
      <label>Comment:</label>
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comment;
