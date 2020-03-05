import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createSearchResults } from './components/pokemons';
import { appendContent } from './lib/dom';
import Logo from './assets/fav_pichu.png';
import { filterPokemons } from './lib/pokemonsTwo';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokédex');
  const searchInput = createSearchInput({
    value: sessionStorage.getItem('searchValue')
  });
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  let searchResults = null;
  function setSearchResults() {
    const filteredPokemons = filterPokemons(searchInput.value);
    searchResults = createSearchResults({
      items: filteredPokemons
    });
    appendContent(main, searchResults);
  }
  setSearchResults();

  appendContent(header, [title]);
  appendContent(main, [logo, searchInput, searchResults]);

  searchInput.addEventListener('input', event => {
    main.removeChild(searchResults);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });
  return [header, main];
}
