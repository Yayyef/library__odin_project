let myMovies = [];

function Film(title, director, duration, seen) {
    this.title = title,
    this.director = director,
    this.duration = duration,
    this.seen = seen
};

Film.prototype.info = function() {
    if (this.seen === false) {
        return `${this.title}, directed by ${this.director}, ${this.duration} minutes long, not seen yet`;
    } if (this.seen === true) {
        return `${this.title}, directed by ${this.director}, ${this.duration} minutes long, already seen`;
}
};

function addMovieToMyMovies(movie) {
    myMovies.push(movie);
}

const lesOlympiades = new Film('Les Olympiades', 'Jacques Audiard', 120, true);
const trePiani = new Film('Tre Piani', 'Nanni Morreti', 105, false);

const myObject = Object.create(Object.prototype);