import { renderCards } from './render.js';
import { addToFavorites, showFavoritesFilms } from './localStorage.js';
import { getTokenData, getFilmsData } from './API.js';
import { initSearch } from './searching.js';
import { sortData } from './sorting.js';
import { removeLoader, showLoader } from './loader.js';

const filmListFromApi = [];

getTokenData()
  .then((token) => {
    showLoader();
    return getFilmsData(token);
  })
  .then((dataFilms) => {
    filmListFromApi.push(...dataFilms);
    removeLoader();
    renderCards(filmListFromApi);
    return filmListFromApi;
  });

addToFavorites();
showFavoritesFilms();
initSearch(renderCards, filmListFromApi);
sortData(renderCards, filmListFromApi);

export { filmListFromApi };
