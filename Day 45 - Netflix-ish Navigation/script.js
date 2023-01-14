// Navigation Basic Functionality

const menuBtnEl = document.querySelector(".menu-btn");
const menuCloseEl = document.querySelector(".menu-close");
const navigationSection = document.querySelector(".navigation");

menuBtnEl.addEventListener("click", () => {
  navigationSection.classList.remove("hidden");
});

menuCloseEl.addEventListener("click", () => {
  navigationSection.classList.add("hidden");
});

// ////////////////////////////////////////////////////////////////////////
