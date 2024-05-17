
// Arrays

var arrayHomogenea = ['segunda', 'terça', 'quarta'];
var arrayHeterogeneo = ['domingo', 3, true];

//Acessando elementos de arrays 

const cidades = ['Natal', 'Fortaleza', 'Recife'];

var minhaCidade = cidades[0];

console.log(minhaCidade)
console.log(cidades[2]);


let cursosTecnicos = ['web', 'eletrônica', 'redes'];
cursosTecnicos[1] = 'jogos';
console.log(cursosTecnicos)

// LENGTGH

const listaDeCompras = ['ovos', 'leite', 'manteiga'];
console.log(listaDeCompras.length);

/*
Os métodos push() e pop() são os métodos utilizados para realizar as tarefas 
mais simples de manipulação de arrays, para adicionar e remover elementos.
*/

//PUSH
const objetivos = ['estudar javascript', 'passar na disciplina'];
objetivos.push('trabalhar com TI', 'relaxar');
console.log(objetivos);

//POP
const objetivos2 = ['estudar javascript', 'passar na disciplina', 'trabalhar com TI'];
var itemRemovido = objetivos2.pop();
console.log(objetivos2); 
console.log(itemRemovido); 

//SHIFT - remove o primeiro elemento de um array. 

const objetivos3 = ['estudar javascript', 'passar na disciplina', 'trabalhar com TI', 'relaxar'];
var itemRemovido = objetivos3.shift();
console.log(objetivos3);

//UNSHIFT - Já o método unshift() permite adicionar itens ao início de um array. 

const objetivos4 = ['estudar javascript', 'passar na disciplina', 'trabalhar com TI', 'relaxar'];
objetivos4.unshift('a', 'b');
console.log(objetivos4)

/*
Além dos métodos para manipular arrays do fim e do início dela, 
temos métodos que permitem realizar ações a partir do meio de um array.

splice() e slice()
*/

//splice() - O método splice() nos permite adicionar ou remover elementos no meio, ou em qualquer posição do array. Esse método modifica o array original.

const mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3'];

mensagens.splice(1, 1);
console.log(mensagens); 

mensagens.splice(1, 0, 'Nova Mensagem');
console.log(mensagens); 

mensagens.splice(2, 1, 'Nova Mensagem 3');
console.log(mensagens); 

/* 
O método slice() retorna um array contendo a cópia de uma parte de um array original, 
selecionado de um índice inicial até um final (final não incluso). 
Uma observação importante é que o array original não é modificado.
*/ 

const letras = ['a', 'b', 'c', 'd', 'e', 'f'];
let resultado = letras.slice(1, 4);
console.log(resultado); // [ 'b', 'c', 'd' ]
console.log(letras); 

//concat()

const array1 = ['a', 'b'];
const array2 = ['c', 'd'];
const array3 = ['e', 'f'];

const resultado_concat = array1.concat(array2).concat(array3);

console.log(resultado_concat); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]