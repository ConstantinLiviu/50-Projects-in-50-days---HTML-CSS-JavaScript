const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c9a963aede0726fe0999645ae907bd0d&page=1";

const IMG_PATH =
  "https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=c9a963aede0726fe0999645ae907bd0d&query="';

const formEl = document.querySelector(".form");
const searchEl = document.querySelector(".search");

/**
 * Function takes in an api url key in order to retrieve movie related info
 * @param {URL} url
 */

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  //   console.log(data.results[0]["overview"]);
  console.log(data.results);
}

getMovies(API_URL);

formEl.addEventListener("submit", (e) => {
  // prevent submitting info to the page
  e.preventDefault();

  const searchTerms = searchEl.value;
  console.log(searchTerms);

  if (searchTerms && searchTerms !== " ") {
    // concat api link with search word
    getMovies(SEARCH_API + searchTerms);

    searchEl.value = "";
  } else {
    window.location.reload;
  }
});
