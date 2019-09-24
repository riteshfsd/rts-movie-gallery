import { MOVIE_DISPLAY } from './type';

export function displayMovie(movieData) {
  return {
    type: MOVIE_DISPLAY,
    movieData,
  }
}

export function loadMovieList() {
fetch('./api/data.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        displayMovie(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
