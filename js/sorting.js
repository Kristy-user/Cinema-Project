import { favorite } from './localStorage.js';
import { createArrayFromDivCards } from './render.js';

const sortingButtons = document.querySelectorAll('.sorting .button');
const sortingPanel = document.querySelector('.control-panel.sorting');

const sortData = (render, data) => {
  sortingPanel.addEventListener('click', (event) => {
    const { target } = event;
    if (favorite.checked) {
      data = createArrayFromDivCards();
    }
    let criterion = event.target.id;
    if (criterion === 'rating') {
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      render(
        data.sort(
          (value1, value2) =>
            parseFloat(value2.imdbRating) * 10 -
            parseFloat(value1.imdbRating) * 10
        )
      );
    }
    if (criterion === 'releaseDate') {
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      render(
        data.sort(
          (data1, data2) => new Date(data2.Released) - new Date(data1.Released)
        )
      );
    }
    if (criterion === 'boxOffice') {
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      render(
        data.sort(
          (value1, value2) =>
            value2.BoxOffice.slice(1).split(',').join('') -
            value1.BoxOffice.slice(1).split(',').join('')
        )
      );
    }
  });
};

export { sortData };
