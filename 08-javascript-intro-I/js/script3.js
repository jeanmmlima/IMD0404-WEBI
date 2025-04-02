// Estruturas de Decisão e Repetição

// Estrutura de decisão if-else
let idade = 20;
const peso = prompt('Qual é o seu peso?');

console.log("O peso é: ", peso);

let outputIf = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(outputIf);

if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 12) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}


outputIf = '';
if (idade >= 18) {
    outputIf = "Maior de Idade";
} else {
    outputIf = "Menor de Idade";
}
console.log(outputIf);

// Estrutura de repetição while
let contadorWhile = 0;
let outputWhile = '';
while (contadorWhile < 5) {
    outputWhile += `Contagem While: ${contadorWhile}\n`;
    contadorWhile++;
}
console.log("While:\n" + outputWhile);

// Estrutura de repetição do-while
let contadorDoWhile = 0;
let outputDoWhile = '';
do {
    outputDoWhile += `Contagem Do-While: ${contadorDoWhile}\n`;
    contadorDoWhile++;
} while (contadorDoWhile < 5);
console.log("Do-While:\n" + outputDoWhile);

// Estrutura de repetição for
let outputFor = '';
for (let contadorFor = 0; contadorFor < 5; contadorFor++) {
    outputFor += `Contagem For: ${contadorFor}\n`;
}
console.log("For:\n" + outputFor);

let dia = 3;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  default:
    console.log("Dia inválido");
}

