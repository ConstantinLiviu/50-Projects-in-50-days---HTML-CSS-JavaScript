const validPosEl = document.querySelectorAll(".valid-position");
const fillEl = document.querySelector(".fill");

fillEl.addEventListener("dragstart", dragStart);
fillEl.addEventListener("dragend", dragEnd);

for (const empty of validPosEl) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  // add hold class
  this.className += " hold";
  // make parent container empty
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  // readd img to div upon dropping the img during move
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "valid-position";
}

function dragDrop() {
  this.className = "valid-position";
  this.append(fillEl);
}
