import { movies } from './data.js';

// Exercise 1: Get the arr of all directors.
function getAllDirectors(arr) {
  return arr.map((movie) => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(arr, director) {
  return arr.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(arr, director) {
  const directorMovies = arr.filter((movie) => movie.director === director);
  return (
    directorMovies.reduce((acc, movie) => acc + movie.score, 0) /
    directorMovies.length
  );
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(arr) {
  return arr
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(arr) {
  return [...arr].sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(arr, category) {
  const filteredMovies = arr.filter((movie) => movie.genre.includes(category));
  return filteredMovies.length === 0
    ? 0
    : filteredMovies.reduce((acc, movie) => acc + movie.score, 0) /
        filteredMovies.length;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(arr) {
  return arr.map((movie) => ({
    ...movie,
    duration:
      parseInt(movie.duration.match(/(\d+)h/)?.[1] || 0) * 60 +
      parseInt(movie.duration.match(/(\d+)min/)?.[1] || 0)
  }));
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(arr, year) {
  const moviesOfYear = arr.filter((movie) => movie.year === year);
  if (moviesOfYear.length === 0) return null;
  return moviesOfYear.reduce((best, movie) =>
    movie.score > best.score ? movie : best
  );
}

// The following is required to make unit tests work.
export {
  getAllDirectors,
  getMoviesFromDirector,
  moviesAverageOfDirector,
  orderAlphabetically,
  orderByYear,
  moviesAverageByCategory,
  hoursToMinutes,
  bestFilmOfYear
};
