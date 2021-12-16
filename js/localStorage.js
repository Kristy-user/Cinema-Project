import { sortingButtons, inputSearch } from './searching.js';

const favorite = document.querySelector('#favorite');
const filmList = document.querySelector('.film-list');
let favoritesFilmsList = [];

const removeFilmFromLocalStorage = (arr, value) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const addFilmCards = (data) => {
  filmList.innerHTML = '';
  data.forEach((item) => {
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
    if (
      target.closest('.button').classList.contains('button_add') &&
      !favorite.checked
    ) {
      target.closest('.button').classList.toggle('button_remove');
      favoritesFilmsList.push(target.closest('.card').innerHTML);
    }
    if (
      target.closest('.button').classList.contains('button_remove') &&
      favorite.checked
    ) {
      removeFilmFromLocalStorage(
        favoritesFilmsList,
        target.closest('.card').innerHTML
      );
    }
    target.closest('.card').remove();
    localStorage.setItem('favorites', JSON.stringify(favoritesFilmsList));
  });
};

const showFavoritesFilms = (data, render) => {
  favorite.addEventListener('click', (event) => {
    const checkValue = event.target.checked;
    if (!checkValue) {
      render(data);
    }
    if (checkValue && localStorage.getItem('favorites')) {
      favoritesFilmsList = JSON.parse(localStorage.getItem('favorites'));
      addFilmCards(favoritesFilmsList);
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      inputSearch.value = '';
    }
  });
};

export { showFavoritesFilms, addToFavorites, addFilmCards, favorite };
