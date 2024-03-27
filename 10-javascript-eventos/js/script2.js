const area = document.body;
const circulo = document.querySelector('.circle');

var comprimentoJanela = window.innerWidth;
var alturaJanela = window.innerHeight;

function coordenadasMouse(e) {
    // Capturamos o objeto do evento (movimento do mouse).
    // Obtemos a coordenada X (distância da borda esquerda da janela) a partir da propriedade clientX.
    // Pegamos a largura da janela, subtraímos da coordenada e do raio do círculo.
    // Fazemos o mesmo com a coordenada Y (distância da borda de cima da janela).
    var posicaoHorizontal = comprimentoJanela - e.clientX - 50;
    var posicaoVertical= alturaJanela - e.clientY - 50;

    // Definimos a posição horizontal e vertical do círculo.
    circulo.style.left = posicaoHorizontal + 'px';
    circulo.style.top = posicaoVertical + 'px';
}

function mudarCorQuandoTocar() {
    circulo.style.backgroundColor = "green";
    circulo.style.borderColor = "green";
}

// Quando o cursor do mouse se move, executa a função coordenadasMouse.
area.addEventListener('mousemove', coordenadasMouse);

// Quando o cursor do mouse toca o círculo, executa a função mudaCorQuandoTocar.
circulo.addEventListener('mouseenter', mudarCorQuandoTocar);

// Quando o cursor do mouse deixa o círculo, remove o atributo style anteriormente atribuído ao círculo.
circulo.addEventListener('mouseleave', function() { circulo.removeAttribute("style"); });