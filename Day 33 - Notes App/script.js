// change add note button styling on mobile devices
const addNoteBtn = document.querySelector(".add-note-btn");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    addNoteBtn.classList.add("scrolled");
  } else {
    addNoteBtn.classList.remove("scrolled");
  }
});
///////////////////////////////////////////////////////////////
