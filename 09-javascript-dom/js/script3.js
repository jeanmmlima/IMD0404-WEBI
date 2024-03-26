// Selecionando e manipulando elementos pelo ID
var elementoId = document.getElementById("teste-id");
if (elementoId) {
    elementoId.innerHTML = "Manipulado por JavaScript";
    elementoId.style.color = "blue";
}

// Selecionando e manipulando elementos por classe
var elementosClasse = document.getElementsByClassName("teste-classe");
for (var i = 0; i < elementosClasse.length; i++) {
    elementosClasse[i].innerHTML = "Manipulado por JavaScript";
    elementosClasse[i].style.fontWeight = "bold";
}

// Selecionando e manipulando elementos por tag
var elementosTag = document.getElementsByTagName("section");
for (var i = 0; i < elementosTag.length; i++) {
    elementosTag[i].innerHTML = "Manipulado por JavaScript";
    elementosTag[i].style.fontStyle = "italic";
}

// Usando querySelector para selecionar e manipular um elemento
var elementoQuery = document.querySelector("#teste-query");
if (elementoQuery) {
    elementoQuery.innerHTML = "Manipulado por JavaScript";
    elementoQuery.style.fontSize = "20px";
}

// Usando querySelectorAll para selecionar e manipular elementos
var elementosQueryAll = document.querySelectorAll(".teste-query-all");
for (var i = 0; i < elementosQueryAll.length; i++) {
    elementosQueryAll[i].innerHTML = "Manipulado por JavaScript";
    elementosQueryAll[i].style.backgroundColor = "yellow";
}