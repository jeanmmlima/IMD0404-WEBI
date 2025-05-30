document.addEventListener('DOMContentLoaded', async function() {
  const postList = document.getElementById('post-list');

  try {
    const posts = await fetchPosts();

    posts.forEach(post => {
      const card = createPostCard(post);
      postList.appendChild(card);
    });
  } catch (error) {
    console.error('Erro ao carregar os posts:', error);
  }

  // Function to fetch posts from API
  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Resposta não esperada. Problema de rede!');
    }
    const posts = await response.json();
    return posts;
  }

  // Function to create post card
  function createPostCard(post) {
    const card = document.createElement('div');
    card.classList.add('card');

    const postId = document.createElement('span');
    postId.textContent = `ID: ${post.id}`;
    postId.classList.add('post-id');

    const title = document.createElement('h2');
    title.textContent = post.title;

    const body = document.createElement('p');
    body.textContent = post.body;

    card.appendChild(postId);
    card.appendChild(title);
    card.appendChild(body);

    return card;
  }
});