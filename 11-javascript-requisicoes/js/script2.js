var campoTexto = document.querySelector("#nome");
var img = document.querySelector("img");
var btn = document.querySelector("#button");

btn.addEventListener("click", fetchFoto);

function loadImage(rawPictureData) {
  var imagem = JSON.parse(rawPictureData);
  console.log(imagem);
  img.src = imagem.photos[0].src.large2x;
}

function fetchFoto() {
  var url, chave_api;
  chave_api = "563492ad6f9170000100000182cfa5251b204eb7954b4d9fd8c1a8f8";
  url = "https://api.pexels.com/v1/search?query=" + campoTexto.value;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `${chave_api}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar o img");
      } else {
        return response.text();
      }
    })
    .then((img) => {
      if (img.erro) {
        throw new Error("Erro com a img");
      } else {
        loadImage(img);
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      alert("Erro ao buscar o img. Verifique a requisição.");
    });
}
