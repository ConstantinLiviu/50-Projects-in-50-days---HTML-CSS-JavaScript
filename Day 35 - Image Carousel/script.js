const carouselEl = document.querySelector(".carousel");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let i = 0;
let timer = setInterval(carouselLoopDesktop, 2000);

/**
 * Function scrolls carousel container and increases/resets index
 */

function carouselLoopDesktop() {
  carouselEl.scrollLeft += 660;
  i++;
  if (i > 3) {
    i = 0;
    carouselEl.scrollLeft = 0;
  }
}
