import React from 'react';

const TodoDetail = ({ selectedTodo }) => {
  if (!selectedTodo) {
    return <p>Nenhuma tarefa selecionada</p>;
  }

  return (
    <div>
      <h2>Detalhes da Tarefa</h2>
      <p>ID: {selectedTodo.id}</p>
      <p>Texto: {selectedTodo.text}</p>
      <p>Completada: {selectedTodo.completed ? 'Sim' : 'Não'}</p>
    </div>
  );
};

export default TodoDetail;
