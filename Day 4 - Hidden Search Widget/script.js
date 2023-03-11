const searchBtn = document.querySelector("button");
const inputEl = document.querySelector("input");
const navList = document.querySelector("nav ul");

searchBtn.addEventListener("click", () => {
  inputEl.classList.toggle("active");
});

inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    window.open(`https://www.google.com/search?q=${inputEl.value}`);
    inputEl.value = "";
  }
});
