

// Funções auxiliares
const addTodo = (state, text) => {
    return {
      ...state,
      todos: [
        ...state.todos,
        { id: Date.now(), text, completed: false }
      ]
    };
  };
  
  const removeTodo = (state, id) => {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    };
  };
  
  const toggleTodo = (state, id) => {
    return {
      ...state,
      todos: state.todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    };
  };
  
  const selectTodo = (state, id) => {
    return {
      ...state,
      selectedTodo: state.todos.find(todo => todo.id === id)
    };
  };
  
  // Reducer
  const TodoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return addTodo(state, action.payload);
      case 'REMOVE_TODO':
        return removeTodo(state, action.payload);
      case 'TOGGLE_TODO':
        return toggleTodo(state, action.payload);
      case 'SELECT_TODO':
        return selectTodo(state, action.payload);
      default:
        return state;
    }
  };

  export default TodoReducer;