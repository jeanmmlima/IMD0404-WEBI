import React, { useEffect } from 'react';

const Example1 = () => {
  useEffect(() => {
    console.log('Componente montado');
    
  }, []); 
  /**
   * Se a lista de dependências estiver vazia ([]), 
   * o efeito é executado apenas uma vez, após a montagem do componente.
   */

  return <div>Example</div>;
};

export default Example1;
