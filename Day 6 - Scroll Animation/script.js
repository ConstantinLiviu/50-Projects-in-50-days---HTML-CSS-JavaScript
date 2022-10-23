const contentContainerEl = document.querySelectorAll(".content-container");

function checkContainers() {
  const trigger = (window.innerHeight / 5) * 4;

  contentContainerEl.forEach((container) => {
    let containerTop = container.getBoundingClientRect().top;

    if (containerTop < trigger) {
      container.classList.add("show-container");
    } else {
      container.classList.remove("show-container");
    }
  });
}

window.addEventListener("scroll", checkContainers);

checkContainers();
