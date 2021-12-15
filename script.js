let myMovies = [];
const bookContainer = document.querySelector(".movies-container");
const submitFilmButton = document.querySelector("#submitFilmButton");
const lesOlympiades = new Film('Les Olympiades', 'Jacques Audiard', 2021, 120, true);
const trePiani = new Film('Tre Piani', 'Nanni Morreti', 2021, 105, false);
myMovies.push(lesOlympiades);
myMovies.push(trePiani);

// Le constructeur d'objet qui sera utilisé et son prototype (pour économiser de la mémoire)
function Film(title, director, date, duration, seen) {
    this.title = title,
    this.director = director,
    this.date = date,
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
    movieCard.classList.add("movie-card");

    const movieTitle = document.createElement("h3");
    const movieDirector = document.createElement("h4");
    const movieDate = document.createElement("p");
    const movieDuration = document.createElement("p");
    const movieSeen = document.createElement("p");
    
    movieTitle.textContent = movie.title;
    movieDirector.textContent = movie.director;
    movieDate.textContent = movie.date;
    movieDuration.textContent = movie.duration;
    movieSeen.textContent = movie.seen;
    
    bookContainer.appendChild(movieCard);

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieDirector);
    movieCard.appendChild(movieDuration);
    movieCard.appendChild(movieSeen);   
});

submitFilmButton.addEventListener("click", () => {
    const userTitle = document.querySelector("#userTitle").value;
    const userDirector = document.querySelector("#userDirector").value;
    const userDate = document.querySelector("#userDate").value;
    const userDuration = document.querySelector("#userDuration").value;
    const userSeen = document.querySelector("#userSeen").value;

    console.log(userTitle);
    console.log(userDirector);
    console.log(userDate);
    console.log(userDuration);
    console.log(userSeen);

    const userFilm = new Film(userTitle, userDirector, userDate, 120, true);
    console.log(userFilm);
});

const myObject = Object.create(Object.prototype);