import { renderCards } from './render.js';
import { addToFavorites, showFavoritesFilms } from './localStorage.js';
import { getTokenData, getFilmsData } from './API.js';
import { initSearch } from './searching.js';
import { sortData } from './sorting.js';

const filmListFromApi = [];

getTokenData()
  .then((token) => getFilmsData(token))
  .then((dataFilms) => {
    filmListFromApi.push(...dataFilms);
    renderCards(filmListFromApi);
    return filmListFromApi;
  });

addToFavorites();
showFavoritesFilms();
initSearch(renderCards, filmListFromApi);
sortData(renderCards, filmListFromApi);

export { filmListFromApi };
