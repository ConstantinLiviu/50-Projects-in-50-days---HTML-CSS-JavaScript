import { cardsBg, typeColor, elementIcons } from "./data.js";

const cardsGridEl = document.querySelector(".cards-grid");
const pokemon_count = 150;

/**
 * Loops through IDs from 1 to X in order to retrieve Pokemon info
 *
 */
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await iChooseYou(i);
  }
};

const iChooseYou = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(URL);
  const pokemonInfo = await res.json();
  console.log(pokemonInfo);
};

fetchPokemons();
