const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c9a963aede0726fe0999645ae907bd0d&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=c9a963aede0726fe0999645ae907bd0d&query="';

const formEl = document.querySelector(".form");
const searchEl = document.querySelector(".search");
const moviesListEl = document.querySelector(".movies-list");
const menuBtnEl = document.querySelector(".ham-menu");
const menuOptions = document.querySelector("nav ul");
const bodyEl = document.querySelector("body");

/**
 * Function takes in an api url key in order to retrieve movie related info
 * @param {URL} url
 */

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  showMovies(data.results);
}

/**
 * Takes in the page search results as an objects and populates the page with movie cards based on search terms relevance
 * @param {Object} movieData
 */
function showMovies(movieData) {
  // clear any existing movie/page elements
  moviesListEl.innerHTML = "";

  // iterate through search results
  movieData.forEach((movie) => {
    //destructure retrieved data
    const { title, poster_path, vote_average, overview } = movie;

    // create empty element on page for each item
    const movieEl = document.createElement("div");
    // add styles
    movieEl.classList.add("movie-item");
    // assign movie item structure
    movieEl.innerHTML = `<div class="poster-container">
    <img src="${
      IMG_PATH + poster_path
    }" alt="Unavailable data" class="movie-poster" />
    </div>
    <div class="movie-info">
      <h3 class="movie-title">${title}</h3>
      <span class="rating ${avgVoteToRating(
        vote_average
      )}">${vote_average}</span>
    </div>
    <div class="synopsis">
      <h3 class="synopsis-title">Synopsis</h3>
      <p class="synopsis-text">
        ${overview}
      </p>
    </div>`;

    moviesListEl.appendChild(movieEl);
  });
}

/**
 * function the vote_average param to determine which rating class is applied by returning the class as a string
 * @param {string} voteResult
 * @returns
 */
function avgVoteToRating(voteResult) {
  if (voteResult >= 8) {
    return "good";
  } else if (voteResult >= 6) {
    return "so-so";
  } else if (voteResult >= 4) {
    return "meh";
  } else {
    return "bad";
  }
}

getMovies(API_URL);

formEl.addEventListener("submit", (e) => {
  // prevent submitting info to the page
  e.preventDefault();

  const searchTerms = searchEl.value;
  console.log(searchTerms);

  if (searchTerms && searchTerms !== " ") {
    // concat api link with search words
    getMovies(SEARCH_API + searchTerms);

    searchEl.value = "";
  } else {
    window.location.reload;
  }
});

menuBtnEl.addEventListener("click", () => {
  if (menuOptions.classList.contains("hide-ul")) {
    bodyEl.style.marginTop = "4.4rem";
  } else {
    bodyEl.style.marginTop = "18.4rem";
  }
});
