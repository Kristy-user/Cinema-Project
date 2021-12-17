import { renderCards } from './render.js';
import { addToFavorites, showFavoritesFilms } from './localStorage.js';
import { getTokenData, getFilmsData } from './API.js';

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

export { filmListFromApi };
