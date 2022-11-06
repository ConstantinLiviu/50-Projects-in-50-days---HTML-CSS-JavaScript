const countersEl = document.querySelectorAll(".tracker");

countersEl.forEach((counter) => {
  counter.innerText = "0";

  const counterIncrease = () => {
    const stop = +counter.getAttribute("data-target");
    const currentNumber = +counter.innerText;
    // 557 to make sure most digits change at one point at least
    const step = stop / 557;

    if (currentNumber < stop) {
      counter.innerText = `${Math.ceil(currentNumber + step)}`;
      // set speed of update
      setTimeout(counterIncrease, 30);
    } else {
      counter.innerText = stop;
    }
  };
  counterIncrease();
});
