
document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar os posts
    function loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                var postsList = document.getElementById("posts");
                postsList.innerHTML = "";
                data.slice(0, 20).forEach(post => {
                    var li = document.createElement("li");
                    li.setAttribute("data-id", post.id);
                    li.innerHTML = `
                        <strong>ID:</strong> ${post.id}<br>
                        <strong>Título:</strong><span>${post.title}</span><br>
                        <strong>Corpo:</strong><span>${post.body}</span><br>
                        <button class="editBtn">Editar</button>
                        <button class="removeBtn">Remover</button>
                    `;
                    postsList.appendChild(li);
                });
            })
            .catch(error => console.error("Erro ao carregar os posts:", error));
    }

    // Carregar posts iniciais
    loadPosts();


    // Remover post
    document.getElementById("posts").addEventListener("click", function(event) {
        if (event.target.classList.contains("removeBtn")) {
            var postId = event.target.parentElement.getAttribute("data-id");
            fetch("https://jsonplaceholder.typicode.com/posts/" + postId, {
                method: "DELETE"
            })
            .then(response => {
                if (response.ok) {
                    alert("Post removido com sucesso. ID: " + postId);
                    loadPosts();
                } else {
                    throw new Error("Erro ao remover o post.");
                }
            })
            .catch(error => console.error(error));
        }
    });

    // Editar post
    document.getElementById("posts").addEventListener("click", function(event) {
        if (event.target.classList.contains("editBtn")) {
            var post = event.target.parentElement;
            var postId = post.getAttribute("data-id");
            var title = post.children[3].innerHTML; //posicao dos elementos com span na árvore DOM de post
            var body = post.children[6].innerHTML;
            document.getElementById("title").value = title;
            document.getElementById("body").value = body;
            document.getElementById("postForm").dataset.mode = "edit";
            document.getElementById("postForm").dataset.id = postId;
        }
    });

    // Cria ou Atualizar post
    document.getElementById("postForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var mode = this.dataset.mode;
        var postId = this.dataset.id;
        var title = document.getElementById("title").value;
        var body = document.getElementById("body").value;
        var url = "https://jsonplaceholder.typicode.com/posts";
        var method = "POST";
        if (mode === "edit") {
            url += "/" + postId;
            method = "PUT";
        }
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: title, body: body, userId: 1 })
        })
        .then(response => response.json())
        .then(data => {
            if (mode === "edit") {
                alert("Post editado com sucesso. ID: " + data.id);
            } else {
                alert("Post cadastrado com sucesso. ID: " + data.id);
            }
            loadPosts();
            document.getElementById("title").value = "";
            document.getElementById("body").value = "";
            delete document.getElementById("postForm").dataset.mode;
            delete document.getElementById("postForm").dataset.id;
        })
        .catch(error => console.error("Erro ao atualizar o post:", error));
    });
});
