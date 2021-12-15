let myMovies = [];
const bookContainer = document.querySelector(".book-container");
const lesOlympiades = new Film('Les Olympiades', 'Jacques Audiard', 120, true);
const trePiani = new Film('Tre Piani', 'Nanni Morreti', 105, false);
myMovies.push(lesOlympiades);
myMovies.push(trePiani);


function Film(title, director, duration, seen) {
    this.title = title,
    this.director = director,
    this.duration = duration,
    this.seen = seen
};

Film.prototype.info = function() {
    if (this.seen === false) {
        return `${this.title}, directed by ${this.director}, ${this.duration} minutes long, not seen yet`;
    } else if (this.seen === true) {
        return `${this.title}, directed by ${this.director}, ${this.duration} minutes long, already seen`;
}
};

// Ajoute les films crées dans le tableau myMovies
function addMovieToMyMovies(movie) {
    myMovies.push(movie);
}

// Construction des cartes films et affichage des objets contenus dans le tableau myMovies
myMovies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add(".book-card");

    const movieTitle = document.createElement("h3");
    const movieDirector = document.createElement("p");
    const movieDuration = document.createElement("p");
    const movieSeen = document.createElement("p");
    
    movieTitle.textContent = movie.title;
    movieDirector.textContent = movie.director;
    movieDuration.textContent = movie.duration;
    movieSeen.textContent = movie.seen;
    
    bookContainer.appendChild(movieCard);

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieDirector);
    movieCard.appendChild(movieDuration);
    movieCard.appendChild(movieSeen);   
});

const myObject = Object.create(Object.prototype);