const containerEl = document.querySelector(".img-container");
const imgURL = "https://source.unsplash.com/random/";
const imgTotal = 15;

for (i = 0; i < imgTotal; i++) {
  const img = document.createElement("img");
  img.src = `${imgURL}${imgSize()}`;
  containerEl.appendChild(img);
}

/**
 * Randomly generates width and height to be used as image size
 * @returns a string representing the image size
 */
function imgSize() {
  return `${Math.floor(Math.random() * 10) + 300}x${
    Math.floor(Math.random() * 10) + 300
  }`;
}
