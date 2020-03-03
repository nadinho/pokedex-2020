import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import { createSearch } from './components/search';
import { createPokemons } from './components/pokemons';
import { appendContent } from './lib/dom';
import Logo from './assets/pokeball.png';

const allPokemons = ['Pikachu', 'Pichu', 'Marwinchu', 'Juliachu', 'Johannachu'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokédex');
  const searchInput = createSearch();
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  let pokemons = createPokemons(allPokemons);

  appendContent(header, [logo, title]);
  appendContent(main, [searchInput, pokemons]);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);

    const searchValue = event.target.value;
    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });

    pokemons = createPokemons(filteredPokemons);
    appendContent(main, pokemons);
  });

  return [header, main];
}
