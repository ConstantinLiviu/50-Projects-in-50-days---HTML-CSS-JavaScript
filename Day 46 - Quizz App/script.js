import { quizzArr } from "./quizinfo.js";

const questionEl = document.querySelector(".question-txt");
const quizContainer = document.querySelector(".project-container");
const radioBtnArr = document.querySelectorAll(".option");
const answer1El = document.getElementById("a");
const answer2El = document.getElementById("b");
const answer3El = document.getElementById("c");
const answer4El = document.getElementById("d");
const submitBtn = document.querySelector("input[type='submit']");
let quizResult = 0;
let currentQuestion = 0;

/**
 * Function deselects any radio button that was selected in the previous question
 */
function deselect() {
  radioBtnArr.forEach((btn) => {
    btn.checked = false;
  });
}

/**
 * Function retrieves questions info from the quiz array, deselects radio buttons and replaces the labels/question text content
 */
function nextQuestion() {
  deselect();
  const question = quizzArr[currentQuestion];
  questionEl.textContent = question.question;
  answer1El.textContent = question.answer1;
  answer2El.textContent = question.answer2;
  answer3El.textContent = question.answer3;
  answer4El.textContent = question.answer4;
}
/**
 * Function loops through radio button array to check if any answer was checked by the user
 * @returns the selected radio button's ID as a string
 */
function userChoice() {
  let choice;
  radioBtnArr.forEach((btn) => {
    if (btn.checked) {
      choice = btn.id;
    }
  });
  return choice;
}
// start with the first question preloaded
nextQuestion();

submitBtn.addEventListener("click", () => {
  const answer = userChoice();
  if (answer) {
    if (answer === quizzArr[currentQuestion].correctAnswer) {
      quizResult++;
    }
    currentQuestion++;
    if (currentQuestion < quizzArr.length) {
      nextQuestion();
    } else {
      quizContainer.innerHTML = `<h2 class="end-quiz">You finished the quiz!</h2>
      <p class="results">
        You got <span class="result">${quizResult}</span> correct answers out of
        <span class="questions-no">${currentQuestion}</span> questions
      </p>
      <button class="restart">Would you like to try again?</button>`;
      const restartBtn = document.querySelector(".restart");
      restartBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  }
});
