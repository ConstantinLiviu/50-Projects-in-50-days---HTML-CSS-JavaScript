const randomPassword = document.querySelector(".password");
const requestedPassLength = document.getElementById("length");
const copyClipboard = document.querySelector(".fa-clipboard");
const lowerOptionEl = document.getElementById("low");
const upperOptionEl = document.getElementById("up");
const numOptionEl = document.getElementById("num");
const symOptionEl = document.getElementById("sym");
const generatePassBtn = document.querySelector(".generate-pass");

const functionRandomizer = {
  upper: randomUpper,
  lower: randomLower,
  number: randomNum,
  symbol: randomSym,
};

generatePassBtn.addEventListener("click", () => {
  let length = +requestedPassLength.value;

  //   min effort fix for users' ability to input a pass length > 20 or lower than 5
  if (length < 5) {
    length = 5;
  }
  if (length > 20) {
    length = 20;
  }
  // in case user leaves input field empty;
  if (requestedPassLength.value === "") {
    length = 5;
  }

  const upperTrue = upperOptionEl.checked;
  const lowerTrue = lowerOptionEl.checked;
  const numTrue = numOptionEl.checked;
  const symTrue = symOptionEl.checked;

  randomPassword.textContent = generatePass(
    upperTrue,
    lowerTrue,
    numTrue,
    symTrue,
    length
  );
});

copyClipboard.addEventListener("click", () => {
  if (!randomPassword.textContent) {
    alert("Generate a password first!");
  } else {
    navigator.clipboard.writeText(randomPassword.textContent);
    const copyMsg = document.createElement("span");
    copyMsg.textContent = "Copied";
    copyMsg.classList.add("copied");
    document.querySelector(".generated-password").appendChild(copyMsg);
    setTimeout(function () {
      copyMsg.remove();
    }, 800);
  }
});

/**
 * Using math random and ASCII Character codes, the function generates an uppercase letter
 * @returns a one character string
 */
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 * Using math random and ASCII Character codes, the function generates a lowercase letter
 * @returns a one character string
 */
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/**
 * Using math random and ASCII Character codes, the function generates a number as string
 * @returns a one character string
 */
function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/**
 * Using math random and ASCII Character codes, the function generates a symbol
 * @returns a one character string
 */
function randomSym() {
  const symbols = "~@#$%^&*()_+=-<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

/**
 * Takes all character options, decides if they were selected or not and generates a random password
 * @param {string} upper - upper letter character option
 * @param {string} lower - lower letter character option
 * @param {string} number - number as string option
 * @param {string} symbol - symbol character option
 * @param {number} length - number option
 * @returns a string, sliced according to the selected password length
 */
function generatePass(upper, lower, number, symbol, length) {
  let password = "";
  // create an array that determines what kind of characters will be used to generate the password
  // ignore all elements that have a false value and create an array using the elements that have a true value
  const optionsArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // return an empty string if no options are selected
  if (optionsArr.length === 0) {
    alert(
      "Keep in mind that you need at least one type of character to generate a password"
    );
    return;
  }

  // loop through the options array
  // take each array item's first item
  // use it as the key of the randomizer function
  // generate a character and add it to the final password
  for (i = 0; i < length; i += optionsArr.length) {
    optionsArr.forEach((option) => {
      const keyName = Object.keys(option)[0];
      password += functionRandomizer[keyName]();
    });
  }

  return password.substring(0, length);
}
