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

if (location.hostname === "127.0.0.1") {
  randomLink.href = `/${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
} else {
  randomLink.href = `./${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
}
