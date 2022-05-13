// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map( x => x.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter( x => x.director == director );
  // console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = getMoviesFromDirector(array, director).map( x => x.score);
  let result = parseFloat( (scores.reduce( (previous, current) => previous + current )/scores.length).toFixed(2) );
  // console.log("EXERCICE 3 ->", scores);
  // console.log("EXERCICE 3 ->", scores.reduce( (previous, current) => previous + current ));
  // console.log("EXERCICE 3 ->", result);
  return result;
  }

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map( x => x.title).sort().slice(0,20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear([...array]) {
  let compare_year_title = (a, b) => {
    if(a.year < b.year)
      return -1;
    if(a.year > b.year)
      return 1;
    if(a.title < b.title)
      return -1;
    if(a.title > b.title)
      return 1;
    return 0;
  }
  let result = array.sort( compare_year_title);
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
