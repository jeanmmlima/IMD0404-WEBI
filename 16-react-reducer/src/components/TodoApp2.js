import React, { useReducer, useState } from 'react';

// Estado inicial da lista de tarefas
const initialState = [];

// Definição do reducer
const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return addTodo(state, action.payload);
      case 'REMOVE_TODO':
        return removeTodo(state, action.payload);
      case 'TOGGLE_TODO':
        return toggleTodo(state, action.payload);
      default:
        return state;
    }
  };

  const addTodo = (state, text) => {
    return [
      ...state,
      { id: Date.now(), text, completed: false }
    ];
  };
  
  const removeTodo = (state, id) => {
    return state.filter(todo => todo.id !== id);
  };
  
  const toggleTodo = (state, id) => {
    return state.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  };
  


// Componente principal
const TodoApp2 = () => {
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

export default TodoApp2;
