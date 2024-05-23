import React, { useReducer, useState } from 'react';

// Estado inicial da lista de tarefas
const initialState = [];

// Definição do reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};


// Componente principal
const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar tarefa..."
      />
      <button onClick={handleAddTodo}>Adicionar</button>
      <ul>
        {state.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.completed ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
