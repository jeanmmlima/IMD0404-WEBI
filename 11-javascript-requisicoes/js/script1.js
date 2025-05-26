var campoCEP = document.querySelector('#cep');

var campos = ['logradouro', 'bairro', 'localidade', 'uf'];

function atualizarEnderecoPeloCEP() {
    let cep = campoCEP.value;
    let requestURL = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(requestURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o CEP');
            }
            return response.json(); // <- Pegamos o texto bruto
        })
        .then(dadosJson => {
            atualizarCamposDoFormulario(dadosJson); 
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
            alert("Erro ao buscar o endereço. Verifique o CEP.");
        });
}

function atualizarCamposDoFormulario(dados) {
    console.log(dados);
    if (!dados.erro) {
        campos.forEach(item => {
            document.getElementById(item).value = dados[item];
        });
    }
}

campoCEP.addEventListener('change', atualizarEnderecoPeloCEP);