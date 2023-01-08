const bodyEl = document.querySelector("body");
const inputEl = document.getElementById("password");
let i = 5;

const allClasses = "bg-[url('img/bg.jpg')] bg-center bg-cover";

inputEl.addEventListener("keydown", (e) => {
  // add blur if backspace is pressed and the input field isn't empty
  if (e.key === "Backspace" && inputEl.value.length !== 0) {
    i += 0.5;
  } else if (e && e.key !== "Backspace") {
    // remove blur if any other key is pressed
    i -= 0.5;
  }
  bodyEl.className = allClasses + ` backdrop-blur-[${i}rem]`;
});
