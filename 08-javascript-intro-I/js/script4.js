// Estruturas de Decisão e Repetição

// Estrutura de decisão if-else
let idade = 20;
document.getElementById("idade").innerHTML = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";

let outputIf = '';
if(idade >= 18){
    outputIf = "Maior de Idade";
} else {
    outputIf = "Menor de Idade";
}
document.getElementById("idade2").innerHTML = `${outputIf}.<br>`;

// Estrutura de repetição while
let contadorWhile = 0;
let outputWhile = '';
while (contadorWhile < 5) {
    outputWhile += `Contagem While: ${contadorWhile}<br>`;
    contadorWhile++;
}
document.getElementById("contadorWhile").innerHTML = `<strong>While:</strong><br>${outputWhile}`;

// Estrutura de repetição do-while
let contadorDoWhile = 0;
let outputDoWhile = '';
do {
    outputDoWhile += `Contagem Do-While: ${contadorDoWhile}<br>`;
    contadorDoWhile++;
} while (contadorDoWhile < 5);
document.getElementById("contadorDoWhile").innerHTML = `<strong>Do-While:</strong><br>${outputDoWhile}`;

// Estrutura de repetição for
let outputFor = '';
for (let contadorFor = 0; contadorFor < 5; contadorFor++) {
    outputFor += `Contagem For: ${contadorFor}<br>`;
}
document.getElementById("contadorFor").innerHTML = `<strong>For:</strong><br>${outputFor}`;
