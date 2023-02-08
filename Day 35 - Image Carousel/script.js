const carouselEl = document.querySelector(".carousel");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let step;
if (window.innerWidth > 768) {
  step = 660;
} else {
  step = 340;
}

let i = 0;
let timer = setInterval(function () {
  carouselLoopDesktop(step);
}, 2000);

/**
 * Function scrolls carousel container and increases/resets index
 */

function carouselLoopDesktop(step) {
  carouselEl.scrollLeft += step;
  i++;
  if (i > 3) {
    i = 0;
    carouselEl.scrollLeft = 0;
  }
}
