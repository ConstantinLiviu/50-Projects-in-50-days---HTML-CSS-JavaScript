const textStyle = document.querySelectorAll(".day");

textStyle.forEach((day) => {
  day.addEventListener("mouseenter", () => {
    if (day.classList.contains("adjust")) {
      day.classList.add("font-change");
    }
  });
  day.addEventListener("mouseleave", () => {
    if (day.classList.contains("font-change")) {
      day.classList.remove("font-change");
    }
  });
});
