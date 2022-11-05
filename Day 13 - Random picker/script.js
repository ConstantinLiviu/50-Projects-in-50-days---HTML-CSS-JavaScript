const choicesCont = document.querySelector(".choices");
const choicesTxt = document.querySelector("textarea");

/**
 * Generates a span element and appends it to the choices div
 * @param {string} tag -> letters to be used in span.innerText
 */
function createSpan(tag) {
  let spanEl = document.createElement("span");
  spanEl.innerText = tag;
  choicesCont.appendChild(spanEl);
}

/**
 * Turns user's input into an array of choices which are rendered on the screen as spans
 * @param {string} text -> User input, to be used to create spans
 *
 */
function addSpan(text) {
  // take txt, split by coma, eliminate empty strings, discard white spaces
  const tags = text
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  // delete any spans that were already populated
  choicesCont.innerHTML = "";
  // create a new span with the updated text
  tags.forEach((tag) => {
    createSpan(tag);
  });
}

/**
 * Adds/removes the highlight class
 * @param {Element} element -> tag selected by the randomized function
 * @param {int} state -> determines add/remove outcome
 */
function highlightToggle(state, element) {
  if (state === 0) {
    element.classList.remove("highlight");
  } else {
    element.classList.add("highlight");
  }
}

/**
 * Displays choice process animation and selects a random option
 * @param {int} step -> sets the amount of highlight animation cycles
 * @param {Array} spanArr -> array of options input by the user
 */
function randomChoice(step, spanArr) {
  // Choice animation start
  const interval = setInterval(() => {
    const randomTag = spanArr[Math.floor(Math.random() * spanArr.length)];
    highlightToggle(1, randomTag);
    setTimeout(() => {
      highlightToggle(0, randomTag);
    }, 100);
  }, 100);

  //  Choice animation stop
  setTimeout(() => {
    clearInterval(interval);

    // determine and announce winner
    setTimeout(() => {
      const winningRandomTag =
        spanArr[Math.floor(Math.random() * spanArr.length)];

      highlightToggle(1, winningRandomTag);
      choicesTxt.disabled = false;
      choicesTxt.value = `${winningRandomTag.innerText} is the winner! You may use the random choice picker right after it clears itself`;

      //   clear the textarea, give user 5s to read the text;
      setTimeout(() => {
        choicesTxt.value = "";
        choicesCont.innerHTML = "";
      }, 5000);
    }, 100);

    // allow 1/2s to be added to the animation total time for each additional element in the array
  }, (step * 1000) / 2);
}

choicesTxt.addEventListener("keyup", (e) => {
  addSpan(e.target.value);
  if (e.key === "Enter") {
    const spanArr = document.querySelectorAll(".choices span");
    const step = spanArr.length;
    // get the number of tags to serve as a basis for the total animation time in the random choice function

    choicesTxt.value = "";
    choicesTxt.disabled = true;
    randomChoice(step, spanArr);
  }
});
