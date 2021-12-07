import { renderCards } from './render.js';
import { createmockData } from './data.js';
import { sortData } from './sorting.js';
import { initSearch } from './searching.js';
import { addToFavorites, showFavoritesFilms } from './localStorage.js';
import { getTokenData, getFilmsData } from './API.js';

const filmsData = createmockData(10);
renderCards(filmsData);
sortData(renderCards, filmsData);
initSearch(renderCards, filmsData);
addToFavorites();
showFavoritesFilms(filmsData, renderCards);

getTokenData();
getFilmsData();
