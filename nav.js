import { randomProjectsArr } from "./random-project-links-array.js";

const homeMenuIcon = document.querySelector(".ham-menu");
const navList = document.querySelector("nav ul");
const randomProjectEl = document.querySelector(
  ".navigation nav ul li:last-child a"
);

homeMenuIcon.addEventListener("click", () => {
  navList.classList.toggle("hide-ul");
});

/**********************************************************************************************************************/

// For any change here a manual change is required for projects 3, 25, 38, 45;

if (location.hostname === "127.0.0.1") {
  randomProjectEl.href = `/${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
} else if (location.href.split("/").length < 6) {
  randomProjectEl.href = `./${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
} else {
  randomProjectEl.href = `../${
    randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
  }`;
}
/**********************************************************************************************************************/
