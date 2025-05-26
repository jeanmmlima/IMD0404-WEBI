var campoCEP = document.querySelector('#cep');
var campos = ['logradouro', 'bairro', 'localidade', 'uf'];

function buscarCEP(cep) {
    return new Promise((resolve, reject) => {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject('Erro na resposta da API');
                } else {
                    return response.json();
                }
            })
            .then(dados => {
                if (dados.erro) {
                    reject('CEP não encontrado.');
                } else {
                    resolve(dados);
                }
            })
            .catch(erro => {
                reject('Erro na requisição: ' + erro);
            });
    });
}

function atualizarEnderecoPeloCEP() {
    const cep = campoCEP.value;

    buscarCEP(cep)
        .then(dados => {
            atualizarCamposDoFormulario(dados);
        })
        .catch(erro => {
            console.error(erro);
            alert(erro);
        });
}

function atualizarCamposDoFormulario(dados) {
    campos.forEach(item => {
        document.getElementById(item).value = dados[item] || '';
    });
}

campoCEP.addEventListener('change', atualizarEnderecoPeloCEP);