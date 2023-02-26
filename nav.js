import { randomProjectsArr } from "./random-project-links-array.js";

const homeMenuIcon = document.querySelector(".ham-menu");
const navList = document.querySelector("nav ul");
const randomProjectEl = document.querySelector(
  ".navigation nav ul li:last-child a"
);

homeMenuIcon.addEventListener("click", () => {
  navList.classList.toggle("hide-ul");
  console.log(randomProjectsArr);
});

randomProjectEl.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
});
