const homeMenuIcon = document.querySelector(".ham-menu");
const navList = document.querySelector("nav ul");

homeMenuIcon.addEventListener("click", () => {
  navList.classList.toggle("hide-ul");
});
