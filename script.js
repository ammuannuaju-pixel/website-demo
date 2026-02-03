// Categorized Book Data
const books = [
    // --- THRILLERS ---
    {
        title: "The Silent Patient",
        genre: "Thriller",
        cover: "https://covers.openlibrary.org/b/id/10531548-L.jpg",
        summary: "A famous painter shoots her husband five times in the face and then never speaks another word. A criminal psychotherapist becomes obsessed with uncovering her motive."
    },
    {
        title: "Gone Girl",
        genre: "Thriller",
        cover: "https://covers.openlibrary.org/b/id/7989100-L.jpg",
        summary: "On his fifth wedding anniversary, Nick Dunne reports that his beautiful wife, Amy, has gone missing. Under pressure from the police, Nick's portrait of a blissfully happy union begins to crumble."
    },
    {
        title: "The Girl with the Dragon Tattoo",
        genre: "Thriller",
        cover: "https://covers.openlibrary.org/b/id/12640516-L.jpg",
        summary: "A journalist and a tattooed computer hacker team up to solve a decades-old disappearance within a wealthy, dysfunctional family."
    },
    
    // --- ROMANCE ---
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        cover: "https://covers.openlibrary.org/b/id/12730303-L.jpg",
        summary: "The spirited Elizabeth Bennet navigates issues of manners, upbringing, morality, and marriage in the society of the landed gentry of the British Regency."
    },
    {
        title: "The Hating Game",
        genre: "Romance",
        cover: "https://covers.openlibrary.org/b/id/12818862-L.jpg",
        summary: "Two executive assistants who absolutely despise each other find themselves in a high-stakes game of one-upmanship that takes an unexpected romantic turn."
    },
    {
        title: "Red, White & Royal Blue",
        genre: "Romance",
        cover: "https://covers.openlibrary.org/b/id/10578652-L.jpg",
        summary: "What happens when the First Son of the United States falls in love with the Prince of Wales? A secret romance that could derail a presidential campaign."
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('summaryModal');
const closeBtn = document.querySelector('.close-button');

// Render Books with Genre Tags
books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    // Adding a small badge for the genre
    const genreClass = book.genre.toLowerCase(); 
    
    card.innerHTML = `
        <span class="genre-badge ${genreClass}">${book.genre}</span>
        <img src="${book.cover}" alt="${book.title}">
        <h3>${book.title}</h3>
    `;
    
    card.onclick = () => {
        document.getElementById('modalTitle').innerText = book.title;
        document.getElementById('modalDescription').innerText = book.summary;
        modal.style.display = "block";
    };
    
    bookGrid.appendChild(card);
});

// Close Modal logic
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};