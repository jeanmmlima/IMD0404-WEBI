import React, { useState, useEffect } from "react";
import "./Posts.css";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
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

  function handleClickViewPostDetail(event){
    const postId = event.target.parentElement.id;
    //navegando para a pagina de detalhe passando o Id do post
    navigate('/posts/postdetail',{state: {postId: postId} });
    
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      ></link>
      <h1>Posts List</h1>
      <ul class="posts-list">
        {posts.map((post) => (
          <li class="post-item" key={post.id} id={post.id}>
            <span class="post-title">{post.title}</span>
            <button class="view-button" onClick={handleClickViewPostDetail}>
              <i class="fas fa-eye"></i> View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
