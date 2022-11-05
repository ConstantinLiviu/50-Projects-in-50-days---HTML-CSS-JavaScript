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

choicesTxt.addEventListener("keyup", (e) => {
  addSpan(e.target.value);
  if (e.key === "Enter") {
    choicesTxt.value = "";
    choicesTxt.disabled = true;
    // randomChoice();
  }
});
