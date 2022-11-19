const btnEl = document.querySelector(".btn");
const circleEl = document.querySelector(".circle");

btnEl.addEventListener("click", (e) => {
  // get click coordinates
  const clickOriginX = e.clientX;
  const clickOriginY = e.clientY;

  // get button position on page
  const buttonTopLimit = e.target.offsetTop;
  const buttonLeftLimit = e.target.offsetLeft;

  // get position relative to the button limits
  const xCoordInBtn = clickOriginX - buttonLeftLimit;
  const yCoordInBtn = clickOriginY - buttonTopLimit;

  // create circle element
  const spanEl = document.createElement("span");
  spanEl.classList.add("circle");
  spanEl.style.top = `${yCoordInBtn / 10}rem`;
  spanEl.style.left = `${xCoordInBtn / 10}rem`;

  // add span inside button
  btnEl.appendChild(spanEl);

  // remove span after animation
  setTimeout(() => spanEl.remove(), 500);
});
