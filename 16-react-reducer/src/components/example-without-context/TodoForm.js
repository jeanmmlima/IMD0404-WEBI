import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    addTodo(text);
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
