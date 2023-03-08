// change add note button styling on mobile devices
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

const addNoteBtn = document.querySelector(".add-note-btn");
const notesContainerEl = document.querySelector(".notes-grid");
const removeNoteBtn = document.querySelector(".remove-note");
const noteArr = document.querySelectorAll(".note");

addNoteBtn.addEventListener("click", () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.innerHTML = `<div class="header">
  <i class="fas fa-trash-alt remove-note"></i>
</div>
<textarea class="note-body"></textarea>`;
  notesContainerEl.appendChild(newNote);
});
