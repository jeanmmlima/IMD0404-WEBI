function inserirNode() {
    const container = document.getElementById("container");
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Novo parágrafo inserido antes do segundo parágrafo.";
    container.insertBefore(novoParagrafo, container.children[1]);
}

function removerNode() {
    const container = document.getElementById("container");
    const paragrafos = container.querySelectorAll("p");
    if (paragrafos.length > 1) {
        container.removeChild(paragrafos[1]); // Remove o segundo parágrafo
    }
}

function modificarAtributo() {
    const paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(paragrafo => {
        paragrafo.setAttribute("class", "modified-style");
    });
}

function modificarEstilo() {
    const paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(paragrafo => {
        paragrafo.style.backgroundColor = "yellow";
    });
}

function modificarClasse() {
    const paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(paragrafo => {
        paragrafo.classList.remove("original-style");
        paragrafo.classList.add("changed-style");
    });
}