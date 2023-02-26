import { randomProjectsArr } from "../random-project-links-array.js";

const openEl = document.getElementById("open");
const closeEl = document.getElementById("close");
const navigationCircle = document.querySelector(".navigation");
const pageEl = document.querySelector(".page");
const menuEl = document.querySelector(".menu");
const readmeBtn = document.querySelector(".readmebtn");
const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal-readme");
const randomLink = document.querySelector(".random");

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

readmeBtn.addEventListener("click", () => {
  overlayEl.style.display = "block";
  modalEl.style.display = "block";
});

overlayEl.addEventListener("click", () => {
  overlayEl.style.display = "none";
  modalEl.style.display = "none";
});

randomLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
});
