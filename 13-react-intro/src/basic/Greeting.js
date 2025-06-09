// Componente Filho
function MyGreeting(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

// Componente Pai
function Greetings() {
  return (
    <div>
      <MyGreeting nome="Maria" />
      <MyGreeting nome="José" />
    </div>
  );
}

export default Greetings;
