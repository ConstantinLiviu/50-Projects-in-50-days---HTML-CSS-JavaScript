const toggleArr = document.querySelectorAll(".toggle");
const toggleGood = document.getElementById("good");
const toggleCheap = document.getElementById("cheap");
const toggleFast = document.getElementById("fast");

toggleArr.forEach((toggle) => {
  toggle.addEventListener("change", (e) => twoOutofThree(e.target));
});

function twoOutofThree(activeSlider) {
  if (toggleGood.checked && toggleCheap.checked && toggleFast.checked) {
    if (toggleGood === activeSlider) {
      toggleFast.checked = false;
    }
    if (toggleCheap === activeSlider) {
      toggleGood.checked = false;
    }
    if (fast === activeSlider) {
      toggleCheap.checked = false;
    }
  }
}
