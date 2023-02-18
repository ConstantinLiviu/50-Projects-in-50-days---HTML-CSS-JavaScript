const APIURL = "https://api.github.com/users/";
const formEl = document.querySelector("form");
const searchEl = document.querySelector(".searchbar");
const projectContainerEl = document.querySelector(".project-container");
const profileInfoEl = document.querySelector(".profile-info-container");

/**
 * Function takes in the username in order to return info from their Github profile
 * @param {string} username
 */
async function getUser(username) {
  try {
    // destructure response object to get just the 'data' property
    const { data } = await axios(APIURL + username);

    userProfile(data);
  } catch (err) {
    if (err.response.status == 404) {
      noMatch("No matches found :(");
    }
  }
}

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

function noMatch(msg) {
  const cardHTML = document.createElement("div");
  cardHTML.innerHTML = `<div>
  <h1>
  ${msg}
  </h1>  
  </div>`;
  projectContainerEl.appendChild(cardHTML);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = searchEl.value;

  if (user) {
    // projectContainerEl.classList.remove("expand");
    getUser(user);

    searchEl.value = "";
  }
});
