const menuBtnEl = document.querySelector(".menu-btn");
const menuCloseEl = document.querySelector(".menu-close");
const navigationSection = document.querySelectorAll(".nav");

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
