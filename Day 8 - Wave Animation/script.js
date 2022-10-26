const labelsEl = document.querySelectorAll("label");

labelsEl.forEach((label) => {
  // get label text, create label inner html tags and assign each letter of the text to a newly created html tag (in this case a span)
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, i) => `<span style="transition-delay:${i}50ms">${letter}</span>`
    )
    .join("");
});
