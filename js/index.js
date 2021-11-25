import { renderCards } from './render.js';
import { createmockData } from './data.js';
import { sortData } from './sorting.js';

const filmsData = createmockData(10);
sortData(renderCards, filmsData);
renderCards(filmsData);
