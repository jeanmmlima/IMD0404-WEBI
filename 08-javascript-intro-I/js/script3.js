// Estruturas de Decisão e Repetição

// Estrutura de decisão if-else
let idade = 20;
let outputIf = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(outputIf);

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
