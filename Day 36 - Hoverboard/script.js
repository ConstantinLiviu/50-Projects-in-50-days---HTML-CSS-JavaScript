const containerEl = document.querySelector(".project-container");
const colors = [
  "#5BC0F8",
  "#82CD47",
  "#C21010",
  "#B2A4FF",
  "#FFF56D",
  "#28FFBF",
  "#A03C78",
  "#F98404",
];

const allSquares = 600;

for (i = 0; i < allSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => addColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  containerEl.appendChild(square);
}
/**
 * Changes background color of square elements that are hovered
 * @param {Element} square elements generated on loading the page
 */
function addColor(e) {
  e.style.backgroundColor = `${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
}

/**
 * Removes the background color of square elements once they're no longer hovered over
 * @param {Element} square elements generated on loading the page
 */
function removeColor(e) {
  e.style.backgroundColor = "#222";
}
