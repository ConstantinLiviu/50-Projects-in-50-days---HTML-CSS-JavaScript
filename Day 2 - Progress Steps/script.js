// Select Buttons

const btnPrevEl = document.querySelector(".previous");
const btnNextEl = document.querySelector(".next");

// Bars
const progressBar = document.querySelector(".progress-bar");
const progressBarRoot = document.querySelector(":root");

// Circle steps
const stepsArr = document.querySelectorAll(".step");

// Utilitary variables
let activeStep = 1;
let progressBarValue = 0;

// Next button click action

btnNextEl.addEventListener("click", () => {
  activeStep++;
  progressBarValue += 33;
  progressBarRoot.style.setProperty("--bar-width", progressBarValue + "%");
  if (activeStep > 1) {
    btnPrevEl.classList.remove("disabled");
  }

  if (activeStep > stepsArr.length - 1) {
    btnNextEl.classList.add("disabled");
  }
  console.log(activeStep);
  stepsArr[activeStep - 1].classList.add("step-completed");
});

// Previous button click action

btnPrevEl.addEventListener("click", () => {
  activeStep--;
  progressBarValue -= 33;
  progressBarRoot.style.setProperty("--bar-width", progressBarValue + "%");
  if (activeStep < 2) {
    btnPrevEl.classList.add("disabled");
  }

  if (activeStep < stepsArr.length) {
    btnNextEl.classList.remove("disabled");
  }
  console.log(activeStep);
  stepsArr[activeStep].classList.remove("step-completed");
});
