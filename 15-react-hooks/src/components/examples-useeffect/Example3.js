import React, { useEffect } from 'react';

const Example3 = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll detectado');
    };

    window.addEventListener('scroll', handleScroll);

    // Função de limpeza
    /* return () => {
      window.removeEventListener('scroll', handleScroll);
    }; */
  }, []); // A lista de dependências está vazia, então o efeito é executado apenas uma vez

  return <div>Scroll the window to see the effect</div>;
};

export default Example3;