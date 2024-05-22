import React, { useState, useEffect } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Contador atualizado para: ${count}`);
  }, [count]); // Efeito será executado sempre que 'count' mudar

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Example2;