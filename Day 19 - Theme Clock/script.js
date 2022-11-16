// Dark mode toggle

const darkBtnEl = document.querySelector(".toggle");
const htmlEl = document.querySelector("html");

darkBtnEl.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
});

//
