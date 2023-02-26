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

if (location.hostname === "127.0.0.1") {
  randomProjectEl.href = `${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
} else {
  randomProjectEl.href = `50-Projects-in-50-days---HTML-CSS-JavaScript${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
}
