// Categorized Book Data,
        // 0Original high-quality book covers

const books = [
    // --- THRILLERS ---
    {
        title: "The Silent Patient",
        genre: "Thriller",
        cover: "https://m.media-amazon.com/images/I/91kWnaVSiWL._AC_UF1000,1000_QL80_.jpg",
        summary: "A famous painter shoots her husband five times in the face and then never speaks another word. A criminal psychotherapist becomes obsessed with uncovering her motive."
    },
    {
        title: "Gone Girl",
        genre: "Thriller",
        cover: "https://m.media-amazon.com/images/I/81QRQeMzl+L._AC_UF1000,1000_QL80_.jpg",
        summary: "On his fifth wedding anniversary, Nick Dunne reports that his beautiful wife, Amy, has gone missing. Under pressure from the police, Nick's portrait of a blissfully happy union begins to crumble."
    },
    {
        title: "The Girl with the Dragon Tattoo",
        genre: "Thriller",
        cover: "https://m.media-amazon.com/images/I/81X+aU23rJL._AC_UF1000,1000_QL80_.jpg",
        summary: "A journalist and a tattooed computer hacker team up to solve a decades-old disappearance within a wealthy, dysfunctional family."
    },
    
    // --- ROMANCE ---
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        cover: "https://m.media-amazon.com/images/I/71kxbPCqlAL._AC_UF1000,1000_QL80_.jpg",
        summary: "The spirited Elizabeth Bennet navigates issues of manners, upbringing, morality, and marriage in the society of the landed gentry of the British Regency."
    },
    {
        title: "The Hating Game",
        genre: "Romance",
        cover: "https://m.media-amazon.com/images/I/91a6o6z4yZL._AC_UF1000,1000_QL80_.jpg",
        summary: "Two executive assistants who absolutely despise each other find themselves in a high-stakes game of one-upmanship that takes an unexpected romantic turn."
    },
    {
        title: "Red, White & Royal Blue",
        genre: "Romance",
        cover: "https://m.media-amazon.com/images/I/91b1Y5gX-RL._AC_UF1000,1000_QL80_.jpg",
        summary: "What happens when the First Son of the United States falls in love with the Prince of Wales? A secret romance that could derail a presidential campaign."
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('summaryModal');
const closeBtn = document.querySelector('.close-button');
const genreFilter = document.getElementById('genreFilter');

function renderBooks(filter = 'all') {
    bookGrid.classList.add('loading');
    bookGrid.innerHTML = '';
    
    const filteredBooks = filter === 'all' ? books : books.filter(book => book.genre.toLowerCase() === filter);
    
    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <span class="genre-badge ${book.genre.toLowerCase()}">${book.genre}</span>
            <img src="${book.cover}" alt="Cover of ${book.title}" onerror="this.src='https://via.placeholder.com/300x350/667eea/ffffff?text=No+Cover'">
            <h3>${book.title}</h3>
        `;
        
        card.onclick = () => {
            document.getElementById('modalTitle').innerText = book.title;
            document.getElementById('modalDescription').innerText = book.summary;
            modal.style.display = 'block';
        };
        
        bookGrid.appendChild(card);
    });
    
    bookGrid.classList.remove('loading');
}

// Initial render
renderBooks();

// Event listeners
genreFilter.onchange = (e) => renderBooks(e.target.value);
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target === modal) modal.style.display = 'none';
};
