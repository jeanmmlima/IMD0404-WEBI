const baseUrl = "https://SEU-PROJETO.firebaseio.com/";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const taskText = input.value.trim();

  if (taskText === "") return;

  //TODO: implementar o médodo POST para salvar tarefa


  input.value = "";
  fetchTasks();
});

async function fetchTasks() {
  list.innerHTML = ""; 
   
  //TODO: implementar metodo GET


  //TODO:inserir tarefa na lista

}

fetchTasks();