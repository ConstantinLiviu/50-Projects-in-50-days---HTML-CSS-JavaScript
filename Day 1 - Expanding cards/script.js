// Select panels
const panelEl = document.querySelectorAll(".panel");

// un/assigns active class
panelEl.forEach((panel) => {
  panel.addEventListener("click", () => {
    collapseCard();
    panel.classList.add("active");
  });
});

// removes the "active" class from all panels
function collapseCard() {
  panelEl.forEach((panel) => {
    panel.classList.remove("active");
  });
}
