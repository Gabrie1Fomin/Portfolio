const API_KEY = '29c1496f97e8af19fb9febad823b23bd';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

// Map moods to genres
const moodToGenre = { // A collection of all the moods and their cooresponding genres. Some moods have multiple genres.
    happy: [35, 10751],
    sad: [18, 10749],
    angry: [28, 80, 53],
    bored: [12, 14, 9648],
    romantic: [10749, 35],
    nostalgic: [18, 10751, 36],
    cozy: [16, 10751, 14],
    motivated: [18, 99, 10770],
    lonely: [18, 878, 16],
    chaotic: [28, 35, 878],
    scared: [27, 53, 9648],
    curious: [99, 9648, 878],
    rebellious: [28, 10752, 80],
    chill: [10402, 35, 16],
    existential: [878, 18, 14]
};

const genreMap = { //A colletion of all the genres in the database
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
};

let movies = [];
let currentMovieIndex = 0;

async function fetchMovies() { // Fetch movies based on selected mood, year range, and popularity
    document.getElementById('findMovieButton').disabled = true;

    const mood = document.getElementById('mood').value;
    const sliderValue = document.getElementById('yearRange').value;
    const isPopular = document.getElementById('popularCheckbox').checked;

    const minYear = 1970;
    const maxYear = 2024;
    const selectedYear = Math.round(minYear + ((sliderValue / 100) * (maxYear - minYear))); // Calculates the selected year based on the slider value
    const range = 5;
    const yearStart = Math.max(minYear, selectedYear - range);
    const yearEnd = Math.min(maxYear, selectedYear + range);

    const genres = moodToGenre[mood]; // Get the genres based on the selected mood
    movies = [];

    for (const genre of genres) { // Loop through each genre and fetch movies
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&primary_release_date.gte=${yearStart}-01-01&primary_release_date.lte=${yearEnd}-12-31&sort_by=popularity.desc${isPopular ? '&vote_average.gte=7' : ''}`;

        try {
            const response = await fetch(url);
            const data = await response.json(); // Fetches the data from the API
            if (data.results) {
                movies = movies.concat(data.results); // Adds the results to the movies array
            }
        } catch (error) {
            console.error("Error fetching movies for genre " + genre + ":", error); // Logs any errors that occur during the fetch
        }
    }
    movies = [...new Set(movies.map(movie => movie.id))].map(id => movies.find(movie => movie.id === id)); // Filters out duplicate movies by their ID

    if (movies.length === 0) {
        document.getElementById('findMovieButton').disabled = false; // Re-enable the button if no movies are found
        document.getElementById('results').innerHTML = '<p>No movies found for your selection. Please try again with different filters!</p>'; // Displays a message if no movies are found
    }
}

function getGenresText(genreIds) { // Convert genre IDs to genre names
    return genreIds.map(id => genreMap[id] || 'Unknown').join(', '); // Maps the genre IDs to their corresponding names and joins them into a string
}

function displayMovie() { // Display a random movie from the filtered list
    if (movies.length === 0) {
        document.getElementById('results').innerHTML = '<p>No movies available.</p>';
        return;
    }

    const movie = movies[Math.floor(Math.random() * movies.length)]; // Select a random movie from the filtered list
    const genres = getGenresText(movie.genre_ids); // Get the genre names based on the genre IDs

    // Display the movie details in the results section formatted with HTML
    document.getElementById('results').innerHTML = `
        <h3>${movie.title}</h3>
        ${movie.poster_path ? `<img src="${IMAGE_BASE_URL}${movie.poster_path}" alt="Poster for ${movie.title}" />` : '<p>No poster available</p>'}
        <p><strong>Genres:</strong> ${genres}</p> // Displays the genres of the movie
        <p><strong>Movie Summary: </strong> ${movie.overview || 'No description available.'}</p> // Displays the movie summary if available

    `;
}

// Event listeners for the buttons
async function findMovie() {
    await fetchMovies();
    document.getElementById('findMovieButton').disabled = true;
    displayMovie();
}

// Event listener for the "Next Movie" button, if pressed, shows the next movie in the list
function nextMovie() {
    if (movies.length === 0) return;

    currentMovieIndex = (currentMovieIndex + 1) % movies.length;
    const movie = movies[currentMovieIndex];
    const genres = getGenresText(movie.genre_ids);

    document.getElementById('results').innerHTML = `
        <h3>${movie.title}</h3>
        ${movie.poster_path ? `<img src="${IMAGE_BASE_URL}${movie.poster_path}" alt="Poster for ${movie.title}" />` : '<p>No poster available</p>'}
        <p><strong>Genres:</strong> ${genres}</p>
        <p><strong>Movie Summary: </strong>${movie.overview || 'No description available.'}</p>
    `;
}

function selectRandomMood() {
    const moodSelect = document.getElementById('mood');
    const moods = Array.from(moodSelect.options).map(option => option.value);
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    moodSelect.value = randomMood;
    findMovie(); 
}

// Updates the year value displayed next to the slider
document.getElementById('yearRange').addEventListener('input', (e) => {
    const year = 1970 + Math.round((e.target.value / 100) * (2024 - 1970));
    document.getElementById('yearValue').textContent = year;
});

document.getElementById('mood').addEventListener('change', () => {
    document.getElementById('findMovieButton').disabled = false;
});