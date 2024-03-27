var campoCEP = document.querySelector('#cep');

var campos = ['logradouro', 'bairro', 'localidade', 'uf'];

function atualizarEnderecoPeloCEP() {
    let cep = campoCEP.value;
    let requestURL = 'https://viacep.com.br/ws/' + cep + '/json/';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.send();
    request.onload = function () {
        let resposta = request.response;
        atualizarCamposDoFormulario(resposta);
    }
}

function atualizarCamposDoFormulario(dadosJson) {
    let dados = JSON.parse(dadosJson);
    if (!dados.erro) {
        campos.forEach(item => {
            document.getElementById(item).value = dados[item];
        });
    }
}

campoCEP.addEventListener('change', atualizarEnderecoPeloCEP);