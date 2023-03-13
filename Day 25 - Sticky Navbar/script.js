import { randomProjectsArr } from "../random-project-links-array.js";

const navEl = document.querySelector(".navigation");
const navbarLink = document.querySelectorAll(".navBarBtn");
const mobileNav = document.querySelector(".navigation nav ul");
const hameMenuBtn = document.querySelector(".ham-menu");
const homeBtn = document.querySelector(".home-btn");
const randomLink = document.querySelector(".random");

hameMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hide-ul");
});

navbarLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLink.forEach((link) => {
      link.classList.remove("active-link");
    });
    link.classList.add("active-link");
  });
});

window.addEventListener("scroll", changeNav);

/**
 * Changes the navbar background color on scrolling down past a certain point
 * @param {} none
 * @returns void
 */
function changeNav() {
  if (window.scrollY > 550) {
    navEl.classList.add("scrolled");
  } else {
    navEl.classList.remove("scrolled");
  }
}

randomLink.href = `../${
  randomProjectsArr[Math.floor(Math.random() * randomProjectsArr.length)]
}`;
