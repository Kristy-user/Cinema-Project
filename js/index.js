import { renderCards } from './render.js';
import { sortData } from './sorting.js';
import { initSearch } from './searching.js';
import { addToFavorites, showFavoritesFilms } from './localStorage.js';
import { getTokenData } from './API.js';

const filmListFromApi = [];

getTokenData().then((newFilms) => {
  filmListFromApi.push(...newFilms);
  renderCards(filmListFromApi);
});

showFavoritesFilms(filmListFromApi, renderCards);
sortData(renderCards, filmListFromApi);
initSearch(renderCards, filmListFromApi);

addToFavorites();
