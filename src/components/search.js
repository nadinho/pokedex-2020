import './search.scss';
import { createElement } from '../lib/dom';

export function createSearchInput(props) {
  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'Enter Pokémon →',
    value: props.value
  });

  return element;
}
