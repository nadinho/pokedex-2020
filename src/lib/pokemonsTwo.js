const allPokemons = [
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Shiggy',
  'Mewtwo',
  'Mew'
];

export function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().includes(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
