var urlService = "https://jsonplaceholder.typicode.com/posts";

export class PostService{

    constructor() {}

//GET
async getAllPosts() {
  return new Promise(async (resolve, reject) => {
    let response = await fetch(urlService);
    if (!response.ok) {
      reject("Erro ao carregar posts");
    }
    let posts = await response.json();
    resolve(posts);
  });
}

//DELETE
async removePost(idPost) {
  let deleteUrl = urlService + `/${idPost}`;
  try {
    let respose = await fetch(deleteUrl, {
      method: 'DELETE',
    });
    if (respose.ok) {
      alert("Post removido com sucesso. ID: " + idPost);
    } else {
      throw new Error("Erro ao remover o post.");
    }
  } catch (error) {
    throw new Error("Algo inesperado aconteceu: " + error);
  }
}

//POST OU PUT
async savePost(post, mode) {
  let method = mode === "edit" ? "PUT" : "POST";

  let response = await fetch(urlService, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: post.userId,
    }),
  });

  if (!response.ok) {
    throw Error("Erro ao processar requisição");
  }
  let data = await response.json();
  if (mode === "edit") {
    alert("Post editado com sucesso. ID: " + data.id);
  } else {
    alert("Post cadastrado com sucesso. ID: " + data.id);
  }
}

}
