import {
  imgSrc,
  profileImgSrc,
  cardTitles,
  cardSubTitles,
  names,
  occupation,
} from "./DataLists.js";

const imgContainerEl = document.querySelector(".main-img-container");
const titleEl = document.querySelector(".card-title");
const descriptionEl = document.querySelector(".card-description");
const profilePicEl = document.querySelector(".profile-pic-container");
const idNameEl = document.querySelector(".name");
const occupationEl = document.querySelector(".occupation");
const dataBtn = document.querySelector(".getData");
const animatedEls = document.querySelectorAll(".bg-animation");

dataBtn.addEventListener("click", () => {
  animatedEls.forEach((e) => {
    e.classList.remove("bg-animation");
  });
  const index = Math.floor(Math.random() * 5);
  imgContainerEl.style.backgroundImage = `url('img/${imgSrc[index]}')`;
  titleEl.textContent = `${cardTitles[index]}`;
  console.log(cardSubTitles[index]);
  descriptionEl.textContent = `${cardSubTitles[index]}`;
  profilePicEl.style.backgroundImage = `url('${profileImgSrc[index]}')`;
  idNameEl.textContent = `${names[index]}`;
  occupationEl.textContent = `${occupation[index]}`;
});
