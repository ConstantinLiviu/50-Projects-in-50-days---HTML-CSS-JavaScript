const textEl = document.querySelector(".text");
const speedInput = document.getElementById("speed");
const writeStuff = "It works as intended";
let ind = 1;
let textSpeed = 300 / speedInput.value;

writeText();

function writeText() {
  textEl.innerText = writeStuff.slice(0, ind);
  ind++;
  if (ind > writeStuff.length) {
    ind = 1;
  }
  setTimeout(writeText, textSpeed);
}

speedInput.addEventListener("input", (e) => (textSpeed = 300 / e.target.value));
