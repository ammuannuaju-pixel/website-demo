// Book database organized by genre
const bookDatabase = {
    horror: [
        {
            title: "The Shining",
            author: "Stephen King",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
            summary: "A family becomes isolated in a haunted hotel during winter, where supernatural forces drive the father toward madness and violence."
        },
        {
            title: "The Haunting of Hill House",
            author: "Shirley Jackson",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
            summary: "Four seekers arrive at a notoriously haunted mansion to study its paranormal activity, but the house has other plans for them."
        },
        {
            title: "It",
            author: "Stephen King",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
            summary: "A group of childhood friends reunite to confront a shape-shifting evil entity that preys on children in their hometown."
        },
        {
            title: "The Exorcist",
            author: "William Peter Blatty",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
            summary: "A young girl becomes possessed by a demonic entity, and two priests must perform an exorcism to save her soul."
        },
        {
            title: "Mexican Gothic",
            author: "Silvia Moreno-Garcia",
            image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
            summary: "A glamorous socialite investigates disturbing secrets in a decaying mansion in the Mexican countryside."
        },
        {
            title: "The Woman in Black",
            author: "Susan Hill",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
            summary: "A young solicitor encounters a vengeful ghost while settling the estate of a deceased client in a remote English village."
        },
        {
            title: "Bird Box",
            author: "Josh Malerman",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
            summary: "A mother and her children must navigate a river blindfolded to escape entities that drive anyone who sees them to suicide."
        },
        {
            title: "Pet Sematary",
            author: "Stephen King",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
            summary: "A family discovers a mysterious burial ground that brings the dead back to life, but they return changed and sinister."
        },
        {
            title: "The Silence of the Lambs",
            author: "Thomas Harris",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
            summary: "An FBI trainee must gain the trust of imprisoned cannibal Dr. Hannibal Lecter to catch another serial killer."
        },
        {
            title: "Hell House",
            author: "Richard Matheson",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
            summary: "Four people enter the most haunted house in the world to prove or disprove the existence of life after death."
        }
    ],
    romcom: [
        {
            title: "The Hating Game",
            author: "Sally Thorne",
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400",
            summary: "Two executive assistants who despise each other compete for the same promotion while fighting their undeniable chemistry."
        },
        {
            title: "Beach Read",
            author: "Emily Henry",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
            summary: "Two writers with opposite genres spend a summer challenging each other to write in the other's style while falling in love."
        },
        {
            title: "Red, White & Royal Blue",
            author: "Casey McQuiston",
            image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400",
            summary: "The First Son of the United States and the Prince of Wales go from enemies to secret lovers in this charming romance."
        },
        {
            title: "People We Meet on Vacation",
            author: "Emily Henry",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            summary: "Two best friends take one last vacation together to repair their friendship, but old feelings resurface."
        },
        {
            title: "The Kiss Quotient",
            author: "Helen Hoang",
            image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400",
            summary: "A woman with Asperger's hires an escort to teach her about dating and romance, leading to unexpected love."
        },
        {
            title: "You Deserve Each Other",
            author: "Sarah Hogle",
            image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400",
            summary: "An engaged couple tries to sabotage each other into calling off the wedding, only to rediscover why they fell in love."
        },
        {
            title: "The Unhoneymooners",
            author: "Christina Lauren",
            image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400",
            summary: "Enemies are forced to pretend to be newlyweds on a free honeymoon trip to Hawaii after everyone else gets food poisoning."
        },
        {
            title: "Bet Me",
            author: "Jennifer Crusie",
            image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400",
            summary: "A woman bets she won't fall for a charming man, but their fake dates start feeling all too real."
        },
        {
            title: "Well Met",
            author: "Jen DeLuca",
            image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=400",
            summary: "A temporary town resident volunteers at a Renaissance Faire and clashes with the arrogant festival director."
        },
        {
            title: "Crazy Rich Asians",
            author: "Kevin Kwan",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
            summary: "A Chinese-American woman discovers her boyfriend comes from one of Singapore's wealthiest families when she accompanies him to a wedding."
        }
    ],
    psychological: [
        {
            title: "Gone Girl",
            author: "Gillian Flynn",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400",
            summary: "When Amy Dunne disappears on her fifth wedding anniversary, her husband becomes the prime suspect in a twisted game of manipulation."
        },
        {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
            summary: "A woman shoots her husband and never speaks again, leaving her psychotherapist obsessed with uncovering the truth."
        },
        {
            title: "Sharp Objects",
            author: "Gillian Flynn",
            image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=400",
            summary: "A journalist returns to her toxic hometown to cover the murders of two young girls while confronting her own traumatic past."
        },
        {
            title: "The Girl on the Train",
            author: "Paula Hawkins",
            image: "https://images.unsplash.com/photo-1544716278-e513176f20a5?w=400",
            summary: "An alcoholic divorcee becomes entangled in a missing persons case after witnessing something shocking from her train window."
        },
        {
            title: "Before I Go to Sleep",
            author: "S.J. Watson",
            image: "https://images.unsplash.com/photo-1505664063944-0bb5d7e98dcb?w=400",
            summary: "A woman wakes every morning with no memory and must piece together her past through a secret journal."
        },
        {
            title: "The Woman in the Window",
            author: "A.J. Finn",
            image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=400",
            summary: "An agoraphobic woman witnesses a crime in her neighbor's house, but her grip on reality is questioned."
        },
        {
            title: "We Need to Talk About Kevin",
            author: "Lionel Shriver",
            image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400",
            summary: "A mother examines her relationship with her son who committed a horrific high school massacre."
        },
        {
            title: "Behind Her Eyes",
            author: "Sarah Pinborough",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
            summary: "A single mother becomes entangled in a twisted love triangle with a psychiatrist and his mysterious wife."
        },
        {
            title: "The Push",
            author: "Ashley Audrain",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
            summary: "A mother's suspicions about her daughter escalate into a devastating examination of motherhood and family trauma."
        },
        {
            title: "Verity",
            author: "Colleen Hoover",
            image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
            summary: "A writer discovers an unfinished manuscript containing chilling admissions while ghostwriting for an injured author."
        }
    ],
    romance: [
        {
            title: "The Notebook",
            author: "Nicholas Sparks",
            image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400",
            summary: "An elderly man reads to his wife from a notebook, recounting their passionate love story spanning decades."
        },
        {
            title: "Outlander",
            author: "Diana Gabaldon",
            image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400",
            summary: "A WWII nurse is transported to 18th-century Scotland where she falls for a Highland warrior."
        },
        {
            title: "Me Before You",
            author: "Jojo Moyes",
            image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400",
            summary: "A quirky young woman becomes caretaker for a wealthy, paralyzed man, and their bond transforms both lives."
        },
        {
            title: "It Ends with Us",
            author: "Colleen Hoover",
            image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
            summary: "A woman must confront difficult choices when her first love returns while she's in a complicated relationship."
        },
        {
            title: "The Time Traveler's Wife",
            author: "Audrey Niffenegger",
            image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=400",
            summary: "A love story between a woman and a man with a genetic disorder causing him to time travel unpredictably."
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
            summary: "Elizabeth Bennet navigates societal expectations and her own prejudices while falling for Mr. Darcy."
        },
        {
            title: "The Proposal",
            author: "Jasmine Guillory",
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400",
            summary: "After a public proposal goes wrong, a woman finds unexpected romance with the man who rescued her."
        },
        {
            title: "The Seven Husbands of Evelyn Hugo",
            author: "Taylor Jenkins Reid",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            summary: "An aging Hollywood icon recounts her glamorous and scandalous life, revealing her greatest love."
        },
        {
            title: "Eleanor & Park",
            author: "Rainbow Rowell",
            image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400",
            summary: "Two misfit teenagers fall in love on the school bus in 1986, finding solace in each other."
        },
        {
            title: "The Rosie Project",
            author: "Graeme Simsion",
            image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400",
            summary: "A genetics professor creates a questionnaire to find his perfect wife, but falls for someone completely unexpected."
        }
    ],
    scifi: [
        {
            title: "Dune",
            author: "Frank Herbert",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
            summary: "On the desert planet Arrakis, young Paul Atreides navigates political intrigue and prophecy to control the universe's most valuable substance."
        },
        {
            title: "The Martian",
            author: "Andy Weir",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400",
            summary: "An astronaut must use his ingenuity and humor to survive alone on Mars after being left behind by his crew."
        },
        {
            title: "Foundation",
            author: "Isaac Asimov",
            image: "https://images.unsplash.com/photo-1503437313881-503a91226402?w=400",
            summary: "A mathematician develops psychohistory to predict and preserve civilization through a 30,000-year dark age."
        },
        {
            title: "Neuromancer",
            author: "William Gibson",
            image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400",
            summary: "A washed-up computer hacker is hired for one last job: pulling off the ultimate hack against a powerful AI."
        },
        {
            title: "The Three-Body Problem",
            author: "Liu Cixin",
            image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=400",
            summary: "Humanity's first contact with an alien civilization brings unexpected consequences that threaten Earth's existence."
        },
        {
            title: "Ender's Game",
            author: "Orson Scott Card",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400",
            summary: "A brilliant child is trained in military strategy to lead humanity's fight against an alien race."
        },
        {
            title: "Hyperion",
            author: "Dan Simmons",
            image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
            summary: "Seven pilgrims share their stories on a journey to mysterious Time Tombs and the deadly Shrike creature."
        },
        {
            title: "Snow Crash",
            author: "Neal Stephenson",
            image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
            summary: "A hacker and pizza delivery driver must stop a mind-altering virus in both reality and the Metaverse."
        },
        {
            title: "Ready Player One",
            author: "Ernest Cline",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
            summary: "In dystopian 2045, a teenager hunts for an Easter egg in a massive VR world to win a fortune."
        },
        {
            title: "Project Hail Mary",
            author: "Andy Weir",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
            summary: "A lone astronaut wakes up on a spaceship with no memory, tasked with saving humanity from extinction."
        }
    ]
};

// Get all books in one array for searching
const allBooks = [];
Object.keys(bookDatabase).forEach(genre => {
    bookDatabase[genre].forEach(book => {
        allBooks.push({ ...book, genre: genre });
    });
});

// Get references to DOM elements
const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const navItems = document.querySelectorAll('.nav-item');

let currentView = 'home';
let currentGenre = '';

// Event listeners for navigation
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Check if it's a genre or home
        if (this.dataset.view === 'home') {
            currentView = 'home';
            currentGenre = '';
            showWelcomeMessage();
        } else if (this.dataset.genre) {
            currentView = 'genre';
            currentGenre = this.dataset.genre;
            displayBooks(currentGenre);
        }
        
        // Clear search input
        searchInput.value = '';
    });
});

// Event listeners for search
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Function to perform search
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        if (currentGenre) {
            displayBooks(currentGenre);
        } else {
            showWelcomeMessage();
        }
        return;
    }
    
    // Search through all books
    const results = allBooks.filter(book => {
        return book.title.toLowerCase().includes(searchTerm) || 
               book.author.toLowerCase().includes(searchTerm);
    });
    
    displaySearchResults(results, searchTerm);
}

// Function to show welcome message
function showWelcomeMessage() {
    booksContainer.innerHTML = `
        <div class="welcome-message">
            <h2>Welcome to Book Finder!</h2>
            <p>Select a genre from the sidebar or search for books by title or author.</p>
        </div>
    `;
}

// Function to display books based on selected genre
function displayBooks(genre) {
    const books = bookDatabase[genre];
    
    // Clear the container
    booksContainer.innerHTML = '';
    
    // Create book cards
    books.forEach((book, index) => {
        const bookCard = createBookCard(book, index);
        booksContainer.appendChild(bookCard);
    });
}

// Function to display search results
function displaySearchResults(results, searchTerm) {
    // Clear the container
    booksContainer.innerHTML = '';
    
    if (results.length === 0) {
        booksContainer.innerHTML = `
            <div class="no-results">
                <h2>No results found</h2>
                <p>No books found for "${searchTerm}". Try searching for a different title or author.</p>
            </div>
        `;
        return;
    }
    
    // Create book cards for results
    results.forEach((book, index) => {
        const bookCard = createBookCard(book, index);
        booksContainer.appendChild(bookCard);
    });
}

// Function to create a book card element
function createBookCard(book, index) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.style.animationDelay = `${index * 0.1}s`;
    
    bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <div class="book-info">
            <h3 class="book-title">${book
