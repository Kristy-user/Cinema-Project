import { maxLength } from './utils.js';

const createFilmsCard = (obj) => {
  const template = document.querySelector('#card-template');
  let cloneDiv = template.content.cloneNode(true);
  let { titles, poster, rating, releaseDate, director, plot, boxOffice } = obj;
  cloneDiv.querySelector('.card-header__title').textContent = titles;
  cloneDiv.querySelector('.card-header__image').src = poster;
  cloneDiv.querySelector('.film-info__rating .film-info__text').textContent =
    rating;
  cloneDiv.querySelector('.film-info__plot .film-info__text').textContent =
    maxLength(plot);
  cloneDiv.querySelector(
    '.film-info__release-date .film-info__text'
  ).textContent = releaseDate.toLocaleDateString();
  cloneDiv.querySelector('.film-info__director .film-info__text').textContent =
    director;
  cloneDiv.querySelector(
    '.film-info__box-office .film-info__text'
  ).textContent = `$${boxOffice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  return cloneDiv;
};

const renderCards = (filmData) => {
  const filmList = document.querySelector('.film-list');
  filmList.innerHTML = '';
  const cardsElements = [];
  filmData.forEach((data) => {
    cardsElements.push(createFilmsCard(data));
  });
  filmList.append(...cardsElements);
};

export { renderCards };
