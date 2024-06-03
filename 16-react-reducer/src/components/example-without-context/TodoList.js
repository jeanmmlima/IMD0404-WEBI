import React from 'react';

const TodoList = ({ todos, toggleTodo, removeTodo, selectTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          onClick={() => selectTodo(todo.id)}
        >
          {todo.text}
          <button onClick={(e) => {
            e.stopPropagation();
            toggleTodo(todo.id);
          }}>
            {todo.completed ? 'Desmarcar' : 'Concluir'}
          </button>
          <button onClick={(e) => {
            e.stopPropagation();
            removeTodo(todo.id);
          }}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
