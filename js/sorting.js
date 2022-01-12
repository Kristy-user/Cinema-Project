import { FAVORITE } from './localStorage.js';
const SORTING_BUTTONS = document.querySelectorAll('.sorting .button');
const SORTING_PANEL = document.querySelector('.control-panel.sorting');

const RATING = 'rating';
const DATE = 'releaseDate';
const BOX_OFFICE = 'boxOffice';

const sortData = (render, data) => {
  SORTING_PANEL.addEventListener('click', (event) => {
    const { target } = event;
    let criterion = event.target.id;
    if (!target.closest('.button')) {
      return;
    } else {
      SORTING_BUTTONS.forEach((item) =>
        item.classList.remove('button_checked')
      );
      target.closest('.button').classList.add('button_checked');
    }
    switch (criterion) {
      case RATING:
        render(
          data.sort(
            (value1, value2) =>
              parseFloat(value2.imdbRating) * 10 -
              parseFloat(value1.imdbRating) * 10
          )
        );
        break;
      case DATE:
        render(
          data.sort(
            (data1, data2) =>
              new Date(data2.Released) - new Date(data1.Released)
          )
        );
        break;
      case BOX_OFFICE:
        render(
          data.sort(
            (value1, value2) =>
              value2.BoxOffice.slice(1).split(',').join('') -
              value1.BoxOffice.slice(1).split(',').join('')
          )
        );
        break;
    }
    if (FAVORITE.checked) {
      document
        .querySelectorAll('.card__button')
        .forEach((item) => item.classList.add('button_remove'));
    }
  });
};

export { sortData, SORTING_BUTTONS };
