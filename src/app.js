import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import { createSearch } from './components/search';
import { createPokemons } from './components/pokemons';
import { appendContent } from './lib/dom';
import { filterPokemons } from './lib/dom';
import Logo from './assets/fav_pichu.png';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokédex');
  const searchInput = createSearch(sessionStorage.getItem('searchValue'));
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  let searchResults = null;
  function setSearchResults() {
    const filteredPokemons = filterPokemons(searchInput.value);
    searchResults = createPokemons(filteredPokemons);
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
