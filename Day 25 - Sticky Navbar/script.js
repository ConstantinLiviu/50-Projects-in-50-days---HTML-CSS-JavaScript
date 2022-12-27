const navEl = document.querySelector(".navigation");
const navbarLink = document.querySelectorAll(".navBarBtn");
const mobileNav = document.querySelector(".navigation nav ul");

navbarLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLink.forEach((link) => {
      link.classList.remove("active-link");
      if (window.innerWidth < 601) {
        mobileNav.classList.add("hide-ul");
      }
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
