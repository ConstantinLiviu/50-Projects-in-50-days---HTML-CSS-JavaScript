const btnEl = document.querySelector(".btn-container");
const boxEl = document.querySelector(".boxes-container");
const containerShadowRightEl = document.querySelector(
  ".boxes-container-shadow-right"
);
const containerShadowBottomEl = document.querySelector(
  ".boxes-container-shadow-bottom"
);

let screenWidth = window.screen.width;
// Btn funcitonality, margin trigger for boxes grid shadows

btnEl.addEventListener("click", () => {
  boxEl.classList.toggle("expanded");
  containerShadowBottomEl.classList.toggle("hidden");
  containerShadowRightEl.classList.toggle("hidden");
});

/**
 * Function generates boxes elements using a nested for loop, adds styling, sets background position dinamically and appends elements to the grid
 */
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      if (screenWidth < 601) {
        box.style.backgroundPosition = `${-j * 8}rem ${-i * 8}rem`;
      } else if (screenWidth < 1301 && screenWidth > 600) {
        box.style.backgroundPosition = `${-j * 10}rem ${-i * 10}rem`;
      } else {
        box.style.backgroundPosition = `${-j * 12.5}rem ${-i * 12.5}rem`;
      }

      boxEl.appendChild(box);
    }
  }
}

createBoxes();
