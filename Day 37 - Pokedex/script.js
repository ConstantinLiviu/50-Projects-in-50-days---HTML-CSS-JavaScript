import { cardsBg } from "./data.js";

const cardsGridEl = document.querySelector(".cards-grid");
let pokemon_count = +prompt("How many pokemon do you want in your pokedex?");
if (pokemon_count > 1008 || pokemon_count === "" || isNaN(pokemon_count)) {
  pokemon_count = 30;
}

/**
 * Main function. Loops through IDs from 1 to X in order to retrieve Pokemon info. Calls iChooseYou function to create pokemon cards;
 *
 */
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await iChooseYou(i);
  }
};

/**
 * Takes the pokemon ID and generates a card. Calls createCard function to add the card to the DOM
 * @param {number} id - the ID of the pokemon as stored in the API database
 */
const iChooseYou = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(URL);
  const pokemonInfo = await res.json();
  createCard(pokemonInfo);
};

/**
 * Gets the info retrieved via API and creates an element, appending it to the grid element; also makes several css changes
 * @param {Object} pokemonInfo - API info retrieved as an object
 */
const createCard = (pokemonInfo) => {
  let typesArr = pokemonInfo.types.map((type) => type.type.name);
  const cardEl = document.createElement("div");
  cardEl.classList.add("pokemon-card");
  cardEl.innerHTML = `<div class="img-container">
  <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonInfo.id
    .toString()
    .padStart(3, "0")}.png' alt="pokemon-image" />
</div>
<p class="number">#${pokemonInfo.id.toString().padStart(3, "0")}</p>
<h2 class="name">${pokemonInfo.name}</h2>
<p class="type">Type: <span class="element">${typesArr}</span></p>`;

  let gradient = "linear-gradient(126deg, ";
  if (typesArr.length > 1) {
    typesArr.forEach((color, idx) => {
      if (cardsBg.hasOwnProperty(color) && idx === 0) {
        gradient += `${cardsBg[color]} 0% 45%,`;
      } else if (cardsBg.hasOwnProperty(color) && idx === typesArr.length - 1) {
        gradient += `${cardsBg[color]} 55% 100%,`;
      } else {
        gradient += `${cardsBg[color]},`;
      }
    });
    cardEl.style.background = `${gradient.slice(0, -1)})`;
  } else {
    if (cardsBg.hasOwnProperty(typesArr)) {
      cardEl.style.background = cardsBg[typesArr];
    }
  }
  cardsGridEl.append(cardEl);
};

fetchPokemons();
