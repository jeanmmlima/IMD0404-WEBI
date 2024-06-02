import React from 'react';
import TodoDetail from './TodoDetail';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm />
      <TodoList />
      <TodoDetail />
    </div>
  );
};

export default TodoApp;
