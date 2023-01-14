const inputEl = document.getElementById("range");
const labelEl = document.querySelector("label");

inputEl.addEventListener("input", () => {
  labelEl.textContent = inputEl.value;
  labelEl.style.marginLeft = `${inputEl.value}%`;
  //   lazy solution to mostly center the label, especially at both ends of the range
  if (+inputEl.value < 10) {
    labelEl.style.transform = `translateX(-37%)`;
  } else if (+inputEl.value == 100) {
    labelEl.style.transform = `translateX(-66%)`;
  } else {
    labelEl.style.transform = `translateX(-50%)`;
  }
});
