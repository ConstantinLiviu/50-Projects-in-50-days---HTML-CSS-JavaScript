// change add note button styling on mobile devices
const addNoteBtn = document.querySelector(".add-note-btn");

if (screen.width < 701) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      addNoteBtn.classList.add("scrolled");
    } else {
      addNoteBtn.classList.remove("scrolled");
    }
  });
}
///////////////////////////////////////////////////////////////
