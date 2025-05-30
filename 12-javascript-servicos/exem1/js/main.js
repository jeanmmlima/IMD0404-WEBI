import { Post } from './model/Post.js';
import { PostService } from './service/PostService.js'; // caminho relativo

var postService = new PostService();
var postsList = document.getElementById("posts");


//Evento para carregar posts ao carregar a página
document.addEventListener("DOMContentLoaded", async function () {
  await loadPosts();
});

//Evento ao clicar em editar post
document
  .getElementById("posts")
  .addEventListener("click", async function (event) {
    if (event.target.classList.contains("removeBtn")) {
      let postId = await event.target.parentElement.getAttribute("data-id");
      console.log(postId);

      await postService.removePost(postId);
      await loadPosts();
    }
  });

// Evento ao clicar em Editar post
document.getElementById("posts").addEventListener("click", function (event) {
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

// Evento de submit do for para Criar ou Atualizar post
document
  .getElementById("postForm")
  .addEventListener("submit", async function (event) {
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
    let post = { title: title, body: body, userId: 1 };

    await postService.savePost(post, method);
    await loadPosts();
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
    delete document.getElementById("postForm").dataset.mode;
    delete document.getElementById("postForm").dataset.id;
  });

  //função para carregar posts
  async function loadPosts() {
  let posts = await postService.getAllPosts();
  postsList.innerHTML = "";
  posts.slice(0, 20).forEach((post) => {

    let myPost = new Post(post.title, post.body, post.userId);

    var li = document.createElement("li");
    li.setAttribute("data-id", post.id);
    li.innerHTML = `
                        <strong>ID:</strong> ${myPost.id}<br>
                        <strong>Título:</strong><span>${myPost.title}</span><br>
                        <strong>Corpo:</strong><span>${myPost.body}</span><br>
                        <button class="editBtn">Editar</button>
                        <button class="removeBtn">Remover</button>
                    `;
    postsList.appendChild(li);
  });
}