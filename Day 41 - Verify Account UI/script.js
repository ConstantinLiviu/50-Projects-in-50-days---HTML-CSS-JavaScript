const digitArr = document.querySelectorAll(".digit");

digitArr[0].focus();

digitArr.forEach((digit, i) => {
  digit.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // registers digit input and switches to next digit
      setTimeout(() => focusInput(digitArr[i + 1]), 1);
    } else if (e.key === "Backspace") {
      // deletes current digit and switches to previos digit
      setTimeout(() => focusInputDel(digitArr[i - 1]), 1);
    }
  });
});

/**
 * Function checks if a digit element is currently selected. If so, the element is focused.
 * @param {Element} input "digit" element in elements array
 */
function focusInput(input) {
  if (input) {
    input.focus();
  }
}

/**
 * Function switches focus on previous element and clears the inner text
 * @param {Element} input "digit" element in elements array
 */
function focusInputDel(input) {
  if (input === digitArr[5]) {
    return;
  }
  if (input) {
    input.focus();
    // input.value = "";
  }
}
