import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar tarefa..."
      />
      <button onClick={handleAddTodo}>Adicionar</button>
    </div>
  );
};

export default TodoForm;
