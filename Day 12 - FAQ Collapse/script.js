const questionArr = document.querySelectorAll(".questions-container");
const answerArr = document.querySelectorAll(".answer");

questionArr.forEach((question, i) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    answerArr[i].classList.toggle("active");
  });
});
