const jokeTxtEl = document.querySelector(".text");
const getJokeBtn = document.querySelector("button");

function getJoke() {
  let jokeFormat = {
    headers: {
      Accept: "text/plain",
    },
  };
  fetch("https://icanhazdadjoke.com/", jokeFormat)
    .then((response) => response.text())
    .then((text) => {
      jokeTxtEl.innerHTML = text;
    });
}

getJokeBtn.addEventListener("click", () => {
  getJoke();
});
