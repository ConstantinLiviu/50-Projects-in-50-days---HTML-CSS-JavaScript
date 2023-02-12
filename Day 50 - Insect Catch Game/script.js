const timerEl = document.querySelector(".timer span");
const scoreEl = document.querySelector(".current-score span");
const personalBestEl = document.querySelector(".personal-best span");
const newGameEl = document.querySelector(".new-game-link");

const screenEl = document.querySelector(".playing-field");
const gameModeEl = document.querySelectorAll(".game-mode");
const startRoundEl = document.querySelector(".game-start");

let seconds = 0;
let score = 0;
let personalBestExt;
let personalBestTA;
let gametype;

newGameEl.addEventListener("click", () => {
  startRoundEl.classList.remove("hide");
  scoreEl.textContent = "";
  timerEl.textContent = "";
  while (screenEl.lastElementChild.classList.contains("bug-model")) {
    screenEl.lastElementChild.remove();
  }
});

gameModeEl.forEach((element, i) => {
  element.addEventListener("click", () => {
    gametype = i;
  });
});

startRoundEl.addEventListener("click", () => {
  startRoundEl.classList.add("hide");
  //   scoreEl.textContent = score;
  //   TODO
  //   personalBestEl.textContent = ;
  startTimer(gametype);
  //   TODO
  // initiateScore();
  addInsect();
});

/**
 * Function creates the insect div and randomly assigns a position on the playing screen. It also adds an event listener on each insect div it creates that responds to a click; on click it removes the target element, increases the score by 1 and adds 2 new insect elements
 */
function addInsect() {
  const insectEl = document.createElement("div");
  insectEl.classList.add("bug-model");
  x = Math.random() * window.innerHeight;
  y = Math.random() * window.innerWidth;
  insectEl.style.left = `${y > 100 ? y - 80 : 20 + Math.random() * 20}px`;
  insectEl.style.top = `${x > 240 ? x - 120 : 120 + Math.random() * 20}px`;
  insectEl.style.transform = `rotate(${Math.random() * 360}deg)`;
  screenEl.append(insectEl);

  insectEl.addEventListener("click", (e) => {
    e.target.remove();
    score += 1;
    scoreEl.textContent = score;
    addInsect();
    addInsect();
  });
}

function startTimer(gametype) {
  if (gametype === 0) {
    timerEl.innerHTML = `<i class="fas fa-infinity"></i><span>  Click here to end the round</span>`;
    if (window.innerWidth < 1366) {
      timerEl.innerHTML = `<i class="fas fa-infinity"></i><span>  Tap here to end the round</span>`;
    }
    timerEl.style.cursor = "pointer";
    timerEl.addEventListener("click", (e) => {
      timerEl.innerHTML = "";
      //   TODO check score against personal best and store value
    });
  } else {
    timerEl.innerHTML = "0:20";
    timerEl.style.textTransform = "lowercase";
    let seconds = 20;
    setInterval(() => {
      if (seconds === 0) {
        clearInterval();
      } else {
        seconds -= 1;
        timerEl.innerHTML = seconds < 10 ? `0:0${seconds}` : `0:${seconds}`;
      }
    }, 1000);
  }
}
