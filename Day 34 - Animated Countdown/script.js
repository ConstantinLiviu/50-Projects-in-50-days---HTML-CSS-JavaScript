const numArr = document.querySelectorAll(".nums-container p");
const counterEl = document.querySelector(".counter-container");
const countdownMsg = document.querySelector(".prep-msg");
const restartBtn = document.querySelector(".restart");

startCountdown();

function startCountdown() {
  numArr.forEach((num, i) => {
    const nextToLast = numArr.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "count" && i !== nextToLast) {
        num.classList.remove("active");
        num.classList.add("counted");
      } else if (e.animationName === "countOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("active");
      }
    });
  });
}

// function newCountdown() {}
