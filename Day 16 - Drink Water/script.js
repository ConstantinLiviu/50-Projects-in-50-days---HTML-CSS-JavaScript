const waterCupEl = document.querySelector(".water-cup");
const quantityEl = document.querySelector(".quantity");
const remainingEl = document.querySelector(".remaining");
const remainingWaterEl = document.querySelector(".remaining-water");
const percentageEl = document.querySelector(".percent-completed");
const glassEl = document.querySelectorAll(".glass");

glassEl.forEach((glass, i) => {
  glass.addEventListener("click", () => emptyGlass(i));
});
/**
 * Empties all glasses up to and including the one being clicked or replenishes the glass if the user clicks the last empty one
 *
 * @param {int} i -> index of the glass element being clicked;
 */
function emptyGlass(i) {
  if (i === 7 && glassEl[7].classList.contains("empty")) {
    glassEl[i].classList.remove("empty");
  } else if (
    glassEl[i].classList.contains("empty") &&
    !glassEl[i + 1].classList.contains("empty")
  ) {
    glassEl[i].classList.remove("empty");
  } else {
    for (a = 0; a <= i; a++) {
      glassEl[a].classList.add("empty");
    }
  }

  updateWaterCup();
}
/**
 * Automatically resizes water div height to reflect the amount of glasses already emptied
 */
function updateWaterCup() {
  const full = document.querySelectorAll(".glass:not(.empty)").length;
  const measuresEl = document.querySelector(".remaining-water");
  if (full === 0) {
    percentageEl.style.visibility = "visible";
    percentageEl.style.height = `${(8 - full) * 12.5}%`;
    percentageEl.innerText = `${(8 - full) * 12.5}%`;
    measuresEl.style.visibility = "hidden";
    waterCupEl.style.backgroundColor = "transparent";
    measuresEl.style.height = 0;
    percentageEl.style.borderRadius = "0.2rem 0.2rem 5rem 5rem";
    measuresEl.style.flexDirection = "column";
    quantityEl.style.marginRight = "0";
  } else if (full !== 8) {
    percentageEl.style.visibility = "visible";
    measuresEl.style.visibility = "visible";
    percentageEl.style.height = `${(8 - full) * 12.5}%`;
    percentageEl.innerText = `${(8 - full) * 12.5}%`;
    waterCupEl.style.backgroundColor = "#7fb5ff";
    quantityEl.innerText = `${2 - (8 - full) * 0.25} L`;
    percentageEl.style.borderRadius = 0;
    measuresEl.style.height = "auto";
    measuresEl.style.flexDirection = "column";
    quantityEl.style.marginRight = "0";
    if (full === 1) {
      measuresEl.style.flexDirection = "row";
      quantityEl.style.marginRight = "1.2rem";
    }
  } else if (full === 8) {
    percentageEl.style.visibility = "hidden";
    quantityEl.innerText = "2 L";
    percentageEl.style.height = 0;
    measuresEl.style.flexDirection = "column";
    quantityEl.style.marginRight = "0";
  }
}
