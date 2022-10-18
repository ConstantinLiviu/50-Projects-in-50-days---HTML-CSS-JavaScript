const openEl = document.getElementById("open");
const closeEl = document.getElementById("close");
const navigationCircle = document.querySelector(".navigation");
const pageEl = document.querySelector(".page");
const menuEl = document.querySelector(".menu");

openEl.addEventListener("click", () => {
  navigationCircle.classList.add("rotate");
  pageEl.classList.add("tilt-page");
  menuEl.style.left = "2rem";
});

closeEl.addEventListener("click", () => {
  navigationCircle.classList.remove("rotate");
  pageEl.classList.remove("tilt-page");
  menuEl.style.left = "-20rem";
});
