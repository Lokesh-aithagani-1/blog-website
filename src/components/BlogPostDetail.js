import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPostDetail = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    
    const postId = match.params.id;
    axios.get(`/api/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [match.params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      
    </div>
  );
}

export default BlogPostDetail;
