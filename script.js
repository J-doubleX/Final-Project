const movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        rating: 8.8,
        year: 2010,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
    },
    {
        id: 2,
        title: "Spider-Man: Across the Spider-Verse",
        genre: "Animation",
        rating: 8.7,
        year: 2023,
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&q=80",
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        rating: 9.0,
        year: 2008,
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
    },
    {
        id: 4,
        title: "Interstellar",
        genre: "Sci-Fi",
        rating: 8.7,
        year: 2014,
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    },
    {
        id: 5,
        title: "Oppenheimer",
        genre: "Drama",
        rating: 8.9,
        year: 2023,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    },
    {
        id: 6,
        title: "New Movie (Dummy)",
        genre: "Sci-Fi",
        rating: 8.9,
        year: 2023,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    },
    {
        id: 7,
        title: "New Movie (Dummy)",
        genre: "Action",
        rating: 8.9,
        year: 2023,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    },
    {
        id: 8,
        title: "New Movie (Dummy)",
        genre: "Animation",
        rating: 8.9,
        year: 2023,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    },
    {
        id: 9,
        title: "New Movie (Dummy)",
        genre: "Drama",
        rating: 8.9,
        year: 2023,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    },
    {
        id: 10,
        title: "New Movie (Dummy)",
        genre: "Sci-Fi",
        rating: 8.9,
        year: 2023,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    },
];


const movieGrid = document.getElementById("movieGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");

let activeGenre = "All";

function renderMovies(movieList) {
    movieGrid.innerHTML = "";

    if (movieList.length === 0) {
        movieGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No movies found.</p>`;
        return;
    }

    movieList.forEach(movie => {
        // Semantic <article> element for each movie item
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
      <div class="poster-wrapper">
        <img src="${movie.poster}" alt="${movie.title} Poster" loading="lazy">
        <span class="rating-badge">★ ${movie.rating}</span>
      </div>
      <div class="card-body">
        <div>
          <h3>${movie.title}</h3>
          <p class="genre-tag">${movie.genre} • ${movie.year}</p>
        </div>
        <button class="details-btn" onclick="alert('The movie name is ${movie.title}')">View Details</button>
      </div>
    `;

        movieGrid.appendChild(card);
    });
}


function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filtered = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
        const matchesGenre = activeGenre === "All" || movie.genre === activeGenre;
        return matchesSearch && matchesGenre;
    });

    renderMovies(filtered);
}

searchInput.addEventListener("input", filterMovies);

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Update active class state
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Set selected genre and re-filter
        activeGenre = btn.dataset.genre;
        filterMovies();
    });
});



renderMovies(movies);