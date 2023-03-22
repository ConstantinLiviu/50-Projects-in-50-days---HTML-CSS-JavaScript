const imgContainerEl = document.querySelector(".img-container");
const nextBtnEl = document.querySelector(".next");
const prevBtnEl = document.querySelector(".prev");

nextBtnEl.addEventListener("click", () => {
  imgContainerEl.style.transform = "translateY(-100vh)";
});

prevBtnEl.addEventListener("click", () => {});

imgContainerEl.addEventListener("transitionend", () => {
  imgContainerEl.append(imgContainerEl.firstElementChild);
  imgContainerEl.style.transition = "none";
  imgContainerEl.style.transform = "translateY(0)";
  setTimeout(() => {
    imgContainerEl.style.transition = "all 0.6s ease";
  }, 10);
});
