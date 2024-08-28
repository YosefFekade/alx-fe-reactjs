import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); 

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      {/* logic to fetch and display the blog post data based on the ID */}
    </div>
  );
};

export default BlogPost;