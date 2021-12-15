const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function() {
  const filmTitles = [];
  this.films.forEach(function(film){
    filmTitles.push(film.title)
  });
  return filmTitles;
};

Cinema.prototype.filmByTitle = function(filmTitle) {
  const foundFilm = this.films.filter((film) => film.title === filmTitle);
  return foundFilm[0];
};

Cinema.prototype.filmByGenre = function(genre) {
  const foundFilms = this.films.filter((film) => film.genre === genre);
  return foundFilms;
};

Cinema.prototype.someFilmsFromYear = function(year) {
  // use every() if everything is the same. use some() if more than one is the same
  const foundYear = this.films.some((film) => film.year === year);
  return foundYear;
};

Cinema.prototype.everyFilmOverLength = function(length) {
  const result = this.films.every((film) => film.length > length);
  return result;
};

Cinema.prototype.sumOfAllRunningTime = function() {
  let total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return total;
};

/////////////////////////////
// Cinema.prototype.filmByProperty = function(property, value) {
//   return this.films.filter((film) => film[property] === value);
// }

module.exports = Cinema;