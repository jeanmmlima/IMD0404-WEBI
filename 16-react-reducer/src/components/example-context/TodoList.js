import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleSelectTodo = (id) => {
    dispatch({ type: 'SELECT_TODO', payload: id });
  };

  return (
    <ul>
      {state.todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          onClick={() => handleSelectTodo(todo.id)}
        >
          {todo.text}
          <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
            {todo.completed ? 'Desmarcar' : 'Concluir'
            }</button>
          <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;