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

//let, const e var
// LET
let x = 10;
x = 20;

// CONST
const y = 30;

// VAR
var z = 50;
z = 60;

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

// Atribuindo valores aos elementos HTML
document.getElementById("numeros").textContent = `Números: ${numberVar}, ${PI}`;
document.getElementById("strings").textContent = `Strings: ${stringVar}, ${myName}`;
document.getElementById("logicos").textContent = `Lógicos: ${boolVar}, ${isTrue}`;
document.getElementById("objetos").textContent = `Objetos: ${JSON.stringify(objVar)}, ${JSON.stringify(person)}`;
document.getElementById("null-undefined").textContent = `Null e Undefined: ${nullVar}, ${undefinedVar}`;
document.getElementById("variaveis").textContent = `LET x: ${x}, CONST y: ${y} e VAR z: ${z}`;
document.getElementById("operadores-aritmeticos").textContent = `Operadores Aritméticos 10 e 5 - SOMA: ${resultAdd}, SUB: ${resultSub}, MULT: ${resultMul}, DEVISAO: ${resultDiv}, 10 e 3 - MOD: ${resultMod}`;
document.getElementById("operadores-logicos").textContent = `Operadores Lógicos entre 1 e 0: AND: ${resultAnd}, OR: ${resultOr}, 1 - NOT: ${resultNot}`;
document.getElementById("operadores-igualdade").textContent = `Operadores de Igualdade 10 e \"10\": Igualdade ampla: ${looseEquality}, Igualdade estrita: ${strictEquality}`;
