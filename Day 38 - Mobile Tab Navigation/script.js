// modal adjustment
const modalBtn = document.querySelector(".readme a");
const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal-readme");

modalBtn.addEventListener("click", () => {
  modalEl.style.display = "block";
  overlayEl.style.display = "block";
});

overlayEl.addEventListener("click", () => {
  modalEl.style.display = "none";
  overlayEl.style.display = "none";
});

document.querySelector(".fa-readme").addEventListener("click", () => {
  console.log("tralala");
});

//
