import './search.scss';
import { createElement } from '../lib/dom';

export function createSearchInput(searchValue) {
  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'Enter Pokémon →',
    value: searchValue
  });

  return element;
}
