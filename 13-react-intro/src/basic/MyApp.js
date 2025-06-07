import Saudacao from "./Greeting";

function MyButton() {
  function handleClick() {
    alert("Você clicou no botão!");
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}

function MyGreeting(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao meu aplicativo</h1>
      <MyGreeting nome="Jean" />
      <MyButton />
    </div>
  );
}
