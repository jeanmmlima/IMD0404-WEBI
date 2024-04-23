// Números
let numberVar = 10;
const PI = 3.14;

// Strings
let stringVar = "Hello";
const myName = 'John';

// Lógicos
let boolVar = true;
const isTrue = false;

// Objetos
let objVar = { name: 'John', age: 30 };
const person = { name: 'Alice', age: 25 };

// Null e undefined
let nullVar = null;
let undefinedVar;

// Operadores aritméticos
let resultAdd = 10 + 5; // Adição
let resultSub = 10 - 5; // Subtração
let resultMul = 10 * 5; // Multiplicação
let resultDiv = 10 / 5; // Divisão
let resultMod = 10 % 3; // Módulo

// Operadores lógicos
let resultAnd = true && false; // AND lógico
let resultOr = true || false; // OR lógico
let resultNot = !true; // NOT lógico

// Operadores de igualdade (ampla e estrita)
let num1 = 10;
let num2 = "10";

let looseEquality = num1 == num2; // Igualdade ampla
let strictEquality = num1 === num2; // Igualdade estrita

// Criando elementos HTML para exibir as respostas
const outputDiv = document.getElementById("output");

// Números
const numbersDiv = document.createElement("div");
numbersDiv.innerHTML = `<p>Números: ${numberVar}, ${PI}</p>`;
outputDiv.appendChild(numbersDiv);

// Strings
const stringsDiv = document.createElement("div");
stringsDiv.innerHTML = `<p>Strings: ${stringVar}, ${myName}</p>`;
outputDiv.appendChild(stringsDiv);

// Lógicos
const booleansDiv = document.createElement("div");
booleansDiv.innerHTML = `<p>Lógicos: ${boolVar}, ${isTrue}</p>`;
outputDiv.appendChild(booleansDiv);

// Objetos
const objectsDiv = document.createElement("div");
objectsDiv.innerHTML = `<p>Objetos: ${JSON.stringify(objVar)}, ${JSON.stringify(person)}</p>`;
outputDiv.appendChild(objectsDiv);

// Null e Undefined
const nullUndefinedDiv = document.createElement("div");
nullUndefinedDiv.innerHTML = `<p>Null e Undefined: ${nullVar}, ${undefinedVar}</p>`;
outputDiv.appendChild(nullUndefinedDiv);

// Operadores Aritméticos
const arithmeticDiv = document.createElement("div");
arithmeticDiv.innerHTML = `<p>Operadores Aritméticos: ${resultAdd}, ${resultSub}, ${resultMul}, ${resultDiv}, ${resultMod}</p>`;
outputDiv.appendChild(arithmeticDiv);

// Operadores Lógicos
const logicalDiv = document.createElement("div");
logicalDiv.innerHTML = `<p>Operadores Lógicos: ${resultAnd}, ${resultOr}, ${resultNot}</p>`;
outputDiv.appendChild(logicalDiv);

// Operadores de Igualdade
const equalityDiv = document.createElement("div");
equalityDiv.innerHTML = `<p>Operadores de Igualdade: Igualdade ampla: ${looseEquality}, Igualdade estrita: ${strictEquality}</p>`;
outputDiv.appendChild(equalityDiv);
