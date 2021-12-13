import { sortingButtons, inputSearch } from './searching.js';

const favorite = document.querySelector('#favorite');
const filmList = document.querySelector('.film-list');
let favoritesFilmsList = [];
let lastFilmsList = [];

const checkOnFilling = () => {
  if (localStorage.getItem('favorites') && favoritesFilmsList.length === 0) {
    favoritesFilmsList.push(...JSON.parse(localStorage.getItem('favorites')));
  }
  if (localStorage.getItem('lastFilmsList') && lastFilmsList.length === 0) {
    lastFilmsList.push(...JSON.parse(localStorage.getItem('lastFilmsList')));
  }
};

const removeFilmFromLocalStorage = (arr, value) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const getFromLocalStorage = (key) => {
  filmList.innerHTML = '';
  JSON.parse(localStorage.getItem(key)).forEach((item) => {
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.insertAdjacentHTML('afterBegin', item);
    filmList.append(divCard);
  });
};

const addToFavorites = () => {
  filmList.addEventListener('click', (event) => {
    const { target } = event;
    if (target.tagName !== 'path') {
      return;
    }
    checkOnFilling();
    if (
      target.closest('.button').classList.contains('button_add') &&
      !favorite.checked
    ) {
      removeFilmFromLocalStorage(
        lastFilmsList,
        target.closest('.card').innerHTML
      );
      target.closest('.button').classList.toggle('button_remove');
      favoritesFilmsList.push(target.closest('.card').innerHTML);
      target.closest('.card').remove();
    }

    if (
      target.closest('.button').classList.contains('button_remove') &&
      favorite.checked
    ) {
      removeFilmFromLocalStorage(
        favoritesFilmsList,
        target.closest('.card').innerHTML
      );
      target.closest('.button').classList.toggle('button_remove');

      lastFilmsList.push(target.closest('.card').innerHTML);

      target.closest('.card').remove();
    }
    localStorage.setItem('lastFilmsList', JSON.stringify(lastFilmsList));
    localStorage.setItem('favorites', JSON.stringify(favoritesFilmsList));

    console.log(lastFilmsList, favoritesFilmsList);
  });
};

const showFavoritesFilms = () => {
  favorite.addEventListener('click', (event) => {
    const checkValue = event.target.checked;
    checkOnFilling();
    if (!checkValue) {
      if (lastFilmsList.length === 0) {
        lastFilmsList.push(
          ...JSON.parse(localStorage.getItem('lastFilmsList'))
        );
      }
      getFromLocalStorage('lastFilmsList');
    }
    if (checkValue && localStorage.getItem('favorites')) {
      if (favoritesFilmsList === 0) {
        favoritesFilmsList.push(
          ...JSON.parse(localStorage.getItem('favorites'))
        );
      }
      getFromLocalStorage('favorites');
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      inputSearch.value = '';
    }
  });
};

export { showFavoritesFilms, addToFavorites, getFromLocalStorage };
export { lastFilmsList };
