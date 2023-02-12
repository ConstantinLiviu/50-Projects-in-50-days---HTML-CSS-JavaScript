const timerEl = document.querySelector(".timer span");
const scoreEl = document.querySelector(".current-score span");
const personalBestEl = document.querySelector(".personal-best span");
const newGameEl = document.querySelector(".new-game-link");

const screenEl = document.querySelector(".playing-field");
const gameModeEl = document.querySelectorAll(".game-mode");
const startRoundEl = document.querySelector(".game-start");

let score = 0;
let personalBestExt;
let personalBestTA;
let gametype;

// retrieve value from local storage or default to 0 if no values available
if (localStorage.getItem("Personal Best Extermination" === undefined)) {
  personalBestExt = 0;
} else {
  personalBestExt = localStorage.getItem("Personal Best Extermination");
}

if (localStorage.getItem("Personal Best Time Attack" === undefined)) {
  personalBestAT = 0;
} else {
  personalBestTA = localStorage.getItem("Personal Best Time Attack");
}

// redirect user to game mode screen and display the start round button on the game field screen
newGameEl.addEventListener("click", () => {
  startRoundEl.classList.remove("hide");
  resetGame();
});

/**
 * Functions resets the score value to 0, score element/timer element text content and removes all insect sprite elements
 */
function resetGame() {
  score = 0;
  scoreEl.textContent = "";
  timerEl.textContent = "";
  while (screenEl.lastElementChild.classList.contains("bug-model")) {
    screenEl.lastElementChild.remove();
  }
}

// get the game mode choice input as a 0 1 value in order to determine the parameters of the game round and what info is displayed
gameModeEl.forEach((element, i) => {
  element.addEventListener("click", () => {
    gametype = i;
  });
});

// starts a round, regardless of the game mode, hides the start button, sets timer based on game mode choice and adds insect sprite elements for each one the user clicks/taps
startRoundEl.addEventListener("click", () => {
  startRoundEl.classList.add("hide");
  startTimer(gametype);
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

/**
 * Function determines which game mode was selected and sets the timer type, score and personal best values and establishes the end game condition
 * @param {Number} gametype - an int generated using a forEach when the user chooses the game mode
 */
function startTimer(gametype) {
  if (gametype === 0) {
    // get personal best value
    personalBestEl.textContent = personalBestExt;
    // change timer text content, depending on screen width
    timerEl.innerHTML = `<i class="fas fa-infinity"></i><span>  Click here to end the round</span>`;
    if (window.innerWidth < 1366) {
      timerEl.innerHTML = `<i class="fas fa-infinity"></i><span>  Tap here to end the round</span>`;
    }
    // initial score value
    scoreEl.textContent = score;
    // turn timer text into end game condition and add an event listener to it
    timerEl.style.cursor = "pointer";
    timerEl.addEventListener("click", (e) => {
      // end game feedback
      timerEl.textContent = `You got rid of ${score} this round. Hit new game to try again!`;
      // clear playing field
      while (screenEl.lastElementChild.classList.contains("bug-model")) {
        screenEl.lastElementChild.remove();
      }
      // determine if a new personal best was achieved and update value if so
      if (score > personalBestExt) {
        personalBestExt = score;
        personalBestEl.innerHTML = personalBestExt;
        localStorage.setItem("Personal Best Extermination", personalBestExt);
      }
    });
  } else {
    // initial score value
    scoreEl.textContent = 0;
    // get personal best value
    personalBestEl.textContent = personalBestTA;
    //initial timer value
    timerEl.innerHTML = "0:20";
    // offset uppercase value from css file
    timerEl.style.textTransform = "lowercase";
    // set timer
    let seconds = 20;
    // countdown start
    let interval = setInterval(() => {
      if (seconds === 0) {
        // stop countdown
        clearInterval(interval);
        // offset lowercase value set above
        timerEl.style.textTransform = "none";
        // provide end game feedback
        timerEl.textContent = `You got rid of ${score} this round. Hit new game to try again!`;
        // clear playing field
        while (screenEl.lastElementChild.classList.contains("bug-model")) {
          screenEl.lastElementChild.remove();
        }
        // determine if a new personal best was achieved and update value if so
        if (score > personalBestTA) {
          personalBestTA = score;
          personalBestEl.innerHTML = personalBestTA;
          localStorage.setItem("Personal Best Time Attack", personalBestTA);
        }
      } else {
        // timer BAU
        seconds -= 1;
        // add a 0 in front of the second once countdown reaches 9 seconds left
        timerEl.innerHTML = seconds < 10 ? `0:0${seconds}` : `0:${seconds}`;
      }
    }, 1000);
  }
}
