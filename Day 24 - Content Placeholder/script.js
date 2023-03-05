import {
  imgSrc,
  profileImgSrc,
  cardTitles,
  cardSubTitles,
  names,
  occupation,
} from "./DataLists.js";

const imgContainerEl = document.querySelector(".main-img-container");
const titleEl = document.querySelector(".title-container");
const descriptionEl = document.querySelector(".description");
const profilePicEl = document.querySelector(".profile-pic-container");
const idNameEl = document.querySelector(".name");
const occupationEl = document.querySelector(".occupation");
const dataBtn = document.querySelector(".getData");
const animatedEls = document.querySelectorAll(".bg-animation");

// dataBtn.addEventListener("click", () => {
//   animatedEls.forEach((e) => {
//     e.classList.remove("bg-animation");
//   });
//   imgContainerEl.style.backgroundImage = `url('img/${imgSrc[0]}')`;
// });
