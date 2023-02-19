const APIURL = "https://api.github.com/users/";
const formEl = document.querySelector("form");
const searchEl = document.querySelector(".searchbar");
const projectContainerEl = document.querySelector(".project-container");
const profileInfoEl = document.querySelector(".profile-info-container");

/**
 * Function takes in the username in order to return info from their Github profile
 * @param {string} username the string input by the user when looking up Github profiles
 */
async function getUser(username) {
  try {
    // destructure response object to get just the 'data' property
    const { data } = await axios(APIURL + username);

    userProfile(data);
    showRepo(username);
  } catch (err) {
    if (err.response.status == 404) {
      noMatch("No matches found :(");
    }
  }
}

/**
 * Function uses repositories Github link to retrieve repositories and sort them by date of release and calls a function to create and display info on page
 * @param {string} username the string input by the user when looking up Github profiles
 */
async function showRepo(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addRepos(data);
  } catch (err) {
    noMatch("unable to retrieve repositories :(");
  }
}

/**
 * Function retrieves Github profile data, expands profile info field and creates the HTML elements
 * @param {URL} user  the API link/username concatenation used to retrieve Github profile data
 */
function userProfile(user) {
  if (!projectContainerEl.classList.contains("expand")) {
    projectContainerEl.classList.add("expand");
  }

  profileInfoEl.innerHTML = "";
  profileInfoEl.classList.add("fade");

  profileInfoEl.innerHTML = `<div class="img-container">
    <img
      src="${user.avatar_url}"
      alt="${user.name} profile-pic"
    />
  </div>
  <div class="profile-info">
    <h1 class="name">${user.name}</h1>
    <p class="bio">
      ${user.bio}
    </p>
    <div class="stats">
      <p>${user.followers} <strong>Followers</strong></p>
      <p>${user.following} <strong>Following</strong></p>
      <p>${user.public_repos} <strong>Repositories</strong></p>
    </div>
    <div class="repos">
    </div>
  </div>`;
  setTimeout(() => {
    profileInfoEl.classList.remove("fade");
  }, 200);
}

/**
 * Function creates HTML elements in order to display an error response if one is enncountered
 * @param {string} msg preset string representing the encountered error
 */
function noMatch(msg) {
  if (!projectContainerEl.classList.contains("expand")) {
    projectContainerEl.classList.add("expand");
  }
  profileInfoEl.innerHTML = `<div>
  <h1 class="error-msg">
  ${msg}
  </h1>  
  </div>`;
}

/**
 *  Function retireves all available info regarding existing repositories, creates an element for each and appends it to an existing HTML element while limiting the displayed elements to 5, regardless of the length of the repositories list
 * @param {URL} repos Github API link to gain access to repositories info
 */
function addRepos(repos) {
  const reposEl = document.querySelector(".repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.textContent = repo.name;
    reposEl.appendChild(repoEl);
  });
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = searchEl.value;

  if (user) {
    getUser(user);

    searchEl.value = "";
  }
});
