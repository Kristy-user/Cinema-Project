import { addFilmCards, favorite } from './localStorage.js';
import { maxLength } from './utils.js';

const createFilmsCard = (obj) => {
  const template = document.querySelector('#card-template');
  let cloneDiv = template.content.cloneNode(true);
  let { Title, Poster, imdbRating, Released, Director, Plot, BoxOffice } = obj;
  cloneDiv.querySelector('.card-header__title').textContent = Title;
  cloneDiv.querySelector('.card-header__image').src = Poster;
  cloneDiv.querySelector('.film-info__rating .film-info__text').textContent =
    imdbRating;
  cloneDiv.querySelector('.film-info__plot .film-info__text').textContent =
    maxLength(Plot) || '-';
  cloneDiv.querySelector(
    '.film-info__release-date .film-info__text'
  ).textContent = Released || '-';
  cloneDiv.querySelector('.film-info__director .film-info__text').textContent =
    Director || '-';
  cloneDiv.querySelector(
    '.film-info__box-office .film-info__text'
  ).textContent = BoxOffice || 0;

  return cloneDiv;
};

const showWithoutFavorites = () => {
  const filmsList = [];
  document
    .querySelectorAll('.card')
    .forEach((item) => filmsList.push(item.innerHTML));
  const favoritesFilms = JSON.parse(localStorage.getItem('favorites'));
  const newFilmList = searchDifference(filmsList, favoritesFilms);
  return newFilmList;
};

const searchDifference = (array1, array2) => {
  let result = [];
  for (var i = 0; i < array1.length; i++) {
    if (
      array2
        .map((item) => item.slice(0, 150))
        .indexOf(array1.map((item) => item.slice(0, 150))[i]) == -1
    ) {
      result.push(array1[i]);
    }
  }
  return result;
};

const renderCards = (data) => {
  const filmList = document.querySelector('.film-list');
  filmList.innerHTML = '';
  const cardsElements = [];
  data.forEach((data) => {
    data.BoxOffice = data.BoxOffice !== 'N/A' ? data.BoxOffice : '$0';
    cardsElements.push(createFilmsCard(data));
  });
  filmList.append(...cardsElements);
  if (favorite.checked || !localStorage.getItem('favorites')) {
    return;
  }
  let newfilmList = showWithoutFavorites();
  addFilmCards(newfilmList);
};

const createArrayFromDivCards = () => {
  const filmCards = document.querySelectorAll('.card');
  const filmCardsArray = [];
  filmCards.forEach((item) => {
    let obj = {};
    obj.Title = item.querySelector('.card-header__title').innerHTML;
    obj.Poster = item.querySelector('.card-header__image').src;
    obj.imdbRating = item.querySelector(
      '.film-info__rating .film-info__text'
    ).innerHTML;
    obj.Released = item.querySelector(
      '.film-info__release-date .film-info__text'
    ).innerHTML;
    obj.Director = item.querySelector(
      '.film-info__director .film-info__text'
    ).innerHTML;
    obj.Plot = item.querySelector(
      '.film-info__plot .film-info__text'
    ).innerHTML;
    obj.BoxOffice = item.querySelector(
      '.film-info__box-office .film-info__text'
    ).innerHTML;
    filmCardsArray.push(obj);
  });
  return filmCardsArray;
};

export { renderCards, createArrayFromDivCards };
