// Función para cargar los artículos desde las cookies
function loadArticles() {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.forEach(article => displayArticle(article));
  }
  
  // Función para mostrar el formulario de agregar artículo
  document.getElementById('addArticleBtn').addEventListener('click', function() {
    document.getElementById('articleForm').classList.toggle('hidden');
  });
  
  // Función para agregar un artículo
  document.getElementById('addArticleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const imageURL = document.getElementById('imageURL').value;
    const description = document.getElementById('description').value;
    const author = document.getElementById('author').value;
    const date = document.getElementById('date').value;
  
    const article = {
      title: title,
      imageURL: imageURL,
      description: description,
      author: author,
      date: date
    };
  
    // Guardar el artículo en el localStorage
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));
  
    // Mostrar el artículo en la página
    displayArticle(article);
  
    // Limpiar el formulario
    document.getElementById('addArticleForm').reset();
    document.getElementById('articleForm').classList.add('hidden');
  });
  
  // Función para mostrar un artículo en la página
  function displayArticle(article) {
    const articleHTML = `
      <div class="article">
        <h2>${article.title}</h2>
        <img src="${article.imageURL}" alt="${article.title}">
        <p>${article.description}</p>
        <p>Autor: ${article.author}</p>
        <p>Fecha de publicación: ${article.date}</p>
      </div>
    `;
    document.getElementById('articles').innerHTML += articleHTML;
  }
  
  // Cargar los artículos al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
  });
  