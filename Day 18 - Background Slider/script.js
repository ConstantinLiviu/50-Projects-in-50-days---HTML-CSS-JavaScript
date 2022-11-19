const bodyEl = document.body;
const slides = document.querySelectorAll(".slide");
const leftArrowEl = document.querySelector(".left-arrow");
const rightArrowEl = document.querySelector(".right-arrow");

let activeSlide = 0;
/**
 * Matches the background image with the image in the active slide
 */
function bodyBg() {
  bodyEl.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

bodyBg();

leftArrowEl.addEventListener("click", () => {
  slides[activeSlide].classList.remove("active");
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  slides[activeSlide].classList.add("active");
  bodyBg();
});

rightArrowEl.addEventListener("click", () => {
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
  bodyBg();
});
