// Book database with 10 books per genre
const booksData = {
    romance: [
        {
            title: "The Notebook",
            author: "Nicholas Sparks",
            summary: "A beautiful love story of Noah and Allie, two young lovers from different social backgrounds whose romance is tested by time and circumstance. Their enduring love proves that true romance can withstand any obstacle.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483183484i/15931.jpg"
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            summary: "Elizabeth Bennet navigates society, family, and her own prejudices while developing an unexpected romance with the proud Mr. Darcy. A timeless tale of love, misunderstanding, and social commentary.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg"
        },
        {
            title: "Me Before You",
            author: "Jojo Moyes",
            summary: "Louisa Clark becomes a caregiver for Will Traynor, a wealthy young banker left paralyzed from an accident. Their unlikely relationship transforms both their lives in unexpected ways.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1393095602i/15507958.jpg"
        },
        {
            title: "The Time Traveler's Wife",
            author: "Audrey Niffenegger",
            summary: "Henry has a genetic disorder that causes him to time travel unpredictably. Clare falls in love with him despite this challenge, creating a unique and passionate love story across time.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1380631364i/14050.jpg"
        },
        {
            title: "Outlander",
            author: "Diana Gabaldon",
            summary: "Claire Randall, a WWII nurse, is mysteriously transported to 1743 Scotland where she meets Highland warrior Jamie Fraser. An epic romance spanning centuries begins.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529065012i/10964.jpg"
        },
        {
            title: "The Fault in Our Stars",
            author: "John Green",
            summary: "Hazel and Augustus are two teenagers who meet at a cancer support group. Their witty, honest relationship shows that love can flourish even in the face of terminal illness.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg"
        },
        {
            title: "Eleanor & Park",
            author: "Rainbow Rowell",
            summary: "Two misfit teenagers from different backgrounds fall in love over comic books and mixtapes in 1986. A tender story about first love and the courage it takes to be yourself.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1345937758i/15745753.jpg"
        },
        {
            title: "Red, White & Royal Blue",
            author: "Casey McQuiston",
            summary: "The First Son of the United States falls in love with the Prince of Wales, creating an international incident and a delightful romance that could change the world.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566742512i/41150487.jpg"
        },
        {
            title: "Beach Read",
            author: "Emily Henry",
            summary: "Two writers with opposite styles spend a summer next to each other and challenge one another to write in the other's genre, leading to unexpected romance and self-discovery.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1583888305i/45436644.jpg"
        },
        {
            title: "The Kiss Quotient",
            author: "Helen Hoang",
            summary: "Stella, a brilliant woman with Asperger's, hires escort Michael to teach her about dating and intimacy. Their professional arrangement quickly becomes something more meaningful.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1517325108i/36199084.jpg"
        }
    ],
    horror: [
        {
            title: "The Shining",
            author: "Stephen King",
            summary: "Jack Torrance becomes the winter caretaker of the isolated Overlook Hotel with his family. As supernatural forces awaken, Jack's sanity deteriorates, threatening his wife and psychic son.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg"
        },
        {
            title: "Dracula",
            author: "Bram Stoker",
            summary: "Count Dracula moves from Transylvania to England to spread the undead curse. A group of brave souls must stop him before he claims more victims in this gothic horror classic.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg"
        },
        {
            title: "The Haunting of Hill House",
            author: "Shirley Jackson",
            summary: "Four seekers arrive at the notoriously haunted Hill House. As they investigate the supernatural, the house begins to assert its terrifying power over them, especially Eleanor.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327871336i/89717.jpg"
        },
        {
            title: "Mexican Gothic",
            author: "Silvia Moreno-Garcia",
            summary: "Noemí travels to the Mexican countryside to check on her cousin, who claims her husband is trying to poison her. She discovers dark secrets in the decrepit Gothic mansion.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1591342375i/53152636.jpg"
        },
        {
            title: "Bird Box",
            author: "Josh Malerman",
            summary: "Malorie must navigate a post-apocalyptic world blindfolded with two children. Looking at mysterious creatures means certain death in this tense psychological horror.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1690042855i/18498558.jpg"
        },
        {
            title: "The Exorcist",
            author: "William Peter Blatty",
            summary: "A young girl becomes possessed by a demonic entity. Two priests must perform an exorcism to save her soul in this terrifying tale of faith versus evil.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387716698i/179780.jpg"
        },
        {
            title: "Pet Sematary",
            author: "Stephen King",
            summary: "After moving to rural Maine, the Creed family discovers a mysterious burial ground with the power to raise the dead. But what comes back is not always the same.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1166684584i/33124137.jpg"
        },
        {
            title: "Hell House",
            author: "Richard Matheson",
            summary: "A physicist, a medium, and a mental medium are hired to investigate the Belasco House, known as 'Hell House.' They encounter unspeakable horrors within its walls.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1390890016i/33547.jpg"
        },
        {
            title: "The Silence of the Lambs",
            author: "Thomas Harris",
            summary: "FBI trainee Clarice Starling must interview imprisoned cannibal Dr. Hannibal Lecter to catch another serial killer. A chilling game of psychological cat-and-mouse ensues.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549902923i/23807.jpg"
        },
        {
            title: "The Woman in Black",
            author: "Susan Hill",
            summary: "Arthur Kipps encounters a vengeful ghost while settling a deceased client's estate in a remote English village. The Woman in Black has a terrifying agenda.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327909074i/77649.jpg"
        }
    ],
    comedy: [
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            summary: "Arthur Dent is whisked away on a cosmic adventure after Earth is demolished. Armed with a towel and a guidebook, he discovers the universe is much stranger than imagined.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg"
        },
        {
            title: "Good Omens",
            author: "Terry Pratchett & Neil Gaiman",
            summary: "An angel and a demon team up to prevent the apocalypse because they've grown quite fond of Earth. Chaos, humor, and the Antichrist who doesn't want to end the world.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1424039835i/12067.jpg"
        },
        {
            title: "Bridget Jones's Diary",
            author: "Helen Fielding",
            summary: "Bridget Jones chronicles her hilarious misadventures in love, work, and weight loss in her brutally honest diary. A modern comedy classic about navigating life as a thirty-something singleton.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333654338i/227478.jpg"
        },
        {
            title: "Bossypants",
            author: "Tina Fey",
            summary: "Tina Fey shares her journey from nerdy girl to comedy powerhouse with wit and self-deprecating humor. Behind-the-scenes stories from SNL and 30 Rock will have you laughing out loud.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333803339i/9418327.jpg"
        },
        {
            title: "Where'd You Go, Bernadette",
            author: "Maria Semple",
            summary: "Bernadette Fox, an eccentric architect, mysteriously disappears before a family trip to Antarctica. Her daughter pieces together emails and documents to find out what happened.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357141163i/13526165.jpg"
        },
        {
            title: "The Importance of Being Earnest",
            author: "Oscar Wilde",
            summary: "Two bachelors create elaborate deceptions to pursue their romantic interests. Wilde's witty satire of Victorian society remains brilliantly funny and sharp.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327872146i/14238.jpg"
        },
        {
            title: "Me Talk Pretty One Day",
            author: "David Sedaris",
            summary: "David Sedaris recounts his hilarious experiences from childhood to learning French in Paris. His unique perspective on ordinary life will leave you in stitches.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413737293i/4137.jpg"
        },
        {
            title: "A Confederacy of Dunces",
            author: "John Kennedy Toole",
            summary: "Ignatius J. Reilly is an educated but lazy, eccentric man living in New Orleans. His misadventures while searching for employment are absurdly funny and memorable.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1355011676i/310612.jpg"
        },
        {
            title: "The Rosie Project",
            author: "Graeme Simsion",
            summary: "Don Tillman, a genetics professor with undiagnosed Asperger's, creates a scientific survey to find the perfect wife. Then he meets Rosie, who is the opposite of what he planned.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367416952i/16181775.jpg"
        },
        {
            title: "Crazy Rich Asians",
            author: "Kevin Kwan",
            summary: "Rachel Chu discovers her boyfriend Nick comes from one of Asia's wealthiest families. A hilarious satire of wealth, family, and the clash between old and new money.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388179941i/16085481.jpg"
        }
    ],
    "feel-good": [
        {
            title: "The Midnight Library",
            author: "Matt Haig",
            summary: "Nora Seed finds herself in a library between life and death, where each book represents a different life she could have lived. A heartwarming story about finding purpose and hope.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg"
        },
        {
            title: "A Man Called Ove",
            author: "Fredrik Backman",
            summary: "Ove is a grumpy yet loveable widower whose life is transformed by new neighbors. A heartwarming tale about community, love, and finding meaning after loss.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405259930i/18774964.jpg"
        },
        {
            title: "The House in the Cerulean Sea",
            author: "TJ Klune",
            summary: "Linus Baker, a caseworker, is sent to evaluate an orphanage of magical children. He discovers the true meaning of family in this enchanting and uplifting story.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595221527i/45047384.jpg"
        },
        {
            title: "Eleanor Oliphant Is Completely Fine",
            author: "Gail Honeyman",
            summary: "Eleanor's carefully organized life is disrupted when she develops a crush and befriends a coworker. A touching story about loneliness, kindness, and healing from the past.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490097853i/31434883.jpg"
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            summary: "Santiago, an Andalusian shepherd, travels to Egypt searching for treasure. Along the way, he learns profound lessons about following your dreams and listening to your heart.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483412266i/865.jpg"
        },
        {
            title: "Anne of Green Gables",
            author: "L.M. Montgomery",
            summary: "Orphan Anne Shirley's vivid imagination and zest for life transform everyone around her. A timeless story of optimism, friendship, and growing up with joy.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1390789015i/8127.jpg"
        },
        {
            title: "The Little Prince",
            author: "Antoine de Saint-Exupéry",
            summary: "A young prince travels from planet to planet, learning about love, loss, and what makes life meaningful. A beautiful philosophical tale for all ages.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg"
        },
        {
            title: "Wonder",
            author: "R.J. Palacio",
            summary: "Auggie Pullman, born with facial differences, attends school for the first time. His courage and kindness inspire everyone around him in this uplifting story about acceptance.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1309175919i/11387515.jpg"
        },
        {
            title: "The Guernsey Literary and Potato Peel Pie Society",
            author: "Mary Ann Shaffer & Annie Barrows",
            summary: "Through letters, writer Juliet Ashton discovers the story of a book club formed during WWII on Guernsey Island. A charming tale of friendship, love, and resilience.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1338250952i/2728527.jpg"
        },
        {
            title: "Big Magic",
            author: "Elizabeth Gilbert",
            summary: "Elizabeth Gilbert shares her wisdom on creative living and overcoming fear. An inspiring guide to pursuing curiosity and embracing your most authentic life.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436343616i/24453082.jpg"
        }
    ],
    "psychological-thriller": [
        {
            title: "Gone Girl",
            author: "Gillian Flynn",
            summary: "When Amy Dunne disappears on her anniversary, suspicion falls on her husband Nick. But nothing is as it seems in this twisted tale of marriage, media, and manipulation.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg"
        },
        {
            title: "The Girl on the Train",
            author: "Paula Hawkins",
            summary: "Rachel Watson witnesses something shocking from her train window. Her attempt to uncover the truth becomes entangled with her own troubled past and unreliable memories.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574938856i/22557272.jpg"
        },
        {
            title: "Shutter Island",
            author: "Dennis Lehane",
            summary: "US Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane. Reality and delusion blur in this mind-bending thriller.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388192219i/21686.jpg"
        },
        {
            title: "Sharp Objects",
            author: "Gillian Flynn",
            summary: "Reporter Camille Preaker returns to her hometown to cover murders of two girls. She must confront her own demons and her toxic relationship with her mother.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891.jpg"
        },
        {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            summary: "Alicia Berenson shot her husband and hasn't spoken since. Therapist Theo Faber is determined to unravel her silence and discover the truth behind the murder.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg"
        },
        {
            title: "Behind Closed Doors",
            author: "B.A. Paris",
            summary: "Jack and Grace seem like the perfect couple, but behind closed doors, their marriage hides a terrifying secret. A chilling exploration of control and captivity.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1448044583i/26228654.jpg"
        },
        {
            title: "The Woman in the Window",
            author: "A.J. Finn",
            summary: "Agoraphobic Anna Fox witnesses a crime from her window, but no one believes her. She must uncover the truth while questioning her own sanity and perceptions.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515025532i/35933758.jpg"
        },
        {
            title: "We Need to Talk About Kevin",
            author: "Lionel Shriver",
            summary: "Eva Khatchadourian reflects on raising her son Kevin, who committed a horrific school massacre. A disturbing exploration of nature versus nurture and maternal guilt.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1438105808i/80660.jpg"
        },
        {
            title: "The Turn of the Key",
            author: "Ruth Ware",
            summary: "Nanny Rowan takes a job at a smart home in Scotland and is soon arrested for murdering a child. She writes from prison, claiming she's innocent, but can we trust her?",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1547318656i/42080142.jpg"
        },
        {
            title: "Before I Go to Sleep",
            author: "S.J. Watson",
            summary: "Christine wakes every morning with no memory due to amnesia. As she pieces together her past through a journal, she realizes she can't trust anyone, not even herself.",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327931465i/9736930.jpg"
        }
    ]
};

// DOM Elements
const genrePage = document.getElementById('genre-page');
const booksPage = document.getElementById('books-page');
const genreCards = document.querySelectorAll('.genre-card');
const backBtn = document.getElementById('back-btn');
const genreTitle = document.getElementById('genre-title');
const booksGrid = document.getElementById('books-grid');

// Event Listeners
genreCards.forEach(card => {
    card.addEventListener('click', () => {
        const genre = card.getAttribute('data-genre');
        showBooks(genre);
    });
});

backBtn.addEventListener('click', () => {
    showGenres();
});

// Functions
function showBooks(genre) {
    const books = booksData[genre];
    const genreName = genre.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    genreTitle.textContent = genreName;
    booksGrid.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
    
    genrePage.classList.remove('active');
    booksPage.classList.add('active');
    window.scrollTo(0, 0);
}

function showGenres() {
    booksPage.classList.remove('active');
    genrePage.classList.add('active');
    window.scrollTo(0, 0);
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    card.innerHTML = `
        <div class="book-cover">
            <img src="${book.cover}" alt="${book.title} cover" onerror="this.src='https://via.placeholder.com/250x350/764ba2/ffffff?text=${encodeURIComponent(book.title)}'">
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-summary">${book.summary}</p>
        </div>
    `;
    
    return card;
}

// Initialize - show genre page on load
genrePage.classList.add('active');
