let library = [];

function Book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  const book = new Book(title, author, genre, pages, read);
  library.push(book);
  displayNewBook(book);
}

function displayNewBook(book) {
  const table = document.getElementById("table");
  const tr = document.createElement("tr");
  const title = document.createElement("td");
  const author = document.createElement("td");
  const genre = document.createElement("td");
  const pages = document.createElement("td");
  const read = document.createElement("td");

  title.innerHTML = book.title;
  author.innerHTML = book.author;
  genre.innerHTML = book.genre;
  pages.innerHTML = book.pages;
  read.innerHTML = book.read;

  tr.append(title, author, genre, pages, read);
  table.appendChild(tr);
}

const collapse = document.getElementById("collapse");
const newBook = document.getElementById("newBook");

newBook.addEventListener("click", () => {
  addBook();
});

collapse.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  const content = e.target.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 120 + "px";
  }
});

console.log(library);
