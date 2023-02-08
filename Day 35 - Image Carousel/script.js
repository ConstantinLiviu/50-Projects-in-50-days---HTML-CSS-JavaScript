const carouselEl = document.querySelector(".carousel");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

// Determine scroll amount based on window width
let step;
if (window.innerWidth > 768) {
  step = 660;
} else {
  step = 340;
}

let i = 0;
let timer = setInterval(function () {
  carouselLoopDesktop(step);
}, 2500);

// In case of resizing the window it changes the scroll amount
// Doesn't work in real time
// If changed during pictures transition it will take the
// rest of the cycle until the scroll amount resets properly
window.addEventListener("resize", () => {
  // pauses the interval on resizing the window; not optimal solution, will autocalibrate when cycle restarts
  pauseLoop();
  if (window.innerWidth > 768) {
    step = 660;
  } else {
    step = 340;
  }
});

/**
 * Function scrolls carousel container and increases/resets index
 */
function carouselLoopDesktop(step) {
  carouselEl.scrollLeft += step;
  i++;
  console.log(i);
  if (i > 3) {
    i = 0;
    carouselEl.scrollLeft = 0;
  }
  prevBtn.addEventListener("click", previousImg);
  nextBtn.addEventListener("click", nextImg);
}

/**
 * Function skips current image in order to show the previous in line
 */
function previousImg() {
  pauseLoop();
  i--;
  carouselEl.scrollLeft -= step;
  if (i < 0) {
    i = 3;
    carouselEl.scrollLeft = step * 3;
  }
}

/**
 * Function skips current image in order to show the next in line
 */
function nextImg() {
  pauseLoop();
  i++;
  carouselEl.scrollLeft += step;
  if (i > 3) {
    i = 0;
    carouselEl.scrollLeft = 0;
  }
}

/**
 * Function simulates an interval pause by clearing the Interval and reinitializing it
 */
function pauseLoop() {
  clearInterval(timer);
  timer = setInterval(function () {
    carouselLoopDesktop(step);
  }, 2500);
}
