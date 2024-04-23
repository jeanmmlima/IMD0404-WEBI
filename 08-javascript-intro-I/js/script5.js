/* 
Iterando Arrays em Javascript
*/

//### 1. forEach
/**
 * Esse é um método em que se executa uma função a cada 
 * iteração de um array. Portanto o método forEach() recebe como argumento uma função, 
 * também chamada de função de callback, com dois parâmetros: o valor e o índice do elemento.
 */

const array = ['João', 'Maria', 'Daniel', 'Alice'];

array.forEach((elemento, indice) => { array[indice] = elemento.toUpperCase(); });

console.log(array);  // [ 'JOÃO', 'MARIA', 'DANIEL', 'ALICE' ]

//### 2. Métodos Every e Some
/**
 * O método every() retorna true ou false, baseado na condição estabelecida e em 
 * todos os elementos do array em questão. É uma maneira interessante de 
 * rapidamente checar se todos os elementos dentro de um array satisfazem um 
 * determinado critério. 
 */

let numeros = [12, 19, 7, 33, 91, 77, 3, 11];

let todosMaioresQueTrinta = numeros.every(n => {return n > 30});
console.log('Todos os números são maiores que 30? ' + todosMaioresQueTrinta); // false

/**
 * Já o método some() também retorna true ou false, porém para retornar true 
 * é suficiente que ao menos um dos elementos do array satisfaça o 
 * critério estabelecido pela função passada como argumento. 
 */

let algumMaiorQueTrinta = numeros.some(n => {return n > 30});
console.log('Tem algum número maior que 30? ' + algumMaiorQueTrinta); // true

//### 3. filter, map e reduce !!!!!!!

/** filter
 * O filter() é um método que permite a criação de um novo array baseado nos 
 * elementos de um array preexistente que satisfizerem o critério estabelecido
 *  na função passada como argumento da função filter().
 */

const palavras = ['universidade', 'web', 'javascript', 'disciplina', 'aluno', 'nota'];
const resultado = palavras.filter(palavra => palavra.length > 6);
console.log(resultado); // [ 'universidade', 'javascript', 'disciplina' ]

/** map
 * O método map() cria uma nova array composta dos resultados da execução da 
 * função passada como argumento em cada um dos elementos do array original. 
 */

const array2 = [1, 4, 9, 16];
const resultado2 = array2.map(x => x * 2);
console.log(resultado2); // [ 2, 8, 18, 32 ]

/** reducer
 * Por fim, o método reduce() executa uma função reducer (provida por você) para 
 * cada membro do array, resultando num único valor de retorno.Para simplificar,
 *  uma função reducer é uma função agregadora. Pode ser para fazer uma soma, 
 * encontrar o maior ou menor valor numa lista, entre muitas outras possibilidades. 
 * O reducer sempre percorrerá toda a lista e retornará apenas um resultado.
 */

const array3 = [1, 4, 9, 16];
const resultado3 = array3.reduce( (acumulado, valor) => acumulado + valor );
console.log(resultado3); // 30

/**
 * EXEMPLO FINAL
 * Queremos filtrar somente os preços acima de R$15,00, 
 * aplicar um desconto de 10% em cada um dos itens do array precos e 
 * retornar o maior preço dos elementos reajustados.
 */

const precos = [7.50, 32.00, 12.50, 27.50, 16.50, 9.90];

const maiorPrecoReajustado = precos
                            .filter((produto) => { return produto > 15.00 })
                            .map((produto) => { return produto - 0.1*produto })
                            .reduce((a, b) => { return Math.max(a, b) } );                            

console.log(maiorPrecoReajustado); // 28.8