import React, { useState, useEffect } from 'react';
import './Users.css';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const userId = params.userId;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
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
      <h1>Users Detail</h1>
          <div class="post-item">
            
            <span class="post-title">{user.id}</span>
            <span class="post-title">{user.name}</span>
            <span class="post-title">{user.email}</span>
            <div class="post-item"> 
                <span class="post-title">{user.address.street}</span>
                <span class="post-title">{user.address.city}</span>
                <span class="post-title">{user.address.zip}</span>
            </div>
          </div>
    </div>
  );
};

export default UserDetails;
