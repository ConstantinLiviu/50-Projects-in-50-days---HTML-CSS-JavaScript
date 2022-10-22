const imageEl = document.querySelector(".img");
const textEl = document.querySelector(".text");
const refreshBtn = document.querySelector(".refresh");

let percentage = -1;
let int = setInterval(increaseBlur, 40);

function increaseBlur() {
  percentage++;
  if (percentage > 99) {
    clearInterval(int);
  }
  textEl.innerHTML = `${percentage}%`;
  imageEl.style.filter = `blur(${100 - percentage}px)`;
  textEl.style.opacity = `${1.2 - percentage / 100}`;
  if (textEl.innerHTML == "100%") {
    textEl.style.display = "none";
    refreshBtn.style.display = "block";
  }
}

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});
