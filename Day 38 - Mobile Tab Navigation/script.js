// modal adjustment
const modalBtn = document.querySelector(".readme a");
const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal-readme");

modalBtn.addEventListener("click", () => {
  modalEl.style.display = "block";
  overlayEl.style.display = "block";
});

overlayEl.addEventListener("click", () => {
  modalEl.style.display = "none";
  overlayEl.style.display = "none";
});

document.querySelector(".fa-readme").addEventListener("click", () => {
  console.log("tralala");
});

// pictures info array

const picArr = [
  [
    "by Irina Varanovich",
    "https://www.pexels.com/photo/glitter-eye-15008591/",
    "url('./img/home.jpg')",
  ],
  [
    "by Amanda George",
    "https://www.pexels.com/photo/white-papers-2978800/",
    "url('./img/readme.jpg')",
  ],
  [
    "by Amy T",
    "https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/",
    "url('./img/github.jpg')",
  ],
  [
    "by Luis Gomes",
    "https://www.pexels.com/photo/photo-of-two-silver-giftbox-1661908/",
    "url('./img/random.jpg')",
  ],
];

//

const iconEl = document.querySelectorAll(".icon");
const copyrightURL = document.querySelector(".copyright a");
const imgContainerEl = document.querySelector(".img-container");

iconEl.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    iconEl.forEach((element) => {
      element.classList.remove("active");
    });
    icon.classList.add("active");
    copyrightURL.textContent = picArr[i][0];
    copyrightURL.setAttribute("href", picArr[i][1]);
    imgContainerEl.style.backgroundImage = picArr[i][2];
  });
});
