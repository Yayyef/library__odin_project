// Le constructeur d'objet qui sera utilisé et son prototype (pour économiser de la mémoire). Il faut créer un constructeur, lui attribuer un prototype, puis faire une copie de ce prototype avec Object.create() pour le prototype de mon constructeur. TORDU. Et probablement inutile dans ce cas. Il faudrait que d'autres constructeurs ou objets aient à hériter de MoviePrototype.
function MoviePrototype() {
}
MoviePrototype.prototype.info = function() {
    if (this.seen === false) {
        return `${this.title}, directed by ${this.director}, ${this.duration} minutes long, not seen yet`;
    } else if (this.seen === true) {
        return `${this.title}, directed by ${this.director}, ${this.duration} minutes long, already seen`;
}
}
MoviePrototype.prototype.toggleSeen = function() {
    this.seen ? this.seen = false : this.seen = true;
}
function Movie(title, director, date, duration, seen) {
    this.title = title,
    this.director = director,
    this.date = date,
    this.duration = duration,
    this.seen = seen
}
Movie.prototype = Object.create(MoviePrototype.prototype);

let myMovies = [];
const bookContainer = document.querySelector(".movies-container");
const submitFilmButton = document.querySelector("#submitFilmButton");
const lesOlympiades = new Movie('Les Olympiades', 'Jacques Audiard', 2021, 120, true);
const trePiani = new Movie('Tre Piani', 'Nanni Morreti', 2021, 105, false);
myMovies.push(lesOlympiades);
myMovies.push(trePiani);

// Il faudrait que j'essaye d'utiliser object.create.
// const myObject = Object.create(Object.prototype);

// Ajoute les films crées dans le tableau myMovies
// function addMovieToMyMovies(movie) {
//     myMovies.push(movie);
// }
function displayAllMovies() {
    removeMovieCards();

    for(i = 0; i < myMovies.length; i++) {
        cardCreation(myMovies[i], i);
    }
    // myMovies.forEach(movie => cardCreation(movie))
}
function removeMovieCards() {
    const movieCards = Array.from(document.querySelectorAll('.movie-card'));
    for(i = 0; i < movieCards.length; i++) {
        movieCards[i].remove();
    }
}

// Construction des cartes films et affichage des objets contenus dans le tableau myMovies
const cardCreation = (movie, index) => {
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
    
    // Ici je défini un attribut qui me permet de trouver l'index du film à supprimer de l'array
    movieCard.setAttribute("data-index", index);

    // On peut avec le boutton retirer un élément du tableau, mais tout reste affiché et les data-index demeurent les mêmes. Il faut donc rafraichir la page à chaque fois OU BIEN retirer l'élément visé et mettre à jour les data-index.
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", (e) => {
        myMovies.splice((e.target.parentElement.attributes["data-index"].value), 1);
        alert(`${e.target.nextElementSibling.innerText} has been removed.`);
        displayAllMovies();
    });
    movieCard.appendChild(removeButton);

    // Boutton pour toggle si on a vu ou non le film.
    const seenButton = document.createElement("button");
    seenButton.textContent = "J'ai vu le film";
    seenButton.addEventListener("click", (e) => {
        myMovies[e.target.parentElement.attributes["data-index"].value].toggleSeen();
        console.log(myMovies[e.target.parentElement.attributes["data-index"].value]);
        displayAllMovies();
    });

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieDirector);
    movieCard.appendChild(movieDate);
    movieCard.appendChild(movieDuration);
    movieCard.appendChild(seenButton);
    movieCard.appendChild(movieSeen);   
};

// Au chargement de la page, la fonction créant les fiches de film est appellée sous les films du tableau myMovies
window.addEventListener("onload", displayAllMovies());

// Lorsqu'on clique sur #submitFilmButton, les valeurs remplies par l'utilisateur sont stockées dans des variables qui permettent la construction d'un objet Film
submitFilmButton.addEventListener("click", () => {
    const userTitle = document.querySelector("#userTitle").value;
    const userDirector = document.querySelector("#userDirector").value;
    const userDate = document.querySelector("#userDate").value;
    const userDuration = document.querySelector("#userDuration").value;
    // const userSeen = document.querySelector("#userSeen").value;
    
    removeMovieCards();

    const userFilm = new Movie(userTitle, userDirector, userDate, userDuration, false);
    myMovies.push(userFilm);
    displayAllMovies();

    // cardCreation(userFilm);
});

