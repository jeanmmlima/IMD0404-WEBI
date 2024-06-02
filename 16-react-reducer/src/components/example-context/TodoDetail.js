import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoDetail = () => {
  const { state } = useContext(TodoContext);
  const { selectedTodo } = state;

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
