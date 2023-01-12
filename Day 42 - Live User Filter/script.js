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
