// Dark mode toggle

const darkBtnEl = document.querySelector(".toggle");
const htmlEl = document.querySelector("html");

darkBtnEl.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
});

//
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const timeEl = document.querySelector(".time");
const dayweekEl = document.querySelector(".dayweek");
const dayEl = document.querySelector(".day");
const numEl = document.querySelector(".num");
const monthEl = document.querySelector(".monthshort");

/**
 * Converts time into a 360 rotation of the hands
 * @param {int} number
 * @param {int} inMin
 * @param {int} inMax
 * @param {int} outMin
 * @param {int} outMax
 * @returns degrees values
 */
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Sets time, sets clock's hands animation, sets and displays date and time in text format
 */
function time() {
  const time = new Date();
  // console.log(time);
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const hourClock = hour % 12;
  const min = time.getMinutes();
  const sec = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    min,
    0,
    59,
    1,
    360
  )}deg)`;

  secEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    sec,
    0,
    59,
    1,
    360
  )}deg)`;

  timeEl.innerText = `${hour}:${min < 10 ? "0" + min : min}`;
  dayweekEl.innerText = `${dayOfWeek[day]},${"\xa0"}`;
  monthEl.innerText = `${months[month]}${"\xa0"}`;

  dayEl.innerText = `${date} `;
  if (date > 3) {
    numEl.innerText = "th";
  } else if (date === 3) {
    numEl.innerText = "rd";
  } else if (date === 2) {
    numEl.innerText = "nd";
  } else {
    numEl.innerText = "st";
  }
}

setInterval(time, 1000);
