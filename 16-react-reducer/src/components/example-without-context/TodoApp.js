import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const selectTodo = (id) => {
    setSelectedTodo(todos.find(todo => todo.id === id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} selectTodo={selectTodo} />
      <TodoDetail selectedTodo={selectedTodo} />
    </div>
  );
};

export default TodoApp;
