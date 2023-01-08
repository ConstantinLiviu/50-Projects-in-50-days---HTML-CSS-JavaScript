import { testimonialsArr } from "./testimonialinfo.js";

const testimonialTxt = document.querySelector(".testimonial");
const imageEl = document.querySelector(".profile-pic");
const nameEl = document.querySelector(".name");
const occupationEl = document.querySelector(".occupation");

let i = 0;

function nextCustomer() {
  // deconstruct object and assign info in 4 variables
  const { name, position, photo, text } = testimonialsArr[i];

  // assign deconstructed info as page element value
  testimonialTxt.innerText = text;
  imageEl.src = photo;
  nameEl.innerText = name;
  occupationEl.innerText = position;

  // timeout set to 10s in order to sync with the css timer animation
  setTimeout(nextCustomer, 10000);

  // increment index in order to access all array info
  i++;

  // reset index when it reaches testimonial array last entry
  if (i > testimonialsArr.length - 1) i = 0;
}

nextCustomer();
