const btnEl = document.querySelectorAll("button");
const audioArr = [
  new Audio("sound/airhorn.mp3"),
  new Audio("sound/emotional.mp3"),
  new Audio("sound/goat.mp3"),
  new Audio("sound/hell no.mp3"),
  new Audio("sound/hello there.mp3"),
  new Audio("sound/no-no-no.mp3"),
  new Audio("sound/wow.mp3"),
  new Audio("sound/noice.mp3"),
];

function cutSound() {
  audioArr.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

btnEl.forEach((button, i) => {
  button.addEventListener("click", () => {
    cutSound();
    audioArr[i].play();
  });
});
