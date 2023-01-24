const reviewOptions = document.querySelectorAll(".review");
const submitBtn = document.querySelector(".submit span");
const reviewsContainer = document.querySelector(".submit-review-container");
const confirmationContainer = document.querySelector(".confirmation-container");
const feedbackValue = document.querySelector(".feedback-value span");
let userChoice;

reviewsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("review")) {
    reviewOptions.forEach((review) => {
      review.classList.remove("active");
    });
    e.target.parentNode.classList.add("active");
    userChoice = e.target.nextElementSibling.textContent;
  }
});

submitBtn.addEventListener("click", () => {
  if (userChoice) {
    reviewsContainer.classList.toggle("hide");
    confirmationContainer.classList.toggle("hide");
    feedbackValue.textContent = userChoice;
    if (userChoice === "Unhappy") {
      feedbackValue.style.color = "#FF0000";
    } else if (userChoice === "Neutral") {
      feedbackValue.style.color = "#A35638";
    } else {
      feedbackValue.style.color = "#249101";
    }
  } else {
    alert(
      "Please choose one of the options best representing the service you've received"
    );
  }
  setTimeout(() => {
    reviewsContainer.classList.toggle("hide");
    confirmationContainer.classList.toggle("hide");
  }, 2000);
});
