const contadorElemento = document.getElementById("contador");
const incrementarBotao = document.getElementById("incrementar");
const resetarBotao = document.getElementById("resetar");
const decrementarBotao = document.getElementById("decrementar");

let contador = 0;

function incrementarContador() {
  contador++;
  contadorElemento.textContent = contador;
}

function resetarContador() {
  contador = 0;
  contadorElemento.textContent = contador;
}

function decrementarContador() {
  contador--;
  contadorElemento.textContent = contador;
}

incrementarBotao.addEventListener("click", incrementarContador);
resetarBotao.addEventListener("click", resetarContador);
decrementarBotao.addEventListener("click", decrementarContador);
