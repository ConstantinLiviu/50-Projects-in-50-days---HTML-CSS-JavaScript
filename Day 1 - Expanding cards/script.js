import { randomProjectsArr } from "../random-project-links-array.js";

// Select panels
const panelEl = document.querySelectorAll(".panel");
const randomLink = document.querySelector(".random");

// un/assigns active class
panelEl.forEach((panel) => {
  panel.addEventListener("click", () => {
    collapseCard();
    panel.classList.add("active");
  });
});

// removes the "active" class from all panels
function collapseCard() {
  panelEl.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//mobile menu
const homeMenuIcon = document.querySelector(".ham-menu");
const navList = document.querySelector("nav ul");

homeMenuIcon.addEventListener("click", () => {
  navList.classList.toggle("hide-ul");
});

randomLink.href = `.${
  randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
}`;
