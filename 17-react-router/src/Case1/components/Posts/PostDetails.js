import React, { useState, useEffect } from 'react';
import './Posts.css';

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Dependência vazia para executar o efeito apenas uma vez após a montagem do componente

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <h1>Posts Detail</h1>
          <div class="post-item">
            
            <span class="post-title">{post.id}</span>
            <span class="post-title">{post.title}</span>
            <span class="post-title">{post.body}</span>
          </div>
    </div>
  );
};

export default PostDetails;
