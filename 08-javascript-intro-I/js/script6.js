/**
 * Buscando em arrays com indexOf(), find() e findIndex()
 */

const mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3', 'Mensagem 2'];
var busca = mensagens.indexOf('Mensagem 2');
console.log(busca); // 1

const array = [5, 12, 8, 130, 44];
const valor = array.find(item => item > 10); //retorna somente o primeiro valor que satisfaça a condição estabelecida
console.log(valor); // 12

const array2 = [5, 12, 8, 130, 44];
const indice = array2.findIndex(item => item > 10); //retorna o index do primeiro valor que satisfaça a condição
console.log(indice); // 1

// Ordenando arrays

const exemplo = ['Bob', 'Alice', 'Carlos'];
console.log(exemplo.sort()); // [ 'Alice', 'Bob', 'Carlos' ]