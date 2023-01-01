const APIURL = "https://api.github.com/users/";
const formEl = document.querySelector("form");
const searchEl = document.querySelector(".searchbar");

/**
 * Function takes in the username in order to return info from their Github profile
 * @param {string} username
 */
async function getUser(username) {
  try {
    // destructure response object to get just the 'data' property
    const { data } = await axios(APIURL + username);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function createUserCard(user) {}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = searchEl.value;

  if (user) {
    getUser(user);

    searchEl.value = "";
  }
});
