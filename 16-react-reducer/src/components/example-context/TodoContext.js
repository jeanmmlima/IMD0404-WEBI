import React, { createContext, useReducer } from 'react';
import TodoReducer from './TodoReducer';

// Criação do contexto
const TodoContext = createContext();

// Estado inicial
const initialState = {
  todos: [],
  selectedTodo: null
};

// Provider
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
