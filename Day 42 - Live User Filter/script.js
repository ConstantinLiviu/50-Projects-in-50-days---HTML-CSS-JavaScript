const userEl = document.querySelector(".users-list");
const searchBarEl = document.querySelector(".search");
const APIusers = [];

/**
 * Fetches data via API in order to create list item elements and populate them accordingly
 */
async function getUsers() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  results.innerHTML = "";

  results.forEach((user) => {
    const userInfoLi = document.createElement("li");

    APIusers.push(userInfoLi);

    userInfoLi.innerHTML = ` <img
    src="${user.picture.large}"
    alt="${user.name.first}"
    class="profile-pic"
  />
  <div class="info">
    <p class="name">${user.name.first} ${user.name.last}</p>
    <p class="location">${user.location.city}, ${user.location.country}</p>
  </div>`;

    userEl.appendChild(userInfoLi);
  });
}

/**
 * Checks for a match between the input field value and the list item user name/location and hides all non-matches
 * @param {string} string - input field value used as a search parameter
 *
 */
function filterUsers(string) {
  APIusers.forEach((user) => {
    if (user.textContent.toLowerCase().includes(string.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}

getUsers();
searchBarEl.addEventListener("input", (e) => filterUsers(e.target.value));
