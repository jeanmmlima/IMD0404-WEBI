
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function () {
    console.log('Clicou no botão.');
    resultado.textContent = 'Clicou no botão.';
});

botao.addEventListener('mouseover', function () {
    console.log('Passou o mouse sobre o botão.');
    resultado.textContent = 'Passou o mouse sobre o botão.';
});

botao.addEventListener('mouseout', function () {
    console.log('Retirou o mouse do botão.');
    resultado.textContent = 'Retirou o mouse do botão.';
});

botao.addEventListener('dblclick', function () {
    console.log('Clicou duas vezes no botão.');
    resultado.textContent = 'Clicou duas vezes no botão.';
});

botao.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Previne o menu de contexto padrão (o menu do botão direito do mouse)
    console.log('Clicou com o botão direito do mouse.');
    resultado.textContent = 'Clicou com o botão direito do mouse.';
});

botao.addEventListener('mousedown', function (event) {
    console.log('Pressionou o botão do mouse.');
    resultado.textContent = 'Pressionou o botão do mouse.';
});

botao.addEventListener('mouseup', function (event) {
    console.log('Soltou o botão do mouse.');
    resultado.textContent = 'Soltou o botão do mouse.';
});

botao.addEventListener('mousemove', function (event) {
    resultado.textContent = 'Movimentou o mouse sobre o botão.';
});

