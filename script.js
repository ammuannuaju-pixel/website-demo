const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { title: "Sherlock Holmes", author: "Arthur Conan Doyle", genre: "Mystery" },
    { title: "Neuromancer", author: "William Gibson", genre: "Sci-Fi" },
    { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" }
];

function displayBooks(bookList) {
    const grid = document.getElementById('book-grid');
    grid.innerHTML = ''; // Clear current display

    bookList.forEach(book => {
        const card = `
            <div class="book-card">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <small>${book.genre}</small>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function filterBooks(genre) {
    if (genre === 'all') {
        displayBooks(books);
    } else {
        const filtered = books.filter(book => book.genre === genre);
        displayBooks(filtered);
    }
}

// Initial call to show all books
displayBooks(books);
