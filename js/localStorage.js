import { INPUT_SEARCH, initSearch } from './searching.js';
import { createArrayFromDivCards, renderCards } from './render.js';
import { sortData, SORTING_BUTTONS } from './sorting.js';
import { filmListFromApi } from './index.js';

const FAVORITE = document.querySelector('#favorite');
const FILM_LIST = document.querySelector('.film-list');
let favoritesFilmsList = [];

const removeFilmFromfavoritesFilmsList = (arr, value) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const addFilmCards = (data) => {
  FILM_LIST.innerHTML = '';
  data.forEach((item) => {
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.insertAdjacentHTML('afterBegin', item);
    FILM_LIST.append(divCard);
  });
  if (FAVORITE.checked) {
    document
      .querySelectorAll('.card__button')
      .forEach((item) => item.classList.add('button_remove'));
  }
};

const addToFavorites = () => {
  FILM_LIST.addEventListener('click', (event) => {
    const { target } = event;
    if (target.tagName !== 'path') {
      return;
    }
    if (
      target.closest('.button').classList.contains('button_add') &&
      !FAVORITE.checked
    ) {
      favoritesFilmsList.push(target.closest('.card').innerHTML);
      target.closest('.button').classList.toggle('button_remove');
    }
    if (
      target.closest('.button').classList.contains('button_remove') &&
      FAVORITE.checked
    ) {
      target.closest('.button').classList.toggle('button_remove');
      removeFilmFromfavoritesFilmsList(
        favoritesFilmsList,
        target.closest('.card').innerHTML
      );
    }
    target.closest('.card').remove();
    localStorage.setItem('favorites', JSON.stringify(favoritesFilmsList));
  });
};

const showFavoritesFilms = (dataFilms) => {
  FAVORITE.addEventListener('click', (event) => {
    const checkValue = event.target.checked;
    if (!checkValue) {
      dataFilms = filmListFromApi;
      renderCards(dataFilms);
      initSearch(renderCards, dataFilms);
      sortData(renderCards, dataFilms);
    }
    if (checkValue && localStorage.getItem('favorites')) {
      favoritesFilmsList = JSON.parse(localStorage.getItem('favorites'));
      addFilmCards(favoritesFilmsList);
      SORTING_BUTTONS.forEach((item) =>
        item.classList.remove('button_checked')
      );
      INPUT_SEARCH.value = '';
      dataFilms = createArrayFromDivCards();
      initSearch(renderCards, dataFilms);
      sortData(renderCards, dataFilms);
    }
    console.log(dataFilms);
  });
};

export { showFavoritesFilms, addToFavorites, addFilmCards, FAVORITE };
