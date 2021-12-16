import { createArrayFromDivCards } from './render.js';

const inputSearch = document.querySelector('.search__input');
const sortingButtons = document.querySelectorAll('.sorting .button');

const initSearch = (render, data) => {
  if (favorite.checked) {
    data = createArrayFromDivCards();
  }
  inputSearch.addEventListener('keyup', (event) => {
    const inputValue = event.target.value;
    if (inputValue) {
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));

      render(
        data.filter((data) =>
          data.Title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
    if (!inputValue) {
      return render(data);
    }
  });
};
export { initSearch, sortingButtons, inputSearch };
