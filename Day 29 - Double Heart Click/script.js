const imgEl = document.querySelector(".image");
const animationEl = document.querySelector(".heart-animation");
const counterEl = document.querySelector(".counter");

let counter = 0;

imgEl.addEventListener("dblclick", (e) => {
  // initiate animation
  animationEl.classList.add("animated");
  // increase counter value and update it on the page
  counter++;
  counterEl.innerHTML = counter;
  // remove animation class in order to allow additional usage
  setTimeout(() => {
    animationEl.classList.remove("animated");
  }, 800);
});
