import './index.scss';
import { createElement } from '../lib/dom';

export function title(text) {
  const titleAttributes = {
    innerText: text,
    className: 'title'
  };

  const element = createElement('h1', titleAttributes);

  return element;
}
