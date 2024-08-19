import React from 'react';

// Componente Filho
function MinhaSaudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

// Componente Pai
function SaudacaoApp() {
  return (
    <div>
      <MinhaSaudacao nome="Maria" />
      <MinhaSaudacao nome="João" />
    </div>
  );
}

export default SaudacaoApp;
