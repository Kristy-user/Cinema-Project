import { renderCards } from './render.js';
import { createmockData } from './data.js';
import { sortData } from './sorting.js';
import { initSearch } from './searching.js';

const filmsData = createmockData(10);
sortData(renderCards, filmsData);
renderCards(filmsData);
initSearch(renderCards, filmsData);
