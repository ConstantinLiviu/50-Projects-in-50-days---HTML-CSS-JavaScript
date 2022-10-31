const titleEl = document.querySelector(".instructions");
const infoContainerEl = document.querySelector(".info-container");
const eventInfoArr = document.querySelectorAll(".info-field h1");

window.addEventListener("keydown", (e) => {
  titleEl.classList.add("hidden");
  infoContainerEl.classList.remove("hidden");
  eventInfoArr[0].innerHTML = e.key;
  eventInfoArr[1].innerHTML = e.code;
  eventInfoArr[2].innerHTML = e.keyCode;

  if (e.key === "Escape") {
    titleEl.classList.remove("hidden");
    infoContainerEl.classList.add("hidden");
  }
});
