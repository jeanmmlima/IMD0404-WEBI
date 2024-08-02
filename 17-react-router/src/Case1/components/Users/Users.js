import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <h1>User List</h1>
      <ul class="posts-list">
        {users.map((user) => (
          <li class="post-item" key={user.id}>
            <span class="post-title">{user.name}</span>
            <span class="post-title">{user.email}</span>
            <button class="view-button">
              <i class="fas fa-eye"></i> View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
