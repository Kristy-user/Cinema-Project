import { renderCards, createArrayFromDivCards } from './render.js';
import { sortData } from './sorting.js';
import { initSearch } from './searching.js';
import {
  addToFavorites,
  showFavoritesFilms,
  getFromLocalStorage,
} from './localStorage.js';
import { getTokenData } from './API.js';

if (
  localStorage.getItem('lastFilmsList') &&
  JSON.parse(localStorage.getItem('lastFilmsList')).length !== 0
) {
  getFromLocalStorage('lastFilmsList');
  let filmList = createArrayFromDivCards();
  sortData(renderCards, filmList);
  initSearch(renderCards, filmList);
} else {
  getTokenData().then((newFilmList) => {
    renderCards(newFilmList);
    sortData(renderCards, newFilmList);
    initSearch(renderCards, newFilmList);
  });
}
addToFavorites();
showFavoritesFilms();
