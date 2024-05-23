import React, { useReducer } from 'react';

const initialState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };

const Counter = () => {
  /**
   * useReducer: Usamos o useReducer para criar o estado e o dispatch. 
   * O estado (state) é um objeto com a propriedade count, 
   * e o dispatch é a função que usamos para enviar ações para o reducer.
   */  
  const [state, dispatch] = useReducer(counterReducer, initialState);

  /**
   * dispatch é a função que usamos para enviar ações para o reducer.
   */
  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Resetar</button>
    </div>
  );
};

export default Counter;
