import { randomProjectsArr } from "../random-project-links-array.js";

const menuBtnEl = document.querySelector(".menu-btn");
const menuCloseEl = document.querySelector(".menu-close");
const navigationSection = document.querySelectorAll(".nav");
const randomLink = document.querySelector(".random");

menuBtnEl.addEventListener("click", () => {
  navigationSection.forEach((nav) => {
    nav.classList.add("slide-in");
  });
});

menuCloseEl.addEventListener("click", () => {
  navigationSection.forEach((nav) => {
    nav.classList.remove("slide-in");
  });
});

randomLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
});
