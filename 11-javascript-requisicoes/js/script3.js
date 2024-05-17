document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
  
    // Fetch posts from API - carregando lista de posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); //posts do then subsquente
      })
      .then(posts => {
        // Render posts
        posts.forEach(post => {
          const card = createPostCard(post);
          postList.appendChild(card);
        });
      })
      .catch(error => { //se acontecer algum erro no processamento do fetch
        console.error('There was a problem fetching the posts:', error);
      });
  
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
  