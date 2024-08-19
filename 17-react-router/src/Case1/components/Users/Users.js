import React, { useState, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
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

  function handleClickViewUserDetail(event){
    const userId = event.target.parentElement.id;
    //navegando para a pagina de detalhe passando o Id do post na rota
    navigate(`/users/${userId}`);
    
  }

  return (
    <div>
      <h1>User List</h1>
      <ul class="posts-list">
        {users.map((user) => (
          <li class="post-item" key={user.id} id={user.id}>
            <span class="post-title">{user.name}</span>
            <span class="post-title">{user.email}</span>
            <button class="view-button" onClick={handleClickViewUserDetail}>
              <i class="fas fa-eye"></i> View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
