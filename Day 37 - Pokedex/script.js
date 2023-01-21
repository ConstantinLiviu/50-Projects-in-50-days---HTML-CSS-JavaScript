import { cardsBg, typeColor, elementIcons } from "./data.js";

const cardsGridEl = document.querySelector(".cards-grid");
const pokemon_count = 150;

/**
 * Loops through IDs from 1 to X in order to retrieve Pokemon info
 *
 */
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count - 140; i++) {
    await iChooseYou(i);
  }
};

const iChooseYou = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(URL);
  const pokemonInfo = await res.json();
  console.log(pokemonInfo);
  createCard(pokemonInfo);
};

const createCard = (pokemonInfo) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("pokemon-card");
  cardEl.innerHTML = `<div class="img-container">
  <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonInfo.id
    .toString()
    .padStart(3, "0")}.png' alt="pokemon-image" />
</div>
<p class="number">#${pokemonInfo.id.toString().padStart(3, "0")}</p>
<h2 class="name">${pokemonInfo.name}</h2>
<p class="type">Type: <span class="element">${pokemonInfo.types.map(
    (type) => type.type.name
  )}</span></p>`;

  cardsGridEl.append(cardEl);
};

fetchPokemons();
